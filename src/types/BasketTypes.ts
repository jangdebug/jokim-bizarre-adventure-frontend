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
  brandName: string
  productImageUrl: string
  productName: string
  productOption: string
  quantity: number
  price: number
  isWished: boolean
  isChecked: boolean
}
