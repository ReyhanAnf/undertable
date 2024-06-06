import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { getSessionData } from './app/getSession'
 
// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const auth = getSessionData();
  if(!auth){
    return NextResponse.redirect(new URL('/redirect/shouldsign', request.url))
  }
}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: '/:path*/upload',
}