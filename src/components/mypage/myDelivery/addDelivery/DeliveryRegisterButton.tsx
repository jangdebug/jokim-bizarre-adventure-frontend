'use client'

import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'
import React from 'react'

export default function DeliveryRegisterButton() {
  const router = useRouter()

  return (
    <div className="mt-56 pt-3 border-t border-gray-500">
      <Button className="w-full p-6" onClick={() => router.back()}>
        배송지 적용
      </Button>
    </div>
  )
}
