import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Users, Target, Zap, Award, MapPin, Calendar } from "lucide-react";
import { scrollToSection } from "@/lib/utils";

export default function AuthenticStorySection() {
  const stats = [
    { label: "Active Business Clients", value: "200+", icon: Users },
    { label: "Average ROI Increase", value: "340%", icon: Target },
    { label: "AI Automations Deployed", value: "500+", icon: Zap },
    { label: "Years of Experience", value: "8+", icon: Award }
  ];

  const achievements = [
    {
      title: "Coffee Pro Transformation",
      description: "Redesigned and modernized Coffee Pro's complete digital presence, transforming their basic WordPress site into a stunning, culturally-authentic brand experience that celebrates Egyptian coffee heritage in NYC.",
      badge: "Recent Success",
      location: "Astoria, NY",
      impact: "300% increase in online engagement"
    },
    {
      title: "SaaS Platform Development", 
      description: "Built comprehensive business automation platform helping local service businesses streamline operations, automate customer communications, and scale their revenue.",
      badge: "Ongoing Project",
      location: "Dallas, TX",
      impact: "40+ businesses automated"
    },
    {
      title: "E-commerce AI Integration",
      description: "Implemented intelligent recommendation engines and automated customer service systems for growing e-commerce brands, resulting in significant conversion improvements.",
      badge: "Portfolio Highlight",
      location: "Nationwide",
      impact: "Average 45% conversion boost"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center mb-4">
            <MapPin className="h-6 w-6 text-blue-600 mr-2" />
            <span className="text-blue-600 font-medium">Dallas, Texas & Serving Nationwide</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Real Stories, Authentic Results
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We don't just build software - we transform businesses. Here's the authentic story of our journey 
            and the real impact we've created for companies across diverse industries.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="text-center p-6 bg-white rounded-lg shadow-lg"
              >
                <IconComponent className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                <div className="text-2xl font-bold text-gray-800">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Real Project Stories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-12"
        >
          <h3 className="text-2xl font-bold text-gray-800 text-center mb-8">
            Recent Client Transformations
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                        {achievement.badge}
                      </Badge>
                      <div className="flex items-center text-sm text-gray-500">
                        <MapPin className="h-3 w-3 mr-1" />
                        {achievement.location}
                      </div>
                    </div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-3">
                      {achievement.title}
                    </h4>
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                      {achievement.description}
                    </p>
                    <div className="mt-auto">
                      <div className="text-green-600 font-medium text-sm">
                        📈 {achievement.impact}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Our Approach */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center"
        >
          <h3 className="text-2xl font-bold mb-4">Why We're Different</h3>
          <p className="text-lg mb-6 opacity-90 max-w-3xl mx-auto">
            We're not just another software agency. We're Dallas-based entrepreneurs who understand the real challenges 
            of growing a business. Every solution we build is tested in the real world, with real businesses, 
            delivering measurable results that impact your bottom line.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-blue-600 hover:bg-gray-100 font-semibold"
              onClick={() => scrollToSection("website-audit")}
            >
              Get Free Business Analysis
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-600 font-semibold"
              onClick={() => scrollToSection("booking")}
            >
              Schedule Strategy Call
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}