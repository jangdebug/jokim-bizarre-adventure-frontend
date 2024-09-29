import { BestItemType } from '@/types/BestTypes'
import FadeBestItem from './FadeBestItem'

export default async function FadeBestList({ bestItems }: { bestItems: BestItemType[] }) {
  return (
    <section className="p-6 m-auto">
      <div>
        <p className="text-2xl pb-[23px] font-sans font-bold">Today Best</p>
      </div>
      <div className="flex justify-between">
        <ul className="w-full bg-white flex gap-4 overflow-x-auto no-scrollbar scrollbar-hide">
          {bestItems.map((item) => (
            <li key={item.productCode} className="flex-shrink-0 w-3/4 h-[400px] overflow-hidden">
              <FadeBestItem item={item} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
