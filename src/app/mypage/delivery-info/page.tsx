import { DeliveryResponse, getMyDelivery } from '@/actions/mypage/getMyDeliveryDatas'
import DeliveryList from '@/components/mypage/myDelivery/DeliveryList'
import MyTab from '@/components/mypage/myTab'
import { myDeliveryTabDatas } from '@/datas/dummy/mypage/MyTabData'

export default async function MyDeliveryPage() {
  const { defaultDelivery, deliveryList }: DeliveryResponse = await getMyDelivery()

  return (
    <main>
      <MyTab tabData={myDeliveryTabDatas} />
      <DeliveryList deliveryList={deliveryList} defaultDeliveryId={defaultDelivery.default} />
    </main>
  )
}
