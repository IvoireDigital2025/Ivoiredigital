import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { scrollToSection } from "@/lib/utils";
import { CheckCircle, Star, Award, Cpu, Globe, Zap } from "lucide-react";

export default function AboutUsPage() {
  return (
    <section id="about-us" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-poppins font-bold text-[#14532d]">About Ivoire Digital</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Dallas's premier AI and digital marketing agency helping small businesses grow through innovative technology solutions.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-poppins font-bold text-gray-900 mb-6">
              Our Mission
            </h3>
            <p className="text-gray-600 mb-6">
              At Ivoire Digital, our mission is to empower small businesses in Dallas and beyond with the same advanced AI and digital marketing technologies that were previously only accessible to large corporations with massive budgets.
            </p>
            <p className="text-gray-600 mb-6">
              We believe that by democratizing access to cutting-edge digital tools, we can help level the playing field and enable small businesses to compete effectively, attract more clients, and scale their operations efficiently.
            </p>
            <p className="text-gray-600">
              Founded in 2022, we've helped dozens of Dallas businesses implement AI solutions, optimize their digital presence, and automate time-consuming processes to free up their most valuable resource: time.
            </p>
          </motion.div>
          
          <motion.div
            className="relative rounded-xl overflow-hidden shadow-xl"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
              alt="Ivoire Digital team working on client solutions"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
              <h3 className="text-white text-xl font-semibold">Founded in Dallas, TX</h3>
              <p className="text-white/80">Serving small businesses across Texas and beyond</p>
            </div>
          </motion.div>
        </div>
        
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-2xl font-poppins font-bold text-gray-900 mb-6">
            What Makes Us Different
          </h3>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <motion.div
            className="bg-gray-50 rounded-xl p-8 shadow-md"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Cpu className="h-12 w-12 text-[#b07d2a] mb-6" />
            <h4 className="text-xl font-semibold text-gray-900 mb-3">
              AI-First Approach
            </h4>
            <p className="text-gray-600">
              We don't just add AI as an afterthought. All our solutions are built with artificial intelligence at their core, ensuring maximum efficiency and innovation for your business.
            </p>
          </motion.div>
          
          <motion.div
            className="bg-gray-50 rounded-xl p-8 shadow-md"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Globe className="h-12 w-12 text-[#b07d2a] mb-6" />
            <h4 className="text-xl font-semibold text-gray-900 mb-3">
              Nationwide Business Specialists
            </h4>
            <p className="text-gray-600">
              We work with companies nationwide and understand the unique aspects of different business environments. Our strategies are tailored to help you stand out in your market while reaching your ideal customers, regardless of location.
            </p>
          </motion.div>
          
          <motion.div
            className="bg-gray-50 rounded-xl p-8 shadow-md"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Zap className="h-12 w-12 text-[#b07d2a] mb-6" />
            <h4 className="text-xl font-semibold text-gray-900 mb-3">
              Transparent, Value-Driven Pricing
            </h4>
            <p className="text-gray-600">
              We offer clear, upfront pricing with no hidden fees or long-term contracts. Our packages are designed to deliver maximum value, and we focus on measurable results that directly impact your bottom line.
            </p>
          </motion.div>
        </div>
        
        <div className="bg-[#14532d] text-white rounded-xl p-10 mb-16">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h4 className="text-4xl font-bold mb-2">75+</h4>
              <p className="text-white/80">Small Businesses Served</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h4 className="text-4xl font-bold mb-2">40%</h4>
              <p className="text-white/80">Average Efficiency Increase</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h4 className="text-4xl font-bold mb-2">52%</h4>
              <p className="text-white/80">Average Lead Generation Growth</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h4 className="text-4xl font-bold mb-2">4.9</h4>
              <p className="text-white/80">Customer Satisfaction Rating</p>
            </motion.div>
          </div>
        </div>
        
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-poppins font-bold text-gray-900 mb-6">
              Ready to Transform Your Business?
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto mb-8">
              Let's discuss how Ivoire Digital can help your Dallas business attract more clients, automate repetitive tasks, and leverage AI for sustainable growth.
            </p>
            <Button 
              className="bg-[#b07d2a] hover:bg-[#c49030] text-white py-3 px-8"
              onClick={() => scrollToSection("growth-plan")}
            >
              Schedule a Free Consultation
            </Button>
          </motion.div>
        </div>
        
        {/* Hidden SEO content */}
        <div className="sr-only">
          <h2>About Ivoire Digital - Dallas's Premier AI Marketing Agency</h2>
          <p>
            Learn about Ivoire Digital, Dallas's leading AI implementation and digital marketing 
            agency for small businesses. Founded in 2022, we specialize in helping small businesses 
            leverage artificial intelligence and digital technologies to compete with larger 
            companies. Our team combines technical expertise with small business experience 
            to deliver practical, results-driven solutions.
          </p>
          
          <h2>The Best AI Agency in Dallas for Small Business Growth</h2>
          <p>
            Ivoire Digital is committed to democratizing access to cutting-edge AI technology 
            for small businesses nationwide. We've helped dozens of businesses across the country 
            implement chatbots, automated marketing, intelligent analytics, and business process 
            automation, resulting in significant cost savings and revenue growth.
          </p>
          
          <h2>Digital Marketing Specialists with National Market Expertise</h2>
          <p>
            As a nationwide digital marketing agency, we understand the unique aspects of different 
            business environments across the country. Our digital marketing strategies are specifically 
            tailored to help businesses stand out in competitive markets, attract their target customers, 
            and build strong connections through targeted digital campaigns, regardless of location.
          </p>
        </div>
      </div>
    </section>
  );
}