import KakaoIcon from '@/components/icons/sign-in/KakaoIcon'
import PhoneIcon from '@/components/icons/sign-in/PhoneIcon'
import NaverIcon from '@/components/icons/sign-in/NaverIcon.png'
import { Button } from '@/components/ui/button'
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import SignInField from '@/components/sign-in/SignInField'
import SignInSection from '@/components/sign-in/SignInSection'
import SocialSignInButtons from '@/components/sign-in/SocialSignInButtons'

export const metadata: Metadata = {
  title: '로그인',
}
export default function SignIn() {
  return (
    <main className="min-h-[calc(100vh-112px)] px-[24px] pt-[28px] pb-[112px]">
      <SignInSection />
      {/* 아래 컴포넌트로 따로 뺄지 정할 것 */}
      <section>
        <SocialSignInButtons />
        <Link href={'/sign-up'}>
          <Button variant={'outline'} size={'auth'} className="mt-[52px] w-full">
            회원가입
          </Button>
        </Link>
        <Link href={'#'} className="mt-[25px] inline-block w-full text-center underline text-[14px] text-[#787878]">
          비회원 주문조회
        </Link>
      </section>
    </main>
  )
}
