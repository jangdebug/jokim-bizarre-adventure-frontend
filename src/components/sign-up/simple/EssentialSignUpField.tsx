'use client'
import { useState } from 'react'
import { emailDomainData, phoneHeaderData } from '@/datas/dummy/sign-up/SignUpDatas'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Checkbox } from '@/components/ui/checkbox'
import { Button } from '@/components/ui/button'
import InputWithClear from '@/components/dummy/InputWithClear'
import { useFormValidation } from './hooks/UseFormValidation'

export default function EssentialSignUpField() {
  const { values, errors, isEmpty, setValues, setErrors, handleChange, handleBlur } = useFormValidation()
  const [isEditable, setIsEditable] = useState(true)

  const phoneHeaders: phoneHeaderType[] = phoneHeaderData
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
  const handlePhoneHeaderChange = (value: string) => {
    setValues((prev) => ({ ...prev, phoneHeader: value }))
  }

  const clearDomainInput = () => {
    setValues((prev) => ({ ...prev, emailDomain: '' }))
    setErrors((prev) => ({ ...prev, emailDomain: false }))
  }
  const clearInput = (name: string) => {
    setValues((prev) => ({ ...prev, [name]: '' }))
  }

  return (
    <div className="pt-[22px] py-[40px]">
      <p className="text-[18px] leading-[22px] text-[#131922] font-bold">필수항목</p>
      <div className="mt-[20px] flex flex-col">
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
              {emailDomains.map((item, idx) => (
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

        <div>
          <InputWithClear
            name="password"
            type="password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            onClear={() => setValues((prev) => ({ ...prev, password: '' }))}
            placeholder="비밀번호"
          />
          <p className="mt-[8px] text-[#787878] text-[14px] leading-[20px]">숫자, 영문 포함 10자 이상</p>
          <p
            className={`${isEmpty.password || values.password.length > 0 ? 'pb-[8px]' : 'invisible'} ${errors.password ? 'text-[#d99c3c]' : 'text-[#db3c3c]'} text-[14px] leading-[20px]`}
          >
            {isEmpty.password || values.password.length <= 0
              ? '비밀번호를 입력해 주세요.'
              : errors.password
                ? '사용 가능한 비밀번호 입니다.'
                : '비밀번호는 10자 이상으로, 영문대소문자, 숫자 중 2가지 이상 조합으로 공백없이 설정해 주세요.'}
          </p>
        </div>

        <div>
          <InputWithClear
            name="confirmPassword"
            type="password"
            value={values.confirmPassword}
            onChange={handleChange}
            onBlur={handleBlur}
            onClear={() => setValues((prev) => ({ ...prev, confirmPassword: '' }))}
            placeholder="비밀번호 확인"
          />
          <p className="mt-[8px] text-[#787878] text-[14px] leading-[20px]">숫자, 영문 포함 10자 이상</p>
          <p
            className={`${isEmpty.confirmPassword || values.confirmPassword.length > 0 ? 'pb-[8px]' : 'invisible'} ${errors.confirmPassword ? 'text-[#d99c3c]' : 'text-[#db3c3c]'} text-[14px] leading-[20px]`}
          >
            {errors.confirmPassword ? '비밀번호가 일치합니다.' : '비밀번호가 일치하지 않습니다. 다시 입력해주세요.'}
          </p>
        </div>

        <div>
          <InputWithClear
            name="name"
            type="text"
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
            onClear={() => setValues((prev) => ({ ...prev, name: '' }))}
            placeholder="이름"
          />
          <p
            className={`${isEmpty.name ? 'pb-[16px]' : 'invisible pb-[16px]'} text-[#db3c3c] text-[14px] leading-[20px]`}
          >
            {errors.name ? '' : '이름을 입력해 주세요.'}
          </p>
        </div>

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
