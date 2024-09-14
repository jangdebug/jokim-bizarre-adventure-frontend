import Image from 'next/image'
import StarAverage from '../ui/StarAverage'

export default function ReviewSummarySection() {
  return (
    <section id="review" className="scroll-m-[36px] px-[24px] pb-[24px]">
      ReviewSummarySection
      <StarAverage reviewCount={5} starAverage={3.5} color="#c66d5s" />
    </section>
  )
}
