'use server'

import { options } from '@/app/api/auth/[...nextauth]/options'
import {
  basketCountType,
  basketListType,
  basketProductBrandNameType,
  basketProductImageUrlType,
  basketProductType,
} from '@/types/BasketTypes'
import { getServerSession } from 'next-auth'

async function getSessionAuth() {
  const session = await getServerSession(options)
  const isAuth = session?.user ? session.user : null

  if (!isAuth) {
    console.log('Unauthorized: No valid session found.')
    return false
  }

  return isAuth
}

export async function getBasketListAction(): Promise<basketListType[]> {
  const auth = await getSessionAuth()
  if (!auth) return []

  const res = await fetch(`${process.env.API_BASE_URL}/v1/basket`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${auth.accessToken}`,
    },
    next: { tags: ['checkBasket, changeQuantity, addBasket, delBasket'] },
    cache: 'no-cache',
  })

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

export async function getBasketCount(): Promise<basketCountType> {
  const auth = await getSessionAuth()
  if (!auth) return { count: 0 }

  const res = await fetch(`${process.env.API_BASE_URL}/v1/basket/count`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${auth.accessToken}`,
    },
  })

  if (!res.ok) {
    console.log('Failed to fetch cart item list count')
    return { count: 0 }
  } else {
    return (await res.json()).result.count as basketCountType
  }
}

export async function getBasketProductPrice(productCode: string): Promise<basketProductType> {
  const auth = await getSessionAuth()
  if (!auth)
    return {
      productCode: 'null',
      productName: 'null',
      discountRate: 0,
      amount: 0,
      price: 0,
      detail: 'null',
      brandCode: 'null',
    }

  const res = await fetch(`${process.env.API_BASE_URL}/v1/products/${productCode}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${auth.accessToken}`,
    },
  })

  if (!res.ok) {
    console.log('Failed to fetch getBasketProductPrice')
    return {
      productCode: 'null',
      productName: 'null',
      discountRate: 0,
      amount: 0,
      price: 0,
      detail: 'null',
      brandCode: 'null',
    }
  }

  return (await res.json()).result as basketProductType
}

export async function getBasketProductImageUrl(productCode: string): Promise<basketProductImageUrlType> {
  const auth = await getSessionAuth()
  if (!auth)
    return {
      mediaCode: '',
      mediaUrl: '',
      mediaType: '',
    }

  const res = await fetch(`${process.env.API_BASE_URL}/v1/product-media/thumbnail/${productCode}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${auth.accessToken}`,
    },
  })

  if (!res.ok) {
    console.log('Failed to fetch getBasketProductImageUrl')
    return {
      mediaCode: '',
      mediaUrl: '',
      mediaType: '',
    }
  }

  return (await res.json()).result as basketProductImageUrlType
}

export async function getBasketBrandName(brandCode: string): Promise<basketProductBrandNameType> {
  const auth = await getSessionAuth()
  if (!auth)
    return {
      englishName: '',
      koreanName: '',
      logoMediaUrl: '',
    }

  const res = await fetch(`${process.env.API_BASE_URL}/v1/brand/${brandCode}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${auth.accessToken}`,
    },
  })

  if (!res.ok) {
    console.log('Failed to fetch getBasketBrandName')
    return {
      englishName: '',
      koreanName: '',
      logoMediaUrl: '',
    }
  }

  return (await res.json()).result as basketProductBrandNameType
}
