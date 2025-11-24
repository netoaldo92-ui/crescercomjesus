import { HeroSection } from "@/components/landing/hero-section";
import { ProblemSection } from "@/components/landing/problem-section";
import { ProductSection } from "@/components/landing/product-section";
import { WhatYouGetSection } from "@/components/landing/what-you-get-section";
import { TestimonialsSection } from "@/components/landing/testimonials-section";
import { OfferSection } from "@/components/landing/offer-section";
import { GuaranteeSection } from "@/components/landing/guarantee-section";
import { FaqSection } from "@/components/landing/faq-section";
import { PageFooter } from "@/components/landing/page-footer";
import { BackToTopButton } from "@/components/landing/back-to-top-button";

export default function LandingPage() {
  return (
    <div className="bg-background font-sans">
      <main>
        <HeroSection />
        <ProblemSection />
        <ProductSection />
        <WhatYouGetSection />
        <TestimonialsSection />
        <OfferSection />
        <GuaranteeSection />
        <FaqSection />
        <OfferSection /> {/* Repetir a oferta no final, como no site original */}
      </main>
      <PageFooter />
      <BackToTopButton />
    </div>
  );
}