import { getBasketProduct, getBasketProductImageUrl, getBasketProductOption } from '@/actions/basket/getBasketListData'
import { basketListType, basketProductImageUrlType, basketProductType } from '@/types/BasketTypes'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

interface orderProductItemProps {
  item: basketListType
}

export default function OrderProductItem({ item }: orderProductItemProps) {
  const [productImage, setProductImage] = useState<basketProductImageUrlType>()
  const [productInfo, setProductInfo] = useState<basketProductType>()
  const [productOption, setProductOption] = useState<string>('')

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [image, productData, productOptionData] = await Promise.all([
          getBasketProductImageUrl(item.productCode),
          getBasketProduct(item.productCode),
          getBasketProductOption(item.productOptionCode),
        ])

        setProductImage(image)
        setProductInfo(productData)
        setProductOption(productOptionData)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    fetchData()
  }, [item.productCode, item.productOptionCode])

  return (
    <>
      <div className="mb-[32px] flex gap-4">
        <div className="w-1/5">
          {productImage?.mediaUrl ? (
            <Image src={productImage.mediaUrl} width={200} height={200} alt={productInfo?.productName || ''} priority />
          ) : (
            <div className="w-full bg-[#f0f0f0] flex justify-center items-center">
              <p className="text-center">불러오는 중...</p>
            </div>
          )}
        </div>
        <div className="flex flex-col justify-between flex-grow">
          <div className="text-xs flex flex-col gap-1">
            <input type="hidden" name="productCode" value={item.productCode} />
            <p className="text-base font-bold">{productInfo?.productName || ''}</p>
            <p>{productInfo?.productName || ''}</p>
            {/* <p className="text-gray-500">{item.productOption}</p> */}
            <p className="text-gray-500">{productOption}</p>
          </div>
          <div className="flex justify-between items-center py-[12px] border-b-[1px]">
            <p>
              <span className="font-bold">{((productInfo?.price || 0) * item.quantity).toLocaleString()}</span>원
            </p>
            <p className="text-xs">{item.quantity}개 주문</p>
          </div>
        </div>
      </div>
      <div className="bg-[#f8f8f8] flex justify-end py-[20px]">
        <p className="text-xs text-[#787878] font-bold mr-[16px]">배송비 무료</p>
      </div>
    </>
  )
}
