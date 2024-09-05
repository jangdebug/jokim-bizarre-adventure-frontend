import { myWishEventDatas, myWishProductDatas } from '@/datas/dummy/mypage/MyWishData'
import { myWishEventType, myWishProductType } from '@/types/MyPageTypes'

export async function getMyWishProductData() {
  const res = myWishProductDatas as myWishProductType[]
  return res
}

export async function getMyWishEventData() {
  const res = myWishEventDatas as myWishEventType[]
  return res
}
