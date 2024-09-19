export interface eventDetailType {
  id: number
  eventImageUrl: string[]
  title: string
  description: string
}

export interface eventRelationType {
  id: number
  productCategoryId: number
  brandName: string
  categoryName: string
  productImageUrl: string
  recommentItem: {
    id: number
    productId: number
    productImageUrl: string
    brandName: string
    productName: string
    price: number
  }[]
}

export interface eventDetailTab {
  id: number
  productCode: number
  detailTabName: string
}

export interface eventCategoryItemType {
  id: number
  productImageUrl: string
  brandName: string
  productName: string
  price: number
  likeAverage?: number
  likeCount?: number
}
