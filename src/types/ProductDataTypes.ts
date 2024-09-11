interface ProductCardType {
  id: number
  productId: number
  thumbnailImageUrl: string
  brandName: string
  name: string
  discountRate: number
  price: number
  reviewCount: number
  isNew: boolean
}

interface ProductDetailType {
  productId: number
  images: string[]
  brandName: string
  brandId: number
  name: string
  discountRate: number
  price: number
  rawPrice: number
  starAverage: number
  reviewCount: number
  isNew: boolean
  description: string
}
