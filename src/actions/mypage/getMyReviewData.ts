import { myAbleReviewDatas, myReviewCountData, myWritenReviewDatas } from '@/datas/dummy/mypage/MyReviewData'
import { AbleReviewType, reviewCountType, writenReviewType } from '@/types/MyPageTypes'

export async function getMyReviewCount() {
  const res = myReviewCountData as reviewCountType
  // const res = await fetch(`/mypage/review/all-count`)
  // if(!res.ok){
  //   throw new Error('Fail to fetch')
  // }
  // const data = (await res.json()) as commonResType;
  //return data.data as writenReviewType[];
  return res
}

export async function getAbleReview(range: string): Promise<AbleReviewType[]> {
  const res = myAbleReviewDatas as AbleReviewType[]

  console.log(`getAbleReview -> `, range)
  // const res = await fetch(`/mypage/not-reviewed/{range}`)
  // if(!res.ok){
  //   throw new Error('Fail to fetch')
  // }
  // const data = (await res.json()) as commonResType;
  //return data.data as writenReviewType[];
  return res
}

export async function getMyWritenReview(range: string): Promise<writenReviewType[]> {
  const res = myWritenReviewDatas as writenReviewType[]

  console.log(`getMyWritenReview -> `, range)
  // const res = await fetch(`/mypage/review/{range}`)
  // if(!res.ok){
  //   throw new Error('Fail to fetch')
  // }
  // const data = (await res.json()) as commonResType;
  //return data.data as writenReviewType[];
  return res
}
