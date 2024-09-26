'use client'
import { createContext, useContext } from 'react'

type AuthType = {
  accessToken: string
  refreshToken: string
} | null

// Context 생성: 기본값을 Session | null로 설정
export const SessionContext = createContext<AuthType>(null)

// 커스텀 훅
export const useSession = () => useContext(SessionContext)
