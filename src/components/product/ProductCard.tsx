import Image from 'next/image'
import Link from 'next/link'
import SmallStarIcon from '../icons/product/SmallStarIcon'
import LikeButton from '../ui/LikeButton'

export default function ProductCard({
  productCard,
  viewMode = 0,
}: {
  productCard: ProductCardType
  viewMode?: number
}) {
  return (
    <>
      <li className={`w-full relative ${viewMode == 1 ? '' : 'mb-[36px]'}`}>
        <Link href={`/product-detail/${productCard.productId}`}>
          <Image
            src={productCard.thumbnailImageUrl}
            alt="productImg"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: '100%', height: 'auto' }}
            // loader={}
            // loading=''
          />
          {/* 상품 상세로 link */}
          {viewMode == 1 ? null : (
            <div className="px-[8px] py-[16px] flex flex-col">
              <span className=" mb-[6px] text-[14px] font-[700] leading-[20px] tracking-[-0.08px]">
                {productCard.brandName}
              </span>
              <span className="mb-[2px] text-[12px] leading-[18px] tracking-[-0.06px] text-[#404040] text-ellipsis line-clamp-2">
                {productCard.name}
              </span>
              <span className="flex gap-[5px] justify-start">
                {productCard.discountRate > 0 ? (
                  <span className="text-[12px] leading-[18px] tracking-[-0.06px] font-bold text-[#d99c63]">
                    {productCard.discountRate}%
                  </span>
                ) : null}
                <span className="text-[12px] leading-[18px] tracking-[-0.06px]">
                  {productCard.price.toLocaleString()}
                </span>
              </span>
              {/* 리뷰가 있으면 별점이 나옴 */}

              {productCard.reviewCount > 0 ? (
                <div className="flex items-center mt-[8px] text-[12px] leading-[14px]">
                  <SmallStarIcon />
                  <span className="ml-[4px]">5</span>
                  <span className="ml-[2px] text-[#929292]">({productCard.reviewCount})</span>
                </div>
              ) : null}
            </div>
          )}
          {/* 신상 여부 */}
          {viewMode == 1 ? null : productCard.isNew ? (
            <p className="pl-[8px] mt-[-8px] text-[12px] leading-[18px] font-bold text-[#d99c63]">신상</p>
          ) : null}
        </Link>
        {viewMode == 1 ? null : (
          <div className="absolute top-[8px] right-[8px] z-10">
            <LikeButton />
          </div>
        )}
      </li>
    </>
  )
}
