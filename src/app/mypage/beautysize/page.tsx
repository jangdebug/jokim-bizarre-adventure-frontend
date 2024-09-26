import {
  getMySize,
  getSelectBottomSize,
  getSelectFootSize,
  getSelectTopSize,
  sizeRegistAction,
} from '@/actions/mypage/getMyBeautySizeData'
import MySizeMain from '@/components/mypage/myBeautySize/MySizeMain'
import { mySizeType, selectSizeType } from '@/types/MyPageTypes'
import { redirect } from 'next/navigation'

export default async function Size({ searchParams }: { searchParams: { type: string } }) {
  const mySizeData: mySizeType = await getMySize()
  const topSizeDatas: selectSizeType[] = await getSelectTopSize()
  const bottomSizeDatas: selectSizeType[] = await getSelectBottomSize()
  const footSizeDatas: selectSizeType[] = await getSelectFootSize()

  const isDataEmpty = Object.values(mySizeData).every((value) => value === null)
  if (!isDataEmpty) {
    if (searchParams.type === 'Add') redirect('/mypage/beautysize?type=Exist')
  }

  const handleSize = async (sizeFormData: FormData) => {
    'use server'
    const res = await sizeRegistAction(sizeFormData)

    if (!res) {
      console.log('사이즈 등록에 실패하였습니다.')
      return
    }

    redirect('/mypage/beautysize?type=Exist')
  }

  return (
    <main>
      <MySizeMain
        mySizeData={mySizeData}
        topSizeDatas={topSizeDatas}
        bottomSizeDatas={bottomSizeDatas}
        footSizeDatas={footSizeDatas}
        handleSize={handleSize}
        regType={searchParams.type}
      />
    </main>
  )
}
