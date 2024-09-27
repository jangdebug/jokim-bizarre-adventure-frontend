import { recommendBrandDatas } from '@/datas/dummy/brand/BrandItemDatas'
import { checkWishByBrandType } from '@/types/BrandTypes'
import RecommendBrandListItem from './RecommendBrandListItem'

interface recommendListType {
  favoriteList: checkWishByBrandType[]
}

export default function RecommendBrandList({ favoriteList }: recommendListType) {
  return (
    <section>
      <div className="py-[4px] border-b border-b-gray-400 flex items-center">
        <p className="font-bold text-base">추천 Brand</p>
      </div>
      <div className="my-[24px]">
        <ul>
          {recommendBrandDatas.map((item) => (
            <RecommendBrandListItem
              key={item.brandCode}
              item={item}
              isLike={favoriteList.some(
                (favoriteItem: checkWishByBrandType) => favoriteItem.brandCode === item.brandCode,
              )}
            />
          ))}
        </ul>
      </div>
    </section>
  )
}
