import MyTab from '@/components/mypage/myTab'
import { myDeliveryTabDatas } from '@/datas/dummy/mypage/MyTabData'
import React from 'react'

export default function MyAccountPage() {
  return (
    <>
      <MyTab tabData={myDeliveryTabDatas} />
      <div className="w-full h-[500px] bg-gray-100 flex items-center justify-center">
        <p className="text-xl font-bold">서비스를 준비 중입니다...</p>
      </div>
    </>
  )
}
