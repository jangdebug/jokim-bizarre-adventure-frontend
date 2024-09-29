import { BestItemType } from '@/types/BestTypes'
import Image from 'next/image'
import Link from 'next/link'
import LikeButton from '../ui/LikeButton'
import { getBrandNameByCode, getPopularCardImageUrl } from '@/actions/best/getBestItemData'
import RankingGold from './RankingGold'
import RankingGray from './RankingGray'

interface PopularCardProps {
  item: BestItemType
}

export default async function PopularCard({ item }: PopularCardProps) {
  const productImageUrl = await getPopularCardImageUrl(item.productCode)
  const bandData = await getBrandNameByCode(item.brandCode)

  return (
    <li className="w-full flex flex-col relative">
      <div className="absolute top-[-2px] left-[-2px] z-[2]">
        {item.rankValue === 1 ? (
          <RankingGold />
        ) : item.rankValue === 2 ? (
          <RankingGray />
        ) : (
          <RankingGray width={15} height={18} />
        )}
        <span
          className={`text-white font-bold absolute z-[2] ${item.rankValue <= 2 ? 'text-base top-[-2px] left-[7px] ' : 'text-xs top-[-1px] left-[3px] '}`}
        >
          {item.rankValue}
        </span>
      </div>
      <div className="absolute top-[8px] right-[8px] z-[2]">
        <LikeButton type="best" targetId={item.productCode} />
      </div>
      <Link href={`/product-detail/${item.productCode}`} className="w-full h-full flex flex-col">
        <div className="w-full h-[70%] flex-grow flex items-center justify-center">
          {/* <div className="absolute w-full h-full bg-black z-[1] opacity-[0.03]" /> */}
          <Image
            src={productImageUrl.mediaUrl}
            width={300}
            height={300}
            alt={item.productName}
            priority
            className="w-full max-h-full object-contain"
          />
        </div>

        <div className="w-full flex-grow px-[8px] pb-[16px] flex flex-col justify-start">
          <p className="mt-[10px] mb-[3px] text-[14px] leading-[20px] tracking-[-0.08px] font-bold">
            {bandData.englishName}
          </p>
          <p className="mb-[2px] text-[12px] leading-[18px] tracking-[-0.06px] text-[#404040] line-clamp-2 text-ellipsis">
            {item.productName}
          </p>
          <p className="text-[12px] leading-[18px] tracking-[-0.06px]">
            {item.discountRate !== undefined ? (
              <span className="text-[#d99c63] font-bold">{item.discountRate}% </span>
            ) : null}
            <span> {item.discountPrice.toLocaleString()}</span>
          </p>
        </div>
      </Link>
    </li>
  )
}
