import Image from 'next/image'
import React from 'react'

export default function MyInfoWrap() {
  return (
    <ul className="px-4 my-6 text-sm text-[#404040] rounded-[5px] border border-[#e0e0e0] box-border flex items-center justify-center">
      <li className="mx-4 my-2 flex">
        <Image
          src={`https://cdn-mo.sivillage.com/mo/assets/comm/image/icon_thinheartboff.svg`}
          width={20}
          height={20}
          alt={`찜하기`}
          priority
          className="mr-1"
        />
        찜
      </li>
      <li className="mx-4 my-2 flex">
        <Image
          src={`https://cdn-mo.sivillage.com/mo/assets/comm/image/icon_thindelivery.svg`}
          width={20}
          height={20}
          alt={`찜하기`}
          priority
          className="mr-1"
        />
        배송지 관리
      </li>
      <li className="mx-4 my-2 flex">
        <Image
          src={`https://cdn-mo.sivillage.com/mo/assets/comm/image/05-icon-32-px-thin-chat.svg`}
          width={20}
          height={20}
          alt={`찜하기`}
          priority
          className="mr-1"
        />
        채팅 상담
      </li>
    </ul>
  )
}
