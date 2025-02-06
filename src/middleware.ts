import { clerkMiddleware, createRouteMatcher, currentUser } from "@clerk/nextjs/server";

const isPublicRoute = createRouteMatcher(['/sign-in(.*)']);

export default clerkMiddleware(async (auth, request) => {
  // const user = await currentUser(); // Clerk se current user ka data lo

  if (!isPublicRoute(request)) {
    await auth.protect(); // Authentication enforce karo
  }

  // User metadata se role check karo
  // const userRole = user?.publicMetadata?.role || "customer"; 

  // const url = new URL(request.url);
  
  // // Admin ko /admin-dashboard bhejo
  // if (userRole === "admin" && !url.pathname.startsWith("/admin-dashboard")) {
  //   return Response.redirect(new URL("/admin-dashboard", request.url));
  // }

  // // Customer ko /customer-dashboard bhejo
  // if (userRole === "customer" && !url.pathname.startsWith("/customer-dashboard")) {
  //   return Response.redirect(new URL("/customer-dashboard", request.url));
  // }
});

export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};
