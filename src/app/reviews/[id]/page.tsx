import DownArrowIcon from '@/components/icons/main-header/DownArrowIcon'
import ReviewListSection from '@/components/review/ReviewListSection'
import ReviewSummarySection from '@/components/review/ReviewSummarySection'
import { Button } from '@/components/ui/button'
import Divider from '@/components/ui/Divider'

export default function Reviews({
  params,
}: {
  params: {
    id: string
  }
}) {
  // todo 상품 id 에 따른 리뷰 데이터드을 가져와야 합니다.
  console.log('reviews page', params)

  return (
    <main>
      <ReviewSummarySection />
      <Divider />
      {/* 더보기에 한해 클라이언트 컴포넌트로 할 지 뭐 결정할 것 */}
      <ReviewListSection />
      <div className="px-[24px] pt-[12px] pb-[20px]">
        <Button variant={'outline'} size={'auth'}>
          <p className="text-[14px] leading-[24px] tracking-[0.023rem]">더보기</p> <DownArrowIcon />
        </Button>
      </div>
    </main>
  )
}
