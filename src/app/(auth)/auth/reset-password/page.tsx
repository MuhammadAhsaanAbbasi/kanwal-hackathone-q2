"use client";
import { SignIn } from "@clerk/nextjs";

export default function ResetPasswordPage() {
  return (
    <div className="flex items-center justify-center min-h-screen px-4 py-8 mt-10 shadow-lg ">
      <div className="w-full max-w-md">
        <SignIn path="/auth/reset-password" routing="path" />
      </div>
    </div>
  );
}
