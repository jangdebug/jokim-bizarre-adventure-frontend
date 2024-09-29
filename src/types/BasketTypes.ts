export interface basketTabType {
  id: number
  name: string
  link: string
}

export interface basketPointType {
  id: number
  name: string
  point: number
}

export interface basketListType {
  productCode: string
  productOptionCode: string
  basketCode: string
  quantity: number
  isChecked: boolean
}

export interface basketCountType {
  count: number
}

export interface basketProductType {
  productCode: string
  productName: string
  discountRate: number
  amount: number
  price: number
  detail: string
  brandCode: string
}

export interface basketProductImageUrlType {
  mediaCode: string
  mediaUrl: string
  mediaType: string
}

export interface basketProductBrandNameType {
  englishName: string
  koreanName: string
  logoMediaUrl: string
}
