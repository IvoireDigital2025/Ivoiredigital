import { motion } from "framer-motion";
import { openCalendly, CONTACT_PHONE, CONTACT_PHONE_HREF } from "@/lib/utils";
import { Phone, ArrowRight } from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="bg-ivoire-navy py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-ivoire-navy-card to-ivoire-navy-deep border border-ivoire-gold/20 px-6 py-12 sm:px-12 sm:py-16 text-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-80 h-80 rounded-full bg-ivoire-gold/10 blur-[100px] pointer-events-none" />

          <div className="relative">
            <h2 className="font-display font-extrabold text-white text-3xl sm:text-4xl md:text-5xl leading-tight max-w-3xl mx-auto">
              Ready to get your phone <span className="text-ivoire-gold">ringing?</span>
            </h2>
            <p className="mt-5 text-lg text-white/70 max-w-2xl mx-auto">
              Book a free 20-minute call. We'll show you exactly how Ivoire can
              bring you more customers — no pressure, no commitment.
            </p>
            <div className="mt-9 flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={openCalendly}
                className="btn-gold rounded-lg px-8 py-4 text-base flex items-center gap-2 w-full sm:w-auto justify-center"
              >
                Book A Call <ArrowRight className="w-4 h-4" />
              </button>
              <a
                href={CONTACT_PHONE_HREF}
                className="flex items-center gap-2 text-white border-2 border-white/25 hover:border-ivoire-gold rounded-lg px-8 py-4 text-base font-semibold transition-colors w-full sm:w-auto justify-center"
              >
                <Phone className="w-4 h-4" /> {CONTACT_PHONE}
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
