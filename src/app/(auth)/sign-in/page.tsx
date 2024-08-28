import SignInForm from '@/components/sign-in/SignInForm'
import React from 'react'

export default function SignIn() {
  const handleSignUp = async (signUpFormData: FormData) => {
    'use server'
    console.log('data', signUpFormData)
  }
  return <SignInForm handleSignIn={handleSignUp}></SignInForm>
}
