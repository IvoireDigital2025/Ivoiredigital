import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import FeaturesSection from "@/components/FeaturesSection";
import IndustriesSection from "@/components/IndustriesSection";
import ProcessSection from "@/components/ProcessSection";
import WhyUsSection from "@/components/WhyUsSection";
import FinalCTA from "@/components/FinalCTA";
import BookingSection from "@/components/BookingSection";
import ContactSection from "@/components/ContactSection";
import BackToTop from "@/components/BackToTop";
import LiveChatWidget from "@/components/LiveChatWidget";
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
    <div className="font-sans text-white bg-ivoire-navy">
      <Header scrolled={scrolled} />
      <main>
        <HeroSection />
        <TestimonialsCarousel />
        <FeaturesSection />
        <IndustriesSection />
        <ProcessSection />
        <WhyUsSection />
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
