import { getDeliveryPhoneDatas } from '@/actions/mypage/getMyDeliveryDatas'
import DeleveryAdd from '@/components/mypage/myDelivery/DeleveryAdd'
import { phoneType } from '@/types/MyPageTypes'

export default async function AddDelivery() {
  const phoneDatas: phoneType[] = await getDeliveryPhoneDatas()

  return (
    <main>
      <div className="my-5 text-xl font-bold flex justify-center">배송지 등록</div>
      <DeleveryAdd phoneDatas={phoneDatas} />
    </main>
  )
}
