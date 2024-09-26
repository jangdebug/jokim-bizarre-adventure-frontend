'use client'
import React, { useState } from 'react'
import InputWithClear from '../dummy/InputWithClear'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { phoneHeaderData } from '@/datas/dummy/sign-up/SignUpElementDatas'

export default function FindAccountForm({ findType }: { findType: string }) {
  const [values, setValues] = useState<{
    name?: string
    email?: string
    phoneHeader: string
    phoneBody: string
  }>({
    name: '',
    email: '',
    phoneHeader: '',
    phoneBody: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target

    switch (name) {
      case 'name':
        setValues((prev) => ({ ...prev, [name]: value }))
        break
      case 'email':
        setValues((prev) => ({ ...prev, [name]: value }))
        break
      case 'phoneHeader':
        setValues((prev) => ({ ...prev, [name]: value }))
        break
      case 'phoneBody':
        setValues((prev) => ({ ...prev, [name]: value }))
        break

      default:
        break
    }
  }

  const phoneHeaders: phoneHeaderType[] = phoneHeaderData
  const handlePhoneHeaderChange = (value: string) => {
    setValues((prev) => ({ ...prev, phoneHeader: value }))
  }

  return (
    <div className="flex flex-col gap-[8px]">
      <InputWithClear
        name={`${findType === 'id' ? 'name' : 'email'}`}
        type="text"
        value={`${findType === 'id' ? values.name : values.email}`}
        onChange={handleChange}
        onClear={() => setValues((prev) => ({ ...prev, name: '' }))}
        placeholder={`${findType === 'id' ? '이름' : '아이디 (이메일주소)'}`}
      />

      <div className="flex gap-[8px]">
        <div className="w-[35%]">
          <Select name="phoneHeader" defaultValue="010" onValueChange={handlePhoneHeaderChange}>
            <SelectTrigger className="">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {phoneHeaders.map((item, idx) => (
                <SelectItem key={idx} value={item.value}>
                  {item.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <InputWithClear
          className="w-full"
          name="phoneBody"
          type="number"
          value={values.phoneBody}
          onChange={handleChange}
          onClear={() => setValues((prev) => ({ ...prev, phoneBody: '' }))}
        />
      </div>
    </div>
  )
}
