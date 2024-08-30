'use client'
import { Checkbox } from '@/components/ui/checkbox'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import React, { useState } from 'react'

export default function EssentialSignUpField() {
  const [emailDomain, setEmailDomain] = useState<string>('')
  const [phoneHeader, setPhoneHeader] = useState<number>()
  const [isEditable, setIsEditable] = useState<boolean>(true)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.name, e.target.value)
    if (e.target.name === 'emailDomain' && isEditable) {
      setEmailDomain(e.target.value)
    }
  }
  const handleEmailDomain = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.name, e.target.value)
    setEmailDomain(e.target.value)
  }

  const handleSelectChange = (value: string | number) => {
    if (typeof value === 'number') {
      console.log(value)
      setPhoneHeader(value)
    } else if (typeof value === 'string') {
      if (value === 'write') {
        setIsEditable(true)
        setEmailDomain('')
      } else {
        setIsEditable(false)
        console.log(value)
        setEmailDomain(value)
      }
    }
  }

  return (
    <div className="pt-[22px] py-[40px] ">
      <p className="text-[18px] leading-[22px] text-[#131922] font-bold">
        필수항목
      </p>
      <div>
        <div className="flex flex-row">
          <Input type="text" name="emailId" onChange={handleChange} />@
          <Input
            type="text"
            name="emailDomain"
            onChange={handleEmailDomain}
            value={emailDomain}
            disabled={!isEditable}
          />
          <Select
            name="emailDomain"
            defaultValue="write"
            onValueChange={handleSelectChange}
          >
            <SelectTrigger className="">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="write">직접입력</SelectItem>
              <SelectItem value="naver.com">naver.com</SelectItem>
              <SelectItem value="gmail.com">gmail.com</SelectItem>
              <SelectItem value="daum.net">daum.net</SelectItem>
              <SelectItem value="nate.com">nate.com</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <Input
            type="password"
            name="password"
            placeholder="비밀번호"
            onChange={handleChange}
          />
          <Input
            type="password"
            name="passwordConfirm"
            placeholder="비밀번호확인"
            onChange={handleChange}
          />
        </div>
        <div>
          <Input name="name" placeholder="이름" onChange={handleChange} />
        </div>
        <div>
          <Select
            name="phoneHeader"
            defaultValue="010"
            onValueChange={handleSelectChange}
          >
            <SelectTrigger className="">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="010">010</SelectItem>
              <SelectItem value="016">016</SelectItem>
              <SelectItem value="017">017</SelectItem>
              <SelectItem value="018">018</SelectItem>
              <SelectItem value="019">019</SelectItem>
            </SelectContent>
          </Select>
          <Input
            type="number"
            onChange={handleChange}
            name="phoneBody"
            placeholder="휴대폰번호"
          />
        </div>
      </div>
      <Checkbox name="overFourTeen" id="rights" value={'true'} />
      <label htmlFor="rights">만 14세 이상입니다.(필수)</label>
    </div>
  )
}
