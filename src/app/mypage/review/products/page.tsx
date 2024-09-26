import { getMyWritenReview } from '@/actions/mypage/getMyReviewData'
import DateRange from '@/components/mypage/myReview/DateRange'
import WritenReview from '@/components/mypage/myReview/WritenReview'
import { writenReviewType } from '@/types/MyPageTypes'

export default async function Writen() {
  const initialReviews: writenReviewType[] = await getMyWritenReview('1')

  const handleRange = async (range: string) => {
    'use server'
    const res = await getMyWritenReview(range)

    return null
  }

  return (
    <main>
      <DateRange handleRange={handleRange} />
      <WritenReview initialReviews={initialReviews} />
    </main>
  )
}
