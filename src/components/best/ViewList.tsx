import { BestItemType } from '@/types/BestTypes'
import ViewCard from './ViewCard'

interface ViewList {
  viewItemDatas: BestItemType[]
}

export default function ViewList({ viewItemDatas }: ViewList) {
  return (
    <ul className={`grid grid-cols-2 gap-2`}>
      {viewItemDatas.map((item) => (
        <ViewCard key={item.productCode} item={item} />
      ))}
    </ul>
  )
}
