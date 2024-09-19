import Image from 'next/image'
import React from 'react'

export default function SlimEventSwiperItem({ slimEvent }: { slimEvent: SlimEventType }) {
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
