'use client'
import React, { useEffect, useState } from 'react'
import ToTopIcon from '../icons/to-top-button/ToTopIcon'

export default function ToTopButton({ moveWithBottomNav }: { moveWithBottomNav?: boolean }) {
  const [isVisible, setIsVisible] = useState(false)

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
    })
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  return (
    <button
      onClick={scrollToTop}
      className={`fixed w-12 h-12 right-[13px] ${
        moveWithBottomNav
          ? isVisible
            ? 'block bottom-[16px] opacity-100'
            : 'bottom-[-16px] opacity-0'
          : isVisible
            ? 'block bottom-[73px] opacity-100'
            : 'bottom-[-73px] opacity-0'
      } z-[48] rounded-full flex items-center justify-center`}
      style={{
        transitionProperty: 'visibility, opacity, bottom',
        transitionDuration: '0.1s, 0.4s, 0.45s',
      }}
    >
      <ToTopIcon />
      <span className="sr-only">맨 위로</span>
    </button>
  )
}
