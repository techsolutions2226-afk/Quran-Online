"use client";

import { useId, useState } from "react";
import { IconMinus, IconPlus } from "@/components/shared/Icons";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils/cn";

const faqs = [
  {
    question: "Who can join Quran Online classes?",
    answer:
      "Children, teens, and adults at any level are welcome — from complete beginners to students refining Tajweed or pursuing Hifz.",
  },
  {
    question: "Are the classes one-on-one?",
    answer:
      "Yes. Every session is private so the teacher can focus on your pace, pronunciation, and goals without distraction.",
  },
  {
    question: "Which platforms do you use for classes?",
    answer:
      "You can learn on Zoom, WhatsApp, or Google Meet — whichever is most convenient for you and your family.",
  },
  {
    question: "Can I book a free trial before enrolling?",
    answer:
      "Absolutely. A free trial helps us assess your level, introduce the teaching style, and recommend the right course path.",
  },
  {
    question: "How flexible is the class schedule?",
    answer:
      "We offer flexible timings across the week. You can choose slots that fit school, work, and family routines.",
  },
];

export function FAQSection() {
  const baseId = useId();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="section-pad pt-2">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16">
          <SectionHeading
            align="left"
            label="Questions, Answered"
            title={
              <>
                Frequently Asked{" "}
                <span className="text-teal">Questions</span>
              </>
            }
            description="Clear answers to the most common questions about classes, scheduling, and getting started."
          />

          <div className="divide-y divide-border border-y border-border">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              const panelId = `${baseId}-panel-${index}`;
              const buttonId = `${baseId}-button-${index}`;

              return (
                <div key={faq.question} className="py-1">
                  <h3>
                    <button
                      id={buttonId}
                      type="button"
                      className="flex w-full cursor-pointer items-center justify-between gap-4 py-4 text-left"
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      onClick={() =>
                        setOpenIndex((current) =>
                          current === index ? null : index,
                        )
                      }
                    >
                      <span className="text-[0.95rem] font-semibold text-navy md:text-base">
                        {faq.question}
                      </span>
                      <span
                        className={cn(
                          "flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-border text-navy transition-colors",
                          isOpen && "bg-aqua border-transparent",
                        )}
                        aria-hidden
                      >
                        {isOpen ? <IconMinus /> : <IconPlus />}
                      </span>
                    </button>
                  </h3>
                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={buttonId}
                    className={cn(
                      "grid transition-[grid-template-rows] duration-200 ease-out",
                      isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
                    )}
                  >
                    <div className="overflow-hidden">
                      <p className="pb-4 pr-10 text-sm leading-relaxed text-text-muted">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
