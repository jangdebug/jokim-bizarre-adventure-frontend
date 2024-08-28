import React from 'react'
import { Input } from '../ui/input'

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
    </>
  )
}
