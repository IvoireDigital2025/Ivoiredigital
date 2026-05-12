import { services } from "@/lib/services";
import ServiceCard from "@/components/ServiceCard";
import { motion } from "framer-motion";

export default function ServicesSection() {
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
            AI Systems Built for Your Business
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Every service is purpose-built to save time, reduce costs, and grow your revenue — not adapted from generic templates.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.07 }}
            >
              <ServiceCard service={service} />
            </motion.div>
          ))}
        </div>

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
            Get These Services for Your Business
          </button>
        </motion.div>
      </div>
    </section>
  );
}
