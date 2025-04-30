import { portfolioItems } from "@/lib/portfolio";
import PortfolioCard from "@/components/PortfolioCard";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-poppins font-bold text-[#14532d]">Our Work</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            See how we've helped businesses like yours achieve their digital goals.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
        
        <div className="text-center mt-12">
          <motion.a 
            href="#"
            className="inline-flex items-center text-[#f59e0b] font-medium hover:underline"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            View all case studies
            <ArrowRight className="h-4 w-4 ml-1" />
          </motion.a>
        </div>
      </div>
    </section>
  );
}
