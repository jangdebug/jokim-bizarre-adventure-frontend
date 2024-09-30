import Image from 'next/image'
import StarAverage from '../ui/StarAverage'
import PlusIcon from '../icons/review/PlusIcon'
import Link from 'next/link'
import { reviewSummaryData } from '@/datas/dummy/review/ReviewData'
import ReviewEvaluation from './ReviewEvaluation'
import { getReviewSummaryData } from '@/actions/review/getReviewData'
import { getProductReviewCount } from '@/actions/product/getProductData'

export default async function ReviewSummarySection({ productCode }: { productCode: string }) {
  const reviewSummary: ReviewSummaryType = reviewSummaryData
  // console.log('in review summary id is ', searchParams)
  const summary = await getReviewSummaryData(productCode)
  const reviewCount = await getProductReviewCount(productCode)

  return (
    <section id="review" className="scroll-m-[36px] px-[24px] pb-[24px]">
      <p className="text-[16px] font-bold tracking-[0.4px] leading-[22px] py-[24px]">리뷰</p>
      <div className="mt-[24px] flex items-center flex-col">
        <p className="mb-[8px] text-center text-[30px] leading-[36px] text-[#141a23] font-bold">
          {summary.starAverage}
        </p>
        <StarAverage
          starAverage={summary.starAverage}
          reviewCount={reviewCount}
          size={26}
          color="#d99c63"
          showReviewCount={false}
        />
      </div>

      {/* map 으로 뿌릴려면 api 뱐걍해야함 */}
      <ReviewEvaluation evaluationData={summary.evaluation} showRate={true} className="mt-[24px]" />

      {/* todo: 리뷰 이미지 전체 가져오는 api 없음 */}
      {/* <div className="mt-[24px] mx-[-24px]">
        <p className="py-[11px] px-[24px] text-[14px] leading-[20px]">포토리뷰 모아보기</p>
        <ul className="flex overflow-x-auto pl-[24px] no-scrollbar">
          {reviewSummary.image.map((item) => (
            <li key={item.imageId} className="w-[25%] p-[2px] flex-shrink-0">
              <div className="relative aspect-square">
                <Image
                  src={item.imageUrl}
                  alt="review Image"
                  height={100}
                  width={100}
                  className="w-full h-full object-cover"
                />
              </div>
            </li>
          ))}

          <li className="w-[25%] h-full m-[2px] flex-shrink-0 bg-[#f8f8f8]">
            <Link href={'#'}>
              <span className="w-full h-full flex flex-col items-center justify-center text-[12px] tracking-[-0.06px]">
                <PlusIcon />
                더보기
              </span>
            </Link>
          </li>
        </ul>
      </div> */}
    </section>
  )
}
