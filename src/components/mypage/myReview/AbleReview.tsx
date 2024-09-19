import { AbleReviewType } from '@/types/MyPageTypes'
import AbleReviewItem from './AbleReviewItem'

interface ableReviewProps {
  initialReviews: AbleReviewType[]
}

export default function AbleReview({ initialReviews }: ableReviewProps) {
  return (
    <section>
      {initialReviews.length > 0 ? (
        <div className="flex items-center mt-2 mb-[80px]">
          <ul className="w-5/6 m-auto">
            {initialReviews.map((item) => (
              <AbleReviewItem key={item.productId} item={item} />
            ))}
          </ul>
        </div>
      ) : (
        <div className="h-[240px] flex items-center justify-center mt-2 mb-[80px]">
          <p className="text-sm text-gray-500">작성 가능한 상품리뷰가 없습니다.</p>
        </div>
      )}
    </section>
  )
}
