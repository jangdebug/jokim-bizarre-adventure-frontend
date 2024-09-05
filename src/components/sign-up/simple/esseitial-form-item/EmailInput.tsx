import InputWithClear from '@/components/dummy/InputWithClear'
import React, { useState } from 'react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { emailDomainData } from '@/datas/dummy/sign-up/signUpDatas'
import { useFormValidation } from '@/hooks/UseFormValidation'

export default function EmailInput() {
  const { values, isEmpty, errors, setValues, setErrors, handleChange, handleBlur } = useFormValidation()
  const [isEditable, setIsEditable] = useState(true)

  const emailDomains: emailDomainType[] = emailDomainData

  const handleEmailChange = (value: string) => {
    if (value === 'self') {
      setIsEditable(true)
      setValues((prev) => ({ ...prev, emailDomain: '' }))
      setErrors((prev) => ({ ...prev, emailDomain: false }))
    } else {
      setIsEditable(false)
      setValues((prev) => ({ ...prev, emailDomain: value }))
      setErrors((prev) => ({ ...prev, emailDomain: true }))
    }
  }
  const clearDomainInput = () => {
    setValues((prev) => ({ ...prev, emailDomain: '' }))
    setErrors((prev) => ({ ...prev, emailDomain: false }))
  }

  return (
    <>
      <div className="flex flex-row items-center gap-[8px]">
        <InputWithClear
          className="w-full"
          name="emailId"
          value={values.emailId}
          onChange={handleChange}
          onBlur={handleBlur}
          onClear={() => setValues((prev) => ({ ...prev, emailId: '' }))}
        />
        @
        <InputWithClear
          className="w-full"
          name="emailDomain"
          value={values.emailDomain}
          onChange={handleChange}
          onBlur={handleBlur}
          onClear={clearDomainInput}
          disabled={!isEditable}
        />
        <Select name="emailDomain" defaultValue="" onValueChange={handleEmailChange}>
          <SelectTrigger className="">
            <SelectValue placeholder="직접입력" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="self">직접입력</SelectItem>
            {emailDomains?.map((item, idx) => (
              <SelectItem key={idx} value={item.value}>
                {item.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <p
        className={`${isEmpty.emailId || isEmpty.emailDomain || values.emailId.length > 0 || values.emailDomain.length > 0 ? 'pb-[8px]' : 'invisible'} ${errors.emailId && errors.emailDomain && !errors.emailDuplicate ? 'text-[#d99c3c]' : 'text-[#db3c3c]'} text-[14px] leading-[20px]`}
      >
        {(isEmpty.emailId && isEmpty.emailDomain) || (values.emailId.length === 0 && values.emailDomain.length === 0)
          ? '아이디(이메일주소)를 입력해 주세요.'
          : !errors.emailId || !errors.emailDomain
            ? '아이디는 영문, 숫자로 된 이메일 주소만 가능합니다.'
            : errors.emailDuplicate
              ? '이메일 주소가 이미 존재합니다.'
              : '사용 가능한 아이디(이메일주소) 입니다.'}
      </p>
    </>
  )
}
