'use client'

import { signOut, useSession } from 'next-auth/react'
import React, { useEffect } from 'react'

export default function MyLogOut() {
  return (
    <div onClick={() => signOut()}>
      <div className="my-8">
        <span className="text-sm">로그아웃</span>
      </div>
    </div>
  )
}
