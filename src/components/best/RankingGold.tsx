import React from 'react'

export default function RankingGoldRankingGray({
  width = 24,
  height = 30,
  className,
}: {
  width?: number
  height?: number
  className?: string
}) {
  return (
    <svg width={width} height={height} xmlns="http://www.w3.org/2000/svg">
      <path d="M24 0H0v30l24-6.196z" fill="#D99C63" fillRule="evenodd" />
    </svg>
  )
}
