'use client'

import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'

export default function NotFound() {
  const router = useRouter()
  return (
    <>
      <h1>404NotFound</h1>
      <Button size={'auth'} onClick={() => router.back()}>
        BACK
      </Button>
    </>
  )
}
