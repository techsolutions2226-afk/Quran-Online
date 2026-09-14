import { CTASection } from "@/components/home/CTASection";
import { CoursesSection } from "@/components/home/CoursesSection";
import { FAQSection } from "@/components/home/FAQSection";
import { HeroSection } from "@/components/home/HeroSection";
import { LearningFitsSection } from "@/components/home/LearningFitsSection";
import { LearningPathSection } from "@/components/home/LearningPathSection";
import { PlatformsSection } from "@/components/home/PlatformsSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { ThreeStepsSection } from "@/components/home/ThreeStepsSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <CoursesSection />
      <LearningFitsSection />
      <LearningPathSection />
      <ThreeStepsSection />
      <PlatformsSection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
    </main>
  );
}
