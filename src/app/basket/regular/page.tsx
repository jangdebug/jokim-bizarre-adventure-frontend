import { getBasketPointAction } from '@/actions/basket/getBasketPointData'
import BasketPolicy from '@/components/basket/BasketPolicy'
import BasketNavPoint from '@/components/layout/BasketNavPoint'
import Footer from '@/components/layout/Footer'
import MyTab from '@/components/mypage/myTab'
import SlimEventSwiper from '@/components/ui/SlimEventSwiper'
import { basketTabDatas } from '@/datas/dummy/basket/TabData'
import React from 'react'

export default async function page() {
  const basketPoint = await getBasketPointAction()

  return (
    <>
      <BasketNavPoint basketPoint={basketPoint} />
      <MyTab tabData={basketTabDatas} />
      <div className="w-full h-[500px] bg-gray-100 flex items-center justify-center">
        <p className="text-xl font-bold">서비스를 준비 중입니다...</p>
      </div>
      <BasketPolicy />
      <SlimEventSwiper />
    </>
  )
}
