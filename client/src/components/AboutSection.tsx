import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import { scrollToSection } from "@/lib/utils";
import { motion } from "framer-motion";

const benefits = [
  {
    title: "Tailored Solutions",
    description: "We create custom solutions that align with your specific business goals and challenges."
  },
  {
    title: "Cutting-Edge Technology",
    description: "We leverage the latest AI and digital innovations to give you a competitive advantage."
  },
  {
    title: "Results-Focused",
    description: "We measure success by the tangible outcomes and ROI we generate for your business."
  },
  {
    title: "Dedicated Support",
    description: "Our team provides ongoing support and guidance to ensure long-term success."
  }
];

export default function AboutSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="order-2 md:order-1"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-poppins font-bold text-[#14532d] mb-6">Why Choose Ivoire Digital?</h2>
            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <motion.div 
                  key={index}
                  className="flex"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="flex-shrink-0 mt-1">
                    <CheckCircle className="h-5 w-5 text-[#f59e0b]" />
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-semibold text-gray-800">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="mt-8">
              <Button 
                className="bg-[#14532d] hover:bg-[#166534] text-white font-medium py-3 px-6"
                onClick={() => scrollToSection("contact")}
              >
                Schedule a Consultation
              </Button>
            </div>
          </motion.div>
          
          <motion.div 
            className="order-1 md:order-2"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <img 
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              alt="Team working together" 
              className="rounded-lg shadow-xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
