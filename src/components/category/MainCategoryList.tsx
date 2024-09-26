import Link from 'next/link'

export default function MainCategoryList({
  selectedId,
  categoryData,
}: {
  selectedId: string
  categoryData: CategoryType[] | undefined
}) {
  return (
    <ul className="h-full pb-[16px] col-span-2 overflow-auto no-scrollbar">
      {categoryData?.map((item) => (
        <Link key={item.categoryCode} href={`/category?main=${item.categoryName}`}>
          <li
            className={`p-[14px_12px_12px_24px] text-[14px] leading-[22px] ${selectedId == item.categoryName ? 'font-bold text-[#fff] bg-[#131922]' : 'text-[#a0a0a0] bg-[#fff]'}`}
          >
            {item.categoryName}
          </li>
        </Link>
      ))}
    </ul>
  )
}
