'use client'
import { useEffect, useState } from 'react'
import { Button } from '../ui/button'
import LetterButton from '../brand/LetterButton'
import PlusButtonIcon from '../icons/basket/PlusButtonIcon'
import MinusButtonIcon from '../icons/basket/MinusButtonIcon'
import Counter from './Counter'

const productOptionsDummy: ProductOptionType[] = [
  {
    productCode: '2406262345',
    optionCode: '1',
    optionName: '사이즈',
    optionValue: 's',
    quantity: 0,
    price: 400000,
  },
  {
    productCode: '2406262345',
    optionCode: '2',
    optionName: '사이즈',
    optionValue: 'm',
    quantity: 1,
    price: 400000,
  },
  {
    productCode: '2406262345',
    optionCode: '3',
    optionName: '사이즈',
    optionValue: 'l',
    quantity: 3,
    price: 400000,
  },
  {
    productCode: '2406262345',
    optionCode: '4',
    optionName: '사이즈',
    optionValue: 'xl',
    quantity: 2,
    price: 400000,
  },
]

export default function ProductDetailBottomNavigation({ productOptions }: { productOptions: ProductOptionType[] }) {
  // 모달 상태 관리
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [selectedOption, setSelectedOption] = useState<string>()
  const [currentQuantity, setCurrentQuantity] = useState<number>(1)

  // 버튼 클릭 시 모달 토글
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (isOpen) {
      console.log('이미 열린 상태', e.currentTarget.name)
    } else {
      setIsOpen(() => true)
    }
  }
  const handleClose = () => {
    setIsOpen(() => false)
  }

  const handleOptionClick = (selected: string) => {
    setCurrentQuantity(() => 1)
    setSelectedOption(() => selected)
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
            <Button name="buy" size={'full'} onClick={handleClick}>
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
            <p className="text-[12px] leading-[20px] text-[#a0a0a0] underline">{productOptionsDummy[0].optionName}</p>
            {/* optioin list */}
            <ul className="flex flex-row gap-[4px]">
              {productOptionsDummy.map(
                (item) =>
                  item.quantity > 0 && (
                    <LetterButton
                      className="w-[40px] h-[40px] text-[#131922]"
                      key={item.optionCode}
                      isSelected={selectedOption === item.optionCode}
                      onClick={() => handleOptionClick(item.optionCode)}
                      letter={item.optionValue}
                    />
                  ),
              )}
            </ul>
            {/* counter */}
            <Counter currentQuantity={currentQuantity} setCurrentQuantity={setCurrentQuantity} />

            {/* price */}
            <p className="flex justify-between items-center">
              <span className="text-[14px] leading-[20px] text-[#404040]">판매가</span>
              <span className=" font-bold text-[#131922]">
                {/* 해당 옵션의 가격을 정해줘야합니다. */}
                <span className="text-[24px] leading-[30px] pr-[2px]">{(currentQuantity * 4000).toLocaleString()}</span>
                <span className="text-[16px]">원</span>
              </span>
            </p>
          </div>
        </section>
      </div>
    </>
  )
}
