export const courseOptions = [
  { value: "qaida", label: "Qaida" },
  { value: "hifz", label: "Hifz" },
  { value: "kirat", label: "Kirat" },
] as const;

export type CourseValue = (typeof courseOptions)[number]["value"];
