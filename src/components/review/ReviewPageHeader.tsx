import Xicon from '../icons/review/Xicon'

export default function ReviewPageHeader() {
  return (
    <header className="sticky top-0 left-0 w-full z-[60] bg-white">
      <p className=" text-[18px] font-[500] text-center leading-[26px] py-[15px]">리뷰 전체 보기</p>
      <div className="absolute top-[12px] right-[12px]">
        <Xicon />
      </div>
    </header>
  )
}
