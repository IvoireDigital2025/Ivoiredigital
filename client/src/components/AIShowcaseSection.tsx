import { motion } from "framer-motion";
import { Bot, Phone, MessageSquare, Star, TrendingUp } from "lucide-react";

export default function AIShowcaseSection() {
  const aiImplementations = [
    {
      id: 1,
      title: "Restaurant AI Phone Assistant",
      description: "Local restaurant uses AI to handle reservations and takeout orders 24/7, reducing wait times and increasing customer satisfaction.",
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&h=400&fit=crop&crop=center",
      industry: "Restaurant",
      results: ["300% increase in orders", "24/7 availability", "95% customer satisfaction"],
      icon: Phone
    },
    {
      id: 2,
      title: "Retail Store Chatbot",
      description: "Small clothing boutique implemented AI chatbot for customer inquiries, product recommendations, and inventory checks.",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop&crop=center",
      industry: "Retail",
      results: ["50% reduction in response time", "40% increase in sales", "Enhanced customer experience"],
      icon: MessageSquare
    },

    {
      id: 3,
      title: "Real Estate AI Assistant",
      description: "Property management company leverages AI for lead qualification, property inquiries, and client follow-ups.",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop&crop=center",
      industry: "Real Estate",
      results: ["60% more qualified leads", "Faster response times", "Higher conversion rates"],
      icon: TrendingUp
    },
    {
      id: 4,
      title: "Auto Shop Service Bot",
      description: "Local auto repair shop uses AI to schedule services, provide quotes, and send maintenance reminders.",
      image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=600&h=400&fit=crop&crop=center",
      industry: "Automotive",
      results: ["35% increase in bookings", "Reduced phone calls", "Better customer retention"],
      icon: Star
    },
    {
      id: 5,
      title: "Salon Booking Assistant",
      description: "Beauty salon implemented AI for appointment booking, service recommendations, and customer feedback collection.",
      image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=600&h=400&fit=crop&crop=center",
      industry: "Beauty & Wellness",
      results: ["90% booking automation", "Reduced no-shows", "Increased repeat customers"],
      icon: MessageSquare
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
            Small Businesses Thriving with AI
          </h2>
          <p className="text-base text-gray-600 max-w-3xl mx-auto">
            See how small businesses nationwide are transforming their operations with AI solutions. 
            From restaurants to salons, these real success stories show the power of automation.
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