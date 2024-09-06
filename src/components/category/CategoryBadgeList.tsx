import { categoryBadgeDatas } from '@/datas/dummy/main/CategoryDatas'
import MainCategoryItem from '../main/MainCategoryItem'

export default function CategoryBadgeList() {
  const categoryBadgeListData = categoryBadgeDatas
  return (
    <nav>
      here
      <ul>
        {categoryBadgeListData.map((item) => (
          <MainCategoryItem categoryBadgeData={item} key={item.categoryId} />
        ))}
      </ul>
    </nav>
  )
}
