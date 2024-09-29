import { getTotalPrice } from '@/actions/basket/getBasketListData'
import { basketListType } from '@/types/BasketTypes'
import CheckboxWithSvg from '../dummy/CheckboxWithSvg'
import Divider from '../ui/Divider'
import SlimEventSwiper from '../ui/SlimEventSwiper'
import BasketItem from './BasketItem'
import BasketItemTop from './BasketItemTop'
import BasketNoItem from './BasketNoItem'
import BasketPolicy from './BasketPolicy'
import BasketStickyBottom from './BasketStickyBottom'

interface basketProps {
  basketListDatas: basketListType[]
}

export default async function BasketList({ basketListDatas }: basketProps) {
  const totalAmount = await getTotalPrice(basketListDatas)

  // const totalAmount: number = basketListDatas
  //   .filter((item) => item.isChecked)
  //   .reduce((total, item) => total + productPrice * item.quantity, 0)

  return (
    <section>
      <div className="h-[56px] px-[24px] flex items-center justify-between">
        <fieldset className="flex gap-2">
          <CheckboxWithSvg id="all" name="전체선택" checked={basketListDatas.every((item) => item.isChecked)} />
          <label htmlFor="all">전체선택</label>
        </fieldset>
        <div>
          <span className="text-sm text-gray-400 border-b-2">선택상품삭제</span>
        </div>
      </div>
      <Divider />
      <ul>
        {basketListDatas.length > 0 ? (
          basketListDatas.map((item) => (
            <li className="px-[24px] py-[32px] border-b-2" key={item.productCode}>
              <BasketItemTop item={item} />
              <BasketItem item={item} />
            </li>
          ))
        ) : (
          <BasketNoItem />
        )}
      </ul>
      <div className="h-[100px] bg-[#f8f8f8] flex flex-col justify-center items-center">
        <p>
          {totalAmount.toLocaleString()}원 + 배송비 0원 = {totalAmount.toLocaleString()}원
        </p>
        <p className="text-xs text-gray-500">자사 상품으로 40,000원 이상 구매 시 무료배송</p>
      </div>
      <BasketPolicy />
      <SlimEventSwiper />
      <BasketStickyBottom totalAmount={totalAmount} />
    </section>
  )
}

// 'use client'

// import { basketListType } from '@/types/BasketTypes'
// import { useState } from 'react'
// import CheckboxWithSvg from '../dummy/CheckboxWithSvg'
// import Divider from '../ui/Divider'
// import SlimEventSwiper from '../ui/SlimEventSwiper'
// import BasketItem from './BasketItem'
// import BasketItemTop from './BasketItemTop'
// import BasketNoItem from './BasketNoItem'
// import BasketPolicy from './BasketPolicy'
// import BasketStickyBottom from './BasketStickyBottom'

// interface basketProps {
//   basketListDatas: basketListType[]
// }

// export default function BasketList({ basketListDatas }: basketProps) {
//   const [productPrice, setProductPrice] = useState<number>(0)

//   // const handleCheckAll = (e: React.ChangeEvent<HTMLInputElement>) => {
//   //   basketListDatas.map((item) => basketCheckUpdate(item, e.target.checked))
//   // }

//   // const handleItemCheck = (e: React.ChangeEvent<HTMLInputElement>, item: basketListType, checked: boolean) => {
//   //   console.log('id', item.productCode)
//   //   basketCheckUpdate(item, checked)
//   // }

//   const totalAmount: number = basketListDatas
//     .filter((item) => item.isChecked)
//     .reduce((total, item) => total + productPrice * item.quantity, 0)

//   return (
//     <section>
//       <div className="h-[56px] px-[24px] flex items-center justify-between">
//         <fieldset className="flex gap-2">
//           <CheckboxWithSvg
//             id="all"
//             name="전체선택"
//             checked={basketListDatas.every((item) => item.isChecked)}
//             // onChange={handleCheckAll}
//           />
//           <label htmlFor="all">전체선택</label>
//         </fieldset>
//         <div>
//           <span className="text-sm text-gray-400 border-b-2">선택상품삭제</span>
//         </div>
//       </div>
//       <Divider />
//       <ul>
//         {basketListDatas.length > 0 ? (
//           basketListDatas.map((item) => (
//             <li className="px-[24px] py-[32px] border-b-2" key={item.productCode}>
//               <BasketItemTop item={item} />
//               <BasketItem item={item} productPrice={productPrice} setProductPrice={setProductPrice} />
//             </li>
//           ))
//         ) : (
//           <BasketNoItem />
//         )}
//       </ul>
//       <div className="h-[100px] bg-[#f8f8f8] flex flex-col justify-center items-center">
//         <p>
//           {totalAmount.toLocaleString()}원 + 배송비 0원 = {totalAmount.toLocaleString()}원
//         </p>
//         <p className="text-xs text-gray-500">자사 상품으로 40,000원 이상 구매 시 무료배송</p>
//       </div>
//       <BasketPolicy />
//       <SlimEventSwiper />
//       <BasketStickyBottom totalAmount={totalAmount} />
//     </section>
//   )
// }
