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
  rankValue: number
  productName: string
  discountPrice: number
  discountRate: number
  brandCode: string
  englishName: string
  updateAt: string
}

export interface bestImageType {
  mediaCode: string
  mediaUrl: string
  mediaType: string
}

export interface bestBrandType {
  englishName: string
  koreanName: string
  logoMediaUrl: string
}
