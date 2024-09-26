import { writenReviewType } from '@/types/MyPageTypes'
import DateRange from './DateRange'
import WritenReviewItem from './WritenReviewItem'

interface WritenReviewProps {
  initialReviews: writenReviewType[]
}

export default function WritenReview({ initialReviews }: WritenReviewProps) {
  return (
    <div>
      {initialReviews.length > 0 ? (
        <div className="flex items-center mt-2 mb-[80px]">
          <ul className="w-5/6 m-auto">
            {initialReviews.map((item) => (
              <WritenReviewItem key={item.productId} item={item} />
            ))}
          </ul>
        </div>
      ) : (
        <div className="h-[240px] flex items-center justify-center mt-2 mb-[80px]">
          <p className="text-sm text-gray-500">작성하신 상품리뷰가 없습니다.</p>
        </div>
      )}
    </div>
  )
}

// 'use client'

// import { getMyWritenReview } from '@/actions/mypage/getMyReviewData'
// import { writenReviewType } from '@/types/MyPageTypes'
// import { useEffect, useState } from 'react'
// import DateRange from './DateRange'
// import WritenReviewItem from './WritenReviewItem'

// interface WritenReviewProps {
//   initialReviews: writenReviewType[]
//   handleRange: (range: string) => void
// }

// export default function WritenReview({ initialReviews, handleRange }: WritenReviewProps) {
//   const [reviews, setReviews] = useState(initialReviews)
//   const [range, setRange] = useState<string>('1')

//   // Selectbox의 range 값에 따라 보이는거 다르게
//   const handleRange = async (range: string) => {
//     const res = await getMyWritenReview(range)
//     setReviews(res)
//     setRange(range)
//   }

//   // useEffect(() => {
//   //   console.log('reviews --> ', reviews)
//   // }, [reviews])

//   return (
//     <>
//       <DateRange defaultRange={range} handleRange={handleRange} />

//       {reviews.length > 0 ? (
//         <div className="flex items-center mt-2 mb-[80px]">
//           <ul className="w-5/6 m-auto">
//             {reviews.map((item) => (
//               <WritenReviewItem key={item.id} item={item} />
//             ))}
//           </ul>
//         </div>
//       ) : (
//         <div className="h-[240px] flex items-center justify-center mt-2 mb-[80px]">
//           <p className="text-sm text-gray-500">작성하신 상품리뷰가 없습니다.</p>
//         </div>
//       )}
//     </>
//   )
// }
