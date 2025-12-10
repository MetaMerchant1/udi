import { NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';
import type { NextRequest } from 'next/server';

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Admin sayfaları için kontrol
  const isAdminRoute = pathname.startsWith('/admin');
  const isLoginPage = pathname === '/admin/giris';

  if (!isAdminRoute) {
    return NextResponse.next();
  }

  // JWT token kontrolü (edge-compatible)
  const token = await getToken({
    req,
    secret: process.env.AUTH_SECRET,
  });

  const isLoggedIn = !!token;

  // Login sayfası hariç tüm admin sayfaları korumalı
  if (!isLoginPage && !isLoggedIn) {
    return NextResponse.redirect(new URL('/admin/giris', req.url));
  }

  // Zaten giriş yapmış kullanıcı login sayfasına gitmesin
  if (isLoginPage && isLoggedIn) {
    return NextResponse.redirect(new URL('/admin', req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*'],
};
