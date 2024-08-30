import SignUpSelection from '@/components/sign-up/SignUpSelection'
import SignUpNotification from '@/components/sign-up/SignUpNotification'
import { Metadata } from 'next'
import React from 'react'
export const metadata: Metadata = {
  title: '회원가입',
}
export default function SignUp() {
  return (
    <section className="w-full ">
      <SignUpSelection />
      <div className=" h-[8px] w-full bg-[#f0f0f0]">
        <span className="sr-only">분기선</span>
      </div>
      <SignUpNotification />
    </section>
  )
}
