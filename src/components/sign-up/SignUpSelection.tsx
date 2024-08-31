import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'
import KakaoIcon from '../icons/sign-up/KakaoIcon-sm.png'
import PhoneIcon from '../icons/sign-up/PhoneIcon-sm.png'
import Image from 'next/image'
import { membershipDescriptionData } from '@/datas/dummy/sign-up/SignUpDatas'

export default function SignUpSelection() {
  const membershipDescriptions: membershipDescriptionType[] = membershipDescriptionData

  return (
    <div className="w-full px-[24px] pb-[60px] mt-[55px]">
      <p className="text-[20px] leading-[26px] font-bold">신세계인터내셔날 통합 멤버십 가입</p>
      <div className="mt-[16px] flex flex-col gap-[12px]">
        <Link href={'/'}>
          <Button size={'auth'} variant={'kakao'} className="gap-[6px]">
            <Image src={KakaoIcon} alt="kakaoIcon" />
            카카오로 가입하기
          </Button>
        </Link>
        <Link href={'/sign-up/phone'}>
          <Button size={'auth'} className="gap-[6px]">
            <Image src={PhoneIcon} alt="phoneIcon" width={20} />
            휴대폰 / 아이핀 인증으로 가입하기
          </Button>
        </Link>
      </div>
      <ul className="mt-[24px] px-[16px] py-[20px] bg-[#f8f8f8]">
        {membershipDescriptions.map((item) => (
          <li key={item.id} className="list-item leading-[22px] ">
            <p className="text-[16px] font-[600]">{item.title}</p>
            <p className="text-[14px] mt-[6px] leading-[20px] tracking-[-0.3px] text-[#787878]">{item.description}</p>
          </li>
        ))}
      </ul>

      <div className="mt-[12px]  flex flex-row gap-[8px] font-[400] tracking-[-1px] ">
        <Link href={'/'} className="w-full ">
          <Button variant={'outline'} className="py-[6px] w-full h-full text-[12px]  font-[400] ">
            회원등급 혜택 자세히보기
          </Button>
        </Link>
        <Link href={'/'} className="w-full">
          <Button variant={'outline'} className="py-[6px] w-full h-full text-[12px]   font-[400] ">
            통합 멤버십 포인트 자세히보기
          </Button>
        </Link>
      </div>
      <div className="mt-[60px]">
        <p className="text-[20px] leading-[26px]  font-bold">S.I.VILLAGE 간편회원 가입</p>

        <p className="text-[14px] mt-[8px] text-[#404040] leading-[20px] tracking">
          본인인증 없이 간편가입하는 방식입니다. <br />
          멤버십회원(본인인증)으로 전환가입 하셔야 더 많은 멤버십 혜택을 받으실 수 있습니다.
        </p>
        <Link href={'/sign-up/simple'} className="w-full">
          <Button variant={'outline'} size={'auth'} className="mt-[28px] mg-[60px]">
            온라인 간편가입하기
          </Button>
        </Link>
      </div>
    </div>
  )
}
