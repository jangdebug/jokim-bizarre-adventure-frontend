'use server'

import { options } from '@/app/api/auth/[...nextauth]/options'
import { basketListType } from '@/types/BasketTypes'
import { getServerSession } from 'next-auth'

async function getSessionAuth() {
  const session = await getServerSession(options)
  const isAuth = session?.user ? session.user : null

  if (!isAuth) {
    throw new Error('Unauthorized: No valid session found.')
  }

  return isAuth
}

export async function getBasketListAction(): Promise<basketListType[]> {
  const auth = await getSessionAuth()

  const res = await fetch(`${process.env.API_BASE_URL}/v1/basket`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${(await auth).accessToken}`,
    },
    next: { tags: ['checkBasket, changeQuantity, addBasket, delBasket'] },
    cache: 'no-cache',
  })

  console.log('res -> ', res)

  if (!res.ok) {
    console.log('Failed to fetch cart item list')
    return []
  } else {
    return (await res.json()).result as basketListType[]
  }
}

export const basketCheckUpdate = async (item: basketListType, checked: boolean) => {
  console.log('item -> ', item)
  console.log('checked -> ', checked)
  // 'use server'
  // const res = fetch(`${process.env.API_BASE_URL}/basket/changeCheck`, {
  //   method: 'PUT',
  //   headers: {
  //     'Content-Type': 'application/json',
  //   },
  //   body: JSON.stringify({
  //     productCode: item.productCode,
  //     isChecked: checked,
  //   }),
  // })
  // revalidateTag('checkBasket')
}

export const basketQuantityChange = async (item: basketListType, type: number) => {
  console.log('item -> ', item)
  console.log('type -> ', type)
  let currentCount = item.quantity
  let changeCount
  if (type === 1) {
    if (item.quantity <= 1) return
    changeCount = currentCount - 1
  } else if (type === 2) {
    if (item.quantity >= 3) return
    changeCount = currentCount + 1
  }
  // 'use server'
  // const res = fetch(`${process.env.API_BASE_URL}/basket/changeQuantity`, {
  //   method: 'PUT',
  //   headers: {
  //     'Content-Type': 'application/json',
  //   },
  //   body: JSON.stringify({
  //     productCode: item.productCode,
  //     quantity: changeCount,
  //   }),
  // })
  // revalidateTag('changeQuantity')
}
