import { getOrderListAction } from '@/actions/mypage/getOrderListData'
import MyOrderList from '@/components/mypage/order/MyOrderList'
import MyOrderPolicy from '@/components/mypage/order/MyOrderPolicy'
import MyOrderSearch from '@/components/mypage/order/MyOrderSearch'
import Divider from '@/components/ui/Divider'
import { orderListType } from '@/types/MyPageTypes'

export default async function MyOrder() {
  const orderListDatas: orderListType[] = await getOrderListAction()
  return (
    <main>
      <MyOrderSearch />
      <Divider />

      <MyOrderList orderListDatas={orderListDatas} />
      <Divider />

      <MyOrderPolicy />
    </main>
  )
}
