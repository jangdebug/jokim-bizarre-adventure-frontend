'use client'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

import DownArrowIcon from '@/components/icons/footer/DownArrowIcon.png'
import UpArrowIcon from '@/components/icons/footer/UpArrowIcon.png'
import FacebookIcon from '@/components/icons/footer/FacebookIcon.png'
import InstagramIcon from '@/components/icons/footer/InstagramIcon.png'
import YoutubeIcon from '@/components/icons/footer/YoutubeIcon.png'
import RightArrowIcon from '../icons/footer/RightArrowIcon'

const footerNavItem: string[] = ['ABOUT', '회사소개', '매장안내', '고객센터', '채팅상담']

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

  const toggleDetailHandler = () => {
    setIsDetail(!isDetail)
  }

  return (
    <footer className="bg-[#f8f8f8] border-t-8 border-[#f8f8f8]">
      <nav className="flex justify-between items-center h-[50px] px-[24px] bg-white">
        {footerNavItem.map((item, idx) => (
          <Link key={idx} className="break-all text-[14px]  text-[#333]" href={'/'}>
            {item}
          </Link>
        ))}
      </nav>
      <div className="flex justify-between items-center p-[16px_24px_0px]">
        <p className="text-[16px] leading-[52px] font-bold tracking-[0.1px]">㈜신세계인터내셔날 사업자 정보</p>
        <button onClick={toggleDetailHandler}>
          {isDetail ? <Image src={UpArrowIcon} alt="upArrowIcon" /> : <Image src={DownArrowIcon} alt="downArrowIcon" />}
        </button>
      </div>

      <div className={`overflow-hidden transition-all duration-500 ease-in-out h-0 ${isDetail ? `h-[225px]` : 'h-0'}`}>
        <div className={` p-[3px_24px_26px_24px] text-[12px] leading-[20px] text-[#787878]  `}>
          <div>
            서울특별시 강남구 도산대로 449 (청담동)
            <br />
            대표이사 : 윌리엄김
            <br />
            사업자등록번호 : 201-81-53657
            <br />
            통신판매업 신고번호 : 강남-13797
            <br />
            개인정보보호책임자 : 임홍철
            <br />
            호스팅사업자 : ㈜신세계아이앤씨
            <br />
            고객센터(유료) : 1644-4490
            <br />
            <div className="flex flex-row gap-1">
              <p>이메일 : </p>
              <Link className="flex flex-row items-end break-all" href={`mailTo:siv_cs@sikorea.co.kr`}>
                siv_cs@sikorea.co.kr
                <RightArrowIcon />
              </Link>
            </div>
          </div>
          <ul className="mt-[16px] flex justify-start]">
            <li className="mr-[16px]">
              <Link className="flex flex-row items-end" href={'/'}>
                사업자정보확인
                <RightArrowIcon />
              </Link>
            </li>
            <li className="mr-[16px]">
              <Link className="flex flex-row items-end" href={'/'}>
                에스크로서비스가입확인
                <RightArrowIcon />
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="w-[88%] h-[1px] bg-[#e0e0e0] mx-auto ">
        <span className="sr-only">분기선</span>
      </div>
      {/* ::after 은 tailwind 로 할 수 없어서 보류 */}
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
              <span className="sr-only">{icon.alt} 로 이동</span>
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
