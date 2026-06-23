import { motion } from "framer-motion";
import { openCalendly } from "@/lib/utils";
import { PhoneCall, Wrench, Rocket } from "lucide-react";

const steps = [
  {
    icon: PhoneCall,
    duration: "20 mins",
    title: "Discovery Call",
    desc: "We'll answer all your questions, show you the features you care about, and walk you through real client accounts and results. No pressure, just clarity.",
  },
  {
    icon: Wrench,
    duration: "7–10 days",
    title: "We Build Your System",
    desc: "Fill out a simple onboarding form with your business details. Then we get to work building your new website, AI automation, and marketing system.",
  },
  {
    icon: Rocket,
    duration: "25 mins",
    title: "Launch Call",
    desc: "We walk you through everything, answer your questions, and show you how it all works. And by everything, we mean pressing two buttons.",
  },
];

export default function ProcessSection() {
  return (
    <section id="process" className="bg-ivoire-navy py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display font-extrabold text-white text-3xl sm:text-4xl md:text-5xl leading-tight">
            What working with us <span className="text-ivoire-gold">looks like</span>
          </h2>
          <p className="mt-4 text-lg text-white/60">
            Three simple steps from hello to a fully-running growth system.
          </p>
        </motion.div>

        <div className="relative grid md:grid-cols-3 gap-8 md:gap-6">
          {/* connecting line on desktop */}
          <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gradient-to-r from-ivoire-gold/0 via-ivoire-gold/40 to-ivoire-gold/0" />

          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              className="relative text-center"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
            >
              <div className="relative mx-auto w-24 h-24 rounded-2xl bg-ivoire-navy-card border border-white/10 flex items-center justify-center mb-6">
                <step.icon className="w-10 h-10 text-ivoire-gold" />
                <span className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-ivoire-gold text-ivoire-navy font-display font-bold flex items-center justify-center text-sm">
                  {i + 1}
                </span>
              </div>
              <div className="inline-block text-ivoire-gold text-sm font-semibold mb-2">
                ({step.duration})
              </div>
              <h3 className="font-display font-bold text-white text-xl sm:text-2xl mb-3">
                {step.title}
              </h3>
              <p className="text-white/60 text-sm sm:text-base leading-relaxed max-w-xs mx-auto">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-14">
          <button onClick={openCalendly} className="btn-gold rounded-lg px-8 py-4 text-base">
            Book Your Discovery Call
          </button>
        </div>
      </div>
    </section>
  );
}
