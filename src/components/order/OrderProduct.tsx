'use client'

import { getBasketProduct } from '@/actions/basket/getBasketListData'
import DownArrowIcon from '@/components/icons/footer/DownArrowIcon.png'
import UpArrowIcon from '@/components/icons/footer/UpArrowIcon.png'
import { basketListType, basketProductType } from '@/types/BasketTypes'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import OrderProductItem from './OrderProductItem'

interface orderProductProps {
  orderListDatas: basketListType[]
  firstProductData: basketProductType
}

export default function OrderProduct({ orderListDatas, firstProductData }: orderProductProps) {
  const [isDetail, setIsDetail] = useState<boolean>(false)
  const toggleDetailHandler = () => {
    setIsDetail(!isDetail)
  }

  return (
    <section className="px-[24px]">
      <div className="my-[16px] flex justify-between">
        <p className="text-xl font-bold">주문상품</p>
        <div className="flex items-center">
          <p className="text-[14px] text-gray-500 mr-2">
            {firstProductData.productName} {orderListDatas.length > 1 ? `외 ${orderListDatas.length - 1}건` : ''}
          </p>
          <button type="button" onClick={toggleDetailHandler}>
            {isDetail ? (
              <Image src={UpArrowIcon} alt="upArrowIcon" />
            ) : (
              <Image src={DownArrowIcon} alt="downArrowIcon" />
            )}
          </button>
        </div>
      </div>

      <div className="border-t-[1px] text-sm text-gray-400">
        <p className="py-[12px]">2개 이상의 브랜드(업체) 상품을 주문하신 경우, 개별 배송될 수 있습니다.</p>
        <p className="py-[12px] border-t-[1px]">
          디지털 보증서는 구매확인 후 익일 또는 배송완료 +7일 후 발급되며, 고객님의 회원정보로 안내해 드립니다.
        </p>
      </div>
      <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isDetail ? '' : 'hidden'}`}>
        <ul>
          {orderListDatas &&
            orderListDatas.map((item) => (
              <li key={item.productCode} className="py-[32px] border-b-[1px] w-full">
                <OrderProductItem item={item} />
              </li>
            ))}
        </ul>
      </div>
    </section>
  )
}
