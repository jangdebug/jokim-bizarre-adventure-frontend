import { checkWishByBrandAction } from '@/actions/brand/getBrandListData'
import FavoriteBrandList from '@/components/brand/FavoriteBrandList'
import RecommendBrandList from '@/components/brand/RecommendBrandList'
import FilledHeartIcon from '@/components/icons/product/FilledHeartIcon'

export default async function Favorite() {
  const favoriteList = await checkWishByBrandAction()

  return (
    <main className="px-[24px] mb-[280px]">
      <div className="mb-[9px] h-[48px] border-b border-[#f0f0f0]">
        <FilledHeartIcon />
      </div>

      <FavoriteBrandList favoriteList={favoriteList} />
      <RecommendBrandList favoriteList={favoriteList} />
    </main>
  )
}
