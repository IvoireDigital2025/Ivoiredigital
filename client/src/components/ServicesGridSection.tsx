import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { goToBooking } from "@/lib/utils";
import { services } from "@/lib/servicesContent";

export default function ServicesGridSection() {
  return (
    <section id="all-services" className="bg-ivoire-navy py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block bg-ivoire-gold/10 text-ivoire-gold text-sm font-semibold px-4 py-1.5 rounded-full mb-4 uppercase tracking-wide">
            What We Offer
          </span>
          <h2 className="font-display font-extrabold text-white text-3xl sm:text-4xl md:text-5xl leading-tight">
            Services That <span className="text-ivoire-gold">Grow Your Business</span>
          </h2>
          <p className="mt-4 text-lg text-white/60">
            From websites and social media to full AI automation — we build the tools that
            bring you more customers and save you hours every week. Click any service to
            learn more.
          </p>
        </motion.div>

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
                  <h3 className="text-white font-semibold text-lg leading-snug mb-2">
                    {service.title}
                  </h3>
                  <p className="text-white/60 text-sm leading-relaxed flex-grow">
                    {service.cardDesc}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1 text-ivoire-gold text-sm font-medium">
                    Learn more{" "}
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <button onClick={goToBooking} className="btn-gold rounded-lg px-8 py-4 text-base">
            Get These Services for Your Business
          </button>
        </motion.div>
      </div>
    </section>
  );
}
