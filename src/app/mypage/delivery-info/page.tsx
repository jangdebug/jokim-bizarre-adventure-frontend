import { getMyDelivery } from '@/actions/mypage/getMyDeliveryDatas'
import DeliveryList from '@/components/mypage/myDelivery/DeliveryList'
import MyTab from '@/components/mypage/myTab'
import { myDeliveryTabDatas } from '@/datas/dummy/mypage/MyTabData'
import { deliveryType } from '@/types/MyPageTypes'

export default async function MyDeliveryPage() {
  const deliveryList: deliveryType[] = await getMyDelivery()

  return (
    <main>
      <MyTab tabData={myDeliveryTabDatas} />
      <DeliveryList deliveryList={deliveryList} />
    </main>
  )
}
