import { Button } from "@/components/ui/button";
import { scrollToSection } from "@/lib/utils";
import { motion } from "framer-motion";
import { Zap, Megaphone, CheckCircle, PhoneCall, Calendar, Star, Globe } from "lucide-react";
import aiReceptionistImg from "@assets/ChatGPT_Image_May_10,_2026,_11_41_10_PM_1778476129563.png";

const stats = [
  { value: "70%", label: "Fewer No-Shows" },
  { value: "3x", label: "More Google Reviews" },
  { value: "24/7", label: "AI Receptionist" },
  { value: "5 hrs", label: "Saved Weekly on Admin" },
];

export default function HeroSection() {
  return (
    <section id="home" className="hero-gradient text-white min-h-screen flex flex-col justify-center">
      <div className="container mx-auto px-4 sm:px-6 pt-24 sm:pt-28 pb-0">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">

          {/* Left: Text Content */}
          <motion.div
            className="space-y-6 text-center md:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex flex-wrap gap-2 justify-center md:justify-start">
              <span className="inline-flex items-center gap-2 bg-white/20 text-white px-3 py-1.5 rounded-full text-sm font-semibold border border-white/30">
                <Zap className="w-4 h-4" /> AI Automation
              </span>
              <span className="inline-flex items-center gap-2 bg-[#b07d2a] text-white px-3 py-1.5 rounded-full text-sm font-semibold">
                <Megaphone className="w-4 h-4" /> Digital Marketing
              </span>
              <span className="inline-flex items-center gap-2 bg-white/20 text-white px-3 py-1.5 rounded-full text-sm font-semibold border border-white/30">
                <Globe className="w-4 h-4" /> Website Design
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-poppins font-bold leading-tight">
              AI & Marketing<br />
              <span className="text-[#b07d2a]">Built for Your<br />Business Growth</span>
            </h1>

            <p className="text-base sm:text-lg opacity-90 max-w-lg mx-auto md:mx-0 leading-relaxed">
              We help businesses fill their schedules, stop losing leads to missed calls, and grow their reputation — using AI automation, targeted digital marketing, and high-converting website design.
            </p>

            <ul className="space-y-2.5 text-sm opacity-90 text-left max-w-sm mx-auto md:mx-0">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#b07d2a] flex-shrink-0" />
                AI receptionist answers calls & books appointments 24/7
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#b07d2a] flex-shrink-0" />
                Beautiful websites designed to turn visitors into clients
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#b07d2a] flex-shrink-0" />
                Automated marketing keeps your calendar full
              </li>
            </ul>

            <div className="flex flex-col sm:flex-row gap-3 pt-2 justify-center md:justify-start">
              <Button
                size="lg"
                className="bg-[#b07d2a] hover:bg-[#c49030] text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl text-base"
                onClick={() => scrollToSection("booking")}
              >
                <Calendar className="w-4 h-4 mr-2" />
                Book a Free Consultation
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-white/10 hover:bg-white/20 text-white border-2 border-white/50 font-semibold px-8 py-4 rounded-lg transition-all duration-300 text-base"
                onClick={() => scrollToSection("services")}
              >
                See Our Services
              </Button>
            </div>
          </motion.div>

          {/* Right: Image Cards */}
          <motion.div
            className="hidden md:grid grid-cols-2 gap-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <motion.div
              className="rounded-2xl overflow-hidden shadow-2xl relative"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <img
                src={aiReceptionistImg}
                alt="AI Receptionist"
                className="w-full h-72 object-cover object-top"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                <span className="flex items-center gap-2 text-white font-semibold text-sm">
                  <Zap className="w-4 h-4 text-[#b07d2a]" /> AI Automation
                </span>
                <p className="text-white/80 text-xs mt-1">Automated scheduling & operations</p>
              </div>
              <div className="absolute top-3 right-3 bg-[#b07d2a] text-white text-xs font-bold px-2.5 py-1 rounded-full flex items-center gap-1">
                <PhoneCall className="w-3 h-3" /> AI Receptionist
              </div>
            </motion.div>

            <motion.div
              className="rounded-2xl overflow-hidden shadow-2xl relative mt-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=500&fit=crop&crop=center"
                alt="Digital Marketing & Website Design"
                className="w-full h-72 object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                <span className="flex items-center gap-2 text-white font-semibold text-sm">
                  <Globe className="w-4 h-4 text-[#b07d2a]" /> Websites & Marketing
                </span>
                <p className="text-white/80 text-xs mt-1">Grow your client base on autopilot</p>
              </div>
              <div className="absolute top-3 right-3 bg-green-500 text-white text-xs font-bold px-2.5 py-1 rounded-full flex items-center gap-1">
                <Star className="w-3 h-3" /> 4.9★ Reviews
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Stats Strip */}
      <motion.div
        className="mt-12 border-t border-white/20 bg-black/20 backdrop-blur-sm"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <div className="container mx-auto px-4 sm:px-6 py-5">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-2xl sm:text-3xl font-poppins font-bold text-[#b07d2a]">{stat.value}</div>
                <div className="text-xs sm:text-sm text-white/80 mt-0.5">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
