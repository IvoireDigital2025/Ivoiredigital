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
    title: "Dental Practice Cuts No-Shows by 70% and Saves 2 Hours Daily with AI",
    client: "Multi-Provider Dental Clinic",
    industry: "Dental Clinic",
    challenge: "A busy multi-provider dental clinic was losing thousands of dollars monthly to no-shows and last-minute cancellations. Their front desk was overwhelmed with scheduling calls and doctors were staying late every evening to finish charting.",
    solution: "We deployed our AI appointment booking system with automated reminders, an AI receptionist to handle incoming calls 24/7, and our AI SOAP note generation system so doctors could complete charts in minutes instead of hours.",
    results: [
      "70% reduction in patient no-shows",
      "Doctors save 90+ minutes daily on charting",
      "50% fewer scheduling calls to front desk",
      "12 new patient bookings captured after hours in first month"
    ],
    image: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=800&h=500&fit=crop&crop=center"
  },
  {
    id: "case-2",
    title: "Luxury Spa Fills Schedule on Autopilot and Grows to 4.9 Stars on Google",
    client: "Wellness & Spa Center",
    industry: "Spa & Wellness",
    challenge: "A high-end spa was relying entirely on phone calls and manual follow-ups to fill their treatment schedule. Client retention was low, staff spent hours each week on admin tasks, and their Google reviews were sparse despite having happy clients.",
    solution: "We implemented an AI booking system with automated reminders, a missed-call text-back system, an AI client reactivation campaign targeting lapsed clients, and an automated Google review request system sent after every completed appointment.",
    results: [
      "Calendar 90% full within 6 weeks of launch",
      "Grew from 3.8 to 4.9 stars on Google",
      "42% of lapsed clients rebooked via reactivation campaign",
      "Front desk saves 15+ hours per week on admin"
    ],
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&h=500&fit=crop&crop=center"
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