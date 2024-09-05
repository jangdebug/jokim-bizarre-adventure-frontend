import {
  bottomSizeOptionDatas,
  footSizeOptionDatas,
  mySizeData,
  topSizeOptionDatas,
} from '@/datas/dummy/mypage/MyRegisterData'
import { mySizeType, selectSizeType } from '@/types/MyPageTypes'

export async function getMySize() {
  const res = mySizeData as mySizeType
  return res
}

export async function getSelectTopSize() {
  const res = topSizeOptionDatas as selectSizeType[]
  return res
}

export async function getSelectBottomSize() {
  const res = bottomSizeOptionDatas as selectSizeType[]
  return res
}

export async function getSelectFootSize() {
  const res = footSizeOptionDatas as selectSizeType[]
  return res
}

// export async function sizeRegistAction(sizeRegistFormData: FormData){
//   const payload: mySizeType = {}
// }
