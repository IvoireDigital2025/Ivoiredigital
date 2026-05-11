import { motion } from "framer-motion";
import { Coffee, Utensils, Smile, Sparkles, TrendingUp, Clock, Users, Zap } from "lucide-react";

export default function BusinessTargetSection() {
  const businessTypes = [
    {
      icon: Coffee,
      title: "Coffee Shops & Cafes",
      description: "Streamline orders, manage inventory, and boost customer loyalty. We work with Coffee Pro on Astoria Blvd, New York.",
      benefits: ["24/7 order taking", "Customer retention programs", "Inventory automation"]
    },
    {
      icon: Utensils,
      title: "Restaurants & Eateries",
      description: "Automate reservations, handle takeout orders, and manage reviews",
      benefits: ["Reservation management", "Online ordering systems", "Review automation"]
    },
    {
      icon: Smile,
      title: "Dental Clinics",
      description: "Reduce no-shows, automate patient reminders, and handle appointment requests 24/7",
      benefits: ["Automated appointment reminders", "Patient intake automation", "Insurance inquiry handling"]
    },
    {
      icon: Sparkles,
      title: "Spas & Wellness Centers",
      description: "Fill your booking calendar, upsell treatments, and keep clients coming back with smart follow-ups",
      benefits: ["Automated booking system", "Treatment upsell campaigns", "Client retention follow-ups"]
    }
  ];

  const keyBenefits = [
    {
      icon: Clock,
      title: "Save Time & Money",
      description: "Automation reduces manual tasks by up to 80%, letting you focus on growing your business instead of repetitive work."
    },
    {
      icon: Users,
      title: "Better Customer Experience",
      description: "AI assistants provide instant responses 24/7, improving customer satisfaction and reducing wait times."
    },
    {
      icon: TrendingUp,
      title: "Increase Revenue",
      description: "Smart marketing campaigns and automated follow-ups can boost sales by 40-60% within the first quarter."
    },
    {
      icon: Zap,
      title: "Stay Competitive",
      description: "Modern automation keeps you ahead of competitors who are still handling everything manually."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-[#14532d] to-[#166534] text-white">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl md:text-3xl font-poppins font-bold mb-4">
            We Partner with Businesses Like Yours
          </h2>
          <p className="text-base text-green-100 max-w-3xl mx-auto">
            From local coffee shops and restaurants to dental clinics and spas, we help businesses 
            automate operations and attract more customers through smart AI technology.
          </p>
        </motion.div>

        {/* Business Types */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {businessTypes.map((business, index) => {
            const IconComponent = business.icon;
            return (
              <motion.div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/15 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="bg-[#f59e0b] p-3 rounded-lg w-fit mb-4">
                  <IconComponent className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold mb-2">{business.title}</h3>
                <p className="text-sm text-green-100 mb-4">{business.description}</p>
                <ul className="space-y-1">
                  {business.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="text-xs text-green-200 flex items-center">
                      <div className="w-1.5 h-1.5 bg-[#f59e0b] rounded-full mr-2 flex-shrink-0"></div>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>

        {/* Key Benefits */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-xl md:text-2xl font-poppins font-bold mb-4">
            Why Our Automation & Marketing Services Transform Businesses
          </h3>
          <p className="text-base text-green-100 max-w-2xl mx-auto">
            See the real impact our AI solutions and digital marketing services have on businesses just like yours.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {keyBenefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="bg-[#f59e0b] p-4 rounded-full w-fit mx-auto mb-4">
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-lg font-bold mb-2">{benefit.title}</h4>
                <p className="text-sm text-green-100 leading-relaxed">{benefit.description}</p>
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
          <p className="text-base text-green-100 mb-6 max-w-2xl mx-auto">
            Ready to see how automation and smart marketing can transform your business operations and boost your revenue?
          </p>
          <button 
            onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-[#f59e0b] hover:bg-[#fbbf24] text-white px-8 py-3 rounded-lg font-medium transition-colors duration-300 shadow-lg hover:shadow-xl"
          >
            Get Your Free Consultation
          </button>
        </motion.div>
      </div>
    </section>
  );
}