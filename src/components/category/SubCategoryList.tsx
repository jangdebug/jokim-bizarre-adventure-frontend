import Link from 'next/link'
import RightArrowIcon from '../icons/sign-up/RightArrowIcon'
import DummySubCategoryBanner from './DummySubCategoryBanner'

const categoryDatas1: CategoryType[] = [
  { categoryId: 8, categoryName: '향수', depth: 2 },
  { categoryId: 9, categoryName: '스킨케어', depth: 2 },
  { categoryId: 10, categoryName: '메이크업', depth: 2 },
  { categoryId: 11, categoryName: '바디케어', depth: 2 },
  { categoryId: 18, categoryName: '헤어케어', depth: 2 },
  { categoryId: 12, categoryName: '맨즈케어', depth: 2 },
  { categoryId: 13, categoryName: '맘/베이비', depth: 2 },
  { categoryId: 14, categoryName: '홈 프래그런스', depth: 2 },
  { categoryId: 15, categoryName: '뷰티소품/기기', depth: 2 },
  { categoryId: 16, categoryName: '이너뷰티', depth: 2 },
  { categoryId: 17, categoryName: '라이프케어', depth: 2 },
]
const categoryDatas2: CategoryType[] = [
  { categoryId: 18, categoryName: '아우터', depth: 2 },
  { categoryId: 19, categoryName: '드레스/점프수트', depth: 2 },
  { categoryId: 20, categoryName: '블라우스/셔츠', depth: 2 },
  { categoryId: 21, categoryName: '티셔츠', depth: 2 },
  { categoryId: 22, categoryName: '맨두맨/후디', depth: 2 },
  { categoryId: 23, categoryName: '니트', depth: 2 },
  { categoryId: 24, categoryName: '스커트', depth: 2 },
  { categoryId: 25, categoryName: '팬츠', depth: 2 },
  { categoryId: 26, categoryName: '데님', depth: 2 },
  { categoryId: 27, categoryName: '수트/셋업', depth: 2 },
  { categoryId: 28, categoryName: '라운지/파자마', depth: 2 },
  { categoryId: 29, categoryName: '언더웨어', depth: 2 },
]

const getCategoryData = (idx: number) => {
  if (idx == 1) return categoryDatas1
  else if (idx == 2) return categoryDatas2
  else return null
}

export default function SubCategoryList({ mainCategoryId }: { mainCategoryId: number }) {
  const subCategoryData = getCategoryData(mainCategoryId)

  return (
    <>
      <ul className="h-full pb-[24px] col-span-5 overflow-auto border-l border-[#f0f0f0] no-scrollbar">
        <DummySubCategoryBanner />
        <Link href={`/product/main/all`}>
          <li className="flex justify-between items-center text-[14px] leading-[22px] text-[#000] p-[14px_20px_12px_24px]">
            전체
            <RightArrowIcon />
          </li>
        </Link>
        {subCategoryData?.map((item) => (
          <Link key={item.categoryId} href={`/product/main/sub${item.categoryId}`}>
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
