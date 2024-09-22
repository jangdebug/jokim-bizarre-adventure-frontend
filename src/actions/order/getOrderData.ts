import { orderCustomerData, orderDeliveryData } from '@/datas/dummy/order/orderDatas'
import { orderCustomerType, orderDeliveryType } from '@/types/OrderTypes'

export async function getOrderDeliveryAction(): Promise<orderDeliveryType> {
  const res: orderDeliveryType = orderDeliveryData
  return res

  // const res = await fetch(`${process.env.API_BASE_URL}/order/delivery`, {
  //   method: 'GET',
  //   cache: 'no-cache',
  // })
  // if (!res.ok) {
  //   throw new Error('Failed to fetch cart item list')
  // }
  // const data = await res.json()
  // return data
}

export async function getOrderCustomerAction(): Promise<orderCustomerType> {
  const res: orderCustomerType = orderCustomerData
  return res

  // const res = await fetch(`${process.env.API_BASE_URL}/order/customer`, {
  //   method: 'GET',
  //   cache: 'no-cache',
  // })
  // if (!res.ok) {
  //   throw new Error('Failed to fetch cart item list')
  // }
  // const data = await res.json()
  // return data
}
