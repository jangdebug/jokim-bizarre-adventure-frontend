import React from 'react'
import { Input } from '../ui/input'
import { Checkbox } from '../ui/checkbox'
import Link from 'next/link'

export default function SignInField() {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.name, e.target.value)
  }

  return (
    <>
      <Input
        type="text"
        name="email"
        placeholder="아이디 (이메일주소)"
        onChange={handleChange}
      />
      <Input
        type="password"
        name="password"
        placeholder="비밀번호"
        onChange={handleChange}
      />
      <div className="flex flex-row justify-between items-center mt-[8px] text-[14px]">
        <div className="mr-2 flex gap-[8px] items-center">
          <Checkbox name="autoLogin" id="terms" value={'true'} />
          <label htmlFor="terms">자동로그인</label>
        </div>
        <Link href={'/'} className="underline  text-[#787878] ">
          ID/PW 찾기
        </Link>
      </div>
    </>
  )
}
