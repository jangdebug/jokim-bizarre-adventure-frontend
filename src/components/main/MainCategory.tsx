import MainCategoryItem from './MainCategoryItem'
import { getParentCategories } from '@/actions/category/getCategoryData'

export default async function MainCategory() {
  const categoryDatas: CategoryType[] = await getParentCategories()
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
