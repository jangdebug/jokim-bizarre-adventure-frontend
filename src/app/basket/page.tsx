import { getBasketListAction } from '@/actions/basket/getBasketListData'
import { getBasketPointAction } from '@/actions/basket/getBasketPointData'
import BasketList from '@/components/basket/BasketList'
import BasketNavPoint from '@/components/layout/BasketNavPoint'
import MyTab from '@/components/mypage/myTab'
import { basketTabDatas } from '@/datas/dummy/basket/TabData'

export default async function Basket() {
  const basketPoint = await getBasketPointAction()
  const basketListDatas = await getBasketListAction()

  return (
    <main>
      <BasketNavPoint basketPoint={basketPoint} />
      <MyTab tabData={basketTabDatas} />
      <BasketList basketListDatas={basketListDatas} />
    </main>
  )
}
