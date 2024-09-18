import { getAbleReview } from '@/actions/mypage/getMyReviewData'
import AbleReview from '@/components/mypage/myReview/AbleReview'
import DateRange from '@/components/mypage/myReview/DateRange'
import { AbleReviewType } from '@/types/MyPageTypes'

export default async function Able() {
  const initialReviews: AbleReviewType[] = await getAbleReview('1')

  const handleRange = async (range: string) => {
    'use server'
    const res = await getAbleReview(range)
    return null
  }

  return (
    <main>
      <DateRange handleRange={handleRange} />
      <AbleReview initialReviews={initialReviews} />
    </main>
  )
}
