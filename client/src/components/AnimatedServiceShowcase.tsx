import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Coffee, Utensils, Store, Building2, Bot, Phone, MessageSquare, Calendar, TrendingUp, Users, Zap, Clock } from "lucide-react";

export default function AnimatedServiceShowcase() {
  const [activeIndustry, setActiveIndustry] = useState(0);

  const industries = [
    {
      id: "coffee",
      name: "Coffee Shops",
      icon: Coffee,
      color: "from-amber-500 to-orange-600",
      services: [
        {
          icon: Bot,
          title: "AI Order Assistant",
          description: "Handles custom orders, dietary restrictions, and upselling automatically",
          stats: "300% faster ordering"
        },
        {
          icon: Phone,
          title: "Phone Order Automation",
          description: "Takes orders via phone 24/7, never misses a call or order",
          stats: "Zero missed calls"
        },
        {
          icon: Users,
          title: "Loyalty Program AI",
          description: "Automatically tracks customer preferences and rewards",
          stats: "85% customer retention"
        },
        {
          icon: TrendingUp,
          title: "Sales Analytics",
          description: "Track peak hours, popular items, and optimize inventory",
          stats: "40% revenue increase"
        }
      ]
    },
    {
      id: "restaurant",
      name: "Restaurants",
      icon: Utensils,
      color: "from-red-500 to-pink-600",
      services: [
        {
          icon: Calendar,
          title: "Smart Reservations",
          description: "AI manages bookings, waitlists, and table optimization",
          stats: "95% table efficiency"
        },
        {
          icon: MessageSquare,
          title: "Review Management",
          description: "Automatically responds to reviews and manages online reputation",
          stats: "4.8★ average rating"
        },
        {
          icon: Phone,
          title: "Takeout Automation",
          description: "Handles takeout orders, timing, and customer notifications",
          stats: "50% faster service"
        },
        {
          icon: Bot,
          title: "Menu Assistant",
          description: "Helps customers with menu questions and dietary needs",
          stats: "90% satisfaction rate"
        }
      ]
    },
    {
      id: "retail",
      name: "Food & Beverage Retail",
      icon: Store,
      color: "from-green-500 to-emerald-600",
      services: [
        {
          icon: Zap,
          title: "Inventory Intelligence",
          description: "Predicts demand, automates reordering, prevents stockouts",
          stats: "99% stock availability"
        },
        {
          icon: MessageSquare,
          title: "Customer Support Bot",
          description: "Answers product questions, handles complaints, processes returns",
          stats: "24/7 availability"
        },
        {
          icon: TrendingUp,
          title: "Sales Optimization",
          description: "Analyzes buying patterns and suggests promotions",
          stats: "35% profit increase"
        },
        {
          icon: Users,
          title: "Customer Insights",
          description: "Tracks customer behavior and personalizes marketing",
          stats: "60% repeat customers"
        }
      ]
    },
    {
      id: "midsize",
      name: "Mid-Size Companies",
      icon: Building2,
      color: "from-blue-500 to-indigo-600",
      services: [
        {
          icon: Zap,
          title: "Workflow Automation",
          description: "Streamlines processes across departments and systems",
          stats: "80% time savings"
        },
        {
          icon: Bot,
          title: "Advanced CRM Integration",
          description: "Connects all customer touchpoints with intelligent automation",
          stats: "200% lead conversion"
        },
        {
          icon: TrendingUp,
          title: "Business Intelligence",
          description: "Advanced analytics and predictive insights for growth",
          stats: "Strategic advantage"
        },
        {
          icon: Clock,
          title: "Multi-Channel Support",
          description: "Unified customer experience across all platforms",
          stats: "Seamless experience"
        }
      ]
    }
  ];

  // Auto-rotate through industries
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndustry((prev) => (prev + 1) % industries.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const currentIndustry = industries[activeIndustry];
  const IconComponent = currentIndustry.icon;

  return (
    <section className="py-20 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl md:text-3xl font-poppins font-bold text-[#14532d] mb-4">
            Tailored Solutions for Every Industry
          </h2>
          <p className="text-base text-gray-600 max-w-3xl mx-auto">
            Our AI and automation services adapt to your specific business needs. 
            See how we customize solutions for different industries.
          </p>
        </motion.div>

        {/* Industry Selector */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {industries.map((industry, index) => {
            const IndustryIcon = industry.icon;
            return (
              <button
                key={industry.id}
                onClick={() => setActiveIndustry(index)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-300 ${
                  activeIndustry === index
                    ? 'bg-[#14532d] text-white shadow-lg'
                    : 'bg-white text-gray-600 hover:bg-gray-100'
                }`}
              >
                <IndustryIcon className="w-4 h-4" />
                <span className="text-sm font-medium">{industry.name}</span>
              </button>
            );
          })}
        </div>

        {/* Animated Service Showcase */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndustry}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl shadow-2xl overflow-hidden"
            >
              {/* Header with Industry Info */}
              <div className={`bg-gradient-to-r ${currentIndustry.color} p-8 text-white`}>
                <div className="flex items-center justify-center space-x-4 mb-4">
                  <div className="bg-white/20 p-3 rounded-full">
                    <IconComponent className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">{currentIndustry.name}</h3>
                    <p className="text-white/90">Specialized AI Solutions</p>
                  </div>
                </div>
              </div>

              {/* Services Grid */}
              <div className="p-8">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {currentIndustry.services.map((service, serviceIndex) => {
                    const ServiceIcon = service.icon;
                    return (
                      <motion.div
                        key={serviceIndex}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: serviceIndex * 0.1 }}
                        className="text-center group hover:bg-gray-50 p-4 rounded-xl transition-all duration-300"
                      >
                        <div className={`bg-gradient-to-r ${currentIndustry.color} p-3 rounded-full w-fit mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                          <ServiceIcon className="w-6 h-6 text-white" />
                        </div>
                        <h4 className="font-bold text-[#14532d] mb-2">{service.title}</h4>
                        <p className="text-sm text-gray-600 mb-3 leading-relaxed">
                          {service.description}
                        </p>
                        <div className={`bg-gradient-to-r ${currentIndustry.color} text-white px-3 py-1 rounded-full text-xs font-medium inline-block`}>
                          {service.stats}
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Progress Indicators */}
        <div className="flex justify-center space-x-2 mt-8">
          {industries.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndustry(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                activeIndustry === index ? 'bg-[#14532d] scale-125' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>

        {/* Call to Action */}
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <p className="text-base text-gray-700 mb-6 max-w-2xl mx-auto">
            Ready to see how these solutions can transform your specific business? 
            Let's create a custom automation strategy for your industry.
          </p>
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-[#f59e0b] hover:bg-[#fbbf24] text-white px-8 py-3 rounded-lg font-medium transition-colors duration-300 shadow-lg hover:shadow-xl"
          >
            Get Industry-Specific Solutions
          </button>
        </motion.div>
      </div>
    </section>
  );
}