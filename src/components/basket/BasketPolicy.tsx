'use client'

import React, { useState } from 'react'
import Divider from '../ui/Divider'
import Image from 'next/image'
import DownArrowIcon from '@/components/icons/footer/DownArrowIcon.png'
import UpArrowIcon from '@/components/icons/footer/UpArrowIcon.png'

export default function BasketPolicy() {
  const [isDetail, setIsDetail] = useState<boolean>(false)
  const toggleDetailHandler = () => {
    setIsDetail(!isDetail)
  }

  return (
    <div>
      <Divider />

      <div className="px-[24px] m-auto my-5 flex justify-between items-center">
        <div className="flex items-center">
          <span className="text-base font-bold">쇼핑백 이용안내</span>
        </div>
        <button type="button" onClick={toggleDetailHandler}>
          {isDetail ? <Image src={UpArrowIcon} alt="upArrowIcon" /> : <Image src={DownArrowIcon} alt="downArrowIcon" />}
        </button>
      </div>

      <div
        className={` bg-gray-100 text-xs overflow-hidden transition-all duration-500 ease-in-out ${isDetail ? `h-[110px]` : 'h-0'}`}
      >
        <div className="p-[24px]">
          <p className="mb-2">-쇼핑백은 최대 100개의 상품을 담을 수 있고, 최대 보관기간은 30일입니다.</p>
          <p className="mb-2">-판매 종료된 상품은 쇼핑백에 담긴 지 14일 이후 자동삭제 됩니다.</p>
          <p>-선물포장가능 상품인 경우 주문서에서 선물포장 신청이 가능합니다.</p>
        </div>
      </div>

      <Divider />
    </div>
  )
}
