import Image from 'next/image'
import QuestionIcon from '../icons/product-detail/QuestionIcon'

export default function BenefitInfoSection({ productId, productPrice }: { productId: string; productPrice: number }) {
  return (
    <section className="p-[24px]">
      <ul className="flex flex-col gap-[16px]">
        <>
          <li>
            <p className="pb-[20px] text-[16px] leading-[22px] tracking-[0.4px] font-bold">혜택안내</p>
            <p className="flex items-center gap-[8px]">
              <span className="text-[14px] leading-[20px] font-[500] text-[#404040] w-[94px]">S.I.포인트적립</span>
              <span className="flex gap-[6px] items-center text-[12px] leading-[18px]">
                <Image
                  src={'https://cdn-mo.sivillage.com/mo/assets/comm/image/badge_welcome.png'}
                  alt="badgeImage"
                  width={20}
                  height={20}
                />
                {/* 적립률에 대한 변수를 전역으로 설정해줘야할까? */}
                0.5%({(productPrice * 0.005).toLocaleString()}P)
              </span>
            </p>
          </li>
        </>

        <>
          <li>
            <p className="flex items-center gap-[8px]">
              <span className="text-[14px] leading-[20px] font-[500] text-[#404040] w-[94px]">카드혜택</span>
              <span className="text-[14px] leading-[20px] font-[500] text-[#404040] underline">할인혜택</span>
              <span className="text-[14px] leading-[20px] font-[500] text-[#404040] underline">카드혜택 즉시할인</span>
            </p>
          </li>
        </>

        <>
          <li className="border-t border-[#f0f0f0]">
            <p className="flex items-center gap-[8px] pt-[24px]">
              <span className="text-[14px] leading-[20px] font-[500] text-[#404040] w-[94px] flex items-center gap-[4px]">
                배송비 <QuestionIcon />
              </span>
              <span className="text-[14px] leading-[20px] text-[#404040] ">무료</span>
            </p>
          </li>
        </>

        <>
          <li className="border-t border-[#f0f0f0] mt-[8px]">
            <p className="flex items-center gap-[8px] pt-[24px]">
              <span className="text-[14px] leading-[20px] font-[500] text-[#404040] w-[94px]">배송기간</span>
              <span className=" flex justify-between items-center">
                <span className="text-[14px] leading-[20px] text-[#404040] ">
                  20시 30분까지 결제 시<strong className="text-[#d99c63]">오늘 출발</strong>
                </span>
              </span>
              {/* 눌렸을 때 더보기 꼭 해줘야할까 -> 안보여주기로 함*/}
              {/* <button className="ml-auto" onClick={handleClick}>
                <DownArrowThinIcon />
              </button> */}
            </p>
          </li>
        </>

        <>
          <li className="border-t border-[#f0f0f0] mt-[8px]">
            <p className="flex items-center gap-[8px] pt-[24px]">
              <span className="text-[14px] leading-[20px] font-[500] text-[#404040] w-[94px]">상품코드</span>
              <span className="text-[14px] leading-[18px]">{productId}</span>
            </p>
          </li>
        </>
      </ul>
    </section>
  )
}
