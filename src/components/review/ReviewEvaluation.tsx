export default function ReviewEvaluation({
  evaluationData,
  showRate = false,
  className,
}: {
  evaluationData: ReviewEvaluationType[]
  showRate: boolean
  className?: string
}) {
  return (
    <ul className={`flex flex-col gap-[8px] ${className}`}>
      {evaluationData.map((item, index) => (
        <li key={index} className="flex justify-between">
          <ul className="flex gap-[12px]">
            <li className="bg-[#929292] text-[#fff] inline-flex items-center justify-center w-[62px] h-[20px] text-[10px] font-bold">
              {item.name}
            </li>
            <li className="text-[14px] leading-[20px] text-[#141a23]">{item.value}</li>
          </ul>
          {showRate ? (
            <p className="flex gap-[5px] items-center text-[#141a23] leading-[20px]">
              <span className="text-[18px]">{item.rate}</span>
              <span className="text-[14px] ">%</span>
            </p>
          ) : (
            ''
          )}
        </li>
      ))}
    </ul>
  )
}
