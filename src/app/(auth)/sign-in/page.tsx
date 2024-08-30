import SignInForm from '@/components/sign-in/SignInForm'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: '로그인',
}
export default function SignIn() {
  const handleSignIn = async (signInFormData: FormData) => {
    'use server'
    if (!signInFormData.has('autoLogin')) {
      signInFormData.append('autoLogin', 'false')
    }

    console.log('data', signInFormData)
  }
  return (
    <section className="w-full min-h-[calc(100vh-112px)]">
      <SignInForm handleSignIn={handleSignIn}></SignInForm>
    </section>
  )
}
