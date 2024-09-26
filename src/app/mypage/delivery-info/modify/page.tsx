import { getModifyDeliveryData, modifyDeliveryAction } from '@/actions/mypage/getMyDeliveryDatas'
import DeliveryMod from '@/components/mypage/myDelivery/modifyDelivery/DeleveryMod'
import { deliveryType } from '@/types/MyPageTypes'
import { redirect } from 'next/navigation'

export default async function ModifyDelivery({ searchParams }: { searchParams: { code: string } }) {
  const modifyData: deliveryType = await getModifyDeliveryData(searchParams.code)

  const handleDeliveryMod = async (deliveryFormData: FormData) => {
    'use server'
    const res = await modifyDeliveryAction(deliveryFormData)
    if (!res) {
      console.log('Failed Modify Delivery!!')
      return
    }
    redirect('/mypage/delivery-info')
  }

  return (
    <main>
      <div className="my-5 text-xl font-bold flex justify-center">배송지 수정</div>
      <DeliveryMod modifyData={modifyData} handleDeliveryMod={handleDeliveryMod} />
    </main>
  )
}
