import { HeroSection } from "@/components/landing/hero-section";
import { BenefitsSection } from "@/components/landing/benefits-section";
import { CategoriesSection } from "@/components/landing/categories-section";
import { TestimonialsSection } from "@/components/landing/testimonials-section";
import { OfferSection } from "@/components/landing/offer-section";
import { AffiliateSection } from "@/components/landing/affiliate-section";
import { GuaranteeSection } from "@/components/landing/guarantee-section";
import { AboutSection } from "@/components/landing/about-section";
import { PageFooter } from "@/components/landing/page-footer";

export default function LandingPage() {
  return (
    <div className="bg-white font-sans">
      <main>
        <HeroSection />
        <BenefitsSection />
        <CategoriesSection />
        <TestimonialsSection />
        <OfferSection />
        <AffiliateSection />
        <GuaranteeSection />
        <AboutSection />
      </main>
      <PageFooter />
    </div>
  );
}