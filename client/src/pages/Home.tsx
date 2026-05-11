import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import BusinessTargetSection from "@/components/BusinessTargetSection";
import AnimatedServiceShowcase from "@/components/AnimatedServiceShowcase";
import AutomatedWebsiteShowcase from "@/components/AutomatedWebsiteShowcase";
import ServicesSection from "@/components/ServicesSection";
import PortfolioSection from "@/components/PortfolioSection";
import FAQSection from "@/components/FAQSection";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import ROICalculator from "@/components/ROICalculator";
import LiveChatWidget from "@/components/LiveChatWidget";
import CTASection from "@/components/CTASection";
import BookingSection from "@/components/BookingSection";
import ContactSection from "@/components/ContactSection";
import SectionDivider from "@/components/SectionDivider";
import BackToTop from "@/components/BackToTop";
import Footer from "@/components/Footer";
import { useEffect, useState } from "react";

export default function Home() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="font-inter text-gray-800 bg-gray-50">
      <Header scrolled={scrolled} />
      <main>
        <HeroSection />
        <BusinessTargetSection />
        <AnimatedServiceShowcase />
        <AutomatedWebsiteShowcase />
        <ServicesSection />
        <PortfolioSection />

        <ROICalculator />

        <CaseStudiesSection />

        <SectionDivider
          title="About Our Services"
          subtitle="Learn more about our approach and frequently asked questions"
        />
        <FAQSection />

        <CTASection />
        <BookingSection />
        <ContactSection />
      </main>
      <Footer />
      <BackToTop />
      <LiveChatWidget />
    </div>
  );
}
