import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "If you are looking for someone to get that phone ringing, they're the right fit for you! I'm so happy with them!",
    name: "Cody R.",
    role: "Service Business Owner",
  },
  {
    quote:
      "They built me a new website and within 10 days I got my first lead I didn't pay for. Best money I've spent.",
    name: "Armando G.",
    role: "Local Retailer",
  },
  {
    quote:
      "After going through 2-3 other agencies I finally found someone that told me the truth. Easy to work with and very respectable.",
    name: "James T.",
    role: "Clinic Owner",
  },
  {
    quote:
      "Ever since they implemented the new website and landing pages our conversions went way up. We started getting calls almost immediately.",
    name: "Manny D.",
    role: "Real Estate Agent",
  },
  {
    quote:
      "Getting 5-star reviews always gave me anxiety. Their system took that away and I've seen a significant increase in business.",
    name: "Wendy L.",
    role: "Salon Owner",
  },
  {
    quote:
      "They made me a brand new website, super professional. It turned 100s of viewers into 100s of clients!",
    name: "Mason P.",
    role: "Fitness Studio",
  },
  {
    quote:
      "Their automations and the awesome website made everything so easy. I can't thank them enough.",
    name: "Ryan S.",
    role: "Restaurant Owner",
  },
  {
    quote:
      "I'm getting organic leads now that don't cost me any money. I would recommend them to anyone!",
    name: "Scott W.",
    role: "Contractor",
  },
];

export default function TestimonialsCarousel() {
  return (
    <section id="testimonials" className="bg-ivoire-navy-deep py-16 sm:py-24 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display font-extrabold text-white text-3xl sm:text-4xl md:text-5xl leading-tight">
            The proof is in the pudding...
          </h2>
          <p className="mt-4 text-lg text-ivoire-gold font-semibold">
            Let's see what our clients have to say
          </p>
        </motion.div>
      </div>

      {/* Horizontal scroll row */}
      <div className="flex gap-5 overflow-x-auto no-scrollbar px-4 sm:px-6 pb-4 snap-x">
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            className="snap-start flex-shrink-0 w-[300px] sm:w-[360px] bg-ivoire-navy-card rounded-2xl p-6 border border-white/5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: (i % 4) * 0.08 }}
          >
            <Quote className="w-8 h-8 text-ivoire-gold/40 mb-3" />
            <div className="flex gap-0.5 mb-4">
              {[...Array(5)].map((_, s) => (
                <Star key={s} className="w-4 h-4 fill-ivoire-gold text-ivoire-gold" />
              ))}
            </div>
            <p className="text-white/80 text-[15px] leading-relaxed mb-5">"{t.quote}"</p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-ivoire-gold/20 flex items-center justify-center text-ivoire-gold font-bold">
                {t.name.charAt(0)}
              </div>
              <div>
                <div className="text-white font-semibold text-sm">{t.name}</div>
                <div className="text-white/50 text-xs">{t.role}</div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      <p className="text-center text-white/40 text-sm mt-6">← Swipe to see more reviews →</p>
    </section>
  );
}
