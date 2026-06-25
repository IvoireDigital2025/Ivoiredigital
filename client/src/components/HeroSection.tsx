import { motion } from "framer-motion";
import { goToBooking } from "@/lib/utils";
import { Star, ArrowRight, BrainCircuit, TrendingUp, BarChart3, Target } from "lucide-react";
import {
  SiGoogle,
  SiFacebook,
  SiTrustpilot,
  SiOpenai,
  SiMeta,
  SiZapier,
  SiMake,
  SiWordpress,
} from "react-icons/si";
import robot from "@assets/generated_images/ivoire_robot_hero.png";
import avatar1 from "@assets/stock_images/team_avatar_1.jpg";
import avatar2 from "@assets/stock_images/team_avatar_2.jpg";
import avatar3 from "@assets/stock_images/team_avatar_3.jpg";
import avatar4 from "@assets/stock_images/team_avatar_4.jpg";
import avatar5 from "@assets/stock_images/team_avatar_5.jpg";

const avatars = [avatar1, avatar2, avatar3, avatar4, avatar5];

const reviewBadges = [
  { icon: SiGoogle, label: "Google", color: "#ffffff" },
  { icon: SiFacebook, label: "Facebook", color: "#1877F2" },
  { icon: SiTrustpilot, label: "Trustpilot", color: "#00B67A" },
];

const partners = [
  { icon: SiOpenai, label: "OpenAI" },
  { icon: SiMeta, label: "Meta" },
  { icon: SiGoogle, label: "Google" },
  { icon: SiZapier, label: "Zapier" },
  { icon: SiMake, label: "Make" },
  { icon: SiWordpress, label: "WordPress" },
];

const statCards = [
  {
    icon: BrainCircuit,
    label: "AI AUTOMATION",
    value: "24/7",
    sub: "Working For You",
    className: "left-0 top-16",
    delay: 0,
  },
  {
    icon: TrendingUp,
    label: "LEAD GENERATION",
    value: "+390%",
    sub: "More Leads",
    className: "right-0 top-4",
    delay: 0.6,
  },
  {
    icon: BarChart3,
    label: "REVENUE GROWTH",
    value: "+250%",
    sub: "Average Increase",
    className: "right-0 top-1/2",
    delay: 1.1,
  },
  {
    icon: Target,
    label: "CONVERSION RATE",
    value: "+180%",
    sub: "More Sales",
    className: "left-0 bottom-28",
    delay: 1.6,
  },
];

function Stars() {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className="w-3 h-3 fill-ivoire-gold text-ivoire-gold" />
      ))}
    </div>
  );
}

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative overflow-hidden pt-28 sm:pt-32 pb-10 sm:pb-14"
      style={{
        background:
          "radial-gradient(120% 90% at 75% 30%, #1a1407 0%, #0c0e16 45%, #0b0d14 100%)",
      }}
    >
      {/* ambient gold glow */}
      <div className="absolute top-1/4 right-[8%] w-[520px] h-[520px] rounded-full bg-ivoire-gold/15 blur-[130px] pointer-events-none" />
      {/* fade into navy site */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-ivoire-navy-deep pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 relative">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
          {/* Left: Text */}
          <motion.div
            className="text-center lg:text-left"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center gap-3 justify-center lg:justify-start mb-5">
              <span className="w-10 h-[3px] bg-ivoire-gold rounded-full" />
              <span className="text-ivoire-gold font-semibold tracking-[0.18em] text-xs sm:text-sm">
                AI POWERED. RESULTS DRIVEN.
              </span>
            </div>

            <h1 className="font-display font-extrabold text-white leading-[1.04] text-4xl sm:text-5xl md:text-6xl lg:text-[4.4rem]">
              AI &amp; Marketing
              <br />
              Systems For
              <br />
              <span className="text-ivoire-gold">Growing Businesses</span>
            </h1>

            <p className="mt-6 text-base sm:text-lg text-white/70 max-w-lg mx-auto lg:mx-0 leading-relaxed">
              Cut the fluff. Growth isn't rocket science. We build your website,
              run your social media, create your content, and set up the AI
              automation to{" "}
              <span className="text-ivoire-gold font-semibold">
                win more customers
              </span>{" "}
              — you just have to commit to using them.
            </p>

            {/* Avatars + CTA + join */}
            <div className="mt-8 flex flex-col sm:flex-row items-center gap-5 justify-center lg:justify-start">
              <div className="flex -space-x-3">
                {avatars.map((a, i) => (
                  <img
                    key={i}
                    src={a}
                    alt="Happy client"
                    className="w-11 h-11 rounded-full border-2 border-[#0b0d14] object-cover"
                  />
                ))}
              </div>
              <button
                onClick={goToBooking}
                className="btn-gold rounded-lg px-7 py-4 text-base w-full sm:w-auto inline-flex items-center justify-center gap-2"
              >
                Book A Call
                <ArrowRight className="w-4 h-4" />
              </button>
              <div className="text-center lg:text-left">
                <div className="text-white/50 text-[11px] font-semibold tracking-wide">
                  JOIN 200+ BUSINESSES
                </div>
                <div className="text-ivoire-gold text-[11px] font-semibold tracking-wide">
                  GROWING FASTER WITH AI
                </div>
              </div>
            </div>

            {/* Review card */}
            <div className="mt-9 flex justify-center lg:justify-start">
              <div className="inline-flex flex-col sm:flex-row sm:flex-wrap items-center gap-x-8 gap-y-3 rounded-xl border border-white/10 bg-white/[0.03] px-6 py-4 backdrop-blur-sm">
                {reviewBadges.map((b, i) => (
                  <div key={b.label} className="flex items-center gap-2.5">
                    {i > 0 && (
                      <span className="hidden sm:block h-8 w-px bg-white/10 -ml-5 mr-3" />
                    )}
                    <b.icon className="w-6 h-6 shrink-0" style={{ color: b.color }} />
                    <div className="text-left">
                      <div className="text-white text-sm font-semibold leading-none">
                        {b.label}{" "}
                        <span className="text-white/60 font-normal">5.0</span>
                      </div>
                      <div className="mt-1.5">
                        <Stars />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: Robot + glow + stat cards */}
          <motion.div
            className="relative mx-auto w-full max-w-[17rem] sm:max-w-md lg:max-w-lg"
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative aspect-[4/5] flex items-end justify-center">
              {/* concentric glow rings */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="absolute w-[78%] aspect-square rounded-full border border-ivoire-gold/25" />
                <div className="absolute w-[60%] aspect-square rounded-full border border-ivoire-gold/20" />
                <div className="absolute w-[44%] aspect-square rounded-full bg-ivoire-gold/20 blur-3xl" />
              </div>

              {/* podium */}
              <div className="absolute bottom-[6%] left-1/2 -translate-x-1/2 w-[68%] h-6 rounded-[100%] bg-ivoire-gold/30 blur-md" />
              <div className="absolute bottom-[7%] left-1/2 -translate-x-1/2 w-[60%] h-3 rounded-[100%] border border-ivoire-gold/40" />

              <motion.img
                src={robot}
                alt="Ivoire Digital AI mascot"
                className="relative z-10 w-[82%] h-auto object-contain drop-shadow-[0_20px_40px_rgba(240,168,50,0.25)]"
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              />

              {/* floating stat cards (desktop) */}
              {statCards.map((c) => (
                <motion.div
                  key={c.label}
                  className={`hidden lg:flex absolute z-20 ${c.className} flex-col gap-1 rounded-xl border border-ivoire-gold/30 bg-[#11131c]/90 px-4 py-3 backdrop-blur-sm shadow-xl`}
                  animate={{ y: [0, -8, 0] }}
                  transition={{
                    duration: 4.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: c.delay,
                  }}
                >
                  <div className="flex items-center gap-1.5 text-white/65 text-[10px] font-semibold tracking-wide">
                    <c.icon className="w-3.5 h-3.5 text-ivoire-gold" />
                    {c.label}
                  </div>
                  <div className="text-ivoire-gold font-display font-extrabold text-xl leading-none">
                    {c.value}
                  </div>
                  <div className="text-white/60 text-[11px]">{c.sub}</div>
                </motion.div>
              ))}
            </div>

            {/* stat chips (mobile) */}
            <div className="grid grid-cols-2 gap-3 mt-6 lg:hidden">
              {statCards.map((c) => (
                <div
                  key={c.label}
                  className="flex flex-col gap-1 rounded-xl border border-ivoire-gold/30 bg-[#11131c]/90 px-4 py-3"
                >
                  <div className="flex items-center gap-1.5 text-white/65 text-[10px] font-semibold tracking-wide">
                    <c.icon className="w-3.5 h-3.5 text-ivoire-gold" />
                    {c.label}
                  </div>
                  <div className="text-ivoire-gold font-display font-extrabold text-xl leading-none">
                    {c.value}
                  </div>
                  <div className="text-white/60 text-[11px]">{c.sub}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* WE WORK WITH strip */}
        <div className="mt-12 sm:mt-16 border-t border-white/10 pt-7">
          <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-10">
            <span className="text-ivoire-gold text-xs font-semibold tracking-[0.18em] shrink-0">
              WE WORK WITH
            </span>
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 lg:gap-x-12">
              {partners.map((p) => (
                <div
                  key={p.label}
                  className="flex items-center gap-2 text-white/45 hover:text-white/80 transition-colors"
                >
                  <p.icon className="w-6 h-6" />
                  <span className="font-semibold text-sm">{p.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
