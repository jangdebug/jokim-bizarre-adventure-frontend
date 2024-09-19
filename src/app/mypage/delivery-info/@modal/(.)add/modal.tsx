'use client'

import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'
import React from 'react'

export default function AddDeliveryModal({ children }: { children: React.ReactNode }) {
  const router = useRouter()

  return (
    <dialog open className="fixed top-0 left-0 w-full h-full overflow-auto flex flex-col items-center z-[200]">
      <Button className="bg-white absolute top-4 right-5 z-50" onClick={() => router.back()}>
        <div className="text-xl text-gray-600">{'X'}</div>
      </Button>
      <div>{children}</div>
    </dialog>
  )
}
