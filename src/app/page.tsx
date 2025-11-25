import { Header } from "@/components/plr/header";
import { HeroSection } from "@/components/plr/hero-section";
import { PresentationSection } from "@/components/plr/presentation-section";
import { ShowcaseSection } from "@/components/plr/showcase-section";
import { KitContentsSection } from "@/components/plr/kit-contents-section";
import { ProductDescriptionSection } from "@/components/plr/product-description-section";
import { ActivitySamplesSection } from "@/components/plr/activity-samples-section";
import { PurposeSection } from "@/components/plr/purpose-section";
import { SalesPageSection } from "@/components/plr/sales-page-section";
import { LicenseSection } from "@/components/plr/license-section";
import { BenefitsSection } from "@/components/plr/benefits-section";
import { BonusSection } from "@/components/plr/bonus-section";
import { FaqSection } from "@/components/plr/faq-section";
import { FinalCtaSection } from "@/components/plr/final-cta-section";
import { CountdownTimer } from "@/components/plr/countdown-timer";
import { ScrollProgressBar } from "@/components/plr/scroll-progress-bar";
import { FloatingScrollGuide } from "@/components/plr/floating-scroll-guide";

export default function LandingPage() {
  return (
    <div className="font-sans">
      <ScrollProgressBar />
      <Header />
      <CountdownTimer />
      <FloatingScrollGuide />
      <main className="overflow-hidden">
        <HeroSection />
        <PresentationSection />
        <BenefitsSection />
        <ShowcaseSection />
        <KitContentsSection />
        <ProductDescriptionSection />
        <ActivitySamplesSection />
        <PurposeSection />
        <SalesPageSection />
        <LicenseSection />
        <BonusSection />
        <FaqSection />
        <FinalCtaSection />
      </main>
      
      <footer className="bg-gray-900 text-white py-6 text-center text-sm">
        <div className="container mx-auto px-4">
          <div className="flex justify-center space-x-4 mb-4">
            <a href="#" className="hover:text-blue-300">Política de Privacidade</a>
            <a href="#" className="hover:text-blue-300">Termos de Uso</a>
          </div>
          <p>© {new Date().getFullYear()} PLR Luz Infantil. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}