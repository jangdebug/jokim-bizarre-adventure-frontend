'use client'

import Divider from '@/components/ui/Divider'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { mySizeType, selectSizeType } from '@/types/MyPageTypes'
import React, { useState } from 'react'
import MyRegister from './MyRegister'
import SizeFormItem from './SizeFormItem'
import SizeInput from './SizeInput'

interface beautySizeType {
  mySizeData: mySizeType
  topSizeDatas: selectSizeType[]
  bottomSizeDatas: selectSizeType[]
  footSizeDatas: selectSizeType[]
  handleSize: (formData: FormData) => void
}

export default function MySizeMain({
  mySizeData,
  topSizeDatas,
  bottomSizeDatas,
  footSizeDatas,
  handleSize,
}: beautySizeType) {
  return (
    <section>
      <form action={handleSize}>
        <div className="w-11/12 m-auto my-10">
          <ul>
            <SizeInput
              mySizeData={mySizeData}
              topSizeDatas={topSizeDatas}
              bottomSizeDatas={bottomSizeDatas}
              footSizeDatas={footSizeDatas}
            />
          </ul>
        </div>

        <Divider />
        <MyRegister agreement={mySizeData.agreement} />
      </form>
    </section>
  )
}
