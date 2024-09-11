'use client'
import { useEffect, useState } from 'react'
import DOMPurify from 'isomorphic-dompurify'

export default function ProductDescriptionSection({ data }: { data: string }) {
  const [mounted, setMounted] = useState<boolean>(false)

  useEffect(() => {
    setMounted(true)
  }, [])
  const filterText = (html: string) => {
    return html.replace(/>([^<]+)</g, '><')
  }
  return (
    <div
      className="flex flex-col items-center"
      dangerouslySetInnerHTML={{
        __html: mounted
          ? DOMPurify.sanitize(filterText(data), {
              ALLOWED_TAGS: ['img'],
            })
          : '[LOADING...]',
      }}
    />
  )
}
