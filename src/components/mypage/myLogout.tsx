'use client'

import { signOut } from 'next-auth/react'

export default function MyLogOut() {
  return (
    <div onClick={() => signOut()}>
      <div className="my-8">
        <span className="text-sm">로그아웃</span>
      </div>
    </div>
  )
}
