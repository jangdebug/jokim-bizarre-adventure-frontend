import { myInfoData } from '@/datas/dummy/mypage/MyInfoData'
import { myInfoType } from '@/types/MyPageTypes'

export async function getMyInfoData() {
  const res = myInfoData as myInfoType
  return res
}
