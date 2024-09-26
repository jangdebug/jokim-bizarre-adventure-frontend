import { getParentCategories } from '@/actions/category/getCategoryData'
import CategoryBadgeList from '@/components/category/CategoryBadgeList'
import MainCategoryList from '@/components/category/MainCategoryList'
import SubCategoryList from '@/components/category/SubCategoryList'

export default async function Category({ searchParams }: { searchParams: { main: string } }) {
  const categoryData: CategoryType[] | undefined = await getParentCategories()
  const parentCategory = categoryData?.find((item) => item.categoryName === searchParams.main)

  return (
    <main>
      <CategoryBadgeList />
      <section className="h-category grid grid-cols-7 mb-[56px]">
        <MainCategoryList selectedId={searchParams.main} categoryData={categoryData} />
        <SubCategoryList parentCategory={parentCategory} />
      </section>
    </main>
  )
}
