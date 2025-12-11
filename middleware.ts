import { auth } from '@/lib/auth';
import { NextResponse } from 'next/server';

export default auth((req) => {
  const { pathname } = req.nextUrl;

  // Admin sayfaları için kontrol
  const isAdminRoute = pathname.startsWith('/admin');
  const isLoginPage = pathname === '/admin/giris';

  if (!isAdminRoute) {
    return NextResponse.next();
  }

  const isLoggedIn = !!req.auth;

  // Login sayfası hariç tüm admin sayfaları korumalı
  if (!isLoginPage && !isLoggedIn) {
    return NextResponse.redirect(new URL('/admin/giris', req.url));
  }

  // Zaten giriş yapmış kullanıcı login sayfasına gitmesin
  if (isLoginPage && isLoggedIn) {
    return NextResponse.redirect(new URL('/admin', req.url));
  }

  return NextResponse.next();
});

export const config = {
  matcher: ['/admin/:path*'],
};
