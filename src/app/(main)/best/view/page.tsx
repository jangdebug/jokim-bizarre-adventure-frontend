import { getBestItemAction, getBestViewItemAction } from '@/actions/best/getBestItemData'
import ViewList from '@/components/best/ViewList'
import { BestItemType } from '@/types/BestTypes'

export default async function BestViewPage() {
  const popularItemDatas: BestItemType[] = await getBestViewItemAction()

  return (
    <main>
      <section className="my-[48px]">
        <nav className="pt-[8px] pb-[28px] px-[24px]">
          <p className="text-2xl font-bold">사람들이 많이 본 인기상품</p>
        </nav>

        <div className="pt-[8px] pb-[28px] px-[24px]">
          <ViewList viewItemDatas={popularItemDatas} />
        </div>
      </section>
    </main>
  )
}
