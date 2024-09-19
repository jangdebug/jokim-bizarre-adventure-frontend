import { Button } from '@/components/ui/button'
import Link from 'next/link'

interface DeliveryActionButtonsProps {
  onDefaultSettingClick: () => void
}

export default function DeliveryActionButtons({ onDefaultSettingClick }: DeliveryActionButtonsProps) {
  return (
    <section className="w-11/12 py-7 mx-auto flex justify-between">
      <Link href={'/mypage/delivery-info/add'} className="w-[49%]">
        <Button className="bg-[#787878] w-full py-6">배송지 등록</Button>
      </Link>

      <Button className="w-[49%] py-6" onClick={onDefaultSettingClick}>
        기본 배송지 설정
      </Button>
    </section>
  )
}
