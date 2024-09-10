'use client'

import { myRegisterType, mySizeType } from '@/types/MyPageTypes'
import React, { useState } from 'react'
import { Button } from '../ui/button'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import { Checkbox } from '../ui/checkbox'
import Link from 'next/link'

interface registerProps {
  registerData: myRegisterType[]
  inputValues: mySizeType
}

export default function MyRegister({ registerData, inputValues }: registerProps) {
  const currentURI = usePathname()
  const [isAgreeChecked, setIsAgreeChecked] = useState<boolean>(false)

  console.log('test --> ', inputValues)

  return (
    <div className="px-5 my-5 border-t-8 border-t-[#f0f0f0]">
      <div className="pb-4 mt-10 border-b border-b-gray-200 flex justify-between">
        <div className="font-bold flex items-center ">
          <Checkbox onClick={() => setIsAgreeChecked(!isAgreeChecked)} />
          <p className="mx-3">
            개인정보 수집 및 이용 동의 <span className="text-orange-500">(필수)</span>
          </p>
        </div>
        <Link href={'/agreeInfo'}>
          <Image
            src={'https://cdn-mo.sivillage.com/mo/assets/comm/image/05Icon32PxThinArrowRight.svg'}
            width={20}
            height={20}
            alt={'개인정보 수집 및 이용 동의 상세 보기'}
            priority
          />
        </Link>
      </div>
      <p className="my-10 text-xs text-gray-400">
        * 수집하는 개인정보 항목, 수집 및 이용목적, 보유 및 이용기간에 동의합니다.
      </p>

      <div className="pb-12">
        {registerData &&
          registerData.map((data) =>
            currentURI && data.currentLink === currentURI ? (
              <Button key={data.id} className="w-full h-12">
                {data.registerName}
              </Button>
            ) : null,
          )}
      </div>
    </div>
  )
}
