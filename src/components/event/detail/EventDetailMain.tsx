import { eventDetailType } from '@/types/EventTypes'
import Image from 'next/image'
import React from 'react'

interface detailProps {
  eventDetailData: eventDetailType
}

export default function EventDetailMain({ eventDetailData }: detailProps) {
  return (
    <section>
      <div className="px-[24px] pt-[12px] pb-[18px] m-auto">
        {/* 상품 제목 */}
        <p className="text-base font-bold mb-3">{eventDetailData.title}</p>

        {/* 상품 아이콘s 이미지 */}
        <div className="flex justify-end gap-2">
          <Image
            src={'https://cdn-mo.sivillage.com/mo/assets/comm/image/icon_heart_light_off.svg'}
            width={25}
            height={25}
            alt={'상품 아이콘 이미지'}
            priority
          />
          <Image
            src={'https://cdn-mo.sivillage.com/mo/assets/comm/image/05Icon32PxThinShare.svg'}
            width={25}
            height={25}
            alt={'상품 아이콘 이미지'}
            priority
          />
          <Image
            src={'https://cdn-mo.sivillage.com/mo/assets/comm/image/05Icon32PxThinCategory.svg'}
            width={25}
            height={25}
            alt={'상품 아이콘 이미지'}
            priority
          />
        </div>
      </div>

      {/* 상품 배너 이미지 */}
      <div className="mb-12">
        <Image
          src={eventDetailData.eventImageUrl[0]}
          width={200}
          height={200}
          alt={'상품 배너 이미지'}
          priority
          className="w-full"
        />
      </div>

      {/* 상품 내용 이미지 */}
      <div className="mb-12">
        {eventDetailData.eventImageUrl.slice(1).map((item, index) => (
          <Image
            key={index}
            src={item}
            width={200}
            height={200}
            alt={'상품 내용 이미지'}
            priority
            className="w-full mb-12"
          />
        ))}
      </div>

      {/* 쿠폰 */}
      {/* <div className="h-[300px] bg-blue-400 mb-12"> 쿠폰</div> */}
    </section>
  )
}
