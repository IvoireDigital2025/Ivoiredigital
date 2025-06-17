import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Coffee, Utensils, Store, Building2, Globe, Phone, MessageSquare, Calendar, Star, Users, Mail, Smartphone } from "lucide-react";

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
          icon: Globe,
          title: "New Engaging Website",
          description: "Beautiful, mobile-friendly website that converts visitors into customers",
          stats: "Professional online presence"
        },
        {
          icon: Phone,
          title: "Automate Incoming Calls",
          description: "Never miss a call - customers get instant responses even when you're busy",
          stats: "24/7 phone coverage"
        },
        {
          icon: Calendar,
          title: "Appointment Scheduling",
          description: "Customers book their own appointments online, syncs with your calendar",
          stats: "Reduces booking time by 80%"
        },
        {
          icon: Users,
          title: "Customer Loyalty Program",
          description: "Keep customers coming back with automated rewards and special offers",
          stats: "85% customer retention"
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
          title: "Online Booking System",
          description: "Customers can book tables online, automatic confirmations and reminders",
          stats: "95% table efficiency"
        },
        {
          icon: Star,
          title: "Google Review Management",
          description: "Get more 5-star reviews on Google, respond to feedback automatically",
          stats: "4.8★ average rating"
        },
        {
          icon: Smartphone,
          title: "Text Message Marketing",
          description: "Send special offers and updates directly to customers' phones",
          stats: "95% open rate"
        },
        {
          icon: MessageSquare,
          title: "Missed Call Text Back",
          description: "When you can't answer, customers get an instant text with your info",
          stats: "No lost customers"
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
          icon: Mail,
          title: "Email Marketing Campaigns",
          description: "Send targeted promotions and newsletters to bring customers back",
          stats: "35% more repeat sales"
        },
        {
          icon: MessageSquare,
          title: "Customer Communication",
          description: "SMS, email, and voicemail campaigns to stay connected with customers",
          stats: "3x more engagement"
        },
        {
          icon: Users,
          title: "Customer Database",
          description: "Track customer purchases and preferences for better marketing",
          stats: "Know your customers"
        },
        {
          icon: Star,
          title: "Social Media Management",
          description: "Professional posts and content to attract new customers online",
          stats: "Increased visibility"
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
          icon: Users,
          title: "CRM & Pipeline Management",
          description: "Track leads from first contact to sale, never lose a potential customer",
          stats: "200% more leads converted"
        },
        {
          icon: MessageSquare,
          title: "Virtual Employee Assistant",
          description: "Handles follow-ups, appointment setting, and customer conversations",
          stats: "Works 24/7"
        },
        {
          icon: Mail,
          title: "Marketing Automation",
          description: "Automatic email sequences that nurture leads into paying customers",
          stats: "Set it and forget it"
        },
        {
          icon: Globe,
          title: "Professional Website + SEO",
          description: "Get found on Google with a website that ranks high in search results",
          stats: "More online visibility"
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
            Marketing Services for Every Business
          </h2>
          <p className="text-base text-gray-600 max-w-3xl mx-auto">
            Simple marketing tools that help you get more customers and grow your business. 
            See what we can do for your specific type of business.
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
                    <p className="text-white/90">Marketing & Growth Solutions</p>
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
            Ready to get more customers and grow your business? 
            Let's set up these marketing tools for your specific business type.
          </p>
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-[#f59e0b] hover:bg-[#fbbf24] text-white px-8 py-3 rounded-lg font-medium transition-colors duration-300 shadow-lg hover:shadow-xl"
          >
            Get Your Marketing Setup
          </button>
        </motion.div>
      </div>
    </section>
  );
}