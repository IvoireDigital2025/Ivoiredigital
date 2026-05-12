import { useState } from "react";
import { services } from "@/lib/services";
import ServiceCard from "@/components/ServiceCard";
import { motion, AnimatePresence } from "framer-motion";
import { Smile, Sparkles } from "lucide-react";

const dentalServiceIds = ["receptionist", "booking", "missed-call", "followup", "reviews", "transcription", "soap", "webchat", "automation"];
const spaServiceIds = ["booking", "missed-call", "followup", "reviews", "webchat", "automation"];

export default function ServicesSection() {
  const [activeTab, setActiveTab] = useState<"dental" | "spa">("dental");

  const visibleIds = activeTab === "dental" ? dentalServiceIds : spaServiceIds;
  const visibleServices = services.filter(s => visibleIds.includes(s.id));

  return (
    <section id="services" className="py-16 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block bg-[#b07d2a]/10 text-[#b07d2a] text-sm font-semibold px-4 py-1.5 rounded-full mb-4 uppercase tracking-wide">
            AI Services
          </span>
          <h2 className="text-3xl md:text-4xl font-poppins font-bold text-gray-900">
            AI Systems Built for Your Practice
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Every service is purpose-built for dental clinics and spas — not adapted from generic templates.
          </p>
        </motion.div>

        {/* Industry Tabs */}
        <div className="flex justify-center gap-3 mb-10">
          <button
            onClick={() => setActiveTab("dental")}
            className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 ${
              activeTab === "dental"
                ? "bg-[#14532d] text-white shadow-lg scale-105"
                : "bg-white text-gray-600 border border-gray-200 hover:border-[#14532d] hover:text-[#14532d]"
            }`}
          >
            <Smile className="w-4 h-4" />
            Dental Clinics
          </button>
          <button
            onClick={() => setActiveTab("spa")}
            className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 ${
              activeTab === "spa"
                ? "bg-[#14532d] text-white shadow-lg scale-105"
                : "bg-white text-gray-600 border border-gray-200 hover:border-[#14532d] hover:text-[#14532d]"
            }`}
          >
            <Sparkles className="w-4 h-4" />
            Spas & Wellness
          </button>
        </div>

        {/* Industry-specific intro */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            {activeTab === "dental" && (
              <p className="text-center text-gray-500 text-sm mb-8 max-w-2xl mx-auto">
                All 9 AI systems below are designed specifically for dental practices — from front desk automation to clinical documentation.
              </p>
            )}
            {activeTab === "spa" && (
              <p className="text-center text-gray-500 text-sm mb-8 max-w-2xl mx-auto">
                These AI systems help spas and wellness centers fill their schedules, reduce no-shows, and grow their client base — all on autopilot.
              </p>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {visibleServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.07 }}
                >
                  <ServiceCard service={service} />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        <motion.div
          className="text-center mt-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <button
            onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-[#b07d2a] hover:bg-[#c49030] text-white px-8 py-3.5 rounded-lg font-semibold transition-colors duration-300 shadow-lg hover:shadow-xl"
          >
            Get These Services for Your Practice
          </button>
        </motion.div>
      </div>
    </section>
  );
}
