import { getBestItemAction } from '@/actions/best/getBestItemData'
import PopularPage from '@/components/best/PopularPage'
import { BestItemType } from '@/types/BestTypes'

export default async function Page() {
  const popularItemDatas: BestItemType[] = await getBestItemAction()

  return <PopularPage popularItemDatas={popularItemDatas} />
}
