import { Button } from '@/components/ui/button'
import { AbleReviewType } from '@/types/MyPageTypes'
import Image from 'next/image'

interface itemProps {
  item: AbleReviewType
}

export default function AbleReviewItem({ item }: itemProps) {
  return (
    <li className="flex mb-5 pb-5 border-b border-b-gray-200">
      <Image src={item.imageUrl} width={150} height={200} alt={item.productName} className="w-5/12 mr-5" priority />
      <div className="flex flex-col flex-auto justify-between">
        <div>
          <p className="mb-2">
            <span className="text-sm font-bold">{item.brandName}</span>
          </p>
          <p className="mb-4">
            <span className="text-xl">{item.productName}</span>
          </p>
          <p className="mb-24">
            <span className="text-xs mr-2">구매일자</span>
            <span className="text-xs text-gray-400">{item.orderDate}</span>
          </p>
        </div>

        <Button>작성하러 가기</Button>
      </div>
    </li>
  )
}
