import CheckboxWithSvg from '../dummy/CheckboxWithSvg'
import ReviewIcon from '../icons/review/ReviewIcon'

export default function ReviewListSection() {
  return (
    <section>
      <div className="relative px-[24px] flex items-center justify-start h-[56px] border-b border-[#f0f0f0]">
        <label>
          <div className="flex items-center gap-[8px]">
            <CheckboxWithSvg />
            <span className="text-[14px] leading-[20px] text-[#404040] font-[500]">나와 비슷한 리뷰</span>
          </div>
        </label>
        <button className="absolute right-[16px]">
          <ReviewIcon />
        </button>
      </div>
      <div>helo</div>
    </section>
  )
}
