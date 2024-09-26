import SignUpSelection from '@/components/sign-up/SignUpSelection'
import SignUpNotification from '@/components/sign-up/SignUpNotification'
import { Metadata } from 'next'
import React from 'react'
import Divider from '@/components/ui/Divider'
export const metadata: Metadata = {
  title: '회원가입',
}
export default function SignUp() {
  return (
    <main>
      <SignUpSelection />
      <Divider />
      <SignUpNotification />
    </main>
  )
}
