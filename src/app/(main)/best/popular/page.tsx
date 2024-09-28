import { getBestItemAction } from '@/actions/best/getBestItemData'
import PopularList from '@/components/best/PopularList'
import { BestItemType } from '@/types/BestTypes'

export default async function Page({ searchParams }: { searchParams: { type: string } }) {
  const popularItemDatas: BestItemType[] = await getBestItemAction(searchParams.type)

  return (
    <>
      <main className="px-6 mb-10">
        {/* 첫 두 개의 제품 리스트 */}
        <PopularList popularItemDatas={popularItemDatas.slice(0, 2)} gridCols={2} />

        {/* 나머지 제품 리스트 */}
        <PopularList popularItemDatas={popularItemDatas.slice(2)} gridCols={3} />
      </main>
    </>
  )
}
