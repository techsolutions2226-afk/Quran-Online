import type { Metadata } from "next";
import { AuthShell } from "@/components/auth/AuthShell";
import { SignupForm } from "@/components/auth/SignupForm";

export const metadata: Metadata = {
  title: "Sign Up | Quran Online",
  description: "Create your Quran Online account and start learning.",
};

export default function SignupPage() {
  return (
    <AuthShell
      label="Create account"
      title={
        <>
          Join <span className="text-teal">Quran Online</span>
        </>
      }
      description="Sign up to begin your Quran learning journey with a course that fits your goals."
    >
      <SignupForm />
    </AuthShell>
  );
}
