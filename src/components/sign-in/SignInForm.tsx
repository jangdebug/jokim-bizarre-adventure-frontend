'use client'

import React from 'react'
import SignInField from './SignInField'

export default function SignInForm({
  handleSignIn,
}: {
  handleSignIn: (formData: FormData) => void
}) {
  return (
    <section className="w-full min-h-[calc(100vh-112px)]">
      <div className="p-[28px_24px_112px] ">
        <form action={handleSignIn}>
          <SignInField />
          <button>로그인</button>
        </form>
      </div>
    </section>
  )
}
