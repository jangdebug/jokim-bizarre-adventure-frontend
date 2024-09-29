import React from 'react'
import MinusButtonIcon from '../icons/basket/MinusButtonIcon'
import PlusButtonIcon from '../icons/basket/PlusButtonIcon'
import CouponDownloadIcon from '../icons/basket/CouponDownloadIcon'
import { basketListType } from '@/types/BasketTypes'
import { getBasketProduct, getBasketProductOption } from '@/actions/basket/getBasketListData'
import BasketItemQuantity from './BasketItemQuantity'

interface BasketItemProps {
  item: basketListType
}

export default async function BasketItemData({ item }: BasketItemProps) {
  const productData = await getBasketProduct(item.productCode)
  const productOption = await getBasketProductOption(item.productOptionCode)

  return (
    <div className="flex flex-col flex-grow">
      <div className="flex flex-col justify-between pb-4 ">
        <p className="flex gap-3 items-center mb-[64px]">
          <span className="text-xs text-gray-500">{productOption}</span>
        </p>

        <div className="flex justify-between">
          <p>
            <span className="font-bold">{(productData.price * item.quantity).toLocaleString()}</span>원
          </p>
          <BasketItemQuantity basketCode={item.basketCode} quantity={item.quantity} />
        </div>

        <div className="py-4 border-b-[1px]">
          <p className="text-xs flex gap-2">
            <span className="bg-gray-300 text-[10px]">S.I.</span>
            <span className="text-gray-400">
              {Math.round((productData.price * item.quantity * 0.005) / 10) * 10}p 적립
            </span>
          </p>
        </div>

        <div className="pb-5">
          <p className="text-gray-400 text-xs py-4">
            16시까지 결제시 <span className="font-bold text-[#d99c63]">오늘 출발</span>
          </p>
          <div>
            <div className="w-full border-[1px] flex justify-center items-center">
              <span className="text-xs my-2">5% 쿠폰</span>
              <CouponDownloadIcon />
            </div>
            <input type="button" id="coupon" />
            <label htmlFor="coupon">
              <span className="text-[10px] text-gray-400">사용가능 쿠폰 &gt;</span>
            </label>
          </div>
        </div>

        <div>
          <div className="w-full border-[1px] flex justify-center items-center">
            <span className="text-xs my-2">바로구매</span>
          </div>
        </div>
      </div>
    </div>
  )
}
