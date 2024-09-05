'use client'

import { Input } from '@/components/ui/input'
import React, { useState } from 'react'

interface mySizeProps {
  mySizeData: number | undefined
  optionType?: string | undefined
}

export default function MySizeInput({ mySizeData, optionType }: mySizeProps) {
  const [isValue, setIsValue] = useState<number | undefined>(mySizeData)

  return (
    <div className="w-2/3 flex items-center border border-[#e0e0e0]">
      <Input defaultValue={isValue !== undefined ? mySizeData : ''} />
      <div className="w-[4.25rem] text-center">{optionType}</div>
    </div>
  )
}
