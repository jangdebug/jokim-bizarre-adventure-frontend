'use client'

import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'

export default function Error() {
  const router = useRouter()
  return (
    <>
      <h1>ERROR</h1>
      <Button size={'auth'} onClick={() => router.back()}>
        BACK
      </Button>
    </>
  )
}
