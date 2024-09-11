'use client'
import { useEffect, useState } from 'react'

export default function ProductDescriptionSection({ data }: { data: string }) {
  const [mounted, setMounted] = useState<boolean>(false)
  useEffect(() => {
    setMounted(true)
  }, [])

  return <div dangerouslySetInnerHTML={{ __html: mounted ? data : '[error]' }} />
}
