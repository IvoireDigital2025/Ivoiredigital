import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
  {
    id: "faq-1",
    question: "What AI services do you offer for small businesses?",
    answer: "We offer a comprehensive suite of AI solutions tailored specifically for small businesses nationwide. Our services include AI chatbots for 24/7 customer support, automated email responses, AI-powered social media management, voice assistants for appointment scheduling, and personalized customer recommendations systems. Each solution is customized to fit your business needs and budget."
  },
  {
    id: "faq-2",
    question: "How can digital marketing help my local business attract more clients?",
    answer: "Our digital marketing strategies focus on local SEO to boost your business visibility in your target market. We implement targeted keywords, Google My Business optimization, and location-based ad campaigns. Our clients typically see a 40-60% increase in local inquiries within the first three months. We emphasize mobile-first strategies since 78% of local searches result in offline purchases."
  },
  {
    id: "faq-3",
    question: "What's the cost of implementing AI solutions for my small business?",
    answer: "Our AI solutions start at $299/month for basic implementations. We offer scalable packages based on your specific needs and growth goals. Most clients begin with a focused solution in one area (like customer service or lead generation) and expand as they see ROI. We provide a free consultation to assess your needs and provide transparent pricing with no hidden fees."
  },
  {
    id: "faq-4",
    question: "How long does it take to develop and launch a new website?",
    answer: "Our website development is incredibly fast - we can have your new website live in just 1 to 3 days! This includes a fully automated website design process with professional templates, your branding, content integration, and all the marketing tools you need. Our done-for-you approach means we handle everything while you focus on running your business."
  },
  {
    id: "faq-5",
    question: "Do you offer maintenance and support after project completion?",
    answer: "Yes, we offer comprehensive maintenance and support packages. Our standard support includes security updates, performance monitoring, regular backups, and technical assistance. We also provide content updates and feature additions on request. Our support team is available Monday-Friday, 9am-6pm CST with emergency support available 24/7 for critical issues."
  },
  {
    id: "faq-6",
    question: "How do you measure the success of digital marketing campaigns?",
    answer: "We establish clear KPIs at the beginning of each campaign based on your business goals. Common metrics include website traffic, conversion rates, lead generation, cost per acquisition, and ROI. We provide monthly detailed reports with data visualization and actionable insights. Our transparent reporting shows exactly what's working and where improvements can be made."
  },
  {
    id: "faq-7",
    question: "Can you integrate AI with my existing business systems?",
    answer: "Absolutely. We specialize in seamless integration of AI solutions with your existing business systems including CRMs, email platforms, booking systems, and e-commerce platforms. We've successfully integrated with popular systems like Salesforce, HubSpot, Shopify, and QuickBooks, as well as custom proprietary systems. Our integration process minimizes disruption to your current operations."
  },
  {
    id: "faq-8",
    question: "What makes Ivoire Digital different from other digital marketing agencies?",
    answer: "Ivoire Digital combines deep technical expertise with practical small business knowledge. Unlike larger agencies, we provide personalized attention with dedicated account managers who understand local market dynamics. We focus exclusively on ROI-driven solutions rather than vanity metrics. Our hybrid approach of cutting-edge AI implementation with proven digital marketing strategies creates a comprehensive growth system for your business."
  }
];

export default function FAQSection() {
  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-poppins font-bold text-[#14532d]">Frequently Asked Questions</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Get answers to common questions about our AI solutions, digital marketing services, and how we can help your business grow.
          </p>
        </motion.div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <AccordionItem value={item.id} className="border border-gray-200 rounded-lg overflow-hidden bg-gray-50">
                  <AccordionTrigger className="px-6 py-4 text-left font-medium text-gray-900 hover:text-[#14532d]">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-gray-600">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </div>
        
        {/* Hidden SEO content */}
        <div className="sr-only">
          <h2>AI Agency FAQ - Common Questions About AI Solutions for Small Business</h2>
          <p>
            Find answers to frequently asked questions about artificial intelligence implementation, 
            digital marketing for local businesses, website development timelines, and business 
            automation costs. Ivoire Digital provides transparent information about our services, 
            pricing, and results for Dallas businesses looking to grow with AI and digital solutions.
          </p>
          
          <h2>Dallas Digital Marketing Agency FAQ - Costs, Timeline, and Results</h2>
          <p>
            Learn about digital marketing services in Dallas, including SEO, PPC, social media marketing, 
            and content strategy. Our FAQ covers the most common questions about pricing, expected timelines, 
            measurable results, and how we tailor our approaches for local Dallas businesses.
          </p>
        </div>
      </div>
    </section>
  );
}