'use client'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

import DownArrowIcon from '@/components/icons/footer/DownArrowIcon.png'
import UpArrowIcon from '@/components/icons/footer/UpArrowIcon.png'
import FacebookIcon from '@/components/icons/footer/FacebookIcon.png'
import InstagramIcon from '@/components/icons/footer/InstagramIcon.png'
import YoutubeIcon from '@/components/icons/footer/YoutubeIcon.png'

const footerNavItem: string[] = [
  'ABOUT',
  '회사소개',
  '매장안내',
  '고객센터',
  '채팅상담',
]

interface SocialIcon {
  src: StaticImageData
  alt: string
}

const socialIcons: SocialIcon[] = [
  { src: FacebookIcon, alt: 'Facebook Icon' },
  { src: InstagramIcon, alt: 'Instagram Icon' },
  { src: YoutubeIcon, alt: 'Youtube Icon' },
]
export default function Footer() {
  const [isDetail, setIsDetail] = useState<boolean>(false)

  return (
    <footer className="fiexd w-full bottom-0 bg-[#f8f8f8] border-t-8 border-[#f8f8f8]">
      <nav className="flex justify-between items-center h-[50px] px-[24px] bg-white">
        {footerNavItem.map((item, idx) => (
          <Link key={idx} className="text-[14px]  text-[#333]" href={'/'}>
            {item}
          </Link>
        ))}
      </nav>
      <div className="flex justify-between items-center p-[16px_24px_0px]">
        <p className="text-[16px] text">㈜신세계인터내셔날 사업자 정보</p>
        <button>
          {isDetail ? (
            <Image src={DownArrowIcon} alt="downArrowIcon" />
          ) : (
            <Image src={UpArrowIcon} alt="upArrowIcon" />
          )}
        </button>
      </div>
      <div></div>
      <div></div>
      <ul className="p-[14px_24px] flex flex-row">
        <li className=" pr-5 text-[12px] font-medium leading-[20px] text-[#787878]">
          <Link href={'/'}>개인정보처리방침</Link>
        </li>
        <li className=" pr-5 text-[12px] font-medium leading-[20px] text-[#787878]">
          <Link href={'/'}>이용약관</Link>
        </li>
        <li className=" pr-5 text-[12px] font-medium leading-[20px] text-[#787878]">
          <Link href={'/'}>PC 버전보기</Link>
        </li>
      </ul>
      <ul className="p-[0_24px] flex flex-row">
        {socialIcons.map((icon, idx) => (
          <li className="mr-[6px]" key={idx}>
            <Link href={'/'}>
              <Image src={icon.src} alt={icon.alt} />
            </Link>
          </li>
        ))}
      </ul>

      <div className="p-[16px_24px_136px] text-[12px] leading-[18px] tracking-[-0.06px] text-[#a0a0a0]">
        Ⓒ 2020 SHINSEGAE INTERNATIONAL. ALL RIGHTS RESERVED
      </div>
    </footer>
  )
}
