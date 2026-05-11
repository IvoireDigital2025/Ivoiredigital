import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Globe, Phone, MessageSquare, Calendar, Star, Users, Mail, Smartphone,
  Smile, Sparkles
} from "lucide-react";

export default function AnimatedServiceShowcase() {
  const [activeIndustry, setActiveIndustry] = useState(0);

  const industries = [
    {
      id: "dental",
      name: "Dental Clinics",
      icon: Smile,
      color: "from-blue-500 to-cyan-600",
      services: [
        {
          icon: Globe,
          title: "Professional Dental Website",
          description: "Beautiful, trust-building website that converts visitors into booked patients",
          stats: "Professional online presence"
        },
        {
          icon: Phone,
          title: "AI Phone Assistant",
          description: "Never miss a patient call — AI handles scheduling, questions, and insurance inquiries 24/7",
          stats: "24/7 phone coverage"
        },
        {
          icon: Calendar,
          title: "Online Appointment Booking",
          description: "Patients book, reschedule, or cancel appointments online anytime — syncs to your calendar",
          stats: "Reduces no-shows by 70%"
        },
        {
          icon: Star,
          title: "Automated Review Collection",
          description: "Post-visit texts ask happy patients for Google reviews automatically, growing your reputation",
          stats: "4.9★ average rating"
        }
      ]
    },
    {
      id: "spa",
      name: "Spas & Wellness",
      icon: Sparkles,
      color: "from-rose-500 to-pink-600",
      services: [
        {
          icon: Globe,
          title: "Luxury Spa Website",
          description: "Stunning, high-converting website that showcases your treatments and books clients instantly",
          stats: "Premium brand experience"
        },
        {
          icon: Calendar,
          title: "Smart Booking System",
          description: "Clients book treatments online 24/7 with automatic confirmations and reminders sent to their phone",
          stats: "Fill your schedule automatically"
        },
        {
          icon: Smartphone,
          title: "Client Retention Texts",
          description: "Automated follow-up messages, rebooking reminders, and special offers sent to past clients",
          stats: "80% rebooking rate"
        },
        {
          icon: Users,
          title: "VIP Loyalty Program",
          description: "Reward your best clients with exclusive offers, early access, and personalized treatment upsells",
          stats: "40% increase in revenue"
        }
      ]
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndustry((prev) => (prev + 1) % industries.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const currentIndustry = industries[activeIndustry];
  const IconComponent = currentIndustry.icon;

  return (
    <section className="py-20 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl md:text-3xl font-poppins font-bold text-[#14532d] mb-4">
            Branded, Done-For-You Marketing Solutions
          </h2>
          <p className="text-base text-gray-600 max-w-3xl mx-auto">
            Complete marketing systems built specifically for dental clinics and spas. 
            We set everything up for you — websites, booking systems, review management, and client communication tools.
          </p>
        </motion.div>

        {/* Industry Selector */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {industries.map((industry, index) => {
            const IndustryIcon = industry.icon;
            return (
              <button
                key={industry.id}
                onClick={() => setActiveIndustry(index)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full transition-all duration-300 ${
                  activeIndustry === index
                    ? 'bg-[#14532d] text-white shadow-lg'
                    : 'bg-white text-gray-600 hover:bg-gray-100'
                }`}
              >
                <IndustryIcon className="w-4 h-4" />
                <span className="text-sm font-medium">{industry.name}</span>
              </button>
            );
          })}
        </div>

        {/* Animated Service Showcase */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndustry}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl shadow-2xl overflow-hidden"
            >
              <div className={`bg-gradient-to-r ${currentIndustry.color} p-8 text-white`}>
                <div className="flex items-center justify-center space-x-4 mb-4">
                  <div className="bg-white/20 p-3 rounded-full">
                    <IconComponent className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">{currentIndustry.name}</h3>
                    <p className="text-white/90">Marketing & Growth Solutions</p>
                  </div>
                </div>
              </div>

              <div className="p-8">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {currentIndustry.services.map((service, serviceIndex) => {
                    const ServiceIcon = service.icon;
                    return (
                      <motion.div
                        key={serviceIndex}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: serviceIndex * 0.1 }}
                        className="text-center group hover:bg-gray-50 p-4 rounded-xl transition-all duration-300"
                      >
                        <div className={`bg-gradient-to-r ${currentIndustry.color} p-3 rounded-full w-fit mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                          <ServiceIcon className="w-6 h-6 text-white" />
                        </div>
                        <h4 className="font-bold text-[#14532d] mb-2">{service.title}</h4>
                        <p className="text-sm text-gray-600 mb-3 leading-relaxed">
                          {service.description}
                        </p>
                        <div className={`bg-gradient-to-r ${currentIndustry.color} text-white px-3 py-1 rounded-full text-xs font-medium inline-block`}>
                          {service.stats}
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Progress Indicators */}
        <div className="flex justify-center space-x-2 mt-8">
          {industries.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndustry(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                activeIndustry === index ? 'bg-[#14532d] scale-125' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>

        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <p className="text-base text-gray-700 mb-6 max-w-2xl mx-auto">
            Ready to get a complete branded marketing system for your dental clinic or spa? 
            We handle everything — setup, customization, and training so you can focus on your patients and clients.
          </p>
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-[#f59e0b] hover:bg-[#fbbf24] text-white px-8 py-3 rounded-lg font-medium transition-colors duration-300 shadow-lg hover:shadow-xl"
          >
            Get Your Done-For-You Solution
          </button>
        </motion.div>
      </div>
    </section>
  );
}
