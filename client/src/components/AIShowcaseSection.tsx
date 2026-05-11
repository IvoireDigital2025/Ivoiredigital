import { motion } from "framer-motion";
import { Bot, Phone, MessageSquare, Star, TrendingUp } from "lucide-react";

export default function AIShowcaseSection() {
  const aiImplementations = [
    {
      id: 1,
      title: "Dental Clinic AI Phone Assistant",
      description: "Dental practice uses AI to handle appointment scheduling, patient reminders, and insurance inquiries around the clock — no receptionist needed.",
      image: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=600&h=400&fit=crop&crop=center",
      industry: "Dental Clinic",
      results: ["70% fewer missed appointments", "24/7 patient support", "50% less front-desk workload"],
      icon: Phone
    },
    {
      id: 2,
      title: "Dental Practice Review Builder",
      description: "Automated follow-up texts after each visit encourage satisfied patients to leave 5-star Google reviews, building trust and attracting new patients.",
      image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=600&h=400&fit=crop&crop=center",
      industry: "Dental Clinic",
      results: ["4.9★ average Google rating", "3x more new patient inquiries", "Fully automated outreach"],
      icon: Star
    },
    {
      id: 3,
      title: "Spa Online Booking Automation",
      description: "Luxury spa uses AI to automate bookings, upsell treatments, and send personalized follow-up messages to clients after every visit.",
      image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=600&h=400&fit=crop&crop=center",
      industry: "Spa & Wellness",
      results: ["90% booking automation", "Reduced no-shows by 60%", "Increased repeat clients"],
      icon: MessageSquare
    },
    {
      id: 4,
      title: "Spa Client Retention System",
      description: "Wellness center uses automated SMS campaigns and VIP loyalty programs to bring clients back more frequently and increase average spend.",
      image: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?w=600&h=400&fit=crop&crop=center",
      industry: "Spa & Wellness",
      results: ["80% client rebooking rate", "40% increase in revenue", "VIP loyalty program"],
      icon: TrendingUp
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
            Dental Clinics & Spas Thriving with AI
          </h2>
          <p className="text-base text-gray-600 max-w-3xl mx-auto">
            See how dental clinics and spas are transforming their operations with AI. 
            Real results from real practices — more bookings, fewer no-shows, and happier clients.
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
                    <IconComponent className="w-5 h-5 text-[#f59e0b]" />
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
                          <div className="w-1.5 h-1.5 bg-[#f59e0b] rounded-full mr-2 flex-shrink-0"></div>
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
            Ready to join these successful businesses? Let's discuss how AI can transform your operations.
          </p>
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-[#f59e0b] hover:bg-[#fbbf24] text-white px-8 py-3 rounded-lg font-medium transition-colors duration-300 shadow-lg hover:shadow-xl"
          >
            Start Your AI Journey
          </button>
        </motion.div>
      </div>
    </section>
  );
}