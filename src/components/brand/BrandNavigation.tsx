'use client'
import { useScrollEvent } from '@/hooks/UseScrollEvent'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function BrandNavigation() {
  const isUpScroll = useScrollEvent()

  const currentPath = usePathname()
  const pathSegments = currentPath.split('/')
  const lastSegment = pathSegments[pathSegments.length - 1]

  return (
    <nav
      className={`sticky ${isUpScroll ? 'top-[56px]' : 'top-0'} mb-[24px] z-10 bg-white flex border-b border-[#e0e0e0] h-[48px]`}
    >
      <Link
        href={'/brand'}
        className={`w-full flex items-center justify-center text-[16px] tracking-[-0.1px]
            ${lastSegment === 'brand' ? 'border-b-2 border-[#141a23] font-[500] text-[#141a23]' : 'text-[#929292]'}
            `}
      >
        A-Z
      </Link>
      <Link
        href={'/brand/favorite'}
        className={`w-full flex items-center justify-center text-[16px] tracking-[-0.1px]
            ${lastSegment === 'brand' ? 'text-[#929292]' : 'border-b-2 border-[#141a23] font-[500] text-[#141a23]'}
        `}
      >
        My Favorite
      </Link>
    </nav>
  )
}
