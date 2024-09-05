import MySize from './mySize'
import { mySizeType, selectSizeType } from '@/types/MyPageTypes'
import {
  getMySize,
  getSelectBottomSize,
  getSelectFootSize,
  getSelectTopSize,
} from '@/actions/mypage/getMyBeautySizeData'

export default async function MyBeautySize() {
  const mySizeData: mySizeType = await getMySize()
  const topSizeOptionDatas: selectSizeType[] = await getSelectTopSize()
  const bottomSizeOptionDatas: selectSizeType[] = await getSelectBottomSize()
  const footSizeOptionDatas: selectSizeType[] = await getSelectFootSize()

  return (
    <MySize
      mySizeData={mySizeData}
      topSizeOptionDatas={topSizeOptionDatas}
      bottomSizeOptionDatas={bottomSizeOptionDatas}
      footSizeOptionDatas={footSizeOptionDatas}
    />
  )
}
