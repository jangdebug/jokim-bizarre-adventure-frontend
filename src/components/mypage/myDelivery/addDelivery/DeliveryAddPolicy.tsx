'use client'

import DownArrowIcon from '@/components/icons/footer/DownArrowIcon.png'
import UpArrowIcon from '@/components/icons/footer/UpArrowIcon.png'
import { Checkbox } from '@/components/ui/checkbox'
import Image from 'next/image'
import { useState } from 'react'

export default function DeliveryAddPolicy() {
  const [isDetail, setIsDetail] = useState<boolean>(false)
  const toggleDetailHandler = () => {
    setIsDetail(!isDetail)
  }

  return (
    <div>
      <div className="px-[24px] m-auto mt-5 pb-5 border-b border-gray-300 flex justify-between items-center">
        <div className="flex items-center">
          <Checkbox name="deliveryPolicy" id="policy" defaultChecked={false} />
          <label className="mx-3" htmlFor="policy">
            배송지 정보 수집 및 이용에 대한 동의 (필수)
          </label>
        </div>
        <button type="button" onClick={toggleDetailHandler}>
          {isDetail ? <Image src={UpArrowIcon} alt="upArrowIcon" /> : <Image src={DownArrowIcon} alt="downArrowIcon" />}
        </button>
      </div>

      <div
        className={`my-[10px] bg-gray-100 text-xs overflow-hidden transition-all duration-500 ease-in-out h-0 ${isDetail ? `h-[160px]` : 'h-0'}`}
      >
        <div className="p-[24px]">
          <p>
            고객님께서는 아래 내용에 대하여 동의를 거부하실 수 있습니다. 그러나 동의를 거부할 경우 일부 서비스를 제공
            받으실 수 없습니다.
          </p>
          <br />
          <p>-개인정보의 수집/이용 목적 : 회원의 배송지관리,</p>
          <p>-수집하는 개인정보의 항목 : 이름, 휴대폰번호, 주소</p>
          <p>
            <span className="text-sm font-bold">
              개인정보의 보유 및 이용기간 : 회원 탈퇴 시 까지 (단, 본인직접 삭제 시 즉시 삭제)
            </span>
          </p>
        </div>
      </div>

      <div className="px-[24px]">
        <p className="text-gray-400 text-[12px]">
          * 주문정보(주문완료, 배송상태 등)는 주문고객님의 정보로 안내드립니다.
        </p>
      </div>
    </div>
  )
}
