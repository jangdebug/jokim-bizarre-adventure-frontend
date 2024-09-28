'use client'
import { useEffect, useState } from 'react'
import LetterButton from '../brand/LetterButton'
import { Button } from '../ui/button'
import Counter from './Counter'
import { postProduct } from '@/actions/product/postProductData'
import { useRouter } from 'next/navigation'

// const productOptionsDummy: ProductOptionType[] = [
//   {
//     productCode: '2406262345',
//     optionCode: '1',
//     optionName: '사이즈',
//     optionValue: 's',
//     quantity: 0,
//     price: 400000,
//   },
//   {
//     productCode: '2406262345',
//     optionCode: '2',
//     optionName: '사이즈',
//     optionValue: 'm',
//     quantity: 1,
//     price: 400000,
//   },
//   {
//     productCode: '2406262345',
//     optionCode: '3',
//     optionName: '사이즈',
//     optionValue: 'l',
//     quantity: 3,
//     price: 400000,
//   },
//   {
//     productCode: '2406262345',
//     optionCode: '4',
//     optionName: '사이즈',
//     optionValue: 'xl',
//     quantity: 2,
//     price: 400000,
//   },
// ]

interface productBasketProps {
  productCode: string
  productOptions: ProductOptionDataType[]
  price: number
}

export default function ProductDetailBottomNavigation({ productCode, productOptions, price }: productBasketProps) {
  const router = useRouter()

  // 모달 상태 관리
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [selectedOption, setSelectedOption] = useState<string>(productOptions[0].productOptionCode)
  const [currentQuantity, setCurrentQuantity] = useState<number>(1)
  const [targetMaxQuantity, setTargetMaxQuantity] = useState<number>(productOptions[0].stock)

  // 버튼 클릭 시 모달 토글
  const handleClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    if (isOpen) {
      const target = e.currentTarget.name
      const res = await postProduct(target, productCode, selectedOption, String(currentQuantity))
      if (res) {
        setIsOpen(() => false)
        router.push('/order')
      }
    } else {
      setIsOpen(() => true)
    }
  }
  const handleClose = () => {
    setIsOpen(() => false)
  }

  const handleOptionClick = (selected: string, quantity: number) => {
    setCurrentQuantity(() => 1)
    setSelectedOption(() => selected)
    setTargetMaxQuantity(() => quantity)
  }

  const handleOutsideClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      setIsOpen(false)
    }
  }

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  return (
    <>
      <nav className="fixed bottom-0 left-0 h-[56px] w-full z-[55]">
        <ul className="flex items-center justify-between w-full h-full">
          <li className="w-full h-full">
            <Button name="basket" className="bg-[#787878]" size={'full'} onClick={handleClick}>
              쇼핑백
            </Button>
          </li>
          <li className="w-full h-full">
            <Button name="order" size={'full'} onClick={handleClick}>
              바로구매
            </Button>
          </li>
        </ul>
      </nav>

      {/* modal */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-[50] flex justify-center items-end transition-opacity duration-500 ease-in-out 
          ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={handleOutsideClick}
      >
        <section
          className={`transition-transform duration-500 ease-in-out bg-white w-full max-h-[50%] px-[24px] pb-[56px] transform 
            ${isOpen ? 'translate-y-0' : 'translate-y-full'}`}
        >
          <div className="w-full pt-[8px] pb-[28px] flex justify-center">
            <button onClick={handleClose} className="w-[48px] h-[4px] bg-[#e0e0e0]" />
          </div>
          {/* options inner */}
          <div className="pb-[16px] flex flex-col gap-[16px]">
            {/* option name */}
            <p className="text-[12px] leading-[20px] text-[#a0a0a0] underline">옵션/사이즈</p>
            {/* optioin list */}

            {/* with api */}
            <ul className="flex flex-row gap-[4px]">
              {productOptions.map(
                (item) =>
                  item.stock > 0 && (
                    <LetterButton
                      className="w-[40px] h-[40px] text-[#131922]"
                      key={item.productOptionCode}
                      isSelected={selectedOption === item.productOptionCode}
                      onClick={() => handleOptionClick(item.productOptionCode, item.stock)}
                      letter={item.sizeValues}
                    />
                  ),
              )}
            </ul>
            {/* counter */}
            <Counter
              currentQuantity={currentQuantity}
              setCurrentQuantity={setCurrentQuantity}
              maxQuantity={targetMaxQuantity}
            />

            {/* price */}
            <p className="flex justify-between items-center">
              <span className="text-[14px] leading-[20px] text-[#404040]">판매가</span>
              <span className=" font-bold text-[#131922]">
                {/* 해당 옵션의 가격을 정해줘야합니다. */}
                <span className="text-[24px] leading-[30px] pr-[2px]">
                  {(currentQuantity * price).toLocaleString()}
                </span>
                <span className="text-[16px]">원</span>
              </span>
            </p>
          </div>
        </section>
      </div>
    </>
  )
}
