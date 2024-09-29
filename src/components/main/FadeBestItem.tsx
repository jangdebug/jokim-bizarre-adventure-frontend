import { getBrandNameByCode, getPopularCardImageUrl } from '@/actions/best/getBestItemData'
import { BestItemType } from '@/types/BestTypes'
import Image from 'next/image'
import Link from 'next/link'
import RankingGold from '../best/RankingGold'
import RankingGray from '../best/RankingGray'
import LikeButton from '../ui/LikeButton'

export default async function FadeBestItem({ item }: { item: BestItemType }) {
  const productImageUrl = await getPopularCardImageUrl(item.productCode)
  const bandData = await getBrandNameByCode(item.brandCode)

  return (
    <div className="relative h-[300px]">
      <div className="absolute top-[-2px] left-[-2px] z-10">
        {item.rankValue === 1 ? (
          <RankingGold width={36} height={42} />
        ) : item.rankValue === 2 ? (
          <RankingGray />
        ) : (
          <RankingGray width={27} height={30} />
        )}
        <span
          className={`text-white font-bold absolute z-20 ${item.rankValue <= 2 ? 'text-base top-[-2px] left-[7px]' : 'text-xs top-[6px] left-[9px]'}`}
        >
          {item.rankValue}
        </span>
      </div>
      <div className="absolute top-[8px] right-[8px] z-20">
        <LikeButton type="best" targetId={item.productCode} />
      </div>
      <Link href={`/product-detail/${item.productCode}`} className="w-full h-full flex flex-col">
        <div className="w-full flex-grow flex items-center justify-center">
          <Image
            src={productImageUrl.mediaUrl}
            width={200}
            height={200}
            alt={item.productName}
            priority
            className="w-full max-h-full object-contain"
          />
        </div>
        <div className="w-full flex-grow px-[8px] pb-[16px] flex flex-col justify-start">
          <p className="mt-[10px] mb-[6px] text-[20px] leading-[20px] tracking-[-0.08px] font-bold">
            {bandData.englishName}
          </p>
          <p className="mb-[6px] text-[16px] leading-[18px] tracking-[-0.06px] text-[#404040] line-clamp-2 text-ellipsis">
            {item.productName}
          </p>
          <p className="text-[16px] leading-[18px] tracking-[-0.06px]">
            {item.discountRate !== undefined ? (
              <span className="text-[#d99c63] font-bold">{item.discountRate}% </span>
            ) : null}
            <span className="text-black"> {item.discountPrice.toLocaleString()}</span>
          </p>
        </div>
      </Link>
    </div>
  )
}
