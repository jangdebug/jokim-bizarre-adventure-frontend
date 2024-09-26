'use client'

import { useState } from 'react'
import EmptyHeartIcon from '../icons/product/EmptyHeartIcon'
import FilledHeartIcon from '../icons/product/FilledHeartIcon'
import { useSession } from '@/app/context/SessionContext'
import { changeLikeAction } from '@/actions/like/getLikeData'

interface LikeButtonProps {
  type: 'product' | 'event' | 'brand' | 'best' | 'basket'
  targetId: string
  currentState?: boolean
}

// LikeButton 컴포넌트
export default function LikeButton({ type, targetId, currentState = false }: LikeButtonProps) {
  const auth = useSession()

  const [isLiked, setIsLiked] = useState<boolean>(currentState)

  const handleLikeState = async () => {
    if (auth?.accessToken !== null && auth?.accessToken !== undefined) {
      const res = await changeLikeAction(!isLiked, type, targetId, auth?.accessToken)

      if (res.isSuccess) {
        //console.log('Like status:', !isLiked, 'Type:', type, 'Target ID:', targetId)
        setIsLiked((prev) => !prev)
      }
    }
  }

  return <button onClick={handleLikeState}>{isLiked ? <FilledHeartIcon /> : <EmptyHeartIcon />}</button>
}
