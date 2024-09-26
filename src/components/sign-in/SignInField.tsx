'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import CheckboxWithSvg from '../dummy/CheckboxWithSvg'
import InputWithClear from '../dummy/InputWithClear'

export default function SignInField() {
  const [signInValues, setSignInValues] = useState<{
    email: string
    password: string
    isAutoLogin: boolean
  }>({
    email: '',
    password: '',
    isAutoLogin: false,
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, checked } = e.target

    switch (name) {
      case 'email':
        setSignInValues((prev) => ({ ...prev, [name]: value }))
        break
      case 'password':
        setSignInValues((prev) => ({ ...prev, [name]: value }))
        break
      case 'isAutoLogin':
        setSignInValues((prev) => ({ ...prev, [name]: checked }))
        break

      default:
        break
    }
  }

  return (
    <>
      <InputWithClear
        name="email"
        type="text"
        value={signInValues.email}
        onChange={handleChange}
        onClear={() => setSignInValues((prev) => ({ ...prev, email: '' }))}
        placeholder="아이디 (이메일주소)"
      />
      <InputWithClear
        name="password"
        type="password"
        value={signInValues.password}
        onChange={handleChange}
        onClear={() => setSignInValues((prev) => ({ ...prev, password: '' }))}
        placeholder="비밀번호"
      />
      <div className="flex flex-row justify-between items-center mt-[8px] text-[14px]">
        <label className="">
          <div className="flex items-center gap-[8px]">
            <CheckboxWithSvg name="isAutoLogin" value={'true'} onChange={handleChange} />
            <span>자동로그인</span>
          </div>
        </label>

        <Link href={'/sign-in/find-account'} className="underline  text-[#787878] ">
          ID/PW 찾기
        </Link>
      </div>
    </>
  )
}
