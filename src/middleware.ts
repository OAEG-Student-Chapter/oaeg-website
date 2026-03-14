import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

const isAdminRoute = createRouteMatcher(["/admin(.*)"]);

export default clerkMiddleware(async (auth, req) => {
  if (isAdminRoute(req)) {
    const authObj = await auth();
    // Check if user is logged in
    if (!authObj.userId) {
      return authObj.redirectToSignIn({ returnBackUrl: req.url });
    }

    // Using simple role metadata check
    // Ensure that you set `publicMetadata: { role: "ADMIN" }` in the Clerk Dashboard for admin users
    // if ((authObj.sessionClaims?.publicMetadata as any)?.role !== "ADMIN") {
    //   // For a more structured role approach you might check `orgRole` or other ways, 
    //   // but metadata is straightforward.
    //   return new NextResponse("Unauthorized", { status: 403 });
    // }
  }
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};
