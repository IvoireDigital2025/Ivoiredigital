import { useEffect, useState } from "react";
import { useParams, Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowLeft, Check, ArrowRight, MapPin } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import BookingSection from "@/components/BookingSection";
import NotFound from "@/pages/not-found";
import { goToBooking } from "@/lib/utils";
import { services, getService } from "@/lib/servicesContent";
import { useSeo, serviceJsonLd, DFW_CITIES } from "@/lib/seo";

export default function ServiceDetail() {
  const params = useParams();
  const slug = params.slug ?? "";
  const service = getService(slug);

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  useSeo({
    title: service ? service.seo.title : "Service Not Found | Ivoire Digital",
    description: service ? service.seo.description : "",
    keywords: service?.seo.keywords,
    path: `/services/${slug}`,
    jsonLd: service
      ? serviceJsonLd(service.title, service.seo.description, `/services/${slug}`)
      : undefined,
  });

  if (!service) {
    return <NotFound />;
  }

  const Icon = service.icon;
  const related = services.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <div className="font-sans text-white bg-ivoire-navy">
      <Header scrolled={scrolled} />

      <main>
        {/* Hero */}
        <section className="navy-grid relative overflow-hidden pt-28 sm:pt-32 pb-14 sm:pb-20">
          <div className="absolute top-1/4 right-0 w-[500px] h-[500px] rounded-full bg-ivoire-gold/10 blur-[120px] pointer-events-none" />
          <div className="container mx-auto px-4 sm:px-6 relative">
            <div className="flex flex-wrap items-center gap-2 text-sm text-white/50 mb-8">
              <Link href="/" className="hover:text-ivoire-gold transition-colors">
                Home
              </Link>
              <span>/</span>
              <Link href="/services" className="hover:text-ivoire-gold transition-colors">
                Services
              </Link>
              <span>/</span>
              <span className="text-white/80">{service.title}</span>
            </div>

            <motion.div
              className="max-w-3xl"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="w-14 h-14 rounded-xl bg-ivoire-gold/15 flex items-center justify-center mb-6">
                <Icon className="w-7 h-7 text-ivoire-gold" />
              </div>
              <h1 className="font-display font-extrabold text-white leading-tight text-4xl sm:text-5xl md:text-6xl">
                {service.title}
              </h1>
              <p className="mt-5 text-lg sm:text-xl text-ivoire-gold/90 font-medium">
                {service.tagline}
              </p>
              <p className="mt-3 text-base sm:text-lg text-white/60">
                Serving business owners in Dallas–Fort Worth and across the United States.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <button
                  onClick={goToBooking}
                  className="btn-gold rounded-lg px-8 py-4 text-base w-full sm:w-auto"
                >
                  Book A Free Call
                </button>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center gap-2 rounded-lg px-8 py-4 text-base border border-white/15 text-white/80 hover:border-ivoire-gold/40 hover:text-white transition-all w-full sm:w-auto"
                >
                  <ArrowLeft className="w-4 h-4" /> All Services
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Overview */}
        <section className="bg-ivoire-navy py-14 sm:py-20 border-t border-white/5">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-3xl">
              <span className="inline-block bg-ivoire-gold/10 text-ivoire-gold text-sm font-semibold px-4 py-1.5 rounded-full mb-5 uppercase tracking-wide">
                Overview
              </span>
              <div className="space-y-4">
                {service.overview.map((p, i) => (
                  <p key={i} className="text-lg text-white/70 leading-relaxed">
                    {p}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Features + Benefits */}
        <section className="bg-ivoire-navy-deep py-14 sm:py-20">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
              <div className="bg-ivoire-navy-card rounded-2xl p-7 sm:p-9 border border-white/5">
                <h2 className="font-display font-bold text-white text-2xl sm:text-3xl mb-6">
                  What's Included
                </h2>
                <ul className="space-y-4">
                  {service.features.map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <span className="mt-0.5 flex-shrink-0 w-6 h-6 rounded-full bg-ivoire-gold/15 flex items-center justify-center">
                        <Check className="w-3.5 h-3.5 text-ivoire-gold" />
                      </span>
                      <span className="text-white/75 leading-relaxed">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-ivoire-navy-card rounded-2xl p-7 sm:p-9 border border-white/5">
                <h2 className="font-display font-bold text-white text-2xl sm:text-3xl mb-6">
                  Why It Matters
                </h2>
                <ul className="space-y-4">
                  {service.benefits.map((b) => (
                    <li key={b} className="flex items-start gap-3">
                      <span className="mt-0.5 flex-shrink-0 w-6 h-6 rounded-full bg-ivoire-gold/15 flex items-center justify-center">
                        <ArrowRight className="w-3.5 h-3.5 text-ivoire-gold" />
                      </span>
                      <span className="text-white/75 leading-relaxed">{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Service area / SEO band */}
        <section className="bg-ivoire-navy py-14 sm:py-20 border-t border-white/5">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-3xl">
              <div className="flex items-center gap-2 text-ivoire-gold mb-4">
                <MapPin className="w-5 h-5" />
                <span className="font-semibold uppercase tracking-wide text-sm">
                  Where We Work
                </span>
              </div>
              <h2 className="font-display font-bold text-white text-2xl sm:text-3xl mb-4">
                {service.title} in Dallas–Fort Worth &amp; nationwide
              </h2>
              <p className="text-lg text-white/70 leading-relaxed">
                Ivoire Digital is based in the Dallas–Fort Worth metroplex and proudly
                serves local businesses in {DFW_CITIES.slice(0, 8).join(", ")}, and the
                surrounding area. Because everything we build runs in the cloud, we deliver
                the same {service.title.toLowerCase()} to business owners anywhere in the
                United States.
              </p>
            </div>
          </div>
        </section>

        {/* Booking */}
        <BookingSection />

        {/* Related services */}
        <section className="bg-ivoire-navy-deep py-14 sm:py-20 border-t border-white/5">
          <div className="container mx-auto px-4 sm:px-6">
            <h2 className="font-display font-bold text-white text-2xl sm:text-3xl mb-8 text-center">
              Explore More Services
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {related.map((r) => {
                const RIcon = r.icon;
                return (
                  <Link
                    key={r.slug}
                    href={`/services/${r.slug}`}
                    className="group bg-ivoire-navy-card rounded-xl p-6 border border-white/5 hover:border-ivoire-gold/40 transition-all"
                  >
                    <div className="w-12 h-12 rounded-xl bg-ivoire-gold/10 flex items-center justify-center mb-4 group-hover:bg-ivoire-gold/20 transition-colors">
                      <RIcon className="w-6 h-6 text-ivoire-gold" />
                    </div>
                    <h3 className="text-white font-semibold text-lg mb-2 leading-snug">
                      {r.title}
                    </h3>
                    <span className="inline-flex items-center gap-1 text-ivoire-gold text-sm font-medium">
                      Learn more <ArrowRight className="w-4 h-4" />
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <BackToTop />
    </div>
  );
}
