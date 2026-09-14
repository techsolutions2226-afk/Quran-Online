import type { Metadata } from "next";
import Link from "next/link";
import { AuthShell } from "@/components/auth/AuthShell";
import { BookTrialForm } from "@/components/auth/BookTrialForm";

export const metadata: Metadata = {
  title: "Book Free Trial | Quran Online",
  description: "Book a free Quran Online trial class with a qualified teacher.",
};

export default function BookTrialPage() {
  return (
    <AuthShell
      label="Free trial class"
      title={
        <>
          Book your <span className="text-teal">free trial</span>
        </>
      }
      description="Share a few details and we will arrange a complimentary one-on-one session."
      footer={
        <>
          Prefer an account?{" "}
          <Link href="/signup" className="font-semibold text-navy hover:text-teal">
            Sign up
          </Link>
          {" · "}
          <Link href="/login" className="font-semibold text-navy hover:text-teal">
            Log in
          </Link>
        </>
      }
    >
      <BookTrialForm />
    </AuthShell>
  );
}
