'use client'
import Image from 'next/image'
import StarAverage from '../ui/StarAverage'
import ThumbButton from '../ui/ThumbButton'
import { useEffect, useState } from 'react'
import ReviewEvaluation from './ReviewEvaluation'
import DownArrowGreyIcon from '../icons/review/DownArrowGreyIcon'
import UpArrowGreyIcon from '../icons/review/UpArrowGreyIcon'
import { getReviewImageData } from '@/actions/review/getReviewData'

export default function ReviewListItem({ review }: { review: ReviewDataType }) {
  const [reviewImages, setReviewImages] = useState<ReviewImageDataTypes[]>([])

  useEffect(() => {
    fetchReviewImages()
  }, [review.reviewCode])

  const fetchReviewImages = async () => {
    try {
      const images = await getReviewImageData(review.reviewCode)
      setReviewImages(images)
    } catch (error) {
      console.error('Failed to fetch review images:', error)
    }
  }

  const [isDetail, setIsDetail] = useState<boolean>(false)
  const imagesToShow = isDetail ? reviewImages : reviewImages.slice(0, 2)
  const handleDetailState = () => {
    setIsDetail(() => !isDetail)
  }

  return (
    <li className="px-[24px] pt-[20px] pb-[16px] border-t border-[#e0e0e0]">
      <div className="flex flex-col text-[12px] leading-[18px] text-[#787878]">
        <StarAverage starAverage={review.starPoint} size={18} color="#d99c63" showReviewCount={false} />
        <ul className="mt-[6px] flex flex-row items-center justify-between">
          <li className="flex flex-row gap-[4px]">
            <span>{review.parsedEmail}</span>
            <span>|</span>
            <span>{review.modifyDate}</span>
          </li>
          <li>
            {/* currentstate 를 백엔드에서 받아온 데이터를 통해 초기화 */}
            {/* todo: 사용자의 데이터에 따라 좋아요 기능 활성화 비활성화로 초기화 해야함 */}
            <ThumbButton reviewId={review.reviewCode} currentState={false} likeCount={review.likeCount} />
          </li>
        </ul>
        <p className="mt-[12px]">{review.optionInfo}</p>
        <p className={`mt-[12px] text-[13px] text-[#333] ${isDetail ? '' : 'line-clamp-3'}`}>{review.content}</p>
      </div>

      {reviewImages.length > 0 && (
        <div>
          {isDetail ? (
            <ReviewEvaluation evaluationData={review.evaluation} showRate={false} className="mt-[16px]" />
          ) : (
            ''
          )}
          <button onClick={handleDetailState} className="flex flex-row items-center mt-[12px]">
            <span className="text-[12px] leading-[12px] text-[#787878]">{isDetail ? '접기' : '더보기'}</span>
            {isDetail ? <UpArrowGreyIcon /> : <DownArrowGreyIcon />}
          </button>
          <ul
            className={`${reviewImages.length > 2 && !isDetail ? 'review-image-container' : ''} mt-[16px] grid gap-[8px] ${isDetail ? 'grid-cols-1' : 'grid-cols-2'}`}
          >
            {imagesToShow.map((image) => (
              <li
                key={image.mediaCode}
                className={`relative ${isDetail ? '' : ' aspect-square'}`}
                data-more-count={reviewImages.length - 2}
              >
                <Image
                  src={image.mediaUrl}
                  alt="reviewImage"
                  height={100}
                  width={100}
                  className={`w-full h-full ${isDetail ? '' : 'object-cover'}`}
                />
              </li>
            ))}
          </ul>
        </div>
      )}
      {/* 내가 쓴거면 수정, 남이 쓴거면 신고 */}
      <div className="flex items-center justify-end text-[12px] leading-[18px] mt-[12px]">
        <button className="text-[#db3c3c]">신고</button>
        {/* <button className="text-[#2a46ff]">수정</button> */}
      </div>
    </li>
  )
}
