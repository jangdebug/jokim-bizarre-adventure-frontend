import { AbleReviewType } from '@/types/MyPageTypes'
import Image from 'next/image'

interface itemProps {
  item: AbleReviewType
}

export default function AbleReviewItem({ item }: itemProps) {
  return (
    <li className="flex mb-5 pb-5 border-b border-b-gray-200">
      <Image src={item.imageUrl} width={150} height={200} alt={item.productName} className="w-5/12 mr-5" priority />
      <div>
        <p className="mb-2">
          <span className="text-xl font-bold">{item.productName}</span>
        </p>
        <p className="mb-10">
          <span className="text-sm">{item.review}</span>
        </p>
        <p>
          <span className="text-xs text-gray-400">{item.writeDate}</span>
        </p>
      </div>
    </li>
  )
}
