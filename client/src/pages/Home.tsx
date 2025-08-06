import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import BusinessTargetSection from "@/components/BusinessTargetSection";
import AnimatedServiceShowcase from "@/components/AnimatedServiceShowcase";
import AutomatedWebsiteShowcase from "@/components/AutomatedWebsiteShowcase";
import ServicesSection from "@/components/ServicesSection";
import AIShowcaseSection from "@/components/AIShowcaseSection";
import AboutSection from "@/components/AboutSection";
import PortfolioSection from "@/components/PortfolioSection";
import ClientShowcaseSection from "@/components/ClientShowcaseSection";
import BlogSection from "@/components/BlogSection";
import FAQSection from "@/components/FAQSection";
import GuidesSection from "@/components/GuidesSection";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import WebsiteAuditTool from "@/components/WebsiteAuditTool";
import ROICalculator from "@/components/ROICalculator";
import LiveChatWidget from "@/components/LiveChatWidget";

import CTASection from "@/components/CTASection";
import BookingSection from "@/components/BookingSection";
import ContactSection from "@/components/ContactSection";
import SectionDivider from "@/components/SectionDivider";
import BackToTop from "@/components/BackToTop";
import Footer from "@/components/Footer";
import { useEffect, useState } from "react";
import { Fragment } from "react";

export default function Home() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Group sections into logical content blocks
  const mainContent = [
    { Component: HeroSection, id: "hero" },
    { Component: BusinessTargetSection, id: "business-target" },
    { Component: AnimatedServiceShowcase, id: "animated-services" },
    { Component: AutomatedWebsiteShowcase, id: "automated-websites" },
    { Component: ServicesSection, id: "services" },
    { Component: AIShowcaseSection, id: "ai-showcase" },
    { Component: PortfolioSection, id: "portfolio" },
    { Component: ClientShowcaseSection, id: "client-showcase" }
  ];

  const leadGenContent = [
    { Component: WebsiteAuditTool, id: "website-audit" },
    { Component: ROICalculator, id: "roi-calculator" }
  ];

  const resourcesContent = [
    { Component: CaseStudiesSection, id: "case-studies" },
    { Component: GuidesSection, id: "guides" }
  ];

  const aboutContent = [
    { Component: AboutSection, id: "about" },
    { Component: FAQSection, id: "faq" }
  ];

  return (
    <div className="font-inter text-gray-800 bg-gray-50">
      <Header scrolled={scrolled} />
      <main>
        {/* Main Marketing Content */}
        {mainContent.map(({ Component, id }, index) => (
          <Component key={id} />
        ))}

        {/* Lead Generation Tools Divider */}
        <SectionDivider 
          title="Free Business Tools" 
          subtitle="Discover your potential with our AI-powered assessment tools"
        />
        
        {/* Lead Generation Tools */}
        {leadGenContent.map(({ Component, id }, index) => (
          <Component key={id} />
        ))}

        {/* Client Success & Resources Section */}
        {resourcesContent.map(({ Component, id }, index) => (
          <Component key={id} />
        ))}

        {/* Company Information Divider */}
        <SectionDivider 
          title="About Our Services" 
          subtitle="Learn more about our approach and frequently asked questions"
        />
        
        {/* Company Information */}
        {aboutContent.map(({ Component, id }, index) => (
          <Component key={id} />
        ))}

        {/* Call to Action and Contact */}
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
