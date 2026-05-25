import { portfolioItems } from "@/lib/portfolio";
import PortfolioCard from "@/components/PortfolioCard";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div 
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-poppins font-bold text-[#14532d]">Our Work</h2>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg text-gray-600 max-w-3xl mx-auto px-4 leading-relaxed">
            AI automation, digital marketing, and website design solutions we've built for businesses across every industry — delivering real, measurable results.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {portfolioItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <PortfolioCard item={item} />
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
