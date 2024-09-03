import { myInfoType } from '@/types/MyPageTypes'
import React from 'react'

export default function MyInfoBox({ myInfoData }: { myInfoData: myInfoType }) {
  return (
    <ul className="grid grid-rows-2 grid-cols-2 mt-3 gap-1">
      <li className="w-full h-[70px] box-border bg-[#f8f8f8] flex flex-col justify-center items-center">
        <p className="font-bold">
          0<span className="text-xs">p</span>
        </p>
        <span className="text-xs text-[#787878]">S.I.포인트</span>
      </li>

      <li className="w-full h-[70px] box-border bg-[#f8f8f8] flex flex-col justify-center items-center">
        <p className="font-bold">
          0<span className="text-xs">p</span>
        </p>
        <span className="text-xs text-[#787878]">e포인트</span>
      </li>

      <li className="w-full h-[70px] box-border bg-[#f8f8f8] flex flex-col justify-center items-center">
        <p className="font-bold">
          {myInfoData.myCouponCount}
          <span className="text-xs">장</span>
        </p>
        <span className="text-xs text-[#787878]">쿠폰</span>
      </li>

      <li className="w-full h-[70px] box-border bg-[#f8f8f8] flex flex-col justify-center items-center">
        <p className="font-bold">
          {myInfoData.myReviewCount}
          <span className="text-xs">개</span>
        </p>
        <span className="text-xs text-[#787878]">리뷰</span>
      </li>
    </ul>
  )
}
