import { writenReviewType } from '@/types/MyPageTypes'
import Image from 'next/image'
import React from 'react'

interface itemProps {
  item: writenReviewType
}

export default function WritenReviewItem({ item }: itemProps) {
  return (
    <li className="flex mb-5 pb-5 border-b border-b-gray-200">
      <Image src={item.imageUrl} width={150} height={200} alt={item.productName} className="w-5/12 mr-5" priority />
      <div className="flex flex-col flex-auto justify-between">
        <div>
          <p className="mb-2">
            <span className="text-sm font-bold">{item.brandName}</span>
          </p>
          <p className="mb-8">
            <span className="text-xl">{item.productName}</span>
          </p>
          <p className="mb-[5.5rem]">
            <span className="text-sm">{item.review}</span>
          </p>
        </div>

        <p>
          <span className="text-xs mr-2">작성일자</span>
          <span className="text-xs text-gray-400">{item.registDate}</span>
        </p>
      </div>
    </li>
  )
}
