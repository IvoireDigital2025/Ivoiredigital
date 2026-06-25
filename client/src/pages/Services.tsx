import { useEffect, useState } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import BookingSection from "@/components/BookingSection";
import { services } from "@/lib/servicesContent";
import { useSeo, businessJsonLd } from "@/lib/seo";

export default function Services() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useSeo({
    title: "Our Services — AI & Digital Marketing in Dallas–Fort Worth | Ivoire Digital",
    description:
      "Explore Ivoire Digital's full range of AI and digital marketing services for businesses in Dallas–Fort Worth and across the U.S. — websites, social media, automation, and more.",
    keywords:
      "AI marketing services Dallas, digital marketing agency Fort Worth, DFW business automation, AI agency near me, marketing services USA",
    path: "/services",
    jsonLd: businessJsonLd(),
  });

  return (
    <div className="font-sans text-white bg-ivoire-navy">
      <Header scrolled={scrolled} />

      <main>
        <section className="navy-grid relative overflow-hidden pt-28 sm:pt-32 pb-14 sm:pb-20">
          <div className="absolute top-1/4 right-0 w-[500px] h-[500px] rounded-full bg-ivoire-gold/10 blur-[120px] pointer-events-none" />
          <div className="container mx-auto px-4 sm:px-6 relative text-center max-w-3xl">
            <span className="inline-block bg-ivoire-gold/10 text-ivoire-gold text-sm font-semibold px-4 py-1.5 rounded-full mb-4 uppercase tracking-wide">
              What We Offer
            </span>
            <h1 className="font-display font-extrabold text-white text-4xl sm:text-5xl md:text-6xl leading-tight">
              Services That <span className="text-ivoire-gold">Grow Your Business</span>
            </h1>
            <p className="mt-5 text-lg text-white/65">
              From websites and social media to AI automation — explore everything we build
              for business owners in Dallas–Fort Worth and across the United States. Click
              any service to learn more.
            </p>
          </div>
        </section>

        <section className="bg-ivoire-navy py-14 sm:py-20">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
              {services.map((service, i) => {
                const Icon = service.icon;
                return (
                  <motion.div
                    key={service.slug}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: (i % 3) * 0.07 }}
                  >
                    <Link
                      href={`/services/${service.slug}`}
                      className="group flex flex-col h-full bg-ivoire-navy-card rounded-xl p-6 border border-white/5 hover:border-ivoire-gold/40 transition-all"
                    >
                      <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-ivoire-gold/10 flex items-center justify-center mb-4 group-hover:bg-ivoire-gold/20 transition-colors">
                        <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-ivoire-gold" />
                      </div>
                      <h2 className="text-white font-semibold text-lg leading-snug mb-2">
                        {service.title}
                      </h2>
                      <p className="text-white/60 text-sm leading-relaxed flex-grow">
                        {service.cardDesc}
                      </p>
                      <span className="mt-4 inline-flex items-center gap-1 text-ivoire-gold text-sm font-medium">
                        Learn more <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        <BookingSection />
      </main>

      <Footer />
      <BackToTop />
    </div>
  );
}
