export interface BestTabTypes {
  id: number
  name: string
  url: string
  icon: React.ComponentType<{ color?: string; className?: string }>
}

export interface BestFilterTypes {
  id: number
  type: string
  name: string
}

export interface BestItemType {
  productCode: string
  rank: string
  productImageUrl: string
  brandName: string
  productName: string
  discount?: string | undefined
  price: number
  isWishList: boolean
}
