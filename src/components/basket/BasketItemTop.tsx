import { getProductItemData } from '@/actions/product/getProductData'
import { basketListType } from '@/types/BasketTypes'
import CheckboxWithSvg from '../dummy/CheckboxWithSvg'
import ThinClose from '../icons/basket/ThinClose'
import { getBasketBrandName } from '@/actions/basket/getBasketListData'

interface itemProps {
  item: basketListType
}

export default async function BasketItemTop({ item }: itemProps) {
  const productData = await getProductItemData(item.productCode)
  const brandCode = productData?.brandCode
  let brandName = ''
  if (brandCode) {
    const brandData = await getBasketBrandName(brandCode)
    brandName = brandData.englishName
  } else {
    console.error('브랜드 코드가 없습니다.')
  }

  return (
    <div className="flex items-center justify-between mb-4">
      <fieldset className="flex items-center gap-4 ">
        <CheckboxWithSvg
          id={item.productCode}
          name={`${brandName} ${productData?.productName}`}
          checked={item.isChecked}
          // onChange={(e) => handleItemCheck(e, item, e.target.checked)}
        />

        <label htmlFor={item.productCode}>
          <div className="text-base flex gap-4">
            <p className=" text-black font-bold flex items-center">{brandName} </p>
            <p className="text-[14px] text-gray-500 flex items-center">{productData?.productName}</p>
          </div>
        </label>
      </fieldset>
      <div className="mx-2">
        <ThinClose />
      </div>
    </div>
  )
}

// import { getBasketBrandName, getBasketProduct } from '@/actions/basket/getBasketListData'
// import { basketListType } from '@/types/BasketTypes'
// import { useEffect, useState } from 'react'
// import CheckboxWithSvg from '../dummy/CheckboxWithSvg'
// import ThinClose from '../icons/basket/ThinClose'

// interface itemProps {
//   item: basketListType
// }

// export default function BasketItemTop({ item }: itemProps) {
//   const [productName, setProductName] = useState<string>('')
//   const [productBrandName, setProductBrandName] = useState<string>('')

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const [getProduct] = await Promise.all([getBasketProduct(item.productCode)])
//         const getBrand = await getBasketBrandName(getProduct.brandCode)

//         setProductName(getProduct.productName)
//         setProductBrandName(getBrand.englishName)
//       } catch (error) {
//         console.error('Error fetching data:', error)
//       }
//     }

//     fetchData()
//   }, [item.productCode])

//   return (
//     <div className="flex items-center justify-between mb-4">
//       <fieldset className="flex items-center gap-4 ">
//         <CheckboxWithSvg
//           id={item.productCode}
//           name={`${productBrandName} ${productName}`}
//           checked={item.isChecked}
//           // onChange={(e) => handleItemCheck(e, item, e.target.checked)}
//         />

//         <label htmlFor={item.productCode}>
//           <p className="text-base">
//             <span className=" text-black font-bold">{productBrandName} </span>
//             <span className="text-[14px] text-gray-500">{productName}</span>
//           </p>
//         </label>
//       </fieldset>
//       <ThinClose />
//     </div>
//   )
// }
