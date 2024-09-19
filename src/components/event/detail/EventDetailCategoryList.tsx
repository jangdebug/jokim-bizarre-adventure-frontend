import LikeButton from '@/components/ui/LikeButton'
import { eventCategoryItemType } from '@/types/EventTypes'
import Image from 'next/image'
import React from 'react'

export default function EventDetailCategoryList({ items }: { items: eventCategoryItemType[] }) {
  return (
    <ul className="grid grid-cols-2 gap-5">
      {items.map((item) => (
        <li className="mb-3 relative" key={item.id}>
          <div className="absolute top-[8px] right-[8px]">
            <LikeButton type="event" targetId={item.id} />
          </div>

          <Image
            src={item.productImageUrl}
            width={200}
            height={200}
            alt={item.productName}
            priority
            className="w-full mb-3"
          />

          <div className="mb-2 text-xs">
            <p className="text-sm font-bold">{item.brandName}</p>
            <p>{item.productName}</p>
            <p>{item.price}</p>
            <p>
              ★ {item.likeAverage} <span className="text-gray-400">({item.likeCount})</span>
            </p>
          </div>
        </li>
      ))}
    </ul>
  )
}
