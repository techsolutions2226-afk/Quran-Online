"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Label } from "@/components/ui/Label";
import { Select } from "@/components/ui/Select";
import { courseOptions } from "@/lib/constants/courses";

type FormState = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  course: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormState, string>>;

const initialState: FormState = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  course: "",
  message: "",
};

function validate(values: FormState): FormErrors {
  const errors: FormErrors = {};

  if (!values.firstName.trim()) errors.firstName = "First name is required.";
  if (!values.lastName.trim()) errors.lastName = "Last name is required.";
  if (!values.email.trim()) {
    errors.email = "Email is required.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = "Enter a valid email address.";
  }
  if (!values.phone.trim()) errors.phone = "Phone / WhatsApp is required.";
  if (!values.course) errors.course = "Please select a course.";

  return errors;
}

export function BookTrialForm() {
  const [values, setValues] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  function updateField<K extends keyof FormState>(key: K, value: FormState[K]) {
    setValues((current) => ({ ...current, [key]: value }));
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setSubmitting(true);
    // UI-only for now — API/backend wiring comes later.
    window.setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 400);
  }

  if (submitted) {
    return (
      <div className="space-y-4 text-center">
        <p className="font-display text-2xl font-semibold text-navy">
          Trial request received
        </p>
        <p className="text-sm leading-relaxed text-text-muted">
          Thank you, {values.firstName}. We will contact you soon to schedule
          your free trial class.
        </p>
        <div className="flex flex-wrap justify-center gap-3 pt-2">
          <Button href="/">Back to Home</Button>
          <Button href="/signup" variant="secondary">
            Create an account
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4" noValidate>
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
        <Label htmlFor="phone">Phone / WhatsApp</Label>
        <Input
          id="phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          placeholder="+92 300 0000000"
          value={values.phone}
          onChange={(event) => updateField("phone", event.target.value)}
          error={errors.phone}
        />
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
        <Label htmlFor="message">Message (optional)</Label>
        <textarea
          id="message"
          name="message"
          rows={3}
          placeholder="Share your preferred timing or any notes"
          value={values.message}
          onChange={(event) => updateField("message", event.target.value)}
          className="w-full rounded-[var(--radius-button)] border border-border bg-surface px-3.5 py-2.5 text-sm text-text placeholder:text-text-soft transition-colors duration-200 hover:border-navy/20 focus:border-teal focus:outline-none focus:ring-2 focus:ring-teal/20"
        />
      </div>

      <Button type="submit" className="mt-2 w-full" disabled={submitting}>
        {submitting ? "Submitting..." : "Book Free Trial"}
      </Button>

      <p className="pt-1 text-center text-sm text-text-muted">
        Want an account first?{" "}
        <Link href="/signup" className="font-semibold text-navy hover:text-teal">
          Sign up
        </Link>
        {" · "}
        <Link href="/login" className="font-semibold text-navy hover:text-teal">
          Log in
        </Link>
      </p>
    </form>
  );
}
