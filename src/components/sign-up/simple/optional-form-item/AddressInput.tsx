import { Button } from '@/components/ui/button'
import React from 'react'

export default function AddressInput() {
  // 주소 모듈 통해서 주소 받아서 입력 돼야함.
  return (
    <>
      <p className="mt-[33px] mb-[13px] text-[16px] leading-[22px] text-[#131922] font-bold">주소</p>
      <div className="flex flex-row items-center justify-between">
        <p className="text-[14px] text-[#a0a0a0] pr-[16px]">주소를 입력해 주세요</p>
        {/* onClick -> 주소 받아오기 */}
        <Button type="button" variant={'outline'} className="px-[14px]">
          주소검색
        </Button>
      </div>
      <p className="mt-[16px] text-[14px] text-[#787878] leading-[20px]">회원 및 배송지 주소로 설정됩니다.</p>
    </>
  )
}
