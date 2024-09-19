import { getMyWritenReview } from '@/actions/mypage/getMyReviewData'
import WritenReview from '@/components/mypage/myReview/WritenReview'
import { writenReviewType } from '@/types/MyPageTypes'

export default async function Writen() {
  const initialReviews: writenReviewType[] = await getMyWritenReview('1')

  return (
    <section>
      <WritenReview initialReviews={initialReviews} />
    </section>
  )
}
