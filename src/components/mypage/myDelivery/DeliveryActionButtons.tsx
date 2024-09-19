import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function DeliveryActionButtons({ dataLength }: { dataLength: number }) {
  return (
    <section className="w-11/12 py-7 mx-auto flex justify-between">
      <Link href={'/mypage/delivery-info/add'} className="w-[49%]">
        <Button className="bg-[#787878] w-full py-6">배송지 등록</Button>
      </Link>

      {dataLength > 0 ? (
        <Button className="w-[49%] py-6">기본 배송지 설정</Button>
      ) : (
        <Button type={'button'} className="w-[49%] py-6">
          기본 배송지 설정
        </Button>
      )}
    </section>
  )
}
