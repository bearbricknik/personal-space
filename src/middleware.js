import { NextResponse } from 'next/server'

export function middleware() {

  /**
   * The `event.waitUntil` function is the real magic here.
   * It enables the response to proceed without waiting for the completion of `sendAnalytics()`.
   * This ensures that the user experience remains uninterrupted and free from unnecessary delays.
   */
  return NextResponse.next()
}

export const config = {
  // matcher: '/writing/:path/'
  // The below solution also filters out the user navigations which is not desired:
  // See: https://github.com/vercel/next.js/discussions/37736#discussioncomment-7886601
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
    {
      source: '/writing/:path/',
      missing: [
        { type: 'header', key: 'next-router-prefetch' },
        { type: 'header', key: 'purpose', value: 'prefetch' }
      ]
    }
  ]
}
