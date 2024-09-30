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
import { revalidateTag } from 'next/cache'

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

////////////////////// 장바구니 리스트 GET //////////////////////
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

////////////////////// 장바구니 상품 체크 //////////////////////
export async function basketCheckUpdate(basketCode: string, checked: boolean) {
  'use server'

  const auth = await getSessionAuth()
  if (!auth) return

  const res = await fetch(`${process.env.API_BASE_URL}/v1/basket/check`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${auth.accessToken}`,
    },
    body: JSON.stringify({
      basketCode: basketCode,
      isChecked: !checked,
    }),
  })

  if (!res.ok) {
    console.error('체크 상태 변경 실패:', res)
    return
  } else revalidateTag('checkBasket')
}

////////////////////// 장바구니 수량 변경 //////////////////////
export async function basketQuantityChange(basketCode: string, quantity: number, type: number) {
  'use server'

  const auth = await getSessionAuth()
  if (!auth) return

  let currentCount = quantity
  let changeCount

  if (type === 1) {
    if (quantity <= 1) return // 최소 수량 체크
    changeCount = currentCount - 1
  } else if (type === 2) {
    if (quantity >= 3) return // 최대 수량 체크
    changeCount = currentCount + 1
  }

  const res = await fetch(`${process.env.API_BASE_URL}/v1/basket/quantity`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${auth.accessToken}`,
    },
    body: JSON.stringify({
      basketCode: basketCode,
      quantity: changeCount,
    }),
  })

  if (!res.ok) {
    console.error('수량 변경 실패:', res)
    return
  } else {
    revalidateTag('changeQuantity')
  }
}

////////////////////// 장바구니의 상품 총 개수 //////////////////////
export async function getBasketCount(): Promise<basketCountType> {
  const auth = await getSessionAuth()
  if (!auth) return { count: -1 }

  const res = await fetch(`${process.env.API_BASE_URL}/v1/basket/count`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${auth.accessToken}`,
    },
  })

  const data = await res.json()

  if (!res.ok) {
    console.log('Failed to fetch cart item list count')
    return { count: 0 }
  } else {
    return data.result as basketCountType
  }
}

////////////////////// 장바구니 상품 정보 //////////////////////
export async function getBasketProduct(productCode: string): Promise<basketProductType> {
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
    console.log('Failed to fetch getBasketProduct')
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

////////////////////// 장바구니 상품 옵션 정보 //////////////////////
export async function getBasketProductOption(productOptionCode: string): Promise<string> {
  const auth = await getSessionAuth()
  if (!auth) return ''

  const res = await fetch(`${process.env.API_BASE_URL}/v1/basket/option-info/${productOptionCode}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${auth.accessToken}`,
    },
  })

  if (!res.ok) {
    console.log('Failed to fetch getBasketProductOption')
    return ''
  }

  const data = (await res.json()).result.optionInfo
  return data
}

////////////////////// 장바구니 상품 이미지 //////////////////////
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

////////////////////// 장바구니 상품 브랜드 //////////////////////
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

////////////////////// 장바구니 체크 상품 총 가격 //////////////////////
export async function getTotalPrice(items: basketListType[]): Promise<number> {
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

////////////////////// 장바구니 상품 삭제 //////////////////////
export async function basketDeleteAction(basketCode: string | string[]): Promise<boolean> {
  'use server'

  const auth = await getSessionAuth()
  if (!auth) return false

  const basketCodes = Array.isArray(basketCode) ? basketCode : [basketCode]

  const res = await fetch(`${process.env.API_BASE_URL}/v1/basket`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${auth.accessToken}`,
    },
    body: JSON.stringify({
      basketCodeList: basketCodes,
    }),
  })

  if (!res.ok) {
    console.error('상품 삭제 실패:', res)
    return false
  } else {
    revalidateTag('delBasket')
    return true
  }
}
