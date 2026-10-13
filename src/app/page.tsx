import { HeroSection } from "@/components/home/HeroSection";
import { ClaritySection } from "@/components/home/ClaritySection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { AboutSection } from "@/components/home/AboutSection";
import { WhyChooseSection } from "@/components/home/WhyChooseSection";
import { ProcessSection } from "@/components/home/ProcessSection";
import { EMICalculatorSection } from "@/components/home/EMICalculatorSection";
import { ServiceStandardsSection } from "@/components/home/ServiceStandardsSection";
import { PartnerSection } from "@/components/home/PartnerSection";
import { FAQSection } from "@/components/home/FAQSection";
import { FinalCTASection } from "@/components/home/FinalCTASection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ClaritySection />
      <ServicesSection />
      <AboutSection />
      <WhyChooseSection />
      <ProcessSection />
      <EMICalculatorSection />
      <ServiceStandardsSection />
      <PartnerSection />
      <FAQSection />
      <FinalCTASection />
    </>
  );
}
