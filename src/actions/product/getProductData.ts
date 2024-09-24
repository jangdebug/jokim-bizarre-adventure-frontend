import { productListData } from '@/datas/dummy/product/ProductListData'

export async function getProductListData(): Promise<ProductCardType[]> {
  return productListData
}
export async function getProductCodeList(): Promise<ProductCodeType[]> {
  return []
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
