import { brandListType } from '@/types/BrandTypes'
import Link from 'next/link'
import LikeButton from '../ui/LikeButton'

export default async function BrandListItem({ brand }: { brand: brandListType }) {
  return (
    <li key={brand.brandCode} className="py-[20px] pl-[12px] flex items-start justify-between">
      <Link href={'#'} className="flex flex-col gap-[12px]">
        <p className="text-[16px] font-bold whitespace-nowrap text-ellipsis">{brand.englishName}</p>
        <p className="text-[14px] font-[400] leading-[17px] tracking-[0.023rem] whitespace-nowrap text-ellipsis">
          {brand.koreanName}
        </p>
      </Link>
      <LikeButton type="brand" targetId={brand.brandCode} />
    </li>
  )
}
