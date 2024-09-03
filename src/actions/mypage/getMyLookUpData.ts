import { myLookUpData } from '@/datas/dummy/mypage/MyInfoData'
import { myLookUpType } from '@/types/MyPageTypes'

export async function getMyLookUpData() {
  const res = myLookUpData as myLookUpType
  return res
}
