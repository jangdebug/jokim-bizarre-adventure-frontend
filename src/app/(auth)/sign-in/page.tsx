import SignInForm from '@/components/sign-in/SignInForm'
import React from 'react'

export default function SignIn() {
  const handleSignIn = async (signInFormData: FormData) => {
    'use server'
    if (!signInFormData.has('autoLogin')) {
      signInFormData.append('autoLogin', 'false')
    }

    console.log('data', signInFormData)
  }
  return <SignInForm handleSignIn={handleSignIn}></SignInForm>
}
