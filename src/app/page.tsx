import { HeroSection } from "@/components/landing/hero-section";
import { BenefitsSection } from "@/components/landing/benefits-section";
import { IncludedSection } from "@/components/landing/included-section";
import { TestimonialsSection } from "@/components/landing/testimonials-section";
import { OfferSection } from "@/components/landing/offer-section";
import { CommunitySection } from "@/components/landing/community-section";
import { GuaranteeSection } from "@/components/landing/guarantee-section";
import { AboutSection } from "@/components/landing/about-section";
import { PageFooter } from "@/components/landing/page-footer";
import { FloatingWhatsAppButton } from "@/components/landing/floating-whatsapp-button";

export default function LandingPage() {
  return (
    <div className="bg-white font-sans">
      <main>
        <HeroSection />
        <BenefitsSection />
        <IncludedSection />
        <TestimonialsSection />
        <OfferSection />
        <CommunitySection />
        <GuaranteeSection />
        <AboutSection />
      </main>
      <PageFooter />
      <FloatingWhatsAppButton />
    </div>
  );
}