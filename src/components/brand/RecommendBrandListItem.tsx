import { recommendBrandInfoType } from '@/types/BrandTypes'
import Link from 'next/link'
import RecommendItemRank from '../rank/RecommendItemRank'
import LikeButton from '../ui/LikeButton'

interface recommendItemType {
  item: recommendBrandInfoType
  isLike: boolean
}

export default function RecommendBrandListItem({ item, isLike }: recommendItemType) {
  return (
    <li className="flex justify-between my-[32px]">
      <Link href={'#'} className="flex gap-[12px]">
        <RecommendItemRank rank={item.rank} />
        <div className="flex flex-col gap-[12px]">
          <p className="text-[16px] font-bold whitespace-nowrap text-ellipsis">{item.englishName}</p>
          <p className="text-[14px] font-[400] leading-[17px] tracking-[0.023rem] whitespace-nowrap text-ellipsis">
            {item.koreanName}
          </p>
        </div>
      </Link>
      <LikeButton type="brand" targetId={item.brandCode} currentState={isLike} />
    </li>
  )
}
