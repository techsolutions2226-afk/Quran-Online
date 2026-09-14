import type { Metadata } from "next";
import { AuthShell } from "@/components/auth/AuthShell";
import { LoginForm } from "@/components/auth/LoginForm";

export const metadata: Metadata = {
  title: "Log In | Quran Online",
  description: "Log in to your Quran Online account.",
};

type LoginPageProps = {
  searchParams: Promise<{ registered?: string }>;
};

export default async function LoginPage({ searchParams }: LoginPageProps) {
  const params = await searchParams;
  const justRegistered = params.registered === "1";

  return (
    <AuthShell
      label="Welcome back"
      title={
        <>
          Log in to <span className="text-teal">continue</span>
        </>
      }
      description="Access your account to manage classes and continue your Quran journey."
    >
      {justRegistered ? (
        <p
          className="mb-4 rounded-[var(--radius-button)] border border-teal/25 bg-aqua-soft px-3 py-2 text-sm text-navy"
          role="status"
        >
          Account created successfully. Please log in to continue.
        </p>
      ) : null}
      <LoginForm />
    </AuthShell>
  );
}
