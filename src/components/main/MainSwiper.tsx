'use client'
import React, { useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { Autoplay } from 'swiper/modules'

import 'swiper/css/effect-creative'
import { EffectCreative, Pagination, Navigation } from 'swiper/modules'
import { mainSwiperItem } from '@/types/MainSwiperItem'
import MainSwiperItem from './MainSwiperItem'

export default function MainSwiper({
  swiperItems,
}: {
  swiperItems: mainSwiperItem[]
}) {
  const swiperRef = useRef<any>(null)
  const [autoplayEnabled, setAutoplayEnabled] = useState<boolean>(true)

  const toggleAutoplay = () => {
    const swiper = swiperRef.current.swiper
    if (autoplayEnabled) {
      swiper.autoplay.stop()
    } else {
      swiper.autoplay.start()
    }
    setAutoplayEnabled(!autoplayEnabled)
  }

  return (
    <>
      <Swiper
        ref={swiperRef}
        grabCursor={true}
        effect={'creative'}
        loop={true}
        autoplay={
          autoplayEnabled
            ? {
                delay: 2500,
                disableOnInteraction: false,
              }
            : false
        }
        speed={1500}
        creativeEffect={{
          prev: {
            translate: ['-20%', 0, -1],
          },
          next: {
            translate: ['100%', 0, 0],
          },
        }}
        pagination={{
          type: 'custom',
          clickable: true,
          renderCustom: (swiper, current, total) => {
            return `
              <div class="absolute flex w-[100px] h-[28px] top-[12px] right-[12px] p-[6px] items-center box-border bg-[rgba(0,0,0,0.2)] z-10">
                <button class="pointer-events-none flex-shrink-0 block w-[16px] h-[16px] bg-no-repeat bg-center bg-[length:16px_16px] ${
                  autoplayEnabled
                    ? `bg-[url('https://cdn-mo.sivillage.com/mo/assets/comm/image/05Icon32PxThinStop.png')]`
                    : `bg-[url('https://cdn-mo.sivillage.com/mo/assets/comm/image/icon_play2.svg')]`
                }"/></button>
                <div class="static flex-grow text-[12px] font-light leading-[14px] text-[rgba(255,255,255,0.8)] w-full text-center transition-opacity duration-300 transform translate-x-0 translate-y-0 z-10">
                  <span class="text-white">${current}</span> /
                  <span> ${total}</span>
                </div>
                <a href="/event" class="bg-[url('https://cdn-mo.sivillage.com/mo/assets/comm/image/btn03.png')] flex-shrink-0 block w-[16px] h-[16px] bg-no-repeat bg-center bg-[length:16px_16px]"></a>
              </div>
            `
          },
        }}
        modules={[EffectCreative, Autoplay, Pagination, Navigation]}
        className="w-full"
      >
        {swiperItems.map((swiperItem) => (
          <SwiperSlide key={swiperItem.id}>
            <MainSwiperItem key={swiperItem.id} swiperItem={swiperItem} />
          </SwiperSlide>
        ))}

        {/* swiper renderCustom 이 jsx 지원이 되지 않아 해당 버튼 위 덮어씌움.. */}
        <button
          onClick={toggleAutoplay}
          className=" z-20 absolute top-4 right-[5.5rem] w-[16px] h-[16px]"
        />
      </Swiper>
    </>
  )
}
