'use client'
import Link from 'next/link'
import LeftArrowIcon from '../icons/auth-service-header/LeftArrowIcon'
import SearchIcon from '../icons/auth-service-header/SearchIcon'
import BasketIcon from '../icons/auth-service-header/BasketIcon'
import { useScrollEvent } from '@/hooks/UseScrollEvent'
import { useRouter } from 'next/navigation'
import HomeIcon from '../icons/auth-service-header/HomeIcon'
import { useEffect, useState } from 'react'

export default function ProductDetailHeader() {
  const isVisible = useScrollEvent()
  const [isBlack, setIsBlack] = useState<boolean>(false)
  const router = useRouter()
  const handleBackClick = () => {
    router.back()
  }

  const handleScroll = () => {
    if (window.scrollY == 0) {
      setIsBlack(() => false)
    } else if (window.scrollY > 60) {
      // console.log(window.scrollY, isVisible)

      setIsBlack(() => true)
    }
    // } else {
    //   console.log(window.scrollY, isVisible)
    // }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <header
      className={`z-[49] flex flex-col justify-center w-full h-[56px] px-[16px]  ${isBlack ? (isVisible ? 'bg-white fixed top-0' : 'absolute top-0 left-0') : 'absolute top-0 left-0'} `}
    >
      <nav>
        <ul className="flex justify-between">
          <li>
            <ul className="flex gap-4">
              <li>
                <button onClick={handleBackClick}>
                  <LeftArrowIcon color={isBlack ? 'black' : 'white'} />
                </button>
              </li>
              <li>
                <Link href={'/'}>
                  <HomeIcon color={isBlack ? 'black' : 'white'} />
                </Link>
              </li>
            </ul>
          </li>

          <li>
            <ul className="flex gap-4">
              <li>
                <Link href={'/search'}>
                  <SearchIcon color={isBlack ? 'black' : 'white'} />
                </Link>
              </li>
              <li className="relative">
                <Link href={'/basket'}>
                  <BasketIcon color={isBlack ? 'black' : 'white'} />
                </Link>
                <span
                  className={`absolute
                                            top-[-4px]
                                            right-[-6px]
                                            flex
                                            w-[20px]
                                            h-[20px]
                                            text-[10px]
                                            bg-[rgb(217,156,99)]
                                            text-white
                                            items-center
                                            justify-center
                                            rounded-full
                                            leading-[0]`}
                >
                  12
                </span>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </header>
  )
}
