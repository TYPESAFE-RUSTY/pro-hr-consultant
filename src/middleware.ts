import NextAuth from "next-auth"
import authConfig from "./auth.config"
import { publicRoutes, apiAuthPrefix } from "./routes"
import { NextRequest, NextResponse } from "next/server"

const { auth } = NextAuth(authConfig)

export default auth((req) => {
    const { nextUrl } = req;
    const loggedin = !!req.auth;

    const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix);
    const isPublicRoute = publicRoutes.includes(nextUrl.pathname);

    if (process.env.NODE_ENV !== "production") {
        console.log(
            "Middleware log ->",
            "ROUTE:", nextUrl.pathname,
            "TYPE:", isPublicRoute ? "PUBLIC" : "PROTECTED", isApiAuthRoute ? "AUTH" : ""
        )
    }

    if (isApiAuthRoute) {
        return NextResponse.next();
    }

    if (!isPublicRoute) {
        // check if signed in if not redirect to login page
        if (loggedin) {
            return NextResponse.next()
        } else {
            const url = new URL("/auth/signin", nextUrl)
            return Response.redirect(url);
            // uncomment this to test on mobile 
            // return NextResponse.next()
        }
    }

    return NextResponse.next();

})

export const config = {
    matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};