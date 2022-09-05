import { NextFetchEvent, NextRequest, NextResponse } from "next/server";
import { jwt } from "../utils";


export function middleware(request: NextRequest) {
    if (request.nextUrl.pathname.startsWith('/checkout/address')) {
       checkoutAddress(request);
    }
  
    if (request.nextUrl.pathname.startsWith('/dashboard')) {
      return NextResponse.rewrite(new URL('/dashboard/user', request.url))
    }
  }

async function checkoutAddress(req:NextRequest){

    const response = NextResponse.next()
    const token = req.cookies.get('token')!;
    console.log(token)
    try {
        await jwt.isValidToken(token);
        return NextResponse.next();
    } catch (error) {
        const requestedPage = req.url;
        NextResponse.redirect(`/auth/login?p=${requestedPage}`)
    }

}