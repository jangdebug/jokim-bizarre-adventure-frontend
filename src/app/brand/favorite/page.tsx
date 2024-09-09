import BrandListItem from '@/components/brand/BrandListItem'
import FilledHeartIcon from '@/components/icons/product/FilledHeartIcon'

export default function Favorite() {
  const favoriteBrands: BrandType[] = []

  return (
    <main className="px-[24px] mb-[280px]">
      <div className="mb-[9px] h-[48px] border-b border-[#f0f0f0]">
        <FilledHeartIcon />
      </div>
      <ul>
        {favoriteBrands.length > 0 ? (
          favoriteBrands?.map((item) => <BrandListItem key={item.id} brand={item} />)
        ) : (
          <p className="py-[20px] px-[24px] flex items-center justify-center text-[#929292]">
            브랜드 찜 목록이 비어있습니다.
          </p>
        )}
      </ul>
    </main>
  )
}
