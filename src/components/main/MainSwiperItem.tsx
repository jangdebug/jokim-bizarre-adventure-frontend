import { mainSwiperItem } from '@/types/MainSwiperItem'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function MainSwiperItem({ swiperItem }: { swiperItem: mainSwiperItem }) {
  return (
    <>
      <Link href={`/event/${swiperItem.eventId}`} className="relative">
        <Image
          src={swiperItem.thumbnailUrl}
          alt="main image"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: '100%', height: 'auto' }}
        />
        <div className="absolute bottom-[2.4rem] left-6 right-6 z-10 flex flex-col items-center justify-center text-white">
          <p className="flex mb-2 text-sm font-bold leading-5 break-keep">
            <span>{swiperItem.brandName}</span>
            {swiperItem.hasMoreBrands ? <span>& more</span> : null}
          </p>
          <p className="text-[34px] font-bold leading-[42px] max-h-[84px] text-center break-keep ">
            {swiperItem.title}
          </p>
          <p className="text-[16px] leading-[24px] h-[48px] mt-2 overflow-hidden text-ellipsis text-center">
            {swiperItem.subTitle}
          </p>
        </div>
      </Link>
    </>
  )
}
