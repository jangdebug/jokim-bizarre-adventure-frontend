interface QuickMenuBadgeType {
  id: number
  targetUrl: string
  categoryName: string
  categoryBadgeImageUrl: string
}

interface CategoryType {
  categoryCode: string
  categoryName: string
}

interface BrandType {
  id: number
  brandId: number
  name: string
  englishName?: string
  koreanName?: string
}
