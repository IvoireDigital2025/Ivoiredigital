import { motion } from "framer-motion";
import { Bot, Phone, MessageSquare, Star, TrendingUp, Globe } from "lucide-react";

export default function AIShowcaseSection() {
  const aiImplementations = [
    {
      id: 1,
      title: "AI Phone Receptionist for Local Businesses",
      description: "A local service business uses AI to handle inbound calls, book appointments, and answer common questions around the clock — no missed leads, no extra staff.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop&crop=center",
      industry: "Service Business",
      results: ["70% fewer missed calls", "24/7 customer support", "50% less front-desk workload"],
      icon: Phone
    },
    {
      id: 2,
      title: "Automated Review Builder for Retail",
      description: "A retail store uses automated follow-up messages after every purchase to encourage happy customers to leave 5-star Google reviews — building trust on autopilot.",
      image: "https://images.unsplash.com/photo-1556742111-a301076d9d18?w=600&h=400&fit=crop&crop=center",
      industry: "Retail",
      results: ["4.9★ average Google rating", "3x more new customer inquiries", "Fully automated outreach"],
      icon: Star
    },
    {
      id: 3,
      title: "Online Booking Automation for Hospitality",
      description: "A hospitality business uses AI to automate reservations, upsell add-ons, and send personalized follow-up messages to guests after every visit.",
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&h=400&fit=crop&crop=center",
      industry: "Hospitality",
      results: ["90% booking automation", "Reduced no-shows by 60%", "Increased repeat customers"],
      icon: MessageSquare
    },
    {
      id: 4,
      title: "Client Retention System for Professional Services",
      description: "A professional services firm uses automated SMS campaigns and loyalty follow-ups to bring clients back more frequently and increase average revenue per client.",
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&h=400&fit=crop&crop=center",
      industry: "Professional Services",
      results: ["80% client rebooking rate", "40% increase in revenue", "Automated loyalty campaigns"],
      icon: TrendingUp
    },
    {
      id: 5,
      title: "High-Converting Website for E-Commerce",
      description: "An e-commerce brand gets a custom-designed, mobile-first website built to convert visitors into buyers — with fast load times, clear CTAs, and branded storytelling.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop&crop=center",
      industry: "E-Commerce",
      results: ["2.8x conversion rate increase", "Mobile-optimized design", "SEO-ready from day one"],
      icon: Globe
    },
    {
      id: 6,
      title: "AI Chat Assistant for Real Estate",
      description: "A real estate agency deploys an AI chat widget on their website to qualify leads, answer property questions, and schedule showings automatically — 24/7.",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop&crop=center",
      industry: "Real Estate",
      results: ["3x more qualified leads", "Showings booked automatically", "24/7 lead capture"],
      icon: Bot
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl md:text-3xl font-poppins font-bold text-[#14532d] mb-4">
            Businesses Thriving with Ivoire Digital
          </h2>
          <p className="text-base text-gray-600 max-w-3xl mx-auto">
            From AI automation to stunning websites, see how businesses across every industry are growing faster, saving time, and winning more customers.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {aiImplementations.map((implementation, index) => {
            const IconComponent = implementation.icon;
            return (
              <motion.div
                key={implementation.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={implementation.image} 
                    alt={implementation.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 bg-[#14532d] text-white px-3 py-1 rounded-full text-xs font-medium">
                    {implementation.industry}
                  </div>
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-full">
                    <IconComponent className="w-5 h-5 text-[#b07d2a]" />
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-lg font-bold text-[#14532d] mb-2">
                    {implementation.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                    {implementation.description}
                  </p>
                  
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold text-[#14532d]">Results:</h4>
                    <ul className="space-y-1">
                      {implementation.results.map((result, resultIndex) => (
                        <li key={resultIndex} className="text-xs text-gray-600 flex items-center">
                          <div className="w-1.5 h-1.5 bg-[#b07d2a] rounded-full mr-2 flex-shrink-0"></div>
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <p className="text-base text-gray-700 mb-6 max-w-2xl mx-auto">
            Ready to join these successful businesses? Let's discuss how we can grow yours.
          </p>
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-[#b07d2a] hover:bg-[#c49030] text-white px-8 py-3 rounded-lg font-medium transition-colors duration-300 shadow-lg hover:shadow-xl"
          >
            Start Your Growth Journey
          </button>
        </motion.div>
      </div>
    </section>
  );
}
