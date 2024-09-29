'use server'

import { options } from '@/app/api/auth/[...nextauth]/options'
import { orderCustomerData } from '@/datas/dummy/order/orderDatas'
import { basketListType } from '@/types/BasketTypes'
import { orderCustomerType, orderDeliveryType } from '@/types/OrderTypes'
import { getServerSession } from 'next-auth'
import { getBasketProduct } from '../basket/getBasketListData'

////////////////////// 본인 인증 //////////////////////
async function getSessionAuth() {
  const session = await getServerSession(options)
  const isAuth = session?.user ? session.user : null

  if (!isAuth) {
    console.log('Unauthorized: No valid session found.')
    return false
  }

  return isAuth
}

////////////////////// 주문서 고객 배송지 정보 //////////////////////
export async function getOrderDeliveryAction(): Promise<orderDeliveryType[]> {
  // const res: orderDeliveryType = orderDeliveryData
  // return res

  'use server'
  const auth = await getSessionAuth()
  if (!auth) return []

  const res = await fetch(`${process.env.API_BASE_URL}/v1/mypage/delivery-info`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${auth.accessToken}`,
    },
    next: { tags: ['addAddress'] },
    cache: 'no-cache',
  })

  const data = (await res.json()).result as orderDeliveryType[]

  return data
}

////////////////////// 주문서 고객 정보 //////////////////////
export async function getOrderCustomerAction(): Promise<orderCustomerType> {
  const res: orderCustomerType = orderCustomerData
  return res

  // const res = await fetch(`${process.env.API_BASE_URL}/order/customer`, {
  //   method: 'GET',
  //   cache: 'no-cache',
  // })
  // if (!res.ok) {
  //   console.log('Failed to fetch cart item list')
  // }
  // const data = await res.json()
  // return data
}

////////////////////// 주문서 총 가격 //////////////////////
export async function getTotalOrderPrice(items: basketListType[]): Promise<number> {
  'use server'
  const auth = await getSessionAuth()
  if (!auth) return 0

  let totalPrice = 0

  const checkedItems = items.filter((item) => item.isChecked)
  for (let i = 0; i < checkedItems.length; i++) {
    const productPrice = (await getBasketProduct(checkedItems[i].productCode)).price
    totalPrice += checkedItems[i].quantity * productPrice
  }

  return totalPrice
}

////////////////////// 주문서 상품 리스트 GET //////////////////////
export async function getOrderPageList(): Promise<basketListType[]> {
  const auth = await getSessionAuth()
  if (!auth) return []

  const res = await fetch(`${process.env.API_BASE_URL}/v1/basket`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${auth.accessToken}`,
    },
  })

  if (!res.ok) {
    console.log('Failed to fetch getOrderListAction')
    return []
  } else {
    const data = (await res.json()).result as basketListType[]
    return data.filter((item) => item.isChecked)
  }
}
