import Link from 'next/link'
import RightArrowIcon from '../icons/sign-up/RightArrowIcon'
import DummySubCategoryBanner from './DummySubCategoryBanner'
import { getChildCategory } from '@/actions/category/getCategoryData'

export default async function SubCategoryList({ parentCategory }: { parentCategory: CategoryType | undefined }) {
  const subCategory: CategoryType[] = await getChildCategory(parentCategory)

  return (
    <>
      <ul className="h-full pb-[24px] col-span-5 overflow-auto border-l border-[#f0f0f0] no-scrollbar">
        <DummySubCategoryBanner />
        <Link href={`/product/${parentCategory?.categoryName}`}>
          <li className="flex justify-between items-center text-[14px] leading-[22px] text-[#000] p-[14px_20px_12px_24px]">
            전체
            <RightArrowIcon />
          </li>
        </Link>

        {subCategory?.map((item) => (
          <Link key={item.categoryCode} href={`/product/${parentCategory?.categoryName}/${item.categoryName}`}>
            <li className="flex justify-between items-center text-[14px] leading-[22px] text-[#000] p-[14px_20px_12px_24px]">
              {item.categoryName}
              <RightArrowIcon />
            </li>
          </Link>
        ))}
      </ul>
    </>
  )
}
