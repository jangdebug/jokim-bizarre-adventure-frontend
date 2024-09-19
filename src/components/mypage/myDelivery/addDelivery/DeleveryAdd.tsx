import Divider from '@/components/ui/Divider'
import DeliveryAddPolicy from './DeliveryAddPolicy'
import DeliveryCheckOption from './DeliveryCheckOption'
import DeliveryInput from './DeliveryInput'
import DeliveryRegisterButton from './DeliveryRegisterButton'
import DeliveryZipcode from './DeliveryZipcode'

export default function DeleveryAdd({ handleDeliveryAdd }: { handleDeliveryAdd: (FormData: FormData) => void }) {
  return (
    <form action={handleDeliveryAdd}>
      <section>
        <div className="px-[24px] m-auto">
          <DeliveryInput />
          <DeliveryZipcode />
          <DeliveryCheckOption />
        </div>
        <Divider />
        <DeliveryAddPolicy />
        <DeliveryRegisterButton />
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
