import { motion } from "framer-motion";
import { Globe, Zap, Users, TrendingUp, CheckCircle, Phone, Calendar, MessageSquare } from "lucide-react";

export default function AutomatedWebsiteShowcase() {
  const websiteExamples = [
    {
      id: 1,
      title: "Service Business Website",
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&h=400&fit=crop&crop=center",
      features: ["Online Appointment Booking", "Client Intake Forms", "Services & Pricing", "Before & After Gallery"],
      conversionRate: "Convert 50% more new clients"
    },
    {
      id: 2,
      title: "Professional Services Profile",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&crop=center",
      features: ["Meet the Team", "Services & Pricing", "Client Testimonials", "Google Review Feed"],
      conversionRate: "Build trust with new clients"
    },
    {
      id: 3,
      title: "Retail & E-Commerce Website",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop&crop=center",
      features: ["Product Catalog", "Online Booking", "Gift Cards", "Client Testimonials"],
      conversionRate: "Book 60% more appointments"
    },
    {
      id: 4,
      title: "Local Business Website",
      image: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?w=600&h=400&fit=crop&crop=center",
      features: ["Service Gallery", "Membership Plans", "Loyalty Program", "Client Reviews"],
      conversionRate: "Increase repeat visits by 80%"
    }
  ];

  const aiServices = [
    {
      icon: Phone,
      title: "AI Phone Assistant",
      description: "Handles all your calls automatically",
      image: "https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=400&h=300&fit=crop&crop=center",
      benefit: "Never miss a customer call again"
    },
    {
      icon: Calendar,
      title: "Smart Booking System",
      description: "Customers book appointments 24/7",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop&crop=center",
      benefit: "Fill your schedule automatically"
    },
    {
      icon: MessageSquare,
      title: "Text Message Marketing",
      description: "Automated follow-ups and promotions",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=300&fit=crop&crop=center",
      benefit: "Bring customers back without lifting a finger"
    }
  ];

  const automationBenefits = [
    {
      icon: Zap,
      title: "Set It and Forget It",
      description: "AI handles customer inquiries, bookings, and follow-ups while you focus on your business"
    },
    {
      icon: Users,
      title: "Works 24/7 for You",
      description: "Your virtual assistant never sleeps, never takes breaks, and never misses an opportunity"
    },
    {
      icon: TrendingUp,
      title: "Grows Your Business",
      description: "More bookings, better reviews, and higher revenue - all happening automatically"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl md:text-3xl font-poppins font-bold text-[#14532d] mb-4">
            Fully Automated Website Design That Converts
          </h2>
          <p className="text-base text-gray-600 max-w-3xl mx-auto">
            We create beautiful, high-converting websites that work automatically. 
            AI handles customer interactions, bookings, and marketing while you run your business.
          </p>
        </motion.div>

        {/* Website Examples */}
        <motion.div 
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-xl font-bold text-[#14532d] text-center mb-12">
            High-Converting Website Designs for Every Industry
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {websiteExamples.map((website, index) => (
              <motion.div
                key={website.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={website.image} 
                    alt={website.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-[#14532d] text-white px-3 py-1 rounded-full text-xs font-medium">
                    <Globe className="w-3 h-3 inline mr-1" />
                    Live Website
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="text-lg font-bold text-[#14532d] mb-3">{website.title}</h4>
                  <ul className="space-y-2 mb-4">
                    {website.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-sm text-gray-600 flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="bg-[#b07d2a] text-white px-3 py-2 rounded-lg text-xs font-medium text-center">
                    {website.conversionRate}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* AI Services in Action */}
        <motion.div 
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-xl font-bold text-[#14532d] text-center mb-12">
            See Your AI Marketing Tools in Action
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {aiServices.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <motion.div
                  key={index}
                  className="text-center group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="relative mb-6 overflow-hidden rounded-xl">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-[#14532d]/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <IconComponent className="w-12 h-12 text-white" />
                    </div>
                  </div>
                  <h4 className="text-lg font-bold text-[#14532d] mb-2">{service.title}</h4>
                  <p className="text-sm text-gray-600 mb-3">{service.description}</p>
                  <div className="bg-green-100 text-green-800 px-4 py-2 rounded-lg text-xs font-medium">
                    {service.benefit}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* AI Does the Heavy Lifting */}
        <motion.div 
          className="bg-gradient-to-br from-[#14532d] to-[#166534] rounded-2xl p-8 md:p-12 text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold mb-4">AI Does All the Heavy Lifting</h3>
            <p className="text-green-100 max-w-2xl mx-auto">
              Your business runs smoothly while AI handles the tedious work. 
              Focus on what you love - serving customers - while technology grows your business.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {automationBenefits.map((benefit, index) => {
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
                  <div className="bg-[#b07d2a] p-4 rounded-full w-fit mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-lg font-bold mb-3">{benefit.title}</h4>
                  <p className="text-sm text-green-100 leading-relaxed">{benefit.description}</p>
                </motion.div>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-[#b07d2a] hover:bg-[#c49030] text-white px-8 py-4 rounded-lg font-medium transition-colors duration-300 shadow-lg hover:shadow-xl"
            >
              Get Your Automated Business System
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}