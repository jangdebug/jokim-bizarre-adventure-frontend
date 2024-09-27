'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import SmallStarIcon from '../icons/product/SmallStarIcon'
import LikeButton from '../ui/LikeButton'
import {
  getBrandName,
  getProductItemData,
  getProductReviewCount,
  getProductThumbnailUrl,
} from '@/actions/product/getProductData'

export default function ProductCard({
  viewMode = 0,
  productCode,
  showMoreOptions = true,
}: {
  productCode: ProductCodeType
  viewMode?: number
  showMoreOptions?: boolean
}) {
  const [productData, setProductData] = useState<ProductCardDataType | null>(null)
  const [productThumbnailUrl, setProductThumbnailUrl] = useState<string | null>(null)
  const [productReviewCount, setProductReviewCount] = useState<number>(0)
  const [brandName, setBrandName] = useState<string>('')

  useEffect(() => {
    async function fetchData() {
      try {
        const product = await getProductItemData(productCode.productCode)
        const thumbnailUrl = await getProductThumbnailUrl(productCode.productCode)
        const reviewCount = await getProductReviewCount(productCode.productCode)

        let brand = ''
        if (product) {
          brand = await getBrandName(product.brandCode)
        }

        setProductData(product)
        setProductThumbnailUrl(thumbnailUrl)
        setProductReviewCount(reviewCount)
        setBrandName(brand)
      } catch (error) {
        console.error('Failed to fetch product data:', error)
      }
    }

    fetchData()
  }, [productCode.productCode])

  if (!productData || !productThumbnailUrl) {
    return (
      <Link href={`/product-detail/${productCode.productCode}`}>
        <div className="w-full h-[380px] p-[4px]">
          <div className="w-full h-full bg-black bg-opacity-[0.03]"></div>
        </div>
      </Link>
    )
  }

  return (
    <li className={`w-full relative ${viewMode === 1 ? '' : 'mb-[36px]'}`}>
      <Link href={`/product-detail/${productData.productCode}`}>
        <div className="relative h-[267px] flex items-center ">
          <div className="absolute top-0 left-0 w-full h-full z-[5] bg-black bg-opacity-[0.03]" />
          <Image
            src={productThumbnailUrl}
            alt="productImg"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: '100%', height: 'auto' }}
          />
        </div>
        {viewMode !== 1 && (
          <div className="px-[8px] py-[16px] flex flex-col">
            <span className="mb-[6px] text-[14px] font-[700] leading-[20px] tracking-[-0.08px]">{brandName}</span>
            <span className="mb-[2px] text-[12px] leading-[18px] tracking-[-0.06px] text-[#404040] text-ellipsis line-clamp-2">
              {productData.productName}
            </span>
            <span className="flex gap-[5px] justify-start">
              {productData.discountRate > 0 && (
                <span className="text-[12px] leading-[18px] tracking-[-0.06px] font-bold text-[#d99c63]">
                  {productData.discountRate}%
                </span>
              )}
              <span className="text-[12px] leading-[18px] tracking-[-0.06px]">
                {productData.price.toLocaleString()}
              </span>
            </span>

            {showMoreOptions && productReviewCount > 0 && (
              <div className="flex items-center mt-[8px] text-[12px] leading-[14px]">
                <SmallStarIcon />
                <span className="ml-[4px]">5</span>
                <span className="ml-[2px] text-[#929292]">({productReviewCount})</span>
              </div>
            )}
          </div>
        )}
        {/* 신상 여부 */}
        {/* {showMoreOptions &&
            (viewMode == 1 ? null : productCard.isNew ? (
              <p className="pl-[8px] mt-[-8px] text-[12px] leading-[18px] font-bold text-[#d99c63]">신상</p>
            ) : null)} */}
      </Link>
      {viewMode !== 1 && (
        <div className="absolute top-[8px] right-[8px] z-10">
          <LikeButton type="product" targetId={productData.productCode} />
        </div>
      )}
    </li>
  )
}
