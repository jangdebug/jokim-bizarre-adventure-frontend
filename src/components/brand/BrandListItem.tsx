import Link from 'next/link'
import LikeButton from '../ui/LikeButton'

export default function BrandListItem({ brand }: { brand: BrandType }) {
  return (
    <li key={brand.id} className="py-[20px] pl-[12px] flex items-start justify-between">
      <Link href={'#'} className="flex flex-col gap-[12px]">
        <p className="text-[16px] font-bold whitespace-nowrap text-ellipsis">{brand.name}</p>
        <p className="text-[14px] font-[400] leading-[17px] tracking-[0.023rem] whitespace-nowrap text-ellipsis">
          {brand.koreanName}
        </p>
      </Link>
      <LikeButton type="brand" targetId={brand.brandId} />
    </li>
  )
}
