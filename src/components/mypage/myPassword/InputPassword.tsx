import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import React from 'react'

interface InputProps {
  handlePassword: (formData: FormData) => void
}

export default function InputPassword({ handlePassword }: InputProps) {
  return (
    <section className="p-[24px]">
      <form action={handlePassword}>
        <div className="w-full text-base text-gray-500 flex flex-col gap-3">
          <div>
            <Input type="password" name="newPassword" placeholder="새 비밀번호" />
            <p className="my-2">숫자, 영문 포함 10자 이상</p>
          </div>
          <div>
            <Input type="password" name="confirmNewPassword" placeholder="새 비밀번호 확인" />
            <p>숫자, 영문 포함 10자 이상</p>
          </div>
          <Button type="submit" className="w-full h-12 mt-2 mb-8">
            확인
          </Button>
        </div>
      </form>
    </section>
  )
}
