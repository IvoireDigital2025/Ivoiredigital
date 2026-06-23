import { motion } from "framer-motion";
import { openCalendly } from "@/lib/utils";
import { Star } from "lucide-react";
import { SiGoogle, SiFacebook, SiTrustpilot } from "react-icons/si";
import mascot from "@assets/generated_images/ivoire_mascot.png";
import avatar1 from "@assets/stock_images/team_avatar_1.jpg";
import avatar2 from "@assets/stock_images/team_avatar_2.jpg";
import avatar3 from "@assets/stock_images/team_avatar_3.jpg";
import avatar4 from "@assets/stock_images/team_avatar_4.jpg";
import avatar5 from "@assets/stock_images/team_avatar_5.jpg";

const avatars = [avatar1, avatar2, avatar3, avatar4, avatar5];

const reviewBadges = [
  { icon: SiGoogle, label: "Google", color: "#4285F4" },
  { icon: SiFacebook, label: "Facebook", color: "#1877F2" },
  { icon: SiTrustpilot, label: "Trustpilot", color: "#00B67A" },
];

function Stars() {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className="w-3.5 h-3.5 fill-ivoire-gold text-ivoire-gold" />
      ))}
    </div>
  );
}

export default function HeroSection() {
  return (
    <section id="home" className="navy-grid relative overflow-hidden pt-28 sm:pt-32 pb-12 sm:pb-16">
      {/* glow accent */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] rounded-full bg-ivoire-gold/10 blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 relative">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left: Text */}
          <motion.div
            className="text-center lg:text-left"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="hidden lg:block w-12 h-1 bg-ivoire-gold mb-6" />

            <h1 className="font-display font-extrabold text-white leading-[1.05] text-4xl sm:text-5xl md:text-6xl lg:text-[4.2rem]">
              AI &amp; Marketing
              <br />
              Systems For
              <br />
              <span className="text-ivoire-gold">Growing Businesses</span>
            </h1>

            <p className="mt-6 text-base sm:text-lg text-white/70 max-w-lg mx-auto lg:mx-0 leading-relaxed">
              Cut the fluff. Growth isn't rocket science. We give you the AI
              automation, websites, and marketing systems to win more
              customers — you just have to commit to using them.
            </p>

            {/* Avatars + CTA */}
            <div className="mt-8 flex flex-col sm:flex-row items-center gap-5 justify-center lg:justify-start">
              <div className="flex -space-x-3">
                {avatars.map((a, i) => (
                  <img
                    key={i}
                    src={a}
                    alt="Happy client"
                    className="w-11 h-11 rounded-full border-2 border-ivoire-navy object-cover"
                  />
                ))}
              </div>
              <button
                onClick={openCalendly}
                className="btn-gold rounded-lg px-8 py-4 text-base w-full sm:w-auto"
              >
                Book A Call
              </button>
            </div>

            {/* Review badges */}
            <div className="mt-10 flex flex-wrap gap-x-8 gap-y-4 justify-center lg:justify-start">
              {reviewBadges.map((b) => (
                <div key={b.label} className="flex items-center gap-2">
                  <b.icon className="w-6 h-6" style={{ color: b.color }} />
                  <div>
                    <div className="text-white text-sm font-semibold leading-none">
                      {b.label}
                    </div>
                    <div className="mt-1">
                      <Stars />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Mascot */}
          <motion.div
            className="relative flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-ivoire-gold/15 blur-3xl" />
            </div>
            <motion.img
              src={mascot}
              alt="Ivoire Digital mascot"
              className="relative z-10 w-64 sm:w-80 lg:w-[26rem] h-auto object-contain drop-shadow-2xl"
              animate={{ y: [0, -14, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
