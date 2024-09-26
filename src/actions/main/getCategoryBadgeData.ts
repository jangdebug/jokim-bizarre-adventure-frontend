import { categoryBadgeDatas } from '@/datas/dummy/main/CategoryDatas'
import { categoryBadgeType } from '@/types/InitialDataTypes'

export async function getCategoryBadgeData() {
  // fetch
  // categoryBadgeDatas가 BE와 통신하여 가져오게 될 데이터 리스트
  const res = categoryBadgeDatas as categoryBadgeType[]
  return res
}
