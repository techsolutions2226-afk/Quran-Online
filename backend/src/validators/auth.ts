import { z } from "zod";
import { ValidationError } from "../errors/app-error";

const courseSchema = z.enum(["qaida", "hifz", "kirat"], {
  message: "Please select a valid course.",
});

const passwordSchema = z
  .string()
  .min(8, "Password must be at least 8 characters.")
  .max(72, "Password must be at most 72 characters.")
  .regex(/[A-Za-z]/, "Password must include at least one letter.")
  .regex(/[0-9]/, "Password must include at least one number.");

export const signupSchema = z
  .object({
    firstName: z
      .string()
      .trim()
      .min(1, "First name is required.")
      .max(50, "First name must be at most 50 characters."),
    lastName: z
      .string()
      .trim()
      .min(1, "Last name is required.")
      .max(50, "Last name must be at most 50 characters."),
    course: courseSchema,
    email: z
      .string()
      .trim()
      .email("Enter a valid email address.")
      .max(254, "Email must be at most 254 characters.")
      .transform((value) => value.toLowerCase()),
    password: passwordSchema,
    confirmPassword: z.string().min(1, "Please confirm your password."),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match.",
    path: ["confirmPassword"],
  });

export const loginSchema = z.object({
  email: z
    .string()
    .trim()
    .email("Enter a valid email address.")
    .max(254, "Email must be at most 254 characters.")
    .transform((value) => value.toLowerCase()),
  password: z.string().min(1, "Password is required."),
});

export type SignupInput = z.infer<typeof signupSchema>;
export type LoginInput = z.infer<typeof loginSchema>;

function formatZodErrors(error: z.ZodError): Record<string, string[]> {
  const details: Record<string, string[]> = {};

  for (const issue of error.issues) {
    const key = issue.path.length > 0 ? String(issue.path[0]) : "form";
    if (!details[key]) {
      details[key] = [];
    }
    details[key].push(issue.message);
  }

  return details;
}

export function parseSignupInput(input: unknown): SignupInput {
  const result = signupSchema.safeParse(input);
  if (!result.success) {
    throw new ValidationError(
      "Please correct the highlighted fields.",
      formatZodErrors(result.error),
    );
  }
  return result.data;
}

export function parseLoginInput(input: unknown): LoginInput {
  const result = loginSchema.safeParse(input);
  if (!result.success) {
    throw new ValidationError(
      "Please correct the highlighted fields.",
      formatZodErrors(result.error),
    );
  }
  return result.data;
}
