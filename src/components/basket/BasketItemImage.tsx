import React from 'react'
import LikeButton from '../ui/LikeButton'
import { getBasketProductImageUrl } from '@/actions/basket/getBasketListData'
import Image from 'next/image'

export default async function BasketItemImage({ productCode }: { productCode: string }) {
  const productImageUrl = await getBasketProductImageUrl(productCode)

  return (
    <div className="w-1/5 mr-6 relative">
      <div className="absolute top-[0px] right-[0px] z-[2]">
        <LikeButton type="product" targetId={productCode} />
      </div>
      {productImageUrl && <Image src={productImageUrl.mediaUrl} width={200} height={200} alt={productCode} priority />}
      <div className="flex justify-center my-4">
        <span className="text-xs text-gray-400 border-b-[1px]">옵션변경</span>
      </div>
    </div>
  )
}
