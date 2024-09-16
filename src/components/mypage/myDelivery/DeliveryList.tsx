import { updateDefaultDelivery } from '@/actions/mypage/getMyDeliveryDatas'
import DeliveryActionButtons from './DeliveryActionButtons'
import { deliveryType } from '@/types/MyPageTypes'
import DeliveryItem from './DeliveryItem'
import DeliveryEmpty from './DeliveryEmpty'

interface DeliveryListProps {
  deliveryList: deliveryType[]
}

export default async function DeliveryList({ deliveryList }: DeliveryListProps) {
  const handleDefaultSettingClick = async (formData: FormData) => {
    'use server'
    try {
      const changeDefaultDelivery = await updateDefaultDelivery(formData)

      // if (changeDefaultDelivery.status === 200) {
      //   console.log('배송지가 변경되었습니다.');
      //   revalidateTag('deliveryAddress');
      // }
    } catch (error) {
      console.error('Error updating default delivery:', error)
    }
  }

  return (
    <form action={handleDefaultSettingClick}>
      <DeliveryActionButtons dataLength={deliveryList.length} />
      <section className="w-11/12 mx-auto min-h-[calc(100vh-112px)]">
        {deliveryList.length > 0 ? (
          deliveryList.map((info) => <DeliveryItem key={info.addressId} info={info} />)
        ) : (
          <DeliveryEmpty />
        )}
      </section>
    </form>
  )
}
