import Image from 'next/image'
import React from 'react'
import MyWishTab from '../myTab'

interface EventtItemProps {
  eventItem: {
    id: number
    wishImageUrl: string
    wishSubTitle: string
    wishTitle: string
    wishDescription: string
    wishStartDate: string
    wishEndDate: string
  }
}

export default function MyWishEventItem({ eventItem }: EventtItemProps) {
  return (
    <li className="p-5 pb-8 mt-10 border-b border-[#f0f0f0] flex justify-start">
      <div className="w-[45%]">
        <Image src={eventItem.wishImageUrl} width={300} height={300} alt={eventItem.wishDescription} priority></Image>
      </div>
      <div className="ml-5 my-2 w-[55%]">
        <div className="text-xs font-bold my-2">{eventItem.wishSubTitle}</div>
        <div>
          <div className="text-xsm font-bold mb-1 w-full">
            <p className="overflow-hidden text-ellipsis whitespace-nowrap">{eventItem.wishTitle}</p>
          </div>
          <div className="text-xs mb-2 truncate-lines">
            <p>{eventItem.wishDescription}</p>
          </div>
          <div className="text-xs mb-2 text-gray-400">
            {eventItem.wishStartDate} ~ {eventItem.wishEndDate}
          </div>
        </div>
      </div>
    </li>
  )
}
