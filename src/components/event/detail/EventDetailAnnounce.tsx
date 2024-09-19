'use client'

import DownArrowIcon from '@/components/icons/footer/DownArrowIcon.png'
import UpArrowIcon from '@/components/icons/footer/UpArrowIcon.png'
import Divider from '@/components/ui/Divider'
import Image from 'next/image'
import React, { useState } from 'react'

export default function EventDetailAnnounce({ brand }: { brand: string }) {
  const [isDetail, setIsDetail] = useState<boolean>(false)
  const toggleDetailHandler = () => {
    setIsDetail(!isDetail)
  }

  return (
    <>
      <div className="h-[64px] px-[24px] m-auto border-b border-[#f0f0f0] flex justify-between">
        <p className="text-lg font-bold py-3 flex items-center">알려드립니다.</p>
        <button type="button" onClick={toggleDetailHandler}>
          {isDetail ? <Image src={UpArrowIcon} alt="upArrowIcon" /> : <Image src={DownArrowIcon} alt="downArrowIcon" />}
        </button>
      </div>
      <div
        className={`text-xs overflow-hidden transition-all duration-500 ease-in-out h-0 ${isDetail ? `my-[24px] h-[80px]` : 'h-0'}`}
      >
        <ul className="px-[24px] text-xs text-gray-400 space-y-2">
          <li>- 본 행사는 한정 수량으로 진행되며, 당사 사정에 따라 예고 없이 변경 또는 종료될 수 있습니다.</li>
          <li>- 본 행사는 주문물량 증가로 배송 지연이 있을 수 있는 점 양해 부탁드립니다.</li>
          <li>- 본 행사는 {brand} CLUB / SIVILLAGE 회원 대상으로 진행되며, 회원가입 및 로그인 후 참여 가능합니다.</li>
        </ul>
      </div>
      <Divider />
    </>
  )
}
