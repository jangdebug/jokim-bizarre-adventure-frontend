import { getMyDelivery } from '@/actions/mypage/getMyDeliveryDatas'
import { options } from '@/app/api/auth/[...nextauth]/options'
import DeliveryList from '@/components/mypage/myDelivery/DeliveryList'
import MyTab from '@/components/mypage/myTab'
import { myDeliveryTabDatas } from '@/datas/dummy/mypage/MyTabData'
import { deliveryType } from '@/types/MyPageTypes'
import { getServerSession } from 'next-auth'

export default async function MyDeliveryPage() {
  const session = await getServerSession(options)
  const token = session?.user ? session.user.accessToken : undefined

  const deliveryList: deliveryType[] = await getMyDelivery(token)

  return (
    <main>
      <MyTab tabData={myDeliveryTabDatas} />
      <DeliveryList deliveryList={deliveryList} token={token} />
    </main>
  )
}
