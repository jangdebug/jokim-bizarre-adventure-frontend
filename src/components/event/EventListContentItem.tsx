import { eventListType } from '@/types/ListDataTypes'
import Link from 'next/link'
import Image from 'next/image'
import React from 'react'

export default function EventListContentItem({ eventListData }: { eventListData: eventListType }) {
  return (
    <>
      <li className="pl-6 pr-6">
        <Link href={`/event-detail/${eventListData.id}`}>
          <div className="flex mb-7 items-start">
            <div className="w-1/2 mr-4 items-start bg-[#f5f5f5]">
              <Image
                src={eventListData.eventImageUrl}
                width={200}
                height={200}
                alt={eventListData.eventDescription}
                className="object-cover w-full h-full"
                priority
              />
            </div>
            <div className=" w-1/2">
              <p className="mb-1 text-xs leading-5 font-medium text-[#404040]">
                <span>{eventListData.eventSmallTitle}</span>
              </p>
              <p className="mb-1 text-base leading-6 font-bold whitespace-nowrap overflow-hidden text-ellipsis">
                {eventListData.eventMainTitle}
              </p>
              <p className="mb-2 text-sm leading-5 w-full text-[#404040]">{eventListData.eventDescription}</p>
            </div>
          </div>
        </Link>
      </li>
    </>
  )
}
