'use client'
import React from 'react'
import { SessionContext } from '../context/SessionContext'

export const AuthContextProvider = ({
  isAuth,
  children,
}: {
  isAuth: { accessToken: string; refreshToken: string } | null
  children: React.ReactNode
}) => {
  return <SessionContext.Provider value={isAuth}>{children}</SessionContext.Provider>
}

export default AuthContextProvider
