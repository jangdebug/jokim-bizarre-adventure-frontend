import { getBasketListAction } from '@/actions/basket/getBasketListData'
import { getOrderCustomerAction, getOrderDeliveryAction } from '@/actions/order/getOrderData'
import OrderCustomer from '@/components/order/OrderCustomer'
import OrderDelivery from '@/components/order/OrderDelivery'
import OrderPayInfo from '@/components/order/OrderPayInfo'
import OrderProduct from '@/components/order/OrderProduct'
import OrderStickyBottom from '@/components/order/OrderStickyBottom'
import Divider from '@/components/ui/Divider'
import React from 'react'

export default async function Order() {
  const orderDelivery = await getOrderDeliveryAction()
  const orderCustomer = await getOrderCustomerAction()
  const basketListDatas = await getBasketListAction()

  return (
    <main>
      <section className="mb-60">
        <OrderDelivery orderDelivery={orderDelivery} />
        <Divider />
        <OrderPayInfo basketListDatas={basketListDatas} />
        <Divider />
        <OrderCustomer orderCustomer={orderCustomer} />
        <Divider />
        <OrderProduct basketListDatas={basketListDatas} />
        <Divider />
        <OrderStickyBottom basketListDatas={basketListDatas} />
      </section>
    </main>
  )
}
