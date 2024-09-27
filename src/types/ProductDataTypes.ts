interface ProductCodeType {
  productCode: string
}

interface ProductCardType {
  id: number
  productId: string
  thumbnailImageUrl: string
  brandName: string
  name: string
  discountRate: number
  price: number
  reviewCount: number
  isNew: boolean
}

interface ProductDetailType {
  productId: string
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
  hashTag: HashTagType[]
}

interface HashTagType {
  hashTagId: number
  value: string
}

interface ProductOptionType {
  productCode: string
  optionCode: string
  optionName: string
  optionValue: string
  quantity: number
  price: number
}

///////////////////// api connection

interface ProductCardDataType {
  productCode: string
  productName: string
  discountRate: number
  amount: number
  price: number
  detail: string
  brandCode: string
}

interface BrandDataType {
  englishName: string | null
  koreanName: string | null
  logoMediaUrl: string | null
}
