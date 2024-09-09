import { getMyReviewCount } from '@/actions/mypage/getMyReviewData'
import { reviewCountType } from '@/types/MyPageTypes'
import React from 'react'

export default async function MyPoint() {
  const reviewData: reviewCountType = await getMyReviewCount()

  return (
    <section className="bg-[#f0f0f0] mb-2">
      <div className="px-6 py-10">
        <div className="text-sm text-center">
          <p>나의 상품 구매 횟수</p>
          <p className="text-3xl font-bold mt-3">{reviewData.productCount}번</p>
        </div>
        <ul className="text-sm mt-10">
          <li className="flex justify-between">
            <p>작성 가능한 상품</p>
            <p className="font-bold">{reviewData.ableCount}개</p>
          </li>
          <li className="flex justify-between mt-3">
            <p>작성한 상품</p>
            <p className="font-bold">{reviewData.alreadyCount}개</p>
          </li>
        </ul>
      </div>
    </section>
  )
}
