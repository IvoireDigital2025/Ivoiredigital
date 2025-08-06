import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { TrendingUp, Users, Clock, ArrowRight } from "lucide-react";

interface CaseStudy {
  id: string;
  title: string;
  client: string;
  industry: string;
  challenge: string;
  solution: string;
  results: string[];
  image: string;
}

const caseStudies: CaseStudy[] = [
  {
    id: "case-1",
    title: "Toyota Dealership Transforms Customer Experience with AI-Powered Service Platform",
    client: "Toyota Dealership Network",
    industry: "Automotive Sales & Service",
    challenge: "A Toyota dealership was struggling to handle the increasing volume of customer inquiries about vehicle availability, service appointments, financing options, and post-purchase support across their busy service center.",
    solution: "We implemented a custom AI chatbot solution that integrated with their inventory management system, service scheduling platform, and financing tools to provide instant answers to common customer questions and streamline the entire customer journey.",
    results: [
      "47% reduction in customer service costs",
      "24/7 availability for sales and service inquiries",
      "89% customer satisfaction rate with AI interactions",
      "35% decrease in call volume to human agents"
    ],
    image: "/toyota-image.avif"
  },
  {
    id: "case-2",
    title: "Coffee Shop Digital Transformation Doubles Daily Efficiency",
    client: "Coffee Pro",
    industry: "Food & Beverage",
    challenge: "Coffee Pro on Astoria Blvd in New York was struggling with long wait times, missed orders, and limited staff availability to handle customer inquiries outside business hours.",
    solution: "We implemented a comprehensive digital transformation including a complete website redesign, AI-powered ordering system with automated customer support, smart inventory alerts, and targeted digital marketing campaigns.",
    results: [
      "Doubled operational efficiency",
      "24/7 customer order handling",
      "Reduced wait times by 60%",
      "300% increase in online engagement"
    ],
    image: "/coffee-pro-storefront.webp"
  }
];

export default function CaseStudiesSection() {
  return (
    <section id="case-studies" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-poppins font-bold text-[#14532d]">Client Success Stories</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Real results we've achieved for businesses just like yours nationwide.
          </p>
        </motion.div>
        
        <div className="space-y-16">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.id}
              className="grid md:grid-cols-2 gap-8 items-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className={`rounded-xl overflow-hidden shadow-lg ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                <img 
                  src={study.image} 
                  alt={study.title}
                  className={`w-full h-64 ${study.id === 'case-2' ? 'object-cover object-top' : 'object-cover'}`}
                />
              </div>
              
              <div>
                <div className="flex items-center space-x-3 mb-3">
                  <span className="px-3 py-1 bg-[#f59e0b]/20 text-[#f59e0b] rounded-full text-sm font-medium">
                    {study.industry}
                  </span>
                  <span className="text-sm text-gray-500">
                    {study.client}
                  </span>
                </div>
                
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  {study.title}
                </h3>
                
                <div className="space-y-4 mb-6">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1">The Challenge:</h4>
                    <p className="text-gray-600">{study.challenge}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1">Our Solution:</h4>
                    <p className="text-gray-600">{study.solution}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1">The Results:</h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-2">
                      {study.results.map((result, idx) => (
                        <li key={idx} className="flex items-start">
                          <TrendingUp className="h-5 w-5 text-[#f59e0b] mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-600">{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        

        
        {/* Hidden SEO content */}
        <div className="sr-only">
          <h2>AI Implementation Case Studies for Small Businesses</h2>
          <p>
            Read how small businesses nationwide are achieving remarkable results with AI implementation. 
            Our case studies detail specific challenges, solutions, and measurable outcomes for 
            retail stores, service providers, healthcare practices, and professional services 
            firms that have implemented artificial intelligence solutions.
          </p>
          
          <h2>Digital Marketing Success Stories and ROI Examples</h2>
          <p>
            Explore real results from our digital marketing campaigns for businesses nationwide. 
            Our case studies show specific metrics like traffic increases, conversion rates, 
            cost per acquisition, and overall ROI for local SEO, Google Ads, social media, 
            and content marketing campaigns across various industries.
          </p>
          
          <h2>Business Automation Implementation Results for Small Companies</h2>
          <p>
            See the tangible benefits of business automation for small and medium businesses. 
            Our case studies demonstrate how automation reduces operational costs, saves time, 
            improves customer experience, and allows businesses to scale without proportionally 
            increasing headcount or expenses.
          </p>
        </div>
      </div>
    </section>
  );
}