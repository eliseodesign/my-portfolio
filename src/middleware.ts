import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export const middleware = (req: NextRequest) => {
  if(req.nextUrl.pathname === '/'){
    return NextResponse.redirect(new URL('home', req.url))
  }
}