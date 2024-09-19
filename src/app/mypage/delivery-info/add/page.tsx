import { addDeliveryAction } from '@/actions/mypage/getMyDeliveryDatas'
import DeleveryAdd from '@/components/mypage/myDelivery/addDelivery/DeleveryAdd'

export default async function AddDelivery() {
  const handleDeliveryAdd = async (deliveryFormData: FormData) => {
    'use server'
    const res = await addDeliveryAction(deliveryFormData)
    console.log('res -> ', res)
    // if (res.HttpStatus === 'ok') {
    //   return res.data
    // }
    // revalidateTag('deliveryAddress')

    return null
  }

  return (
    <main>
      <div className="my-5 text-xl font-bold flex justify-center">배송지 등록</div>
      <DeleveryAdd handleDeliveryAdd={handleDeliveryAdd} />
    </main>
  )
}
