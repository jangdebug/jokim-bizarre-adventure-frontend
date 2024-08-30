//Main Category Badge Type
export interface categoryBadgeType {
  id: number
  categoryId: number
  categoryName: string
  categoryBadgeImageUrl: string
}

//Event Tab Badge Type
export interface eventTabBadgeType {
  id: number
  tabDescription: string
  tabName: string
  tabBadgeImageUrl1?: string
  tabBadgeImageUrl2?: string
}
