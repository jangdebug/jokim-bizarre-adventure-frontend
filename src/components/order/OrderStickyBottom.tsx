import { basketListType } from '@/types/BasketTypes'
import { Button } from '../ui/button'

export default function OrderStickyBottom({ basketListDatas }: { basketListDatas: basketListType[] }) {
  const totalAmount: number = basketListDatas
    .filter((item) => item.isChecked)
    .reduce((total, item) => total + item.price * item.quantity, 0)

  return (
    <div className="w-full fixed bottom-0 bg-white border-[1px] z-[11]">
      <div className="w-full px-[24px] h-[40px] text-xs border-t-[2px] flex justify-between items-center">
        <p className="text-balance">위 주문내용을 확인했으며, 약관에 동의합니다.</p>
        <span className="text-gray-400 border-b-[1]">약관보기</span>
      </div>
      <Button className="w-full bg-[#131922] h-[60px] flex justify-center items-center">
        <span className="text-lg text-white">{totalAmount.toLocaleString()}원 결제하기</span>
      </Button>
    </div>
  )
}
