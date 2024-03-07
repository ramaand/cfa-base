// import { NextRequest, NextResponse } from 'next/server';
// import withAuth from '@/middlewares/withAuth';
// export function mainMiddleware(req: NextRequest) {
//   const res = NextResponse.next();
//   return res;
// }
// export default withAuth(mainMiddleware, ['/cms']);
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  return NextResponse.redirect(new URL('/home', request.url));
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: '/cms/:path*',
};
