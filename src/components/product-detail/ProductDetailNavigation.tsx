'use client'
import { useState } from 'react'
import { useScrollEvent } from '@/hooks/UseScrollEvent'
import Link from 'next/link'

export default function ProductDetailNavigation({ reviewCount }: { reviewCount: number }) {
  const [activeTab, setActiveTab] = useState<'info' | 'review'>('info')
  const isVisible = useScrollEvent()

  const handleClick = (tab: 'info' | 'review') => {
    setActiveTab(() => tab)
  }

  return (
    <nav
      className={`sticky ${isVisible ? 'top-[48px]' : 'top-0'} mb-[24px] z-10 bg-white flex border-b border-[#e0e0e0]`}
    >
      <Link
        href={'#info'}
        replace
        className={`w-full flex items-start justify-center pt-[12px] ${activeTab === 'info' ? 'border-b-2 border-[#141a23] font-[500] text-[#141a23]' : 'text-[#787878]'}`}
        onClick={() => handleClick('info')}
      >
        <p className="text-[14px] tracking-[-0.09px] leading-[24px]">상품정보</p>
      </Link>
      <Link
        href={'#review'}
        replace
        className={`w-full flex items-start justify-center pt-[12px] ${activeTab === 'review' ? 'border-b-2 border-[#141a23] font-[500] text-[#141a23]' : 'text-[#787878]'}`}
        onClick={() => handleClick('review')}
      >
        <p className="flex flex-col items-center">
          <span className="text-[14px] tracking-[-0.09px] leading-[24px]">리뷰</span>
          <span className="text-[10px] tracking-[-0.06px] leading-[18px]">{reviewCount}</span>
        </p>
      </Link>
    </nav>
  )
}
