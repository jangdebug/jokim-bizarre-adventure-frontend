'use client'

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import SizeFormItem from '../myBeautySize/SizeFormItem'
import { useState } from 'react'

interface rangeProps {
  handleRange: (value: string) => void
}

export default function DateRange({ handleRange }: rangeProps) {
  return (
    <section className="flex justify-end items-center">
      <SizeFormItem label="">
        <Select name="Range" defaultValue={'1'} onValueChange={handleRange}>
          <SelectTrigger className="w-20 border-0">
            <SelectValue placeholder="선택" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="1">1개월</SelectItem>
            <SelectItem value="3">3개월</SelectItem>
            <SelectItem value="6">6개월</SelectItem>
          </SelectContent>
        </Select>
      </SizeFormItem>
    </section>
  )
}
