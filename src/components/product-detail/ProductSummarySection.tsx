import Link from 'next/link'
import RightArrowIcon from '../icons/sign-up/RightArrowIcon'
import LikeButton from '../ui/LikeButton'
import ShareIcon from '../icons/product-detail/ShareIcon'
import QuestionIcon from '../icons/product-detail/QuestionIcon'
import StarAverage from '../ui/StarAverage'
import { getBrandName, getProductReviewCount, getProductSummaryData } from '@/actions/product/getProductData'
import { getReviewSummaryData } from '@/actions/review/getReviewData'

export default async function ProductSummarySection({ productCode }: { productCode: string }) {
  const productSummary: ProductSummaryDataType = await getProductSummaryData(productCode)
  const brandName: string = await getBrandName(productSummary.brandCode)

  const discountedPrice = productSummary.price - productSummary.price * (productSummary.discountRate / 100)
  const reviewCount = await getProductReviewCount(productCode)
  const reviewSummary = await getReviewSummaryData(productCode)
  return (
    <section className="px-[24px] pt-[12px] pb-[48px] bg-white">
      <>
        <ul className="relative flex justify-start">
          <li className="flex">
            <Link href={'/brand'}>
              <ul className="flex items-center py-[11px] pr-[5px]">
                <li className="text-[16px] font-bold leading-[20px]">{brandName}</li>
                <li>
                  <RightArrowIcon />
                </li>
              </ul>
            </Link>
          </li>

          <li className="absolute translate-y-[-12px] right-[-10px] top-[50%] flex items-center justify-center ">
            <ul className="flex gap-[8px]">
              <li className="h-[24px]">
                <LikeButton type={'product'} targetId={productSummary.productCode} />
              </li>
              <li>
                <ShareIcon />
              </li>
            </ul>
          </li>
        </ul>
      </>

      <>
        <p className="py-[4px] text-[18px] leading-[24px] text-[#404040]">{productSummary.productName}</p>

        <p className="flex items-center gap-[7px] mt-[2px] py-[10px]">
          {productSummary.discountRate > 0 && (
            <span className="text-[22px] text-[#d99c63] font-bold">{productSummary.discountRate}%</span>
          )}

          <span className="flex gap-[3px]">
            <b className="text-[22px] leading-[26px]">{discountedPrice.toLocaleString()}</b>
            <span className="text-[16px] leading-20px text-[#141a23]">원</span>
          </span>
          {productSummary.discountRate > 0 && (
            <del className="flex gap-[4px] items-center text-[16px] leading-20px] text-[#a0a0a0]">
              {productSummary.price.toLocaleString()}
              <QuestionIcon />
            </del>
          )}
        </p>
      </>

      <>
        <div>
          {/* {productDetailData.isNew && (
            <span className="align-text-top bg-[#929292] inline-flex text-white h-[20px] px-[4px] items-center text-[10px] font-[500] m-[1px]">
              신상
            </span>
          )} */}
          {productSummary.discountRate > 0 && (
            <span className="align-text-top bg-[#d99c63] inline-flex text-white h-[20px] px-[4px] items-center text-[10px] font-[500] m-[1px]">
              할인
            </span>
          )}
        </div>
      </>

      <>
        <StarAverage
          starAverage={reviewSummary.starAverage}
          reviewCount={reviewCount}
          size={12}
          className="mt-[32px]"
        />
      </>
    </section>
  )
}
