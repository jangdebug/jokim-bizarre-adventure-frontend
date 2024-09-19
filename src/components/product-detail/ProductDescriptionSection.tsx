'use client'
import { useRef } from 'react'

export default function ProductDescriptionSection({ html }: { html: string }) {
  const iframeRef = useRef<HTMLIFrameElement>(null)

  return <iframe ref={iframeRef} id="info" width="100%" height={4000} srcDoc={html} className="scroll-m-[36px]" />
}
