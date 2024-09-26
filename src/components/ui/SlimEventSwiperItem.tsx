import { slimEventType } from '@/types/EventTypes'
import Image from 'next/image'
import React from 'react'

export default function SlimEventSwiperItem({ slimEvent }: { slimEvent: slimEventType }) {
  return (
    <>
      <Image
        src={slimEvent.url}
        alt="eventImage"
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: '100%', height: 'auto' }}
      />
    </>
  )
}
