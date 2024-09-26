import { addDeliveryAction } from '@/actions/mypage/getMyDeliveryDatas'
import DeleveryAdd from '@/components/mypage/myDelivery/addDelivery/DeleveryAdd'
import { redirect } from 'next/navigation'

export default async function AddDelivery() {
  const handleDeliveryAdd = async (deliveryFormData: FormData) => {
    'use server'
    const res = await addDeliveryAction(deliveryFormData)
    if (!res) {
      console.log('Failed Add Delivery!!')
      return
    }
    redirect('/mypage/delivery-info')
  }

  return (
    <main>
      <div className="my-5 text-xl font-bold flex justify-center">배송지 등록</div>
      <DeleveryAdd handleDeliveryAdd={handleDeliveryAdd} />
    </main>
  )
}
