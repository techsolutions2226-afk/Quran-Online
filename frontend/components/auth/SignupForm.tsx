"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Label } from "@/components/ui/Label";
import { Select } from "@/components/ui/Select";
import { courseOptions } from "@/lib/constants/courses";
import {
  ApiClientError,
  mapDetailsToFieldErrors,
  signupRequest,
} from "@/lib/api/auth-client";

type FormState = {
  firstName: string;
  lastName: string;
  course: string;
  email: string;
  password: string;
  confirmPassword: string;
};

type FormErrors = Partial<Record<keyof FormState, string>>;

const initialState: FormState = {
  firstName: "",
  lastName: "",
  course: "",
  email: "",
  password: "",
  confirmPassword: "",
};

export function SignupForm() {
  const router = useRouter();
  const [values, setValues] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<FormErrors>({});
  const [formError, setFormError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  function updateField<K extends keyof FormState>(key: K, value: FormState[K]) {
    setValues((current) => ({ ...current, [key]: value }));
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setFormError(null);
    setErrors({});
    setSubmitting(true);

    try {
      await signupRequest(values);
      router.push("/login?registered=1");
      router.refresh();
    } catch (error) {
      if (error instanceof ApiClientError) {
        setErrors(mapDetailsToFieldErrors(error.details) as FormErrors);
        setFormError(error.message);
      } else {
        setFormError("Something went wrong. Please try again.");
      }
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4" noValidate>
      {formError ? (
        <p
          className="rounded-[var(--radius-button)] border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700"
          role="alert"
        >
          {formError}
        </p>
      ) : null}

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <Label htmlFor="firstName">First name</Label>
          <Input
            id="firstName"
            name="firstName"
            autoComplete="given-name"
            placeholder="First name"
            value={values.firstName}
            onChange={(event) => updateField("firstName", event.target.value)}
            error={errors.firstName}
          />
        </div>
        <div>
          <Label htmlFor="lastName">Last name</Label>
          <Input
            id="lastName"
            name="lastName"
            autoComplete="family-name"
            placeholder="Last name"
            value={values.lastName}
            onChange={(event) => updateField("lastName", event.target.value)}
            error={errors.lastName}
          />
        </div>
      </div>

      <div>
        <Label htmlFor="course">Course</Label>
        <Select
          id="course"
          name="course"
          placeholder="Select a course"
          options={[...courseOptions]}
          value={values.course}
          onChange={(event) => updateField("course", event.target.value)}
          error={errors.course}
        />
      </div>

      <div>
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          placeholder="you@example.com"
          value={values.email}
          onChange={(event) => updateField("email", event.target.value)}
          error={errors.email}
        />
      </div>

      <div>
        <Label htmlFor="password">Password</Label>
        <Input
          id="password"
          name="password"
          type="password"
          autoComplete="new-password"
          placeholder="Create a password"
          value={values.password}
          onChange={(event) => updateField("password", event.target.value)}
          error={errors.password}
        />
      </div>

      <div>
        <Label htmlFor="confirmPassword">Confirm password</Label>
        <Input
          id="confirmPassword"
          name="confirmPassword"
          type="password"
          autoComplete="new-password"
          placeholder="Confirm your password"
          value={values.confirmPassword}
          onChange={(event) =>
            updateField("confirmPassword", event.target.value)
          }
          error={errors.confirmPassword}
        />
      </div>

      <Button type="submit" className="mt-2 w-full" disabled={submitting}>
        {submitting ? "Creating account..." : "Create account"}
      </Button>

      <p className="pt-1 text-center text-sm text-text-muted">
        Already have an account?{" "}
        <Link href="/login" className="font-semibold text-navy hover:text-teal">
          Log in
        </Link>
      </p>
    </form>
  );
}
