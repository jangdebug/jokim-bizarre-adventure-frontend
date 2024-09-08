import { bottomSizeDatas, footSizeDatas, mySizeData, topSizeDatas } from '@/datas/dummy/mypage/MyRegisterData'
import { mySizeType, selectSizeType } from '@/types/MyPageTypes'

export async function getMySize() {
  const res = mySizeData as mySizeType
  return res
}

export async function getSelectTopSize() {
  const res = topSizeDatas as selectSizeType[]
  return res
}

export async function getSelectBottomSize() {
  const res = bottomSizeDatas as selectSizeType[]
  return res
}

export async function getSelectFootSize() {
  const res = footSizeDatas as selectSizeType[]
  return res
}

// export async function sizeRegistAction(sizeRegistFormData: FormData){
//   const payload: mySizeType = {}
// }
