import Link from 'next/link'
import LikeButton from '../ui/LikeButton'
import { getFavoriteItemInfo } from '@/actions/brand/getBrandListData'

interface brandItemProps {
  brandCode: string
}

export default async function FavoriteBrandListItem({ brandCode }: brandItemProps) {
  const listItemInfo = await getFavoriteItemInfo(brandCode)

  return (
    <li className="py-[20px] pl-[12px] flex items-start justify-between">
      <Link href={'#'} className="flex flex-col gap-[12px]">
        <p className="text-[16px] font-bold whitespace-nowrap text-ellipsis">{listItemInfo?.englishName}</p>
        <p className="text-[14px] font-[400] leading-[17px] tracking-[0.023rem] whitespace-nowrap text-ellipsis">
          {listItemInfo?.koreanName}
        </p>
      </Link>
      <LikeButton type="brand" targetId={brandCode} currentState={true} />
    </li>
  )
}
