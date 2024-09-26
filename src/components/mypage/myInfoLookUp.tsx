import Link from 'next/link'
import React from 'react'
import { getMyLookUpData } from '@/actions/mypage/getMyLookUpData'
import { myLookUpType } from '@/types/MyPageTypes'
import { LookUpDivision } from './myInfoLookUp/lookUpDivison'

export interface ImageProps {
  src: string
  alt: string
}

const lookUpIcon: ImageProps[] = [
  {
    src: 'https://cdn-mo.sivillage.com/mo/assets/comm/image/icon_delivery_deposit_off.svg',
    alt: '주문/결제',
  },
  {
    src: 'https://cdn-mo.sivillage.com/mo/assets/comm/image/icon_delivery_payment_off.svg',
    alt: '상품준비중',
  },
  {
    src: 'https://cdn-mo.sivillage.com/mo/assets/comm/image/icon_delivery_cart_off.svg',
    alt: '배송준비중',
  },
  {
    src: 'https://cdn-mo.sivillage.com/mo/assets/comm/image/icon_delivery_truck_off.svg',
    alt: '배송중',
  },
  {
    src: 'https://cdn-mo.sivillage.com/mo/assets/comm/image/icon_delivery_complete_off.svg',
    alt: '배송완료',
  },
]

export default async function myInfoLookUp() {
  const myLookUpData: myLookUpType = await getMyLookUpData()

  return (
    <div className="pt-2 pb-8 px-0 mb-4 bg-[#f8f8f8]">
      <h2 className="flex justify-between items-center h-[64px] px-[24px] py-0">
        <Link href={`/order`} className="font-bold text-xl">
          주문/배송 조회
        </Link>
      </h2>
      <ul className="flex justify-center text-xs text-[#787878]">
        {lookUpIcon.map((icon, index) => (
          <LookUpDivision
            myLookUpData={myLookUpData}
            lookUpIcon={icon}
            key={index}
            index={index}
            length={lookUpIcon.length}
          />
        ))}
      </ul>
    </div>
  )
}
