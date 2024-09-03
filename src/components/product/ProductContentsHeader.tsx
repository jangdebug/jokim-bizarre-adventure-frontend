import FilterIcon from '../icons/product/FilterIcon'
import SortIcon from '../icons/product/SortIcon'

export default function ProductContentsHeader() {
  return (
    <header className={`bg-white pl-[24px] pr-[16px] mt-[16px] flex items-center justify-between h-[56px] `}>
      <span className="header-font text-[22px] leading-[40px] font-[900] text-[#131922]">All Product</span>
      <ul className="flex gap-[4px]">
        <li>
          <button>
            <SortIcon />
          </button>
        </li>
        <li>
          <button>
            <FilterIcon />
          </button>
        </li>
      </ul>
    </header>
  )
}
