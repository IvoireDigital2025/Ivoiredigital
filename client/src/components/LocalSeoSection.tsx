import { motion } from "framer-motion";
import { MapPin, Building2, Globe2 } from "lucide-react";
import { goToBooking } from "@/lib/utils";
import { DFW_CITIES } from "@/lib/seo";

export default function LocalSeoSection() {
  return (
    <section id="dfw" className="bg-ivoire-navy-deep py-16 sm:py-24 border-t border-white/5">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-2 text-ivoire-gold mb-4">
              <MapPin className="w-5 h-5" />
              <span className="font-semibold uppercase tracking-wide text-sm">
                Proudly Based in Dallas–Fort Worth
              </span>
            </div>
            <h2 className="font-display font-extrabold text-white text-3xl sm:text-4xl md:text-5xl leading-tight">
              Your Dallas–Fort Worth{" "}
              <span className="text-ivoire-gold">AI &amp; Marketing Partner</span>
            </h2>
            <p className="mt-5 text-lg text-white/70 leading-relaxed">
              Ivoire Digital is a Dallas-based agency built to help local business owners
              grow. We design websites, run social media, create content, and set up AI
              automation for companies right here in the DFW metroplex — from family-owned
              shops to growing service businesses.
            </p>
            <p className="mt-4 text-lg text-white/70 leading-relaxed">
              And because everything we build runs in the cloud, we deliver the same
              results to business owners anywhere in the United States. Local roots,
              nationwide reach.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <button
                onClick={goToBooking}
                className="btn-gold rounded-lg px-8 py-4 text-base w-full sm:w-auto"
              >
                Book A Free Call
              </button>
            </div>
          </motion.div>

          <motion.div
            className="grid gap-5"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <div className="bg-ivoire-navy-card rounded-2xl p-7 border border-white/5">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-11 h-11 rounded-xl bg-ivoire-gold/15 flex items-center justify-center">
                  <Building2 className="w-5 h-5 text-ivoire-gold" />
                </span>
                <h3 className="text-white font-semibold text-lg">
                  Serving the DFW Metroplex
                </h3>
              </div>
              <p className="text-white/60 text-sm leading-relaxed mb-4">
                We work with businesses across Dallas–Fort Worth and the surrounding
                communities, including:
              </p>
              <div className="flex flex-wrap gap-2">
                {DFW_CITIES.map((city) => (
                  <span
                    key={city}
                    className="text-xs font-medium text-white/75 bg-white/5 border border-white/10 rounded-full px-3 py-1.5"
                  >
                    {city}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-ivoire-navy-card rounded-2xl p-7 border border-white/5">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-11 h-11 rounded-xl bg-ivoire-gold/15 flex items-center justify-center">
                  <Globe2 className="w-5 h-5 text-ivoire-gold" />
                </span>
                <h3 className="text-white font-semibold text-lg">
                  Working Nationwide
                </h3>
              </div>
              <p className="text-white/60 text-sm leading-relaxed">
                Outside of Texas? No problem. We partner with business owners across the
                United States — same systems, same hands-on support, all delivered
                remotely.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
