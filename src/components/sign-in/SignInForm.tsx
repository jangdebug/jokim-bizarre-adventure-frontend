'use client'

import React from 'react'
import SignInField from './SignInField'
import { Button } from '../ui/button'
import Link from 'next/link'
import KakaoIcon from '../icons/sign-in/KakaoIcon'
import PhoneIcon from '../icons/sign-in/PhoneIcon'
import NaverIcon from '../icons/sign-in/NaverIcon.png'
import Image from 'next/image'

export default function SignInForm({ handleSignIn }: { handleSignIn: (formData: FormData) => void }) {
  return (
    <div className="p-[28px_24px_112px] ">
      <form className="flex flex-col gap-[8px]" action={handleSignIn}>
        <SignInField />
        <Button type="submit" size={'auth'} className="mt-[20px] w-full ">
          로그인
        </Button>
      </form>
      <ul className="mt-[32px] text-center">
        <li className="inline-block px-4">
          <Link href={'/'}>
            <PhoneIcon />
          </Link>
        </li>
        <li className="inline-block px-4">
          <Link href={'/'}>
            <KakaoIcon />
          </Link>
        </li>
        <li className="inline-block px-4">
          <Link href={'/'}>
            <Image src={NaverIcon} alt={'naverIcon'} style={{ maxWidth: 'none' }} />
          </Link>
        </li>
      </ul>
      <Link href={'/sign-up'}>
        <Button variant={'outline'} size={'auth'} className="mt-[52px] w-full">
          회원가입
        </Button>
      </Link>
      <Link href={'/'} className="mt-[25px] inline-block w-full text-center underline text-[14px] text-[#787878]">
        비회원 주문조회
      </Link>
    </div>
  )
}
