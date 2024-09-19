'use client'

import { useState } from 'react'
import ClearIcon from '../icons/brand/ClearIcon'
import SearchIcon from '../icons/brand/SearchIcon'

export default function BrandSearchBar() {
  const [value, setValue] = useState<string>('')
  const handleChagnge = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue((prev) => e.target.value)
  }

  const handleClear = () => {
    setValue('')
  }

  return (
    <section className="mx-[24px] mb-[10px]">
      <div className="flex gap-[8px] border-b border-[#141a23] items-center ">
        <div className="w-[20px]">
          <SearchIcon />
        </div>
        <input
          className="w-full focus-visible:outline-none py-[12px] text-[16px] leading-[22px] border-none"
          type="text"
          name=""
          value={value}
          onChange={handleChagnge}
          placeholder="브랜드명 검색"
        />
        {value && (
          <button type="button" onClick={handleClear}>
            <ClearIcon />
          </button>
        )}
      </div>
    </section>
  )
}
