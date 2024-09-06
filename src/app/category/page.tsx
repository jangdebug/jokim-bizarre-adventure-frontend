import CategoryBadgeList from '@/components/category/CategoryBadgeList'
import MainCategoryList from '@/components/category/MainCategoryList'
import SubCategoryList from '@/components/category/SubCategoryList'

export default function Category() {
  return (
    <>
      <CategoryBadgeList />
      <section className="w-full h-full flex flex-row">
        <MainCategoryList />
        <SubCategoryList />
      </section>
    </>
  )
}
