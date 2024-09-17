'use client'
import Image from 'next/image'
import StarAverage from '../ui/StarAverage'
import ThumbButton from '../ui/ThumbButton'
import { useState } from 'react'
import ReviewEvaluation from './ReviewEvaluation'

export default function ReviewListItem({ reviewData }: { reviewData: ReviewType }) {
  const [isDetail, setIsDetail] = useState<boolean>(false)

  const handleDetailState = () => {
    setIsDetail(() => !isDetail)
  }

  return (
    <li key={reviewData.reviewId} className="px-[24px] pt-[20px] pb-[16px] border-t border-[#e0e0e0]">
      <div className="flex flex-col text-[12px] leading-[18px] text-[#787878]">
        <StarAverage starAverage={reviewData.starPoint} size={18} color="#d99c63" showReviewCount={false} />
        <ul className="mt-[6px] flex flex-row items-center justify-between">
          <li className="flex flex-row gap-[4px]">
            <span>{reviewData.userId}</span>
            <span>|</span>
            <span>{reviewData.modifyDate}</span>
          </li>
          <li className="flex items-center gap-[5px]">
            {/* currentstate 를 백엔드에서 받아온 데이터를 통해 초기화 */}
            <ThumbButton reviewId={reviewData.reviewId} currentState={true} />
            <span>{reviewData.likeCount}</span>
          </li>
        </ul>
        <p className="mt-[12px]">구매옵션 : {reviewData.productOption}</p>
        <p className="mt-[12px] text-[13px] text-[#333] line-clamp-3">{reviewData.content}</p>
      </div>
      <button onClick={handleDetailState}>{isDetail ? '접기' : '더보기'}</button>
      <div>
        {/* <>
          <ul className="flex flex-col mt-[16px] gap-[8px]">
            <>
              <li className="flex justify-between">
                <ul className="flex gap-[12px]">
                  <li className="bg-[#929292] text-[#fff] inline-flex items-center justify-center w-[62px] h-[20px] text-[10px] font-bold">
                    {reviewData.evaluationItem1Name}
                  </li>
                  <li className="text-[14px] leading-[20px] text-[#141a23]">{reviewData.evaluationItem1Value}</li>
                </ul>
              </li>
            </>
            <>
              <li className="flex justify-between">
                <ul className="flex gap-[12px]">
                  <li className="bg-[#929292] text-[#fff] inline-flex items-center justify-center w-[62px] h-[20px] text-[10px] font-bold">
                    {reviewData.evaluationItem2Name}
                  </li>
                  <li className="text-[14px] leading-[20px] text-[#141a23]">{reviewData.evaluationItem2Value}</li>
                </ul>
              </li>
            </>
            <>
              <li className="flex justify-between">
                <ul className="flex gap-[12px]">
                  <li className="bg-[#929292] text-[#fff] inline-flex items-center justify-center w-[62px] h-[20px] text-[10px] font-bold">
                    {reviewData.evaluationItem3Name}
                  </li>
                  <li className="text-[14px] leading-[20px] text-[#141a23]">{reviewData.evaluationItem3Value}</li>
                </ul>
              </li>
            </>
          </ul>
        </> */}
        <ReviewEvaluation evaluationData={reviewData.evaluation} showRate={false} className="mt-[16px]" />

        <ul className="mt-[16px] flex flex-col gap-[8px]">
          {reviewData.image.map((image) => (
            <Image
              key={image.imageId}
              src={image.imageUrl}
              alt="reviewImage"
              height={100}
              width={100}
              className="w-full h-full"
            />
          ))}
        </ul>
      </div>
    </li>
  )
}
