import {
  getMySize,
  getSelectBottomSize,
  getSelectFootSize,
  getSelectTopSize,
  sizeRegistAction,
} from '@/actions/mypage/getMyBeautySizeData'
import MySizeMain from '@/components/mypage/myBeautySize/MySizeMain'
import { mySizeType, selectSizeType } from '@/types/MyPageTypes'

export default async function page() {
  const mySizeData: mySizeType = await getMySize()
  const topSizeDatas: selectSizeType[] = await getSelectTopSize()
  const bottomSizeDatas: selectSizeType[] = await getSelectBottomSize()
  const footSizeDatas: selectSizeType[] = await getSelectFootSize()

  const handleSize = async (sizeFormData: FormData) => {
    'use server'
    const res = await sizeRegistAction(sizeFormData)
  }

  return (
    <main>
      <MySizeMain
        mySizeData={mySizeData}
        topSizeDatas={topSizeDatas}
        bottomSizeDatas={bottomSizeDatas}
        footSizeDatas={footSizeDatas}
        handleSize={handleSize}
      />
    </main>
  )
}
