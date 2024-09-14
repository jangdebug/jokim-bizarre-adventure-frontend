import Image from 'next/image'
import StarAverage from '../ui/StarAverage'
import PlusIcon from '../icons/review/PlusIcon'
import Link from 'next/link'
import { reviewSummaryData } from '@/datas/dummy/review/ReviewData'

export default function ReviewSummarySection() {
  const reviewSummary: ReviewSummaryType = reviewSummaryData

  return (
    <section id="review" className="scroll-m-[36px] px-[24px] pb-[24px]">
      <p className="text-[16px] font-bold tracking-[0.4px] leading-[22px] py-[24px]">리뷰</p>
      <div className="mt-[24px] flex items-center flex-col">
        <p className="mb-[8px] text-center text-[30px] leading-[36px] text-[#141a23] font-bold">
          {reviewSummary.starAverage}
        </p>
        <StarAverage starAverage={2} reviewCount={3} size={26} color="#d99c63" showReviewCount={false} />
      </div>

      {/* map 으로 뿌릴려면 api 뱐걍해야함 */}
      <>
        <ul className="flex flex-col mt-[24px] gap-[8px]">
          <>
            <li className="flex justify-between">
              <ul className="flex gap-[12px]">
                <li className="bg-[#929292] text-[#fff] inline-flex items-center justify-center w-[62px] h-[20px] text-[10px] font-bold">
                  {reviewSummary.evaluationItem1Name}
                </li>
                <li className="text-[14px] leading-[20px] text-[#141a23]">{reviewSummary.evaluationItem1BestValue}</li>
              </ul>
              <p className="flex gap-[5px] items-center text-[#141a23] leading-[20px]">
                <span className="text-[18px]">{reviewSummary.evaluation1Rate}</span>
                <span className="text-[14px] leading-[20px]">%</span>
              </p>
            </li>
          </>
          <>
            <li className="flex justify-between">
              <ul className="flex gap-[12px]">
                <li className="bg-[#929292] text-[#fff] inline-flex items-center justify-center w-[62px] h-[20px] text-[10px] font-bold">
                  {reviewSummary.evaluationItem2Name}
                </li>
                <li className="text-[14px] leading-[20px] text-[#141a23]">{reviewSummary.evaluationItem2BestValue}</li>
              </ul>
              <p className="flex gap-[5px] items-center text-[#141a23] leading-[20px]">
                <span className="text-[18px]">{reviewSummary.evaluation2Rate}</span>
                <span className="text-[14px] ">%</span>
              </p>
            </li>
          </>
          <>
            <li className="flex justify-between">
              <ul className="flex gap-[12px]">
                <li className="bg-[#929292] text-[#fff] inline-flex items-center justify-center w-[62px] h-[20px] text-[10px] font-bold">
                  {reviewSummary.evaluationItem3Name}
                </li>
                <li className="text-[14px] leading-[20px] text-[#141a23]">{reviewSummary.evaluationItem3BestValue}</li>
              </ul>
              <p className="flex gap-[5px] items-center text-[#141a23] leading-[20px]">
                <span className="text-[18px]">{reviewSummary.evaluation3Rate}</span>
                <span className="text-[14px] ">%</span>
              </p>
            </li>
          </>
        </ul>
      </>

      <div className="mt-[24px] mx-[-24px]">
        <p className="py-[11px] px-[24px] text-[14px] leading-[20px]">포토리뷰 모아보기</p>
        <ul className="flex overflow-x-auto pl-[24px] no-scrollbar">
          {reviewSummary.image.map((item) => (
            <li key={item.imageId} className="w-[25%] p-[2px] flex-shrink-0">
              <div className="relative aspect-square">
                <Image
                  src={item.imageUrl}
                  alt="review Image"
                  layout="fill"
                  objectFit="cover"
                  className="w-full h-full object-cover"
                />
              </div>
            </li>
          ))}

          <Link href={'#'}>
            <li className="w-[25%] m-[2px] flex-shrink-0 bg-[#f8f8f8]">
              <span className="w-full h-full flex flex-col items-center justify-center text-[12px] tracking-[-0.06px]">
                <PlusIcon />
                더보기
              </span>
            </li>
          </Link>
        </ul>
      </div>
    </section>
  )
}
