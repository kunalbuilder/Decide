import { getToken } from "next-auth/jwt";
import { NextResponse, NextRequest } from "next/server";

export async function middleware(req: NextRequest) {
    const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

    const { pathname } = req.nextUrl;

    if (pathname.startsWith("/app") || pathname.startsWith("/api/protected")) {
        if (!token) {
            const url = new URL("/login", req.url);
            url.searchParams.set("callbackUrl", encodeURI(req.url));
            return NextResponse.redirect(url);
        }
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/app/:path*", "/api/protected/:path*"],
};
