import {
  getMySize,
  getSelectBottomSize,
  getSelectFootSize,
  getSelectTopSize,
} from '@/actions/mypage/getMyBeautySizeData'
import { mySizeType, selectSizeType } from '@/types/MyPageTypes'
import MySize from './mySize'

export default async function MyBeautySize() {
  const mySizeData: mySizeType = await getMySize()
  const topSizeDatas: selectSizeType[] = await getSelectTopSize()
  const bottomSizeDatas: selectSizeType[] = await getSelectBottomSize()
  const footSizeDatas: selectSizeType[] = await getSelectFootSize()

  return (
    <MySize
      mySizeData={mySizeData}
      topSizeDatas={topSizeDatas}
      bottomSizeDatas={bottomSizeDatas}
      footSizeDatas={footSizeDatas}
    />
  )
}
