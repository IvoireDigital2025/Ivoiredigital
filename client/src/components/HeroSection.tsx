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
              Empower Your Business with <span className="gradient-text text-white">AI & Digital Solutions</span>
            </h1>
            <p className="text-lg md:text-xl opacity-90 max-w-lg">
              We help small businesses automate operations, attract more clients, and scale effectively with cutting-edge technology.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 pt-2">
              <Button 
                className="btn-futuristic bg-accent hover:bg-accent text-black font-medium text-center py-3 px-8"
                onClick={() => scrollToSection("services")}
              >
                Explore Services
              </Button>
              <Button 
                variant="outline" 
                className="border border-white/70 bg-transparent hover:bg-white/10 text-white text-center py-3 px-8"
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
            <div className="relative rounded-lg overflow-hidden glow-blue">
              <img 
                src="/images/ai-agent.jpg" 
                alt="AI agent with digital interfaces and connections" 
                className="rounded-lg shadow-xl"
              />
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-primary/20 to-transparent opacity-70"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
