import { categoryBadgeType } from '@/types/InitialDataTypes'
import MainCategoryItem from './MainCategoryItem'
import { getParentCategories } from '@/actions/category/getCategoryData'
// import { getCategoryBadgeData } from '@/actions/main/getCategoryBadgeData'

export default async function MainCategory() {
  const categoryDatas: CategoryType[] = await getParentCategories()
  // const categoryBadgeResData: categoryBadgeType[] = await getCategoryBadgeData()

  console.log(categoryDatas)

  return (
    <section className="w-11/12 mx-auto my-5 object-contain">
      <ul className="grid grid-cols-5 gap-3">
        {categoryDatas.map((item) => (
          <MainCategoryItem key={item.categoryCode} categoryData={item} />
        ))}
      </ul>
    </section>
  )
}
