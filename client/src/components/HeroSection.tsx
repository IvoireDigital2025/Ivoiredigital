import { Button } from "@/components/ui/button";
import { scrollToSection } from "@/lib/utils";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section id="home" className="hero-gradient text-white min-h-screen flex items-center">
      <div className="container mx-auto px-6 pt-24 pb-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-poppins font-bold leading-tight">
              Empower Your Business with AI & Digital Solutions
            </h1>
            <p className="text-lg md:text-xl opacity-90 max-w-lg">
              We help small businesses automate operations, attract more clients, and scale effectively with cutting-edge technology.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 pt-2">
              <Button 
                className="bg-[#f59e0b] hover:bg-[#fbbf24] text-white text-center py-3 px-8"
                onClick={() => scrollToSection("services")}
              >
                Explore Services
              </Button>
              <Button 
                variant="outline" 
                className="bg-white hover:bg-gray-100 text-[#14532d] text-center py-3 px-8"
                onClick={() => scrollToSection("contact")}
              >
                Contact Us
              </Button>
            </div>
          </motion.div>
          <motion.div 
            className="hidden md:block"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <img 
              src="https://images.unsplash.com/photo-1663104941185-3eda37d42bea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
              alt="Business AI agent working with technology" 
              className="rounded-lg shadow-xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
