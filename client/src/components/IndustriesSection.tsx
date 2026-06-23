import { motion } from "framer-motion";
import {
  UtensilsCrossed,
  Stethoscope,
  Home,
  Dumbbell,
  Scale,
  Scissors,
  Car,
  ShoppingBag,
  Wrench,
  Building2,
  Sparkles,
  GraduationCap,
  PawPrint,
  Hammer,
  Plane,
  Camera,
} from "lucide-react";

const industries = [
  { icon: UtensilsCrossed, label: "Restaurants" },
  { icon: Stethoscope, label: "Healthcare" },
  { icon: Home, label: "Real Estate" },
  { icon: Dumbbell, label: "Fitness & Gyms" },
  { icon: Scale, label: "Legal & Law" },
  { icon: Scissors, label: "Salons & Spas" },
  { icon: Car, label: "Automotive" },
  { icon: ShoppingBag, label: "Retail & E-Com" },
  { icon: Wrench, label: "Home Services" },
  { icon: Building2, label: "Professional Services" },
  { icon: Sparkles, label: "Beauty & Wellness" },
  { icon: GraduationCap, label: "Education" },
  { icon: PawPrint, label: "Pet Services" },
  { icon: Hammer, label: "Contractors" },
  { icon: Plane, label: "Travel & Hospitality" },
  { icon: Camera, label: "Creative & Media" },
];

export default function IndustriesSection() {
  return (
    <section id="industries" className="bg-ivoire-navy-deep py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display font-extrabold text-white text-3xl sm:text-4xl md:text-5xl leading-tight">
            Serving all these industries <span className="text-ivoire-gold">and more...</span>
          </h2>
          <p className="mt-4 text-lg text-white/60">
            Whatever you do, we build the systems that bring you more customers.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-5">
          {industries.map((ind, i) => (
            <motion.div
              key={ind.label}
              className="group bg-ivoire-navy-card rounded-xl p-5 sm:p-6 border border-white/5 hover:border-ivoire-gold/40 transition-all text-center cursor-default"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: (i % 4) * 0.05 }}
            >
              <div className="mx-auto w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-ivoire-gold/10 flex items-center justify-center mb-3 group-hover:bg-ivoire-gold/20 transition-colors">
                <ind.icon className="w-6 h-6 sm:w-7 sm:h-7 text-ivoire-gold" />
              </div>
              <div className="text-white/85 text-sm sm:text-base font-semibold">
                {ind.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
