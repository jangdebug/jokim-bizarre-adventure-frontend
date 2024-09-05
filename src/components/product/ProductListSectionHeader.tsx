'use client'
import ViewTwoIcon from '../icons/product/ViewTwoIcon'
import SortIcon from '../icons/product/SortIcon'
import { useState } from 'react'
import ViewFourIcon from '../icons/product/ViewFourIcon'
import ViewOneIcon from '../icons/product/ViewOneIcon'
import { usePathname, useRouter } from 'next/navigation'

export default function ProductListSectionHeader({ currentViewMode = 0 }: { currentViewMode: number }) {
  const [viewMode, SetViewMode] = useState<number>(currentViewMode)
  const currentPath = usePathname()
  const router = useRouter()

  const handleViewModeChange = () => {
    SetViewMode((prev) => (prev + 1 > 2 ? 0 : prev + 1))
    // console.log(viewMode + 1 > 2 ? 0 : viewMode + 1)

    router.replace(`${currentPath}?type=${viewMode + 1 > 2 ? 0 : viewMode + 1}`)
  }

  return (
    <header className={`bg-white pl-[24px] pr-[16px] mt-[16px] flex items-center justify-between h-[56px] `}>
      <span className="header-font text-[22px] leading-[40px] font-[900] text-[#131922]">All Product</span>
      <ul className="flex gap-[4px] ">
        <li>
          <button>
            <SortIcon />
          </button>
        </li>
        <li>
          <button onClick={handleViewModeChange}>
            {viewMode == 0 ? (
              <ViewTwoIcon />
            ) : viewMode == 1 ? (
              <ViewFourIcon />
            ) : viewMode == 2 ? (
              <ViewOneIcon />
            ) : null}
          </button>
        </li>
      </ul>
    </header>
  )
}
