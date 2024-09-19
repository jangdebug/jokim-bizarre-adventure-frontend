import CategoryBadgeList from '@/components/category/CategoryBadgeList'
import MainCategoryList from '@/components/category/MainCategoryList'
import SubCategoryList from '@/components/category/SubCategoryList'

const categoryDatas: CategoryType[] = [
  { categoryId: 1, categoryName: '뷰티', depth: 1 },
  { categoryId: 2, categoryName: '여성의류', depth: 1 },
  { categoryId: 3, categoryName: '남성의류', depth: 1 },
  { categoryId: 4, categoryName: '백', depth: 1 },
  { categoryId: 5, categoryName: '슈즈', depth: 1 },
  { categoryId: 6, categoryName: '액세서리', depth: 1 },
  { categoryId: 7, categoryName: '스포츠/레저', depth: 1 },
]

export default function Category({ searchParams }: { searchParams: { main: number } }) {
  console.log('category searchParams', searchParams)

  return (
    <main>
      <CategoryBadgeList />
      <section className="h-category grid grid-cols-7 mb-[56px]">
        <MainCategoryList selectedId={Number(searchParams.main)} categoryData={categoryDatas} />
        <SubCategoryList mainCategoryId={Number(searchParams.main)} />
      </section>
    </main>
  )
}
