


"use client";

import { SignIn, SignUp } from '@clerk/nextjs';
import { useUser } from '@clerk/nextjs';
import { useRouter } from 'next/navigation'; // Import useRouter for programmatic navigation

export default function AuthPage() {
  const { isSignedIn } = useUser();  // Hook to check if the user is signed in
  const router = useRouter();  // Get router object

  if (isSignedIn) {
    // Redirect to dashboard when signed in
    router.push("/dashboard"); 
    return null; // Return null to avoid rendering the rest of the page
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 py-8">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8">
        Sign In or Sign Up
      </h1>
      
      <div className="w-full max-w-lg space-y-6">
        <div className="w-full">
          {/* Use Clerk's pre-built SignIn component */}
          <SignIn path="/auth/sign-in" routing="path" />
        </div>
        
        <div className="w-full">
          {/* Use Clerk's pre-built SignUp component */}
          <SignUp path="/auth/sign-up" routing="path" />
        </div>
      </div>
    </div>
  );
}
