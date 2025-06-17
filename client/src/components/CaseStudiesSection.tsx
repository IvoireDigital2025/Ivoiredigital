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
    title: "How an AI Chatbot Reduced Customer Service Costs by 47% for a Dallas Retail Chain",
    client: "DFW Home Furnishings",
    industry: "Retail / Home Goods",
    challenge: "A growing Dallas-based home furnishings chain with 5 locations was struggling to handle the increasing volume of customer inquiries about product availability, delivery schedules, and post-purchase support.",
    solution: "We implemented a custom AI chatbot solution that integrated with their inventory management system and delivery scheduling platform to provide instant answers to common customer questions.",
    results: [
      "47% reduction in customer service costs",
      "24/7 availability for customer inquiries",
      "89% customer satisfaction rate with bot interactions",
      "35% decrease in call volume to human agents"
    ],
    image: "https://images.unsplash.com/photo-1555421689-491a97ff2040?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "case-2",
    title: "Local SEO Campaign Generates 152% More Leads for Dallas Law Firm",
    client: "Texas Family Law Associates",
    industry: "Legal Services",
    challenge: "A family law practice in Dallas was struggling to stand out in the highly competitive legal market and wasn't generating enough qualified leads through their website.",
    solution: "We implemented a comprehensive local SEO strategy focused on Dallas-specific keywords, created neighborhood-targeted landing pages, optimized their Google Business Profile, and built a review generation system.",
    results: [
      "152% increase in qualified leads in 4 months",
      "Top 3 Google Maps ranking for key search terms",
      "324% increase in website traffic from local searches",
      "43 new positive Google reviews in 3 months"
    ],
    image: "https://images.unsplash.com/photo-1589578527966-fdac0f44566c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "case-3",
    title: "Business Process Automation Saves Accounting Firm 25 Hours Per Week",
    client: "Precision Accounting Services",
    industry: "Financial Services",
    challenge: "A growing accounting firm was wasting valuable staff time on repetitive tasks like client onboarding, document collection, appointment scheduling, and follow-up emails.",
    solution: "We created a customized automation system that streamlined client onboarding, automated document requests and reminders, and integrated their scheduling and CRM systems.",
    results: [
      "25+ hours saved per week on administrative tasks",
      "68% faster client onboarding process",
      "92% client satisfaction with the new digital experience",
      "Capacity increased to serve 40% more clients without adding staff"
    ],
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "case-4",
    title: "Medical Practice Automation",
    client: "Family Health Clinic",
    industry: "Healthcare",
    challenge: "A family clinic was struggling with high no-show rates, inefficient appointment scheduling, and staff spending too much time on routine patient communications.",
    solution: "We implemented AI-powered appointment scheduling, automated patient reminders via SMS and email, and basic health consultation chatbots to handle common patient questions.",
    results: [
      "80% fewer missed appointments",
      "Improved patient flow",
      "Staff efficiency boost",
      "24/7 patient support availability"
    ],
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
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
                  className="w-full h-64 object-cover"
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
                
                <a href="#" className="inline-flex items-center text-[#14532d] font-medium hover:text-[#f59e0b] transition-colors">
                  Read Full Case Study <ArrowRight className="h-4 w-4 ml-1" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Button 
            className="bg-[#14532d] hover:bg-[#166534] text-white font-medium py-3 px-8"
          >
            View All Case Studies
          </Button>
        </motion.div>
        
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