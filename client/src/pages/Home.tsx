import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import BusinessTargetSection from "@/components/BusinessTargetSection";
import AnimatedServiceShowcase from "@/components/AnimatedServiceShowcase";
import AutomatedWebsiteShowcase from "@/components/AutomatedWebsiteShowcase";
import ServicesSection from "@/components/ServicesSection";
import AIShowcaseSection from "@/components/AIShowcaseSection";
import AboutSection from "@/components/AboutSection";
import PortfolioSection from "@/components/PortfolioSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import BlogSection from "@/components/BlogSection";
import FAQSection from "@/components/FAQSection";
import GuidesSection from "@/components/GuidesSection";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import AboutUsPage from "@/components/AboutUsPage";
import CTASection from "@/components/CTASection";
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
    { Component: TestimonialsSection, id: "testimonials" }
  ];

  const resourcesContent = [
    { Component: BlogSection, id: "blog" },
    { Component: CaseStudiesSection, id: "case-studies" },
    { Component: GuidesSection, id: "guides" }
  ];

  const aboutContent = [
    { Component: AboutSection, id: "about" },
    { Component: AboutUsPage, id: "about-us" },
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

        {/* Resources Section Divider */}
        <SectionDivider 
          title="Resources & Insights" 
          subtitle="Valuable content to help your business grow with AI and digital marketing"
        />
        
        {/* Resources Section */}
        {resourcesContent.map(({ Component, id }, index) => (
          <Component key={id} />
        ))}

        {/* Company Information Divider */}
        <SectionDivider 
          title="About Ivoire Digital" 
          subtitle="Learn who we are and how we help Dallas businesses succeed"
        />
        
        {/* Company Information */}
        {aboutContent.map(({ Component, id }, index) => (
          <Component key={id} />
        ))}

        {/* Call to Action and Contact */}
        <CTASection />
        <ContactSection />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}
