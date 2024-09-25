import MinusButtonIcon from '../icons/basket/MinusButtonIcon'
import PlusButtonIcon from '../icons/basket/PlusButtonIcon'

interface CounterProps {
  currentQuantity: number
  setCurrentQuantity: React.Dispatch<React.SetStateAction<number>>
}

export default function Counter({ currentQuantity, setCurrentQuantity }: CounterProps) {
  const handleMinus = () => {
    setCurrentQuantity((prevValue) => Math.max(prevValue - 1, 1)) // 1보다 작아지지 않도록 설정
  }

  const handlePlus = () => {
    setCurrentQuantity((prevValue) => prevValue + 1) // 값 증가
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = Number(e.target.value)
    if (newValue >= 1) {
      setCurrentQuantity(newValue) // 1보다 크거나 같으면 상태 업데이트
    }
  }

  return (
    <div className="flex flex-row justify-center items-center">
      <button className="border w-[48px] h-[48px] shrink-0 flex items-center justify-center" onClick={handleMinus}>
        <MinusButtonIcon />
      </button>
      <input
        type="number"
        value={currentQuantity}
        onChange={handleChange}
        min="1" // 입력 필드에서 최소값을 1로 설정
        className="text-center focus-visible:outline-none w-full h-[48px] border no-spinner"
      />
      <button className="border w-[48px] h-[48px] shrink-0 flex items-center justify-center" onClick={handlePlus}>
        <PlusButtonIcon />
      </button>
    </div>
  )
}
