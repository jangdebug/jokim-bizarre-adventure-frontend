export interface brandListType {
  brandCode: string
  englishName: string
  koreanName?: string
  englishInitial: string
  koreanInitial: string
}

export interface checkWishByBrandType {
  brandCode: string
}

export interface favoiteBrandCodeListType {
  brandCode: string
}

export interface favoiteBrandInfoType {
  englishName: string
  koreanName?: string
  logoMediaUrl: string
}

export interface recommendBrandInfoType {
  brandCode: string
  englishName: string
  koreanName: string
  rank: number
}
