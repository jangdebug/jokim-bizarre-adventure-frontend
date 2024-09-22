import { BestItemType } from '@/types/BestTypes'
import PopularList from './PopularList'

interface popularListProps {
  popularItemDatas: BestItemType[]
}

export default function PopularPage({ popularItemDatas }: popularListProps) {
  return (
    <main className="px-6 mb-10">
      {/* 첫 두 개의 제품 리스트 */}
      <PopularList popularItemDatas={popularItemDatas.slice(0, 2)} gridCols={2} />

      {/* 나머지 제품 리스트 */}
      <PopularList popularItemDatas={popularItemDatas.slice(2)} gridCols={3} />
    </main>
  )
}
