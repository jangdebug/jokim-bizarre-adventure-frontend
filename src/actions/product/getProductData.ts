import { productListData } from '@/datas/dummy/product/ProductListData'

export async function getProductListData(categoryCode?: string): Promise<ProductCardType[]> {
  return productListData
}
export async function getProductCodeList(
  mainCategoryCode: string,
  secondaryCategoryCode?: string,
  tertiaryCategoryCode?: string,
  quaternaryCategoryCode?: string,
): Promise<ProductCodeType[]> {
  'use server'
  console.log('cat code is : ', mainCategoryCode)

  const res = await fetch(`${process.env.API_BASE_URL}/v1/product-category/${mainCategoryCode}`, {
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
export async function getProductItemData(): Promise<any> {
  return null
}
export async function getProductSummaryData(): Promise<any> {
  return null
}
export async function getProductImageData(): Promise<any[]> {
  return []
}

export async function getProductOptions(productCode: string): Promise<ProductOptionType[]> {
  console.log('in server getproductCode', productCode)

  return []
}
