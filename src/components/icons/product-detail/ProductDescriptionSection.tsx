'use client'
import { useRef } from 'react'

export default function ProductDescriptionSection({ html, id }: { html: string; id: number }) {
  const iframeRef = useRef<HTMLIFrameElement>(null)

  return <iframe ref={iframeRef} id="myFrame" width="100%" height={4000} srcDoc={html}></iframe>
}
