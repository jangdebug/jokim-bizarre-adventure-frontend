import BrandListItem from '@/components/brand/BrandListItem'
import FilledHeartIcon from '@/components/icons/product/FilledHeartIcon'

export default function Favorite() {
  const favoriteBrands: BrandType[] = []

  return (
    <main className="px-[24px] mb-[80px]">
      <div className="mb-[9px] h-[48px] border-b border-[#f0f0f0]">
        <FilledHeartIcon />
        <ul>{favoriteBrands?.map((item) => <BrandListItem key={item.id} brand={item} />)}</ul>
      </div>
    </main>
  )
}
