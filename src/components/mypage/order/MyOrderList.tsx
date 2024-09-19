import { Button } from '@/components/ui/button'
import { orderListType } from '@/types/MyPageTypes'
import Image from 'next/image'

interface MyOrderListProps {
  orderListDatas: orderListType[]
}

export default function MyOrderList({ orderListDatas }: MyOrderListProps) {
  return (
    <ul className="p-[24px] m-auto">
      {orderListDatas && orderListDatas.length > 0 ? (
        orderListDatas.map((item) => (
          <li key={item.id} className="py-3 my-3 border-b border-gray-400">
            <div className="flex justify-start font-bold mb-3">
              <p className="mr-5  text-xl">{item.deliveryState}</p>
              <p className="text-[#d99c63] text-sm flex items-center">{item.purchaseDate}</p>
            </div>
            <div className="flex justify-between gap-6 mb-3">
              <div>
                <Image src={String(item.productImageUrl)} alt="상품 이미지" width={100} height={100} priority />
              </div>
              <div className="w-4/5 text-sm mb-5">
                <div>
                  <p className="font-bold">{item.brandName}</p>
                  <p className="mb-7">{item.productName}</p>

                  <div className=" flex justify-between">
                    <p className="font-bold">
                      <span className="text-xl text-[#d99c63]">{item.amount.toLocaleString()}원</span> * {item.quantity}
                      개
                    </p>
                    <Button variant={'outline'}>
                      <span className="text-xs font-bold">장바구니 담기</span>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-between gap-2">
              <Button variant={'outline'} className="w-full">
                <span className="font-bold">교환,반품 신청</span>
              </Button>
              <Button className="w-full">
                <span className="font-bold ">배송 조회</span>
              </Button>
            </div>
          </li>
        ))
      ) : (
        <div className="px-[24px]">
          <p className="text-center my-56">
            <span className="text-sm font-bold text-gray-400">주문/배송 내역이 없습니다.</span>
          </p>
        </div>
      )}
    </ul>
  )
}
