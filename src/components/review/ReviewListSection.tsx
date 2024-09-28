import CheckboxWithSvg from '../dummy/CheckboxWithSvg'
import ReviewIcon from '../icons/review/ReviewIcon'

import ReviewListItem from './ReviewListItem'
import { getReviewList } from '@/actions/review/getReviewData'

export default async function ReviewListSection({ productCode }: { productCode: string }) {
  const reviews: ReviewDataType[] = await getReviewList(productCode, 0, 5)
  // 리뷰들에 대한 사용자의 좋아요 상태를 받아와야합니다.
  console.log('in review', reviews)

  return (
    <section>
      <div className="relative px-[24px] flex items-center justify-start h-[56px] border-b border-[#f0f0f0]">
        <label>
          <div className="flex items-center gap-[8px]">
            <CheckboxWithSvg />
            <span className="text-[14px] leading-[20px] text-[#404040] font-[500]">나와 비슷한 리뷰</span>
          </div>
        </label>
        <button className="absolute right-[16px]">
          <ReviewIcon />
        </button>
      </div>
      <>
        <ul>
          {reviews.map((item) => (
            <ReviewListItem key={item.reviewCode} review={item} />
          ))}
        </ul>
      </>
    </section>
  )
}
