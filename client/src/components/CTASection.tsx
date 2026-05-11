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
          <h2 className="text-3xl md:text-4xl font-poppins font-bold text-white mb-4">Ready to Put Your Clinic on Autopilot?</h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
            Let's talk about how our AI systems can save your staff time, reduce no-shows, and grow your dental clinic or spa — all done for you.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button 
              className="bg-white hover:bg-gray-100 text-[#14532d] font-medium py-3 px-8"
              onClick={() => scrollToSection("booking")}
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
