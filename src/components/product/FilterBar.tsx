'use client'
import { useScrollEvent } from '@/hooks/UseScrollEvent'
import { Button } from '../ui/button'

interface SortOptinoType {
  id: number
  type: string
  name: string
}

const sortOptionsData: SortOptinoType[] = [
  { id: 1, type: 'event', name: '할인/혜택' },
  { id: 2, type: 'price', name: '가격' },
  { id: 3, type: 'season', name: '시즌' },
  { id: 4, type: 'color', name: '색상' },
  { id: 5, type: 'size', name: '사이즈' },
  { id: 6, type: 'brand', name: '브랜드' },
  { id: 7, type: 'material', name: '소재' },
  { id: 8, type: 'length', name: '길이' },
  { id: 9, type: 'fit', name: '핏' },
]

export default function FilterBar() {
  const isVisible = useScrollEvent()
  const sortOptions: SortOptinoType[] = sortOptionsData

  return (
    <ul
      className={`bg-white sticky ${isVisible ? 'top-[96px]' : 'top-[49px]'} z-30 flex py-[16px] px-[24px] gap-[9px] overflow-x-auto no-scrollbar border-b border-[#f0f0f0]`}
    >
      {sortOptions.map((option) => (
        <li key={option.id} className="">
          <Button variant={'outline'} className="hover:bg-[#fff] font-[0] w-max px-[12px]">
            {option.name}
          </Button>
        </li>
      ))}
    </ul>
  )
}
