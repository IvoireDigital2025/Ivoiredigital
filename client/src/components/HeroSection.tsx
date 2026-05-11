import { Button } from "@/components/ui/button";
import { scrollToSection } from "@/lib/utils";
import { motion } from "framer-motion";
import { Smile, Sparkles, CheckCircle } from "lucide-react";

export default function HeroSection() {
  return (
    <section id="home" className="hero-gradient text-white min-h-screen flex items-center">
      <div className="container mx-auto px-4 sm:px-6 pt-20 sm:pt-24 pb-12 sm:pb-16">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">

          {/* Left: Text Content */}
          <motion.div
            className="space-y-6 text-center md:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex flex-wrap gap-3 justify-center md:justify-start">
              <span className="inline-flex items-center gap-2 bg-white/20 text-white px-4 py-2 rounded-full text-sm font-semibold border border-white/30">
                <Smile className="w-4 h-4" /> Dental Clinics
              </span>
              <span className="inline-flex items-center gap-2 bg-[#f59e0b] text-white px-4 py-2 rounded-full text-sm font-semibold">
                <Sparkles className="w-4 h-4" /> Spas & Wellness
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-poppins font-bold leading-tight">
              AI-Powered Systems for
              <span className="text-[#f59e0b]"> Dental Clinics & Spas</span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl opacity-90 max-w-lg mx-auto md:mx-0 leading-relaxed">
              We build AI-powered marketing systems specifically for <strong>dental clinics</strong> and <strong>spas</strong> — automated booking, AI phone assistants, and client retention, all done for you.
            </p>

            <ul className="space-y-2 text-sm opacity-90 text-left max-w-sm mx-auto md:mx-0">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#f59e0b] flex-shrink-0" />
                AI receptionist answers calls & books patients 24/7
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#f59e0b] flex-shrink-0" />
                AI generates SOAP & clinical notes in seconds
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#f59e0b] flex-shrink-0" />
                Automate follow-ups, reviews & missed-call text back
              </li>
            </ul>

            <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-3 sm:space-y-0 pt-2 justify-center md:justify-start">
              <Button
                size="lg"
                className="bg-[#f59e0b] hover:bg-[#fbbf24] text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
                onClick={() => scrollToSection("booking")}
              >
                Book a Free Consultation
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-white hover:bg-gray-50 text-[#14532d] border-2 border-white font-semibold px-8 py-3 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
                onClick={() => scrollToSection("services")}
              >
                See How It Works
              </Button>
            </div>
          </motion.div>

          {/* Right: Dental + Spa Image Cards */}
          <motion.div
            className="hidden md:grid grid-cols-2 gap-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            {/* Dental Card */}
            <motion.div
              className="rounded-2xl overflow-hidden shadow-2xl relative"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <img
                src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=400&h=500&fit=crop&crop=center"
                alt="Dental clinic"
                className="w-full h-72 object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <span className="flex items-center gap-2 text-white font-semibold text-sm">
                  <Smile className="w-4 h-4 text-[#f59e0b]" />
                  Dental Clinics
                </span>
                <p className="text-white/80 text-xs mt-1">Automated scheduling & patient growth</p>
              </div>
            </motion.div>

            {/* Spa Card */}
            <motion.div
              className="rounded-2xl overflow-hidden shadow-2xl relative mt-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <img
                src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=400&h=500&fit=crop&crop=center"
                alt="Spa and wellness"
                className="w-full h-72 object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <span className="flex items-center gap-2 text-white font-semibold text-sm">
                  <Sparkles className="w-4 h-4 text-[#f59e0b]" />
                  Spas & Wellness
                </span>
                <p className="text-white/80 text-xs mt-1">Fill your calendar on autopilot</p>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
