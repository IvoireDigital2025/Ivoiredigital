import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Coffee, Utensils, Store, Building2, Globe, Phone, MessageSquare, Calendar, Star, Users, Mail, Smartphone,
  Scissors, Home, Dumbbell, Heart, Car, Wrench, Sparkles, Stethoscope, Camera, HardHat
} from "lucide-react";

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
      id: "beauty",
      name: "Beauty & Wellness",
      icon: Scissors,
      color: "from-pink-500 to-rose-600",
      services: [
        {
          icon: Calendar,
          title: "Online Appointment Booking",
          description: "Let clients book hair, nail, or tattoo appointments 24/7 with automatic reminders",
          stats: "Reduces no-shows by 90%"
        },
        {
          icon: Star,
          title: "Beauty Review Management",
          description: "Get stunning before/after photos shared as reviews to attract new clients",
          stats: "Beautiful portfolio"
        },
        {
          icon: Smartphone,
          title: "Client Retention Texts",
          description: "Automated appointment reminders and follow-ups for rebooking",
          stats: "80% rebooking rate"
        },
        {
          icon: Users,
          title: "VIP Client Programs",
          description: "Reward your best clients with exclusive offers and priority booking",
          stats: "Premium experience"
        }
      ]
    },
    {
      id: "realestate",
      name: "Real Estate",
      icon: Home,
      color: "from-blue-500 to-cyan-600",
      services: [
        {
          icon: Globe,
          title: "Property Showcase Website",
          description: "Professional website with virtual tours and lead capture forms",
          stats: "More qualified leads"
        },
        {
          icon: Phone,
          title: "Lead Response System",
          description: "Instant response to property inquiries, even when you're showing homes",
          stats: "Never miss a buyer"
        },
        {
          icon: Mail,
          title: "Buyer/Seller Nurturing",
          description: "Automated email sequences for market updates and property alerts",
          stats: "Stay top of mind"
        },
        {
          icon: Calendar,
          title: "Showing Scheduler",
          description: "Clients can book property viewings directly from your listings",
          stats: "Streamlined showings"
        }
      ]
    },
    {
      id: "fitness",
      name: "Fitness & Wellness",
      icon: Dumbbell,
      color: "from-emerald-500 to-teal-600",
      services: [
        {
          icon: Calendar,
          title: "Class Booking System",
          description: "Members book yoga, pilates, or personal training sessions online",
          stats: "Maximize class capacity"
        },
        {
          icon: Users,
          title: "Membership Management",
          description: "Automated billing, renewals, and member communication",
          stats: "Reduce churn by 60%"
        },
        {
          icon: Smartphone,
          title: "Workout Reminders",
          description: "Motivational texts and class reminders to keep members engaged",
          stats: "Higher attendance"
        },
        {
          icon: Star,
          title: "Transformation Stories",
          description: "Showcase member success stories and before/after photos",
          stats: "Social proof"
        }
      ]
    },
    {
      id: "automotive",
      name: "Automotive Services",
      icon: Car,
      color: "from-gray-500 to-slate-600",
      services: [
        {
          icon: Calendar,
          title: "Service Scheduling",
          description: "Customers book car detailing, repairs, or maintenance appointments",
          stats: "Organized schedule"
        },
        {
          icon: Phone,
          title: "Emergency Response",
          description: "24/7 mobile mechanic dispatch and customer communication",
          stats: "Always available"
        },
        {
          icon: Mail,
          title: "Maintenance Reminders",
          description: "Automated service reminders based on mileage and time",
          stats: "Repeat customers"
        },
        {
          icon: Star,
          title: "Work Portfolio",
          description: "Before/after photos of detailing and repair work",
          stats: "Visual credibility"
        }
      ]
    },
    {
      id: "healthcare",
      name: "Healthcare & Wellness",
      icon: Stethoscope,
      color: "from-indigo-500 to-purple-600",
      services: [
        {
          icon: Calendar,
          title: "Patient Scheduling",
          description: "Online booking for chiropractic, dental, or therapy appointments",
          stats: "Efficient scheduling"
        },
        {
          icon: MessageSquare,
          title: "Appointment Reminders",
          description: "Reduce no-shows with automated SMS and email reminders",
          stats: "98% attendance rate"
        },
        {
          icon: Star,
          title: "Patient Testimonials",
          description: "Collect and showcase patient success stories and reviews",
          stats: "Build trust"
        },
        {
          icon: Users,
          title: "Patient Follow-up",
          description: "Automated wellness check-ins and treatment reminders",
          stats: "Better outcomes"
        }
      ]
    },
    {
      id: "events",
      name: "Event Services",
      icon: Camera,
      color: "from-violet-500 to-purple-600",
      services: [
        {
          icon: Globe,
          title: "Portfolio Website",
          description: "Stunning galleries for photographers, DJs, and event planners",
          stats: "Professional showcase"
        },
        {
          icon: Calendar,
          title: "Event Booking",
          description: "Clients can check availability and book events online",
          stats: "Streamlined booking"
        },
        {
          icon: Mail,
          title: "Client Communication",
          description: "Automated contracts, invoices, and event timeline updates",
          stats: "Professional process"
        },
        {
          icon: Star,
          title: "Event Testimonials",
          description: "Showcase happy couples and successful events",
          stats: "Social validation"
        }
      ]
    },
    {
      id: "homeservices",
      name: "Home Services",
      icon: HardHat,
      color: "from-orange-500 to-red-600",
      services: [
        {
          icon: Phone,
          title: "Emergency Dispatch",
          description: "24/7 plumbing, HVAC, and cleaning service requests",
          stats: "Always responsive"
        },
        {
          icon: Calendar,
          title: "Service Scheduling",
          description: "Customers book maintenance and repair appointments online",
          stats: "Organized workflow"
        },
        {
          icon: Star,
          title: "Work Documentation",
          description: "Before/after photos and customer testimonials",
          stats: "Proven results"
        },
        {
          icon: Users,
          title: "Service Reminders",
          description: "Automated follow-ups for seasonal maintenance",
          stats: "Recurring revenue"
        }
      ]
    },
    {
      id: "medspas",
      name: "Med Spas & Clinics",
      icon: Sparkles,
      color: "from-rose-500 to-pink-600",
      services: [
        {
          icon: Calendar,
          title: "Treatment Booking",
          description: "Online scheduling for cosmetic treatments and consultations",
          stats: "Premium experience"
        },
        {
          icon: MessageSquare,
          title: "Pre/Post Care",
          description: "Automated treatment instructions and follow-up care",
          stats: "Better results"
        },
        {
          icon: Star,
          title: "Transformation Gallery",
          description: "Showcase beautiful before/after treatment results",
          stats: "Visual proof"
        },
        {
          icon: Users,
          title: "VIP Client Program",
          description: "Exclusive offers for repeat clients and referrals",
          stats: "Client loyalty"
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
            Branded, Done-For-You Marketing Solutions
          </h2>
          <p className="text-base text-gray-600 max-w-3xl mx-auto">
            Complete marketing systems customized for your industry. We set everything up for you - 
            websites, booking systems, review management, and customer communication tools.
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
            Ready to get a complete branded marketing system for your business? 
            We handle everything - setup, customization, and training so you can focus on serving customers.
          </p>
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-[#f59e0b] hover:bg-[#fbbf24] text-white px-8 py-3 rounded-lg font-medium transition-colors duration-300 shadow-lg hover:shadow-xl"
          >
            Get Your Done-For-You Solution
          </button>
        </motion.div>
      </div>
    </section>
  );
}