'use client'
import Image from 'next/image'
import KakaoIcon from '../icons/sign-in/KakaoIcon'
import PhoneIcon from '../icons/sign-in/PhoneIcon'
import NaverIcon from '@/components/icons/sign-in/NaverIcon.png'

import Link from 'next/link'
import { signIn } from 'next-auth/react'

export default function SocialSignInButtons() {
  return (
    <ul className="mt-[32px] text-center">
      <li className="inline-block px-4">
        <Link href={'/'}>
          <PhoneIcon />
        </Link>
      </li>
      <li className="inline-block px-4">
        <button onClick={() => signIn('kakao', { callbackUrl: '/' })}>
          <KakaoIcon />
        </button>
      </li>
      <li className="inline-block px-4">
        <button onClick={() => signIn('naver', { callbackUrl: '/' })}>
          <Image src={NaverIcon} alt={'naverIcon'} style={{ maxWidth: 'none' }} />
        </button>
      </li>
    </ul>
  )
}
