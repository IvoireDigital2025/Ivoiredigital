import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import FeaturesSection from "@/components/FeaturesSection";
import ServicesGridSection from "@/components/ServicesGridSection";
import ContentShowcaseSection from "@/components/ContentShowcaseSection";
import IndustriesSection from "@/components/IndustriesSection";
import ProcessSection from "@/components/ProcessSection";
import WhyUsSection from "@/components/WhyUsSection";
import FinalCTA from "@/components/FinalCTA";
import BookingSection from "@/components/BookingSection";
import ContactSection from "@/components/ContactSection";
import BackToTop from "@/components/BackToTop";
import LiveChatWidget from "@/components/LiveChatWidget";
import LocalSeoSection from "@/components/LocalSeoSection";
import Footer from "@/components/Footer";
import { useEffect, useState } from "react";
import { useSeo, businessJsonLd } from "@/lib/seo";

export default function Home() {
  const [scrolled, setScrolled] = useState(false);

  useSeo({
    title:
      "Ivoire Digital | AI & Digital Marketing Agency in Dallas–Fort Worth",
    description:
      "Ivoire Digital builds websites, runs social media, creates content, and sets up AI automation for businesses in Dallas–Fort Worth and across the U.S. Book a free call.",
    keywords:
      "AI marketing agency Dallas, digital marketing Fort Worth, DFW web design, social media management Dallas, business automation USA, AI agency near me",
    path: "/",
    jsonLd: businessJsonLd(),
  });

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

  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (!hash) return;
    const timer = setTimeout(() => {
      const el = document.getElementById(hash);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="font-sans text-white bg-ivoire-navy">
      <Header scrolled={scrolled} />
      <main>
        <HeroSection />
        <TestimonialsCarousel />
        <FeaturesSection />
        <ServicesGridSection />
        <ContentShowcaseSection />
        <IndustriesSection />
        <ProcessSection />
        <WhyUsSection />
        <LocalSeoSection />
        <FinalCTA />
        <BookingSection />
        <ContactSection />
      </main>
      <Footer />
      <BackToTop />
      <LiveChatWidget />
    </div>
  );
}
