'use client'
import ViewTwoIcon from '../icons/product/ViewTwoIcon'
import SortIcon from '../icons/product/SortIcon'
import ViewFourIcon from '../icons/product/ViewFourIcon'
import ViewOneIcon from '../icons/product/ViewOneIcon'

export default function ProductListSectionHeader({
  currentViewMode = 0,
  handleViewMode,
}: {
  currentViewMode: number
  handleViewMode: () => void
}) {
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
          <button onClick={handleViewMode}>
            {currentViewMode == 0 ? (
              <ViewTwoIcon />
            ) : currentViewMode == 1 ? (
              <ViewFourIcon />
            ) : currentViewMode == 2 ? (
              <ViewOneIcon />
            ) : null}
          </button>
        </li>
      </ul>
    </header>
  )
}
