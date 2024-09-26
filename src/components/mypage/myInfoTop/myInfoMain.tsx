import { myInfoType } from '@/types/MyPageTypes'
import Image from 'next/image'
import React from 'react'

export default function MyInfoMain({ myInfoData }: { myInfoData: myInfoType }) {
  return (
    <>
      <div className="bg-white flex flex-row w-[64.53%]">
        <Image
          src={myInfoData.myGradeUrl}
          width={60}
          height={60}
          alt={myInfoData.myGradeName}
          priority
          className="mr-2"
        />
        <div className="flex flex-col justify-center">
          <p className="text-custom-xs font-regular-bold-cello font-black text-custom-gray-dark leading-6 uppercase">
            {myInfoData.myGradeName}
          </p>
          <p className="mt-1 flex items-center">
            <span className="mr-2 text-sm">{myInfoData.myName}</span>
            <span className="text-xs text-[#787878]">다음달 등급 &gt;</span>
          </p>
        </div>
      </div>
    </>
  )
}
