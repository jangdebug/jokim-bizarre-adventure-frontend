'use client'
import React, { useEffect, useState } from 'react'
import ToTopIcon from '../icons/ToTopIcon'

export default function ToTopButton() {
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
        isVisible
          ? 'block bottom-[73px] opacity-100'
          : 'bottom-[-73px] opacity-0'
      } z-[100] rounded-full flex items-center justify-center`}
      style={{
        transitionProperty: 'visibility, opacity, bottom',
        transitionDuration: '0.1s, 0.4s, 0.45s',
      }}
    >
      <ToTopIcon /> {/* 여기에서 아이콘 컴포넌트를 삽입합니다 */}
      <span className="sr-only">맨 위로</span> {/* 시각적 숨김 텍스트 */}
    </button>
  )
}
