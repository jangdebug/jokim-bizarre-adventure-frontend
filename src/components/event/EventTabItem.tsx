import { eventTabBadgeType } from '@/types/InitialDataTypes'
import React, { useState } from 'react'
import Image from 'next/image'

interface EventTabItemProps {
  eventTabBageData: eventTabBadgeType
  isSelected: boolean
  onClick: () => void
}

export default function EventTabItem({ eventTabBageData, isSelected, onClick }: EventTabItemProps) {
  const imageUrl = isSelected ? eventTabBageData.tabBadgeImageUrl2 : eventTabBageData.tabBadgeImageUrl1 //이미지가 string | undefined라 변수로 따로 저장

  return (
    <button className="w-[84px] h-[100px] flex flex-col justify-center items-center" onClick={onClick}>
      <span
        className={`w-11/12 aspect-square flex items-center justify-center rounded-full ${isSelected ? 'bg-black' : 'bg-[#f8f8f8]'}`}
      >
        {imageUrl ? (
          <Image
            src={imageUrl}
            width={200}
            height={200}
            alt={eventTabBageData.tabDescription}
            priority
            className="w-2/3 h-2/3"
          />
        ) : (
          <span className={`${isSelected ? 'text-[#f8f8f8]' : 'text-black'}`}>{eventTabBageData.tabDescription}</span>
        )}
      </span>

      <span className="text-xs font-bold mt-1.5">{eventTabBageData.tabName}</span>
    </button>
  )
}
