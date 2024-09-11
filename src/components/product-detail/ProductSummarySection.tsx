import Link from 'next/link'
import RightArrowIcon from '../icons/sign-up/RightArrowIcon'
import LikeButton from '../ui/LikeButton'
import ShareIcon from '../icons/product-detail/ShareIcon'
import QuestionIcon from '../icons/product-detail/QuestionIcon'
import Image from 'next/image'

export default function ProductSummarySection({ productDetailData }: { productDetailData: ProductDetailType }) {
  return (
    <section className="px-[24px] pt-[12px] pb-[48px] bg-white">
      <>
        <ul className="relative flex justify-start">
          <li className="flex">
            <Link href={'/brand'}>
              <ul className="flex items-center py-[11px] pr-[5px]">
                <li className="text-[16px] font-bold leading-[20px]">{productDetailData.brandName}</li>
                <li>
                  <RightArrowIcon />
                </li>
              </ul>
            </Link>
          </li>

          <li className="absolute translate-y-[-12px] right-[-10px] top-[50%] flex items-center justify-center ">
            <ul className="flex gap-[8px]">
              <li className="h-[24px]">
                <LikeButton type={'product'} targetId={productDetailData.productId} />
              </li>
              <li>
                <ShareIcon />
              </li>
            </ul>
          </li>
        </ul>
      </>

      <>
        <p className="py-[4px] text-[18px] leading-[24px] text-[#404040]">{productDetailData.name}</p>

        <p className="flex items-center gap-[7px] mt-[2px] py-[10px]">
          {productDetailData.discountRate > 0 && (
            <span className="text-[22px] text-[#d99c63] font-bold">{productDetailData.discountRate}%</span>
          )}

          <span className="flex gap-[3px]">
            <b className="text-[22px] leading-[26px]">{productDetailData.price.toLocaleString()}</b>
            <span className="text-[16px] leading-20px text-[#141a23]">원</span>
          </span>
          {productDetailData.discountRate > 0 && (
            <del className="flex gap-[4px] items-center text-[16px] leading-20px] text-[#a0a0a0]">
              {productDetailData.rawPrice.toLocaleString()}
              <QuestionIcon />
            </del>
          )}
        </p>
      </>

      <>
        <div>
          {productDetailData.isNew && (
            <span className="align-text-top bg-[#929292] inline-flex text-white h-[20px] px-[4px] items-center text-[10px] font-[500] m-[1px]">
              신상
            </span>
          )}
          {productDetailData.discountRate > 0 && (
            <span className="align-text-top bg-[#d99c63] inline-flex text-white h-[20px] px-[4px] items-center text-[10px] font-[500] m-[1px]">
              할인
            </span>
          )}
        </div>
      </>

      <>
        <div className=" mt-[32px] flex gap-[4px]">
          <div className="relative h-[12px] w-fit bg-[#c8c8c8]">
            <Image
              src={'https://cdn-mo.sivillage.com/mo/assets/comm/image/detail_starpoint.png'}
              alt="starpoint"
              width={68}
              height={12}
              className="z-[1] relative"
            />
            <p
              className={`bg-black w-[${productDetailData.starAverage * 10}%] h-full absolute top-0 left-0  indent-[-9999px]`}
            >
              {productDetailData.starAverage}
            </p>
          </div>
          <span className="text-[12px] leading-[14px] text-[#a0a0a0]">({productDetailData.reviewCount})</span>
        </div>
      </>
    </section>
  )
}
