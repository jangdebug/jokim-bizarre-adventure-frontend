import InputWithClear from '@/components/dummy/InputWithClear'
import { Button } from '@/components/ui/button'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { phoneHeaderData } from '@/datas/dummy/sign-up/SignUpDatas'
import React from 'react'
import { useFormValidation } from '@/hooks/UseFormValidation'

export default function PhoneInput() {
  const { values, setValues, handleChange } = useFormValidation()

  const phoneHeaders: phoneHeaderType[] = phoneHeaderData
  const handlePhoneHeaderChange = (value: string) => {
    setValues((prev) => ({ ...prev, phoneHeader: value }))
  }

  return (
    <div className="flex flex-row gap-[8px]">
      <div className="w-[25%]">
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
        className="w-[50%]"
        type="number"
        name="phoneBody"
        placeholder="휴대폰번호"
        value={values.phoneBody}
        onChange={handleChange}
        onClear={() => setValues((prev) => ({ ...prev, phoneBody: '' }))}
      />

      <Button size={'auth'} className="w-[25%]">
        인증하기
      </Button>
    </div>
  )
}
