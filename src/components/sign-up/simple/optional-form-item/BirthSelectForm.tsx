import React, { useState } from 'react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

export default function BirthSelectForm() {
  const [year, setYear] = useState<number>(2010)
  const [month, setMonth] = useState<number>(1)
  const [day, setDay] = useState<number>(1)

  const isLeapYear = (year: number) => {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0
  }

  const generateYearItems = () => {
    const selectItems = []
    for (let y = 2010; y >= 1924; y--) {
      selectItems.push(
        <SelectItem key={y} value={`${y}`}>
          {y}
        </SelectItem>,
      )
    }
    return selectItems
  }

  const generateMonthItems = () => {
    return Array.from({ length: 12 }, (_, i) => (
      <SelectItem key={i + 1} value={`${i + 1}`}>
        {i + 1}
      </SelectItem>
    ))
  }

  const generateDayItems = () => {
    let daysInMonth
    if (month === 2) {
      daysInMonth = isLeapYear(year) ? 29 : 28
    } else {
      daysInMonth = new Date(year, month, 0).getDate()
    }
    return Array.from({ length: daysInMonth }, (_, i) => (
      <SelectItem key={i + 1} value={`${i + 1}`}>
        {i + 1}
      </SelectItem>
    ))
  }

  const handleYearChange = (value: string) => {
    setYear(Number(value))
  }
  const handleMonthChange = (value: string) => {
    setMonth(Number(value))
  }
  const handleDayChange = (value: string) => {
    setDay(Number(value))
  }

  return (
    <>
      <p className="mt-[33px] mb-[13px] text-[16px] leading-[22px] text-[#131922] font-bold">생년월일</p>

      <div className="w-full flex flex-row gap-[8px]">
        <Select name="year" defaultValue="" onValueChange={handleYearChange}>
          <SelectTrigger className="">
            <SelectValue placeholder="년도" />
          </SelectTrigger>
          <SelectContent>
            <>{generateYearItems()}</>
          </SelectContent>
        </Select>
        <Select name="month" defaultValue="" onValueChange={handleMonthChange}>
          <SelectTrigger className="">
            <SelectValue placeholder="월" />
          </SelectTrigger>
          <SelectContent>
            <>{generateMonthItems()}</>
          </SelectContent>
        </Select>
        <Select name="day" defaultValue="" onValueChange={handleDayChange}>
          <SelectTrigger className="">
            <SelectValue placeholder="일" />
          </SelectTrigger>
          <SelectContent>
            <>{generateDayItems()}</>
          </SelectContent>
        </Select>
      </div>
    </>
  )
}
