'use client'

import React, { useRef, useEffect, useState } from 'react'

export default function FadeUpSection({
  children,
}: {
  children: React.ReactNode
}) {
  const sectionRef = useRef<HTMLDivElement | null>(null)
  const [isVisible, setIsVisible] = useState<boolean>(false)
  const [lastScrollY, setLastScrollY] = useState<number>(0)

  const handleScroll = () => {
    if (sectionRef.current) {
      const rect = sectionRef.current.getBoundingClientRect()
      const currentScrollY = window.scrollY

      if (currentScrollY > lastScrollY) {
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          setIsVisible(true)
        }
      } else if (currentScrollY < lastScrollY) {
        if (rect.top >= window.innerHeight) {
          setIsVisible(false)
        }
      }

      setLastScrollY(currentScrollY)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  return (
    <section
      ref={sectionRef}
      className={`fade-up ${isVisible ? 'visible' : ''}`}
    >
      {children}
    </section>
  )
}
