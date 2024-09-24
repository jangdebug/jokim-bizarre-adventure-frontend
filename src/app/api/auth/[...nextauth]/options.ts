import { userDataType } from '@/types/ResponseTypes'
import { NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import KakaoProvider from 'next-auth/providers/kakao'
import NaverProvider from 'next-auth/providers/naver'

export const options: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: { label: 'email', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(
        credentials: Record<string, string> | undefined, // 명시적 타입 정의
        req,
      ): Promise<any> {
        // 반환 타입 정의
        if (!credentials?.email || !credentials?.password) {
          return null
        }

        const res = await fetch(`${process.env.API_BASE_URL}/v1/auth/sign-in`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: credentials.email,
            password: credentials.password,
          }),
        })
        console.log('credentials', credentials)

        if (res.ok) {
          const user = await res.json()
          const data = user.result as userDataType
          return data
        } else {
          const errorResponse = await res.json()
          console.log('post error', errorResponse)
          throw new Error(errorResponse.message || 'Login failed')
        }
      },
    }),
    KakaoProvider({
      clientId: process.env.KAKAO_CLIENT_ID!,
      clientSecret: process.env.KAKAO_CLIENT_SECRET!,
    }),
    // 네이버 프로바이더
    NaverProvider({
      clientId: process.env.NAVER_CLIENT_ID!,
      clientSecret: process.env.NAVER_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      if (profile) {
        const res = await fetch(`${process.env.API_BASE_URL}/v1/auth/sign-in/oauth`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            oauthSocialId: account?.providerAccountId,
            email: user.email,
            name: user.name,
          }),
        })

        if (res.ok) {
          const responseData = await res.json()
          if (responseData.isSuccess) {
            const data = responseData.result as userDataType

            user.accessToken = data.accessToken
            user.refreshToken = data.refreshToken

            return true
          } else {
            return '/sign-up'
          }
        }
      }
      return true
    },

    async jwt({ token, user }) {
      if (user) {
        token.accessToken = user.accessToken
        token.refreshToken = user.refreshToken
      }

      return token
    },

    async session({ session, token }) {
      session.user = {
        ...session.user,
        accessToken: token.accessToken,
        refreshToken: token.refreshToken,
      }

      return session
    },
  },
  pages: {
    signIn: '/sign-in',
    error: '/error',
  },
}
