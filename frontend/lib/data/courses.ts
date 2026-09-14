import {
  IconBook,
  IconBrain,
  IconLanguage,
  IconMic,
} from "@/components/shared/Icons";

export const coursesData = [
  {
    slug: "qaida-nazra",
    number: "01",
    title: "Qaida & Nazra",
    shortDescription:
      "Build a strong foundation in Arabic letters, pronunciation, and fluent reading.",
    description:
      "Start from the basics with a calm, structured introduction to Arabic letters, joining rules, and fluent reading. Ideal for beginners of all ages who want a confident foundation before moving into Quran recitation.",
    highlights: [
      "Arabic alphabet and letter forms",
      "Correct pronunciation from day one",
      "Joining letters and short words",
      "Smooth transition into Nazra reading",
    ],
    level: "Beginner",
    format: "One-on-one live classes",
    icon: IconBook,
  },
  {
    slug: "quran-reading-tajweed",
    number: "02",
    title: "Quran Reading & Tajweed",
    shortDescription:
      "Improve accuracy, rhythm, and beauty of recitation with guided Tajweed practice.",
    description:
      "Refine your recitation with practical Tajweed guidance. Teachers focus on clarity, rhythm, and confidence so every student can recite with accuracy and beauty.",
    highlights: [
      "Core Tajweed rules made simple",
      "Live correction during every class",
      "Fluency and rhythm practice",
      "Suitable for kids and adults",
    ],
    level: "Beginner to Intermediate",
    format: "One-on-one live classes",
    icon: IconMic,
  },
  {
    slug: "hifz-memorization",
    number: "03",
    title: "Hifz & Quran Memorization",
    shortDescription:
      "Memorize with a clear plan, revision routines, and steady teacher support.",
    description:
      "Follow a personal memorization plan with balanced new lessons and revision. Progress stays steady without feeling rushed, with teacher support at every stage.",
    highlights: [
      "Personalized Hifz roadmap",
      "Daily revision structure",
      "Retention-focused teaching",
      "Progress tracking each week",
    ],
    level: "Intermediate to Advanced",
    format: "One-on-one live classes",
    icon: IconBrain,
  },
  {
    slug: "arabic-language",
    number: "04",
    title: "Arabic Language",
    shortDescription:
      "Develop practical Arabic skills that deepen understanding of the Quran.",
    description:
      "Build useful Arabic vocabulary, reading skills, and comprehension that support a deeper connection with the Quran — taught in a clear, supportive way.",
    highlights: [
      "Practical vocabulary and phrases",
      "Reading and comprehension skills",
      "Grammar explained simply",
      "Quran-focused learning path",
    ],
    level: "All levels",
    format: "One-on-one live classes",
    icon: IconLanguage,
  },
] as const;
