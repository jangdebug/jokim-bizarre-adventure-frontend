'use client'

import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { phoneType } from '@/types/MyPageTypes'
import React from 'react'

export default function DeleveryAdd({ phoneDatas }: { phoneDatas: phoneType[] }) {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    const { name, value } = e.target
  }

  return (
    <div className="w-11/12 m-auto mb-96">
      <ul>
        <li className="mb-2">
          <Input type="text" name="addressName" placeholder="배송지명" onChange={handleInputChange} />
        </li>
        <li className=" mb-2">
          <Input type="text" name="recipient" placeholder="받으시는 분" onChange={handleInputChange} />
        </li>
        <li className="flex justify-between">
          <div className="w-1/5">
            <Select name="dispCellNo" defaultValue={'010'}>
              <SelectTrigger>
                <SelectValue placeholder="선택" />
              </SelectTrigger>
              <SelectContent>
                {phoneDatas?.map((item) => (
                  <SelectItem key={item.id} value={item.dispCellNo}>
                    {item.dispCellNo}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="w-[78%]">
            <Input type="text" name="phone" onChange={handleInputChange} />
          </div>
        </li>
      </ul>
    </div>
  )
}
