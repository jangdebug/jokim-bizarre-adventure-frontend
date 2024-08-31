'use client'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { emailDomainData, phoneHeaderData } from '@/datas/dummy/sign-up/SignUpDatas'
import React, { useState } from 'react'

export default function EssentialSignUpField() {
  const [emailDomain, setEmailDomain] = useState<string>('')
  const [isEditable, setIsEditable] = useState<boolean>(true)
  const [isError, setIsError] = useState<{
    emailId: boolean
    emailDomain: boolean
    password: boolean
    confirmPassword: boolean
    name: boolean
  }>({
    emailId: false,
    emailDomain: false,
    password: false,
    confirmPassword: false,
    name: false,
  })

  const phoneHeaders: phoneHeaderType[] = phoneHeaderData
  const emailDomains: emailDomainType[] = emailDomainData

  const handleBlur = (e: React.ChangeEvent<HTMLInputElement>) => {
    switch (e.target.name) {
      case 'emailId':
        console.log(e.target.name, e.target.value)
        break
      case 'emailDomain':
        console.log(e.target.name, e.target.value)
        break
      case 'password':
        console.log(e.target.name, e.target.value)
        break
      case 'confirmPassword':
        console.log(e.target.name, e.target.value)
        break
      case 'name':
        console.log(e.target.name, e.target.value)

        break
      default:
        break
    }

    setIsError((prev) => ({
      ...prev,
      [e.target.name]: true,
    }))
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.name, e.target.value)
  }
  const handleEmailDomain = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmailDomain(e.target.value)
  }

  const handleSelectChange = (value: string | number) => {
    if (typeof value === 'number') {
    } else if (typeof value === 'string') {
      if (value === 'write') {
        setIsEditable(true)
        setEmailDomain('')
      } else {
        setIsEditable(false)
        setEmailDomain(value)
      }
    }
  }

  return (
    <div className="pt-[22px] py-[40px] ">
      <p className="text-[18px] leading-[22px] text-[#131922] font-bold">필수항목</p>
      <div className="mt-[20px] flex flex-col ">
        <div>
          <div className="flex flex-row items-center gap-[8px]">
            <Input type="text" name="emailId" onChange={handleChange} onBlur={handleBlur} />@
            <Input
              type="text"
              name="emailDomain"
              onChange={handleEmailDomain}
              value={emailDomain}
              disabled={!isEditable}
              onBlur={handleBlur}
            />
            <Select name="emailDomain" defaultValue="write" onValueChange={handleSelectChange}>
              <SelectTrigger className="">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="write">직접입력</SelectItem>
                {emailDomains.map((item, idx) => (
                  <SelectItem key={idx} value={item.value}>
                    {item.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <p className={`${isError.emailId ? 'pb-[8px]' : 'invisible'}  text-[#db3c3c] text-[14px] leading-[20px]`}>
            아이디(이메일주소)를 입력해 주세요.
          </p>
        </div>

        <div>
          <Input type="password" name="password" placeholder="비밀번호" onChange={handleChange} onBlur={handleBlur} />
          <p className="mt-[8px] text-[#787878] text-[14px] leading-[20px]">숫자, 영문 포함 10자 이상</p>
          <p className={`${isError.password ? 'pb-[8px]' : 'invisible'}   text-[#db3c3c] text-[14px] leading-[20px]`}>
            비밀번호를 입력해 주세요.
          </p>
        </div>

        <div>
          <Input
            type="password"
            name="confirmPassword"
            placeholder="비밀번호확인"
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <p className="mt-[8px] text-[#787878] text-[14px] leading-[20px]">숫자, 영문 포함 10자 이상</p>
          <p
            className={`${isError.confirmPassword ? 'pb-[8px]' : 'invisible'} text-[#db3c3c] text-[14px] leading-[20px]`}
          >
            비밀번호가 일치하지 않습니다. 다시 입력해주세요.
          </p>
        </div>

        <div>
          <Input name="name" placeholder="이름" onChange={handleChange} onBlur={handleBlur} />
          <p className={`${isError.name ? 'pb-[8px]' : 'invisible'}  text-[#db3c3c] text-[14px] leading-[20px]`}>
            이름을 입력해 주세요.
          </p>
        </div>

        <div className="flex flex-row gap-[8px]">
          <div className="w-[20%]">
            <Select name="phoneHeader" defaultValue="010" onValueChange={handleSelectChange}>
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
          <Input className="w-[55%]" type="number" onChange={handleChange} name="phoneBody" placeholder="휴대폰번호" />
          <Button size={'auth'} className="w-[25%]">
            인증하기
          </Button>
        </div>
      </div>
      <div className="flex flex-row items-center gap-[8px] mt-[16px]">
        <Checkbox name="overFourTeen" id="rights" value={'true'} />
        <label htmlFor="rights" className="text-[14px] text-[#404040] leading-[20px] font-[500]">
          만 14세 이상입니다.(필수)
        </label>
      </div>
    </div>
  )
}
