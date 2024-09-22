'use client'

import { bestFilterDatas } from '@/datas/dummy/best/BestFilterDatas'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import DownArrowGreyIcon from '../icons/review/DownArrowGreyIcon'
import UpArrowGreyIcon from '../icons/review/UpArrowGreyIcon'
import { Button } from '../ui/button'

export default function BestFilterMenu() {
  const pathName = usePathname()
  const query = useSearchParams()
  const router = useRouter()

  const [filterName, setFilterName] = useState<string>('')
  const [isOpen, sestIsOpen] = useState<boolean>(false)

  useEffect(() => {
    setFilterName(query.get('type') as string)
  }, [query])

  const handleButtonVariant = (type: string) => {
    // getBestItemCategoryAction(type);
    router.push(`${pathName}?type=${type}`)
  }

  const handleOpen = () => {
    sestIsOpen(!isOpen)
  }

  if (pathName === '/best/view') return null

  return (
    <section className="p-6 m-auto">
      <div className="flex justify-between">
        <ul className={`w-11/12 bg-white  z-9 flex gap-1 ${isOpen ? 'flex-wrap' : 'overflow-x-auto no-scrollbar'} `}>
          {bestFilterDatas.map((option) => (
            <li key={option.id} className="">
              <Button
                variant={filterName === option.type ? 'default' : 'outline'}
                className={`text-nowrap px-[12px] `}
                onClick={() => handleButtonVariant(option.type)}
              >
                {option.name}
              </Button>
            </li>
          ))}
        </ul>
        <div className="mt-3 flex justify-center" onClick={handleOpen}>
          {isOpen ? <UpArrowGreyIcon /> : <DownArrowGreyIcon />}
        </div>
      </div>
    </section>
  )
}
