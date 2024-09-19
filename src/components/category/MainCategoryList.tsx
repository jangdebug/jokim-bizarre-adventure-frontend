import Link from 'next/link'

export default function MainCategoryList({
  selectedId,
  categoryData,
}: {
  selectedId: number
  categoryData: CategoryType[]
}) {
  console.log('selected', selectedId, categoryData)

  return (
    <ul className="h-full pb-[16px] col-span-2 overflow-auto no-scrollbar">
      {categoryData?.map((item) => (
        <Link key={item.categoryId} href={`/category?main=${item.categoryId}`}>
          <li
            className={`p-[14px_12px_12px_24px] text-[14px] leading-[22px] ${selectedId === item.categoryId ? 'font-bold text-[#fff] bg-[#131922]' : 'text-[#a0a0a0] bg-[#fff]'}`}
          >
            {item.categoryName}
          </li>
        </Link>
      ))}
    </ul>
  )
}
