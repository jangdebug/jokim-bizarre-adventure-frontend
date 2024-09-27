import { categoryBadgeDatas } from '@/datas/dummy/main/CategoryDatas'

export async function getCategoryBadgeImage(categoryCode: string) {
  // fetch
  // categoryBadgeDatas가 BE와 통신하여 가져오게 될 데이터 리스트
  const res = categoryBadgeDatas.find((item) => item.categoryCode === categoryCode)
  const data = res ? res.categoryBadgeImageUrl : 'none'
  return data
}
