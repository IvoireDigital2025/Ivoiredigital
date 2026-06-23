import { motion } from "framer-motion";
import {
  MousePointerClick,
  PiggyBank,
  FileX2,
  MessageCircleOff,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";

const reasons = [
  {
    icon: MousePointerClick,
    title: "Simple To Use",
    desc: "We built everything around one idea: it has to be dead simple. If you can text, you can use it.",
  },
  {
    icon: PiggyBank,
    title: "Affordable",
    desc: "Our pricing is designed to keep you for 10 years, not 10 weeks. We're in it for the long haul.",
  },
  {
    icon: FileX2,
    title: "No Contracts",
    desc: "If it's affordable and it works, why lock you in? If you're happy, you'll stay.",
  },
  {
    icon: MessageCircleOff,
    title: "No Fluff",
    desc: "We don't believe in jargon. We tell you exactly what we'll do, then we do it. Period.",
  },
  {
    icon: ShieldCheck,
    title: "We Have Proof",
    desc: "We already know what works and have the reviews and results to back it up.",
  },
  {
    icon: TrendingUp,
    title: "Constant Improvements",
    desc: "We regularly upgrade our systems so you always get the best value for your money.",
  },
];

export default function WhyUsSection() {
  return (
    <section className="bg-ivoire-navy-deep py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display font-extrabold text-white text-3xl sm:text-4xl md:text-5xl leading-tight">
            Why businesses <span className="text-ivoire-gold">choose Ivoire</span>
          </h2>
          <p className="mt-4 text-lg text-white/60">
            No gimmicks. Just systems that bring you more customers.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              className="bg-ivoire-navy-card rounded-2xl p-7 border border-white/5 hover:border-ivoire-gold/30 transition-all"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: (i % 3) * 0.08 }}
            >
              <div className="w-12 h-12 rounded-xl bg-ivoire-gold/10 flex items-center justify-center mb-4">
                <r.icon className="w-6 h-6 text-ivoire-gold" />
              </div>
              <h3 className="font-display font-bold text-white text-lg mb-2">{r.title}</h3>
              <p className="text-white/60 text-sm leading-relaxed">{r.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
