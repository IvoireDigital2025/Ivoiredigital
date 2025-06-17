import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { FileText, Clock, ArrowRight } from "lucide-react";

interface Guide {
  id: string;
  title: string;
  description: string;
  readTime: string;
  category: string;
  icon: React.ReactNode;
  slug: string;
}

const guides: Guide[] = [
  {
    id: "guide-1",
    title: "The Complete Guide to Implementing AI Chatbots for Small Business Customer Service",
    description: "Learn how to select, implement, and optimize AI chatbots for your small business to provide 24/7 customer support without increasing staff costs.",
    readTime: "15 min read",
    category: "AI Implementation",
    icon: <FileText className="h-8 w-8 text-[#f59e0b]" />,
    slug: "ai-chatbots-implementation"
  },
  {
    id: "guide-2",
    title: "Local SEO Mastery: How to Dominate Google Maps for Your Business",
    description: "A step-by-step guide to optimizing your Google Business Profile, building local citations, and earning reviews to increase your visibility in local search.",
    readTime: "20 min read",
    category: "Digital Marketing",
    icon: <FileText className="h-8 w-8 text-[#f59e0b]" />,
    slug: "local-seo-mastery"
  },
  {
    id: "guide-3",
    title: "Small Business Automation Blueprint: 5 Processes to Automate Today",
    description: "Discover the five business processes that every small business should automate, with implementation instructions and recommended tools.",
    readTime: "18 min read",
    category: "Business Automation",
    icon: <FileText className="h-8 w-8 text-[#f59e0b]" />,
    slug: "business-automation-blueprint"
  },
  {
    id: "guide-4",
    title: "Creating a High-Converting Website for Service-Based Businesses",
    description: "Learn the essential elements that every service business website needs to effectively convert visitors into leads and customers.",
    readTime: "12 min read",
    category: "Web Development",
    icon: <FileText className="h-8 w-8 text-[#f59e0b]" />,
    slug: "high-converting-website"
  }
];

export default function GuidesSection() {
  return (
    <section id="guides" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div 
            className="text-center lg:text-left"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-poppins font-bold text-[#14532d]">Free Business Growth Guides</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl lg:max-w-none">
              Practical, actionable guides to help you implement AI solutions, improve your digital marketing, and automate your business processes.
            </p>
          </motion.div>
          
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <img 
              src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
              alt="Modern retail store with customers and technology"
              className="rounded-xl shadow-lg w-full h-64 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl"></div>
          </motion.div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {guides.map((guide, index) => (
            <motion.div
              key={guide.id}
              className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow border border-gray-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-5">
                  {guide.icon}
                </div>
                <div>
                  <span className="text-sm font-medium px-3 py-1 bg-[#14532d]/10 text-[#14532d] rounded-full inline-block mb-3">
                    {guide.category}
                  </span>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {guide.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {guide.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-gray-500 text-sm">
                      <Clock className="h-4 w-4 mr-1" />
                      <span>{guide.readTime}</span>
                    </div>
                    <a href={`/guide/${guide.slug}`} className="inline-flex items-center text-[#14532d] font-medium hover:text-[#f59e0b] transition-colors">
                      Read Guide <ArrowRight className="h-4 w-4 ml-1" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Button 
            className="bg-[#14532d] hover:bg-[#166534] text-white font-medium py-3 px-8"
          >
            Browse All Guides
          </Button>
        </motion.div>
        
        {/* Hidden SEO content */}
        <div className="sr-only">
          <h2>Free AI Implementation Guides for Small Businesses</h2>
          <p>
            Download our comprehensive guides on implementing artificial intelligence in your 
            small business operations. Learn about chatbot implementation, automated lead 
            qualification, AI-powered content creation, and customer service automation 
            without the need for technical expertise.
          </p>
          
          <h2>Digital Marketing Guides for Dallas Local Businesses</h2>
          <p>
            Our expert guides walk you through improving your local search presence, 
            optimizing Google Business Profile, running effective social media campaigns, 
            and implementing content marketing strategies that work specifically for 
            businesses in the Dallas market.
          </p>
          
          <h2>Business Process Automation Resources and Tutorials</h2>
          <p>
            Step-by-step guides for automating repetitive tasks in your small business, 
            including customer onboarding, appointment scheduling, invoice management, 
            email marketing, and social media posting - all designed to save you time 
            and reduce operational costs.
          </p>
        </div>
      </div>
    </section>
  );
}