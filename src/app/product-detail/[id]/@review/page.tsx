import ReviewListSection from '@/components/review/ReviewListSection'
import ReviewSummarySection from '@/components/review/ReviewSummarySection'
import Divider from '@/components/ui/Divider'
import Link from 'next/link'

export default function Review({
  params,
}: {
  params: {
    id: string
  }
}) {
  // todo 상품 id 에 따른 리뷰 데이터드을 가져와야 합니다.
  console.log('review', params)

  return (
    <>
      <ReviewSummarySection />
      <Divider />
      <ReviewListSection />
      <Link href={`/reviews/${params.id}`}>test</Link>
    </>
  )
}
