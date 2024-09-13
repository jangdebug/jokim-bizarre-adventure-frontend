'use client'

import { usePathname, useRouter, useSearchParams } from 'next/navigation'

import React, { useCallback, useState } from 'react'

interface EventDetailTabProps {
  idx: number
  tabName: string
}

export default function EventDetailTab({ idx, tabName }: EventDetailTabProps) {
  const [selectedTab, setSelectedTab] = useState<string>(tabName)

  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const search = searchParams.get('type')

  console.log(search)

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString())
      params.set(name, value)

      return params.toString()
    },
    [searchParams],
  )

  return (
    <li
      onClick={() => {
        // <pathname>?sort=asc
        router.push(pathname + '?' + createQueryString('type', '2'))
      }}
      className={`p-4 border-b border-[#e0e0e0] cursor-pointer hover:bg-gray-100 ${idx % 2 !== 0 ? '' : 'border-r'}`}
    >
      {selectedTab}
    </li>
  )
}
