import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import { motion } from "framer-motion";
import { ArrowLeft, Globe, Zap, Target, Users, Calendar, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export default function AboutUs() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="font-inter text-gray-800 bg-gray-50">
      <Header scrolled={scrolled} />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-[#14532d] to-[#166534]">
        <div className="container mx-auto px-6">
          <div className="mb-8">
            <a href="/" className="inline-flex items-center bg-white text-[#14532d] border border-white px-4 py-2 rounded-md hover:bg-gray-50 transition-colors font-medium">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </a>
          </div>
          
          <motion.div
            className="max-w-4xl mx-auto text-center text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              About Ivoire Digital
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
              Premier AI and digital marketing agency helping small businesses grow through innovative technology solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#14532d] mb-6">Our Mission</h2>
              <p className="text-xl text-gray-700 leading-relaxed">
                At Ivoire Digital, our mission is to empower small businesses nationwide with the same advanced AI and digital marketing technologies that were previously only accessible to large corporations with massive budgets.
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                We believe that by democratizing access to cutting-edge digital tools, we can help level the playing field and enable small businesses to compete effectively, attract more clients, and scale their operations efficiently.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Founded in 2022, we've helped dozens of businesses across the country implement AI solutions, optimize their digital presence, and automate time-consuming processes to free up their most valuable resource: time.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#14532d] mb-4">What Makes Us Different</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We're not just another digital marketing agency. Here's what sets us apart in helping businesses succeed.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <motion.div
              className="bg-white rounded-xl p-8 shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
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
              className="bg-white rounded-xl p-8 shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Zap className="h-12 w-12 text-[#b07d2a] mb-6" />
              <h4 className="text-xl font-semibold text-gray-900 mb-3">
                Transparent, Value-Driven Pricing
              </h4>
              <p className="text-gray-600">
                We offer clear, upfront pricing with no hidden fees or long-term contracts. Our packages are designed to deliver maximum value, and we focus on measurable results that directly impact your bottom line.
              </p>
            </motion.div>

            <motion.div
              className="bg-white rounded-xl p-8 shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Target className="h-12 w-12 text-[#b07d2a] mb-6" />
              <h4 className="text-xl font-semibold text-gray-900 mb-3">
                Small Business Focus
              </h4>
              <p className="text-gray-600">
                Unlike agencies that treat small businesses as afterthoughts, we specialize exclusively in helping small and medium businesses leverage enterprise-level technology within realistic budgets.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Company Stats */}
      <section className="py-16 bg-[#14532d] text-white">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Impact</h2>
            <p className="text-lg text-white/90 max-w-2xl mx-auto">
              Real results we've delivered for businesses across the country since 2022.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-4xl font-bold text-[#b07d2a] mb-2">50+</div>
              <div className="text-white/80">Businesses Served</div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="text-4xl font-bold text-[#b07d2a] mb-2">95%</div>
              <div className="text-white/80">Client Satisfaction</div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="text-4xl font-bold text-[#b07d2a] mb-2">2.5x</div>
              <div className="text-white/80">Average Lead Increase</div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="text-4xl font-bold text-[#b07d2a] mb-2">24/7</div>
              <div className="text-white/80">Support Available</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Company Info */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[#14532d] mb-6">
                Founded with a Vision
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Founded in Dallas, TX in 2022, Ivoire Digital was created with a simple but powerful vision: make advanced digital marketing and AI technologies accessible to every small business, not just Fortune 500 companies.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Our team combines technical expertise with deep understanding of small business challenges. We know what it's like to wear multiple hats, work with tight budgets, and need solutions that work immediately.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                We're proud to work with businesses like Coffee Pro on Astoria Blvd in New York, helping them streamline operations and grow their customer base through smart automation and digital marketing solutions.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <Calendar className="h-6 w-6 text-[#b07d2a] mr-3" />
                  <span className="text-gray-700">Founded in Dallas, TX - 2022</span>
                </div>
                <div className="flex items-center">
                  <Users className="h-6 w-6 text-[#b07d2a] mr-3" />
                  <span className="text-gray-700">Serving small businesses across the United States</span>
                </div>
                <div className="flex items-center">
                  <Trophy className="h-6 w-6 text-[#b07d2a] mr-3" />
                  <span className="text-gray-700">Specialized in AI and digital marketing automation</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-gradient-to-br from-[#14532d] to-[#166534] rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">Why Choose Ivoire Digital?</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="bg-[#b07d2a] rounded-full w-2 h-2 mt-2 mr-3 flex-shrink-0"></span>
                    <span>Proven track record with 50+ successful implementations</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-[#b07d2a] rounded-full w-2 h-2 mt-2 mr-3 flex-shrink-0"></span>
                    <span>No long-term contracts or hidden fees</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-[#b07d2a] rounded-full w-2 h-2 mt-2 mr-3 flex-shrink-0"></span>
                    <span>Dedicated support team available when you need help</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-[#b07d2a] rounded-full w-2 h-2 mt-2 mr-3 flex-shrink-0"></span>
                    <span>Results-focused approach with measurable outcomes</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            className="max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#14532d] mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Join the businesses that have already discovered the power of AI and digital marketing automation. Let's discuss how we can help you grow.
            </p>
            <Button size="lg" className="bg-[#b07d2a] hover:bg-[#d97706] text-white font-semibold px-8 py-4">
              <a href="/#growth-plan">Get Your Free Consultation</a>
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
      <BackToTop />
    </div>
  );
}