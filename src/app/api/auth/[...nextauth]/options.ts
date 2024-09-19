import { commonResType, userDataType } from '@/types/ResponseTypes'
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

        console.log('credentials', credentials)
        const res = await fetch(`http://localhost:8080/api/v1/auth/sign-in`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: credentials.email,
            password: credentials.password,
          }),
        })

        if (res.ok) {
          const user = (await res.json()) as commonResType<userDataType>
          console.log('user', user.data)
          const data = user.data as userDataType
          return data
        }
        return null
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
      console.log('signIn', user, account, profile)
      if (profile) {
        console.log(profile)
        // 회원인지 아닌지 확인
        const res = await fetch(`${process.env.API_BASE_URL}/auth/oauth2`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            oauthId: user.id,
          }),
        })
        console.log(res)
        if (res.ok) {
          const user = await res.json()
          console.log('ssg user', user)
          this.session = user
          // 회원정보를 받아서 세션에 저장
        }

        console.log('not ssg user', user)
        // 회원이 아니면 회원가입 페이지로 이동

        //
      }

      return 'sign-up'
    },

    async jwt({ token, user }) {
      return { ...token, ...user }
    },

    async session({ session, token }) {
      session.user = token as any
      return session
    },
  },
  pages: {
    signIn: '/sign-in',
    error: '/error',
  },
}
