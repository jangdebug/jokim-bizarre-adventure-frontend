import { useEffect, useState } from 'react'

export const useScrollEvent = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false)
  const [lastScrollY, setLastScrollY] = useState<number>(0)

  const handleScroll = () => {
    const currentScrollY = window.scrollY
    if (currentScrollY > lastScrollY) {
      // 스크롤 내리기
      setIsVisible(false)
    } else if (currentScrollY < lastScrollY) {
      // 스크롤 올리기
      setIsVisible(true)
    }
    setLastScrollY(currentScrollY)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  return isVisible
}
