'use client'
import React, { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

import 'swiper/css/effect-creative'
import { Pagination, Navigation } from 'swiper/modules'
import MainSwiperItem from './ProductDetailSwiperItem'

export default function ProductDetailSwiper({ productDetailImages }: { productDetailImages: string[] }) {
  const swiperRef = useRef<any>(null)

  return (
    <>
      <Swiper
        ref={swiperRef}
        grabCursor={true}
        loop={true}
        speed={500}
        pagination={{
          type: 'custom',
          clickable: true,
          renderCustom: (swiper, current, total) => {
            return `
              <div class="absolute flex h-[28px] bottom-[8px] right-[16px]">
                <div class="text-[12px] font-extralight leading-[14px] text-black z-10 pagination-text">
                  <span>${current}</span> /
                  <span> ${total}</span>
                </div>
              </div>
            `
          },
        }}
        modules={[Pagination, Navigation]}
        className="w-full"
      >
        {productDetailImages.map((url, index) => (
          <SwiperSlide key={index} className="relative">
            <MainSwiperItem url={url} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}
