import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { TrendingUp } from "lucide-react";

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
    title: "Local Service Business Cuts No-Shows by 70% and Saves 2 Hours Daily with AI",
    client: "Multi-Location Service Company",
    industry: "Service Business",
    challenge: "A busy multi-location service business was losing thousands of dollars monthly to no-shows and last-minute cancellations. Their front desk was overwhelmed with scheduling calls and staff were spending hours on manual follow-ups every day.",
    solution: "We deployed our AI appointment booking system with automated reminders, an AI receptionist to handle incoming calls 24/7, and a missed-call text-back system so every lead gets an instant response — even after hours.",
    results: [
      "70% reduction in no-shows",
      "Staff save 2+ hours daily on admin",
      "50% fewer scheduling calls to front desk",
      "12 new bookings captured after hours in first month"
    ],
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=500&fit=crop&crop=center"
  },
  {
    id: "case-2",
    title: "Coffee Pro Gets a Complete Digital Transformation — 300% More Engagement",
    client: "Coffee Pro (Astoria, NY)",
    industry: "Food & Beverage",
    challenge: "Coffee Pro had a generic WordPress site that failed to capture the brand's authentic Egyptian coffee heritage. Their online presence didn't reflect the quality of their product, and local customers couldn't find them online.",
    solution: "We rebuilt their website from the ground up — custom design, authentic brand storytelling, professional mobile-first development, and local SEO optimization to help them dominate local search in Astoria, NY.",
    results: [
      "300% increase in online engagement",
      "Modern, mobile-first custom design",
      "Authentic brand storytelling that converts",
      "Stronger local community presence"
    ],
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&h=500&fit=crop&crop=center"
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
            Real results we've achieved for businesses across every industry nationwide.
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
                  <span className="px-3 py-1 bg-[#b07d2a]/20 text-[#b07d2a] rounded-full text-sm font-medium">
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
                          <TrendingUp className="h-5 w-5 text-[#b07d2a] mr-2 flex-shrink-0 mt-0.5" />
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

        <div className="sr-only">
          <h2>AI Implementation Case Studies for Small Businesses</h2>
          <p>
            Read how small businesses nationwide are achieving remarkable results with AI implementation.
            Our case studies detail specific challenges, solutions, and measurable outcomes for
            retail stores, service providers, and professional services firms.
          </p>
        </div>
      </div>
    </section>
  );
}
