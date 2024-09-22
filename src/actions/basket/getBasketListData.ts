//'use server'

import { basketListDatas } from '@/datas/dummy/basket/ListData'
import { basketListType } from '@/types/BasketTypes'

export async function getBasketListAction(): Promise<basketListType[]> {
  const res: basketListType[] = basketListDatas
  return res

  // const res = await fetch(`${process.env.API_BASE_URL}/basket`, {
  //   method: 'GET',
  //   next: { tags: ['checkBasket, changeQuantity, addBasket, delBasket'] },
  //   cache: 'no-cache',
  // })
  // if (!res.ok) {
  //   throw new Error('Failed to fetch cart item list')
  // }
  // const data = await res.json()
  // return data
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
