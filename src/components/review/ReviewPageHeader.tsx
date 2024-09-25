'use client'
import { useRouter } from 'next/navigation'
import Xicon from '../icons/review/Xicon'

export default function ReviewPageHeader() {
  const router = useRouter()
  const handleClick = () => {
    router.back()
  }
  return (
    <header className="sticky top-0 left-0 w-full z-[60] bg-white">
      <p className=" text-[18px] font-[500] text-center leading-[26px] py-[15px]">리뷰 전체 보기</p>
      <button className="absolute top-[12px] right-[12px]" onClick={handleClick}>
        <Xicon />
      </button>
    </header>
  )
}
