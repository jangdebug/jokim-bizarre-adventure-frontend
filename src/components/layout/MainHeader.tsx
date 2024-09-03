import SearchIcon from '../icons/auth-service-header/SearchIcon'
import BasketIcon from '../icons/auth-service-header/BasketIcon'
import Image from 'next/image'
import MainHeaderLogo from '../icons/main-header/MainHeaderLogo.png'
import Link from 'next/link'

export default function MainHeader() {
  return (
    <header className="flex flex-col justify-center w-full h-[56px] px-[16px] bg-white">
      <nav>
        <ul className="">
          <li className="absolute left-0 top-0 ">
            <Link href={'/'}>
              <Image src={MainHeaderLogo} alt="mainHeaderLogo" priority={true} />
            </Link>
          </li>

          <li>
            <ul className="flex justify-end gap-4">
              <li>
                <Link href={'/'}>
                  <SearchIcon />
                </Link>{' '}
              </li>
              <li className="relative">
                <Link href={'/'}>
                  <BasketIcon />
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
