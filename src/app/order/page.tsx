import { getBasketListAction, getBasketProduct } from '@/actions/basket/getBasketListData'
import { getOrderDeliveryAction, getOrderPageList } from '@/actions/order/getOrderData'
import OrderCustomer from '@/components/order/OrderCustomer'
import OrderDelivery from '@/components/order/OrderDelivery'
import OrderPayInfo from '@/components/order/OrderPayInfo'
import OrderProduct from '@/components/order/OrderProduct'
import OrderStickyBottom from '@/components/order/OrderStickyBottom'
import Divider from '@/components/ui/Divider'

export default async function Order() {
  const orderDelivery = await getOrderDeliveryAction()
  // const orderCustomer = await getOrderCustomerAction()
  const basketListDatas = await getBasketListAction()
  const orderListDatas = await getOrderPageList()

  const firstProductData = await getBasketProduct(orderListDatas[0].productCode)

  return (
    <main>
      <section className="mb-60">
        <OrderDelivery orderDelivery={orderDelivery} />
        <Divider />
        <OrderPayInfo basketListDatas={basketListDatas} />
        <Divider />
        <OrderCustomer orderDelivery={orderDelivery} />
        <Divider />
        <OrderProduct orderListDatas={orderListDatas} firstProductData={firstProductData} />
        <Divider />
        <OrderStickyBottom basketListDatas={basketListDatas} />
      </section>
    </main>
  )
}
