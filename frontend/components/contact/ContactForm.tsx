"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Label } from "@/components/ui/Label";
import { siteConfig } from "@/lib/constants/site";

type FormState = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormState, string>>;

const initialState: FormState = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

function validate(values: FormState): FormErrors {
  const errors: FormErrors = {};
  if (!values.name.trim()) errors.name = "Name is required.";
  if (!values.email.trim()) {
    errors.email = "Email is required.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = "Enter a valid email address.";
  }
  if (!values.subject.trim()) errors.subject = "Subject is required.";
  if (!values.message.trim()) errors.message = "Message is required.";
  return errors;
}

export function ContactForm() {
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
    window.setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 400);
  }

  if (submitted) {
    return (
      <div className="card-surface p-8 text-center">
        <h2 className="font-display text-2xl font-semibold text-navy">
          Message sent
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-text-muted">
          Thank you, {values.name}. We will get back to you at {values.email}{" "}
          soon.
        </p>
        <div className="mt-6">
          <Button href="/">Back to Home</Button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="card-surface space-y-4 p-6 md:p-8" noValidate>
      <div>
        <Label htmlFor="name">Full name</Label>
        <Input
          id="name"
          name="name"
          autoComplete="name"
          placeholder="Your name"
          value={values.name}
          onChange={(event) => updateField("name", event.target.value)}
          error={errors.name}
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
        <Label htmlFor="subject">Subject</Label>
        <Input
          id="subject"
          name="subject"
          placeholder="How can we help?"
          value={values.subject}
          onChange={(event) => updateField("subject", event.target.value)}
          error={errors.subject}
        />
      </div>

      <div>
        <Label htmlFor="message">Message</Label>
        <textarea
          id="message"
          name="message"
          rows={5}
          placeholder="Write your message"
          value={values.message}
          onChange={(event) => updateField("message", event.target.value)}
          aria-invalid={Boolean(errors.message)}
          className="w-full rounded-[var(--radius-button)] border border-border bg-surface px-3.5 py-2.5 text-sm text-text placeholder:text-text-soft transition-colors duration-200 hover:border-navy/20 focus:border-teal focus:outline-none focus:ring-2 focus:ring-teal/20"
        />
        {errors.message ? (
          <p className="mt-1.5 text-xs text-red-600">{errors.message}</p>
        ) : null}
      </div>

      <Button type="submit" className="w-full" disabled={submitting}>
        {submitting ? "Sending..." : "Send message"}
      </Button>

      <p className="text-center text-xs text-text-soft">
        Or email us at{" "}
        <a
          href={`mailto:${siteConfig.email}`}
          className="font-medium text-navy hover:text-teal"
        >
          {siteConfig.email}
        </a>
      </p>
    </form>
  );
}
