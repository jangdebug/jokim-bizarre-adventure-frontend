'use client'

import Divider from '@/components/ui/Divider'
import { mySizeType, selectSizeType } from '@/types/MyPageTypes'
import MyRegister from './MyRegister'
import SizeInput from './SizeInput'

interface beautySizeType {
  mySizeData: mySizeType
  topSizeDatas: selectSizeType[]
  bottomSizeDatas: selectSizeType[]
  footSizeDatas: selectSizeType[]
  handleSize: (formData: FormData) => void
  regType: string
}

export default function MySizeMain({
  mySizeData,
  topSizeDatas,
  bottomSizeDatas,
  footSizeDatas,
  handleSize,
  regType,
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
              regType={regType}
            />
          </ul>
        </div>

        <Divider />
        <MyRegister agreement={mySizeData.agreement} regType={regType} />
      </form>
    </section>
  )
}
