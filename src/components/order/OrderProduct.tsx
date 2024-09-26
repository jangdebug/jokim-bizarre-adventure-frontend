'use client'

import DownArrowIcon from '@/components/icons/footer/DownArrowIcon.png'
import UpArrowIcon from '@/components/icons/footer/UpArrowIcon.png'
import { basketListType } from '@/types/BasketTypes'
import Image from 'next/image'
import React, { useState } from 'react'

export default function OrderProduct({ basketListDatas }: { basketListDatas: basketListType[] }) {
  const [isDetail, setIsDetail] = useState<boolean>(false)
  const toggleDetailHandler = () => {
    setIsDetail(!isDetail)
  }

  return (
    <section className="px-[24px]">
      <div className="my-[16px] flex justify-between">
        <p className="text-xl font-bold">주문상품</p>
        <div className="flex items-center">
          <p className="text-[14px] text-gray-500 mr-2">{basketListDatas[0].productName} 외 1건</p>
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
          {basketListDatas.map((item) => (
            <li key={item.productCode} className="py-[32px] border-b-[1px] w-full">
              <div className="mb-[32px] flex gap-4">
                <div className="w-1/5">
                  <Image src={item.productImageUrl} width={200} height={200} alt={item.productName} priority />
                </div>
                <div className="flex flex-col justify-between flex-grow">
                  <div className="text-xs flex flex-col gap-1">
                    <input type="hidden" name="productCode" value={item.productCode} />
                    <p className="text-base font-bold">{item.brandName}</p>
                    <p>{item.productName}</p>
                    <p className="text-gray-500">{item.productOption}</p>
                  </div>
                  <div className="flex justify-between items-center pb-[8px] border-b-[1px]">
                    <p>
                      <span className="font-bold">{item.price * item.quantity}</span>원
                    </p>
                    <p className="text-xs">{item.quantity}개 주문</p>
                  </div>
                </div>
              </div>
              <div className="bg-[#f8f8f8] flex justify-end py-[20px]">
                <p className="text-xs text-[#787878] font-bold mr-[16px]">배송비 무료</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
