import { BestItemType } from '@/types/BestTypes'
import Image from 'next/image'
import Link from 'next/link'
import LikeButton from '../ui/LikeButton'

interface PopularCardProps {
  item: BestItemType
}

export default function PopularCard({ item }: PopularCardProps) {
  return (
    <li className="w-full flex flex-col relative">
      <div className="absolute top-[8px] right-[8px] z-[2]">
        <LikeButton type="best" targetId={Number(item.productCode)} />
      </div>
      <Link href={`/product-detail/${item.productCode}`} className="w-full h-full flex flex-col">
        <div className="w-full h-[70%] flex-grow flex items-center justify-center">
          {/* <div className="absolute w-full h-full bg-black z-[1] opacity-[0.03]" /> */}
          <Image
            src={item.productImageUrl}
            width={300}
            height={300}
            alt={item.productName}
            priority
            className="w-full max-h-full object-contain"
          />
        </div>

        <div className="w-full flex-grow px-[8px] pb-[16px] flex flex-col justify-start">
          <p className="mt-[10px] mb-[3px] text-[14px] leading-[20px] tracking-[-0.08px] font-bold">{item.brandName}</p>
          <p className="mb-[2px] text-[12px] leading-[18px] tracking-[-0.06px] text-[#404040] line-clamp-2 text-ellipsis">
            {item.productName}
          </p>
          <p className="text-[12px] leading-[18px] tracking-[-0.06px]">
            {item.discount !== undefined ? <span className="text-[#d99c63] font-bold">{item.discount}% </span> : null}
            <span> {item.price.toLocaleString()}</span>
          </p>
        </div>
      </Link>
    </li>
  )
}
