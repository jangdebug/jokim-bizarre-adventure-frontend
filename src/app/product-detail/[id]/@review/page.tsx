import RightArrowIcon from '@/components/icons/sign-up/RightArrowIcon'
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
      <div className="px-[24px] pt-[12px] pb-[20px]">
        <Link href={`/reviews/${params.id}`} className="w-full h-[48px] border flex items-center justify-center">
          <p className="text-[14px] leading-[24px] tracking-[0.023rem]">리뷰 전체 보기</p> <RightArrowIcon />
        </Link>
      </div>
      <Divider />
    </>
  )
}
