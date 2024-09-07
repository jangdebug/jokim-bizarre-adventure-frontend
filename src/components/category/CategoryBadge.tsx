import Image from 'next/image'

export default function CategoryBadge({ categoryBadgeData }: { categoryBadgeData: QuickMenuBadgeType }) {
  return (
    <div className="flex flex-col items-center">
      <div className="w-[62px]">
        <Image
          src={categoryBadgeData.categoryBadgeImageUrl}
          alt={categoryBadgeData.categoryName}
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: '100%', height: 'auto' }}
        />
      </div>
      <span className="mt-[6px] text-[12px] leading-[16px] text-[#131922] overflow-hidden">
        {categoryBadgeData.categoryName}
      </span>
    </div>
  )
}
