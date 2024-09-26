'use client'
import { Button } from '../ui/button'
import SignInField from './SignInField'
import { signIn } from 'next-auth/react'

import { redirect } from 'next/navigation'

export default function SignInSection() {
  const handleSignIn = async (formData: FormData) => {
    console.log(formData.get('email'))
    console.log(formData.get('password'))

    const res = await signIn('credentials', {
      email: formData.get('email') as string,
      password: formData.get('password') as string,
      redirect: false,
    })

    if (res?.error) {
      // 로그인 실패 에러에 따라 모달이던 뭐던 보여줄 것
      console.log('Error:', res)
    } else {
      console.log('Success:', res)
      redirect('/')
    }
  }

  return (
    <section>
      <form className="flex flex-col gap-[8px]" action={handleSignIn}>
        <SignInField />
        <Button type="submit" size={'auth'} className="mt-[20px] w-full ">
          로그인
        </Button>
      </form>
    </section>
  )
}
