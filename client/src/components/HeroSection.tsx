import { Button } from "@/components/ui/button";
import { scrollToSection } from "@/lib/utils";
import { motion } from "framer-motion";
import aiAgentImage from "../assets/ai-agent.jpg";

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
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-poppins font-bold leading-tight">
              Empower Your Business with AI & Digital Solutions
            </h1>
            <p className="text-base md:text-lg opacity-90 max-w-lg">
              We help small businesses automate operations, attract more clients, and scale effectively with cutting-edge technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Button 
                size="lg"
                className="bg-[#f59e0b] hover:bg-[#fbbf24] text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
                onClick={() => scrollToSection("services")}
              >
                Explore Services
              </Button>
              <Button 
                size="lg"
                variant="outline" 
                className="bg-white hover:bg-gray-50 text-[#14532d] border-2 border-white font-semibold px-8 py-3 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
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
              src={aiAgentImage} 
              alt="AI agent with digital interfaces and connections" 
              className="rounded-lg shadow-xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
