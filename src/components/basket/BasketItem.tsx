import { basketListType } from '@/types/BasketTypes'
import CouponDownloadIcon from '../icons/basket/CouponDownloadIcon'
import MinusButtonIcon from '../icons/basket/MinusButtonIcon'
import PlusButtonIcon from '../icons/basket/PlusButtonIcon'

import {
  basketQuantityChange,
  getBasketBrandName,
  getBasketProductImageUrl,
  getBasketProductPrice,
} from '@/actions/basket/getBasketListData'
import LikeButton from '../ui/LikeButton'
import { useEffect, useState } from 'react'
import Image from 'next/image'

interface BasketItemProps {
  item: basketListType
  productPrice: number
  setProductPrice: React.Dispatch<React.SetStateAction<number>>
}

export default function BasketItem({ item, productPrice, setProductPrice }: BasketItemProps) {
  const [productImg, setProductImge] = useState<string>('')
  const [productName, setProductName] = useState<string>('')
  const [productBrandName, setProductBrandName] = useState<string>('')

  const changePrice = async (type: number) => {
    await basketQuantityChange(item, type)
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [getPrice, getUrl] = await Promise.all([
          getBasketProductPrice(item.productCode),
          getBasketProductImageUrl(item.productCode),
        ])
        const getBrand = await getBasketBrandName(getPrice.brandCode)

        setProductPrice(getPrice.price)
        setProductName(getPrice.productName)
        setProductBrandName(getBrand.englishName)
        setProductImge(getUrl.mediaUrl)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    fetchData()
  }, [item.productCode])

  return (
    <>
      <input type="hidden" name="productCode" value={item.productCode} />
      <div className="flex">
        <div className="w-1/5 mr-6 relative">
          <div className="absolute top-[0px] right-[0px] z-[2]">
            <LikeButton type="product" targetId={item.productCode} />
          </div>
          {productImg && <Image src={productImg} width={100} height={100} alt={item.productCode} priority />}
          <div className="flex justify-center">
            <span className="text-xs text-gray-400 border-b-[1px]">옵션변경</span>
          </div>
        </div>

        <div className="flex flex-col flex-grow">
          <div className="h-[120px] flex flex-col justify-between pb-4 border-b-[1px]">
            <p className="flex gap-3 items-center">
              <span className=" text-black font-bold">{productBrandName}</span>
              <span className="text-xs text-gray-500">{productName}</span>
            </p>
            <div className="flex justify-between">
              <p>
                <span className="font-bold">{(productPrice * item.quantity).toLocaleString()}</span>원
              </p>
              <div className="flex border-[1px]">
                <div className="w-6 border-r-[1px] flex justify-center items-center" onClick={() => changePrice(1)}>
                  <MinusButtonIcon />
                </div>
                <div className="w-16 border-r-[1px]">
                  <p className="text-center">{item.quantity}</p>
                </div>
                <div className="w-6 flex justify-center items-center" onClick={() => changePrice(2)}>
                  <PlusButtonIcon />
                </div>
              </div>
            </div>
          </div>

          <div className="py-4 border-b-[1px]">
            <p className="text-xs flex gap-2">
              <span className="bg-gray-300 text-[10px]">S.I.</span>
              <span className="text-gray-400">
                {Math.round((productPrice * item.quantity * 0.005) / 10) * 10}p 적립
              </span>
            </p>
          </div>

          <div className="pb-5">
            <p className="text-gray-400 text-xs py-4">
              16시까지 결제시 <span className="font-bold text-[#d99c63]">오늘 출발</span>
            </p>
            <div>
              <div className="w-full border-[1px] flex justify-center items-center">
                <span className="text-xs my-2">5% 쿠폰</span>
                <CouponDownloadIcon />
              </div>
              <input type="button" id="coupon" />
              <label htmlFor="coupon">
                <span className="text-[10px] text-gray-400">사용가능 쿠폰 &gt;</span>
              </label>
            </div>
          </div>

          <div>
            <div className="w-full border-[1px] flex justify-center items-center">
              <span className="text-xs my-2">바로구매</span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
