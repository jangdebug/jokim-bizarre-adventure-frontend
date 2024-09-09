import MyTab from '@/components/mypage/myTab'
import { myDeliveryTabDatas } from '@/datas/dummy/mypage/MyTabData'
import React from 'react'

export default function MyAccountPage() {
  return (
    <>
      <MyTab tabData={myDeliveryTabDatas} />
      <div className="w-full h-[480px]">
        <p className="mt-10 text-center">MyAccountPage</p>
      </div>
    </>
  )
}
