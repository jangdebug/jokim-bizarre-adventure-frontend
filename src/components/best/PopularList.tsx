import { BestItemType } from '@/types/BestTypes'
import PopularCard from './PopularCard'

interface PopularListProps {
  popularItemDatas: BestItemType[]
  gridCols: number
}

export default function PopularList({ popularItemDatas, gridCols }: PopularListProps) {
  return (
    <ul className={`grid grid-cols-${gridCols} gap-2`}>
      {popularItemDatas.map((item) => (
        <PopularCard key={item.productCode} item={item} />
      ))}
    </ul>
  )
}
