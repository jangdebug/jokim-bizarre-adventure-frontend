import React from 'react'
import ElseRank from './ElseRank'
import FirstRank from './FirstRank'

interface rankProps {
  rank: number
}

export default function RecommendItemRank({ rank }: rankProps) {
  return (
    <div className="relative">
      {rank === 1 ? <FirstRank /> : <ElseRank />}

      <div className={`absolute top-[-2px] ${rank < 10 ? 'left-[10px]' : 'left-[6px]'}`}>
        <span className="text-white text-xs">{rank}</span>
      </div>
    </div>
  )
}
