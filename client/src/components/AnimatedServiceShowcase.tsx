import { motion } from "framer-motion";
import {
  Phone, Calendar, MessageSquare, Star, Globe, FileText,
  ClipboardList, Zap, UserCheck, Target, Search, Mail,
  BarChart2, Share2, Megaphone
} from "lucide-react";

const aiServices = [
  { icon: Phone, title: "AI Dental Receptionist", desc: "Answers calls, books appointments & handles FAQs 24/7" },
  { icon: Calendar, title: "AI Appointment Booking", desc: "Online booking with automated reminders to cut no-shows" },
  { icon: MessageSquare, title: "Missed-Call Text Back", desc: "Every missed call gets an instant text reply with a booking link" },
  { icon: UserCheck, title: "Patient Follow-Up & Reactivation", desc: "Re-engages lapsed patients and spa clients automatically" },
  { icon: Globe, title: "AI Web Chat Assistant", desc: "24/7 chat on your website that books appointments for you" },
  { icon: Star, title: "AI Review Generation", desc: "Auto-requests Google reviews after every visit" },
  { icon: FileText, title: "AI Doctor Note Transcription", desc: "Voice-to-text transcription for clinical notes in real time" },
  { icon: ClipboardList, title: "AI SOAP Note Generation", desc: "Complete SOAP notes from a brief dictation — ready to sign" },
  { icon: Zap, title: "AI Workflow Automation", desc: "Automates intake, insurance checks, recalls & staff notifications" },
];

const marketingServices = [
  { icon: Search, title: "Local SEO", desc: "Rank at the top of Google when patients search for clinics or spas near them" },
  { icon: Target, title: "Google & Meta Ads", desc: "Paid ad campaigns that bring in new dental patients and spa clients" },
  { icon: Share2, title: "Social Media Management", desc: "Consistent, branded posts that build trust and attract new clients" },
  { icon: Mail, title: "Email & SMS Marketing", desc: "Targeted campaigns to keep patients and clients engaged and rebooking" },
  { icon: BarChart2, title: "Reputation Management", desc: "Monitor, respond to, and grow your reviews across all platforms" },
  { icon: Megaphone, title: "Content Marketing", desc: "Blog posts, before/after content, and educational material that converts" },
];

export default function AnimatedServiceShowcase() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block bg-[#14532d]/10 text-[#14532d] text-sm font-semibold px-4 py-1.5 rounded-full mb-4 uppercase tracking-wide">
            What We Offer
          </span>
          <h2 className="text-3xl md:text-4xl font-poppins font-bold text-gray-900 mb-4">
            AI Automation <span className="text-[#14532d]">+</span> Digital Marketing<br />
            <span className="text-[#14532d]">Exclusively for Dental Clinics & Spas</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Two powerful pillars working together — intelligent automation to run your operations, and targeted marketing to grow your patient and client base.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* AI Automation */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-gradient-to-br from-[#14532d] to-[#166534] rounded-2xl p-8 text-white"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="bg-white/20 p-2.5 rounded-xl">
                <Zap className="w-6 h-6 text-[#b07d2a]" />
              </div>
              <div>
                <h3 className="text-xl font-bold">AI Automation Services</h3>
                <p className="text-white/70 text-sm">Let AI handle the work — you focus on patients</p>
              </div>
            </div>
            <div className="space-y-3">
              {aiServices.map((service, i) => {
                const Icon = service.icon;
                return (
                  <motion.div
                    key={i}
                    className="flex items-start gap-3 bg-white/10 hover:bg-white/15 rounded-xl p-4 transition-all duration-200"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.05 }}
                  >
                    <div className="bg-[#b07d2a] p-2 rounded-lg flex-shrink-0">
                      <Icon className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-sm leading-tight">{service.title}</p>
                      <p className="text-white/65 text-xs mt-0.5 leading-relaxed">{service.desc}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Digital Marketing */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-gradient-to-br from-[#b07d2a] to-[#d97706] rounded-2xl p-8 text-white"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="bg-white/20 p-2.5 rounded-xl">
                <Megaphone className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Digital Marketing Services</h3>
                <p className="text-white/80 text-sm">Attract more patients and clients consistently</p>
              </div>
            </div>
            <div className="space-y-3">
              {marketingServices.map((service, i) => {
                const Icon = service.icon;
                return (
                  <motion.div
                    key={i}
                    className="flex items-start gap-3 bg-white/15 hover:bg-white/20 rounded-xl p-4 transition-all duration-200"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                  >
                    <div className="bg-white/30 p-2 rounded-lg flex-shrink-0">
                      <Icon className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-sm leading-tight">{service.title}</p>
                      <p className="text-white/75 text-xs mt-0.5 leading-relaxed">{service.desc}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Filler padding to match height */}
            <div className="mt-3 bg-white/10 rounded-xl p-4 flex items-center gap-3">
              <div className="bg-white/30 p-2 rounded-lg flex-shrink-0">
                <Target className="w-4 h-4 text-white" />
              </div>
              <div>
                <p className="font-semibold text-sm">Custom Growth Strategy</p>
                <p className="text-white/75 text-xs mt-0.5">Tailored marketing plan built specifically for your clinic or spa</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <p className="text-gray-600 mb-5 text-base max-w-xl mx-auto">
            Not sure which services you need? Book a free consultation and we'll build a custom plan for your practice.
          </p>
          <button
            onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-[#14532d] hover:bg-[#166534] text-white px-8 py-3.5 rounded-lg font-semibold transition-colors duration-300 shadow-lg hover:shadow-xl"
          >
            Get a Free Custom Plan
          </button>
        </motion.div>
      </div>
    </section>
  );
}
