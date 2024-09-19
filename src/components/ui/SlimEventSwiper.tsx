'use client'
import React, { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import { Pagination, Autoplay } from 'swiper/modules'
import SlimEventSwiperItem from './SlimEventSwiperItem'

const slimEventData: SlimEventType[] = [
  {
    id: 1,
    url: 'https://image.sivillage.com/upload/C00001/s3/dspl/banner/99/340/00/240900000506340_20240904162227.jpg?RS=750&SP=1',
    targetEventId: 1,
  },
  {
    id: 2,
    url: 'https://image.sivillage.com/upload/C00001/s3/dspl/banner/99/594/00/240900000508594_20240910153438.jpg?RS=750&SP=1',
    targetEventId: 2,
  },
  {
    id: 3,
    url: 'https://image.sivillage.com/upload/C00001/s3/dspl/banner/99/337/00/240900000506337_20240904162120.jpg?RS=750&SP=1',
    targetEventId: 3,
  },
  {
    id: 4,
    url: 'https://image.sivillage.com/upload/C00001/s3/dspl/banner/99/340/00/240900000506340_20240904162227.jpg?RS=750&SP=1',
    targetEventId: 4,
  },
  {
    id: 5,
    url: 'https://image.sivillage.com/upload/C00001/s3/dspl/banner/99/594/00/240900000508594_20240910153438.jpg?RS=750&SP=1',
    targetEventId: 5,
  },
]

export default function SlimEventSwiper() {
  const swiperRef = useRef<any>(null)

  return (
    <section className="mb-[48px]">
      <Swiper
        ref={swiperRef}
        grabCursor={true}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        speed={1000}
        pagination={{
          type: 'bullets',
          clickable: true,
        }}
        modules={[Pagination, Autoplay]}
        className="w-full slim-swiper"
      >
        {slimEventData.map((item, index) => (
          <SwiperSlide key={index}>
            <SlimEventSwiperItem slimEvent={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}
