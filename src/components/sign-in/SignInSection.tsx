'use client'
import { useEffect } from 'react'
import { Button } from '../ui/button'
import SignInField from './SignInField'
import { signIn, signOut, useSession } from 'next-auth/react'

export default function SignInSection() {
  const auth = useSession()
  useEffect(() => {
    console.log('LogInForm auth', auth)
  }, [auth])

  const handleSignIn = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    // id 비밀번호 유효한지 확인 해야합니다.
    console.log(formData.get('email'))
    console.log(formData.get('password'))
    signIn('credentials', {
      email: formData.get('email') as string,
      password: formData.get('password') as string,
      redirect: true,
      callbackUrl: '/',
    })
  }
  return (
    <section>
      <form className="flex flex-col gap-[8px]" onSubmit={handleSignIn}>
        <SignInField />
        <Button type="submit" size={'auth'} className="mt-[20px] w-full ">
          로그인
        </Button>
      </form>

      {/* 임시 signout 입니다 */}
      <Button type="submit" size={'auth'} className="mt-[20px] w-full " onClick={() => signOut()}>
        로그아웃
      </Button>
    </section>
  )
}
