'use server'
import { productListData } from '@/datas/dummy/product/ProductListData'

export async function getProductListData(categoryCode?: string): Promise<ProductCardType[]> {
  return productListData
}
export async function getProductCodeList(mainCategoryCode: string, pageNo?: number): Promise<ProductCodeType[]> {
  console.log('cat code is : ', mainCategoryCode)

  const res = await fetch(`${process.env.API_BASE_URL}/v1/product-category/${mainCategoryCode}?pageNo=${pageNo}`, {
    method: 'GET',
  })

  if (res.ok) {
    const data = (await res.json()).result
    console.log('get product code data', data.content)

    return data.content
  } else {
    console.error('error with getting product code')

    return []
  }
}

// api 명세 기반 데이터 타입 선정
export async function getProductItemData(productCode: string): Promise<ProductCardDataType | null> {
  const res = await fetch(`${process.env.API_BASE_URL}/v1/products/${productCode}`, {
    method: 'GET',
  })

  if (res.ok) {
    const data = (await res.json()).result
    // console.log('get product data', data)

    return data
  } else {
    console.error('error with getting product ')

    return null
  }
}
export async function getProductThumbnailUrl(productCode: string): Promise<string | null> {
  const res = await fetch(`${process.env.API_BASE_URL}/v1/product-media/thumbnail/${productCode}`, {
    method: 'GET',
  })

  if (res.ok) {
    const data = (await res.json()).result
    // console.log('get product data', data)

    return data.mediaUrl
  } else {
    console.error('error with getting thumbnail ')

    return null
  }
}

export async function getProductReviewCount(productCode: string): Promise<number> {
  const res = await fetch(`${process.env.API_BASE_URL}/v1/reviews/product-review-count/${productCode}`, {
    method: 'GET',
  })

  if (res.ok) {
    const data = (await res.json()).result
    // console.log('get product data', data)

    return data
  } else {
    console.error('error with getting reviewcount ')

    return 0
  }
}

export async function getBrandName(brandCode: string): Promise<string> {
  const res = await fetch(`${process.env.API_BASE_URL}/v1/brand/${brandCode}`, {
    method: 'GET',
  })

  if (res.ok) {
    const data = (await res.json()).result as BrandDataType

    return data.englishName ? data.englishName : ''
  } else {
    console.error('error with getting brandname ')

    return ''
  }
}

export async function getProductImageData(): Promise<any[]> {
  return []
}

export async function getProductOptions(productCode: string): Promise<ProductOptionType[]> {
  console.log('in server getproductCode', productCode)

  return []
}
