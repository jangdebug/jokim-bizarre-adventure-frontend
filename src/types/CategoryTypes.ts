interface QuickMenuBadgeType {
  id: number
  targetUrl: string
  categoryName: string
  categoryBadgeImageUrl: string
}

interface CategoryType {
  categoryId: number
  categoryName: string
  depth: number
}

interface BrandType {
  id: number
  brandId: number
  name: string
  englishName?: string
  koreanName?: string
}
