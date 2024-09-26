import Divider from '@/components/ui/Divider'
import DeliveryModCheckOption from './DeliveryModCheckOption'
import DeliveryModInput from './DeliveryModInput'
import DeliveryModZipcode from './DeliveryModZipcode'
import DeliveryModPolicy from './DeliveryModPolicy'
import DeliveryModifyButton from './DeliveryModifyButton'
import { deliveryType } from '@/types/MyPageTypes'

interface modifyProps {
  modifyData: deliveryType
  handleDeliveryMod: (FormData: FormData) => void
}

export default function DeliveryMod({ modifyData, handleDeliveryMod }: modifyProps) {
  return (
    <form action={handleDeliveryMod}>
      <section>
        <div className="px-[24px] m-auto">
          <DeliveryModInput name={modifyData.addressName} recip={modifyData.recipient} />
          <DeliveryModZipcode
            zip={modifyData.zipCode}
            road={modifyData.addressRoad}
            jib={modifyData.addressJibeon}
            detail={modifyData.addressDetail}
          />
          <DeliveryModCheckOption isOption={modifyData.isDefault} />
        </div>
        <Divider />
        <DeliveryModPolicy isPolicy={modifyData.deliveryPolicy} />
        <DeliveryModifyButton />
      </section>
    </form>
  )
}

//     let errorMessage = ''
//     switch (true) {
//       case !addressName:
//         errorMessage = '배송지명을 입력해 주세요.'
//         break
//       case !recipient:
//         errorMessage = '받으시는 분을 입력해 주세요.'
//         break
//       case !phone:
//         errorMessage = '전화번호를 입력해 주세요.'
//         break
//       case !zipCode:
//         errorMessage = '주소를 선택해주세요.'
//         break
//       case !deliveryPolicy:
//         errorMessage = '배송지 정보 수집 및 이용에 대한 동의 항목에 체크해주세요.'
//         break
//       default:
//         // Fetch 요청 등을 여기에 추가
//         //router.push('/mypage/delivery-info')

//         return // 폼 제출을 계속 진행
//     }
