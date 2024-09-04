import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(req: NextRequest) {
  const url = req.nextUrl.clone()
  const { pathname, searchParams } = url

  if (pathname.startsWith('/product')) {
    if (!searchParams.has('type')) {
      searchParams.set('type', '0')
      url.search = searchParams.toString()
      return NextResponse.redirect(url)
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/product/:path*'],
}
