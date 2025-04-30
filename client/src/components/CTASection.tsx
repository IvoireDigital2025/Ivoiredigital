import { Button } from "@/components/ui/button";
import { scrollToSection } from "@/lib/utils";
import { motion } from "framer-motion";

export default function CTASection() {
  return (
    <section className="py-20 bg-[#14532d]">
      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-poppins font-bold text-white mb-4">Ready to Transform Your Business?</h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
            Let's discuss how Ivoire Digital's AI and digital marketing solutions can help you attract more clients and automate your business.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button 
              className="bg-white hover:bg-gray-100 text-[#14532d] font-medium py-3 px-8"
              onClick={() => scrollToSection("contact")}
            >
              Schedule a Free Consultation
            </Button>
            <Button 
              variant="outline" 
              className="bg-transparent border-2 border-white hover:bg-white/10 text-white font-medium py-3 px-8"
              onClick={() => scrollToSection("services")}
            >
              Learn More About Our Services
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
