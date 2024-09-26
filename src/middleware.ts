import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { getToken } from 'next-auth/jwt'
import { routes } from './app/config/routes'

const FALLBACK_URL = '/'

// 인증이 필요한 경로에 대한 처리
const withAuth = async (req: NextRequest, token: boolean) => {
  const url = req.nextUrl.clone()
  const { pathname } = req.nextUrl

  if (!token) {
    url.pathname = routes.signIn
    url.search = `callbackUrl=${pathname}`
    return NextResponse.redirect(url)
  }
}

// 인증이 불필요한 경로에 대한 처리
const withOutAuth = async (req: NextRequest, token: boolean, to: string | null) => {
  const url = req.nextUrl.clone()
  if (token) {
    url.pathname = to ?? FALLBACK_URL
    url.search = ''
    return NextResponse.redirect(url)
  }
}

const withAuthList = [routes.basket, routes.mypage]
const withOutAuthList = [routes.signIn]

// 두 코드를 합친 통합 미들웨어 함수
export default async function middleware(request: NextRequest) {
  const token = await getToken({
    req: request,
    secret: process.env.NEXTAUTH_SECRET,
  })
  const accessToken = token?.accessToken
  const { searchParams, pathname } = request.nextUrl
  const callbackUrl = searchParams.get('callbackUrl')
  const isWithAuth = withAuthList.includes(pathname)
  const isWithOutAuth = withOutAuthList.includes(pathname)

  // 인증 경로 처리
  if (isWithAuth) return withAuth(request, !!accessToken)
  else if (isWithOutAuth) return withOutAuth(request, !!accessToken, callbackUrl)

  // 특정 경로에 query parameter가 없는 경우 자동으로 추가
  const url = request.nextUrl.clone()

  // 상품 경로에 'type' 파라미터 추가
  if (pathname.startsWith('/product')) {
    if (!searchParams.has('type')) {
      searchParams.set('type', '0')
      url.search = searchParams.toString()
      return NextResponse.redirect(url)
    }
  }

  // 카테고리 경로에 'main' 파라미터 추가
  if (pathname.startsWith('/category')) {
    if (!searchParams.has('main')) {
      searchParams.set('main', '여성의류')
      url.search = searchParams.toString()
      return NextResponse.redirect(url)
    }
  }

  // 'sign-in/find-account' 경로에 'target' 파라미터 추가
  if (pathname.startsWith('/sign-in/find-account')) {
    if (!searchParams.has('target')) {
      searchParams.set('target', 'id')
      url.search = searchParams.toString()
      return NextResponse.redirect(url)
    }
  }

  // 인기 상품 경로에 'type' 파라미터 추가
  if (pathname.startsWith('/best/popular')) {
    if (!searchParams.has('type')) {
      searchParams.set('type', 'ALL')
      url.search = searchParams.toString()
      return NextResponse.redirect(url)
    }
  }

  // 선물 경로에 'type' 파라미터 추가
  if (pathname.startsWith('/best/gift')) {
    if (!searchParams.has('type')) {
      searchParams.set('type', 'ALL')
      url.search = searchParams.toString()
      return NextResponse.redirect(url)
    }
  }
  if (pathname.startsWith('/mypage/beautysize')) {
    if (!searchParams.has('type')) {
      searchParams.set('type', 'Add')
      url.search = searchParams.toString()
      return NextResponse.redirect(url)
    }
  }

  // 그 외 경로는 다음 미들웨어로 진행
  return NextResponse.next()
}

// matcher 설정
export const config = {
  matcher: [
    '/product/:path*',
    '/category/:path*',
    '/sign-in/find-account/:path*',
    '/best/:path*',
    '/mypage/beautysize/:path*',
    '/((?!api|_next/static|_next/image|favicon.ico|fonts|images).*)', // 인증 미들웨어 적용 경로
  ],
}
