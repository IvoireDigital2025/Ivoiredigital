import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { FileText, Clock } from "lucide-react";

interface Guide {
  id: string;
  title: string;
  description: string;
  readTime: string;
  category: string;
  slug: string;
}

const guides: Guide[] = [
  {
    id: "guide-1",
    title: "How Dental Clinics Can Eliminate No-Shows with AI Appointment Reminders",
    description: "Learn how automated SMS and email reminder sequences can reduce patient no-shows by up to 70%, keeping your schedule full and your revenue predictable.",
    readTime: "8 min read",
    category: "Appointment Automation",
    slug: "reduce-dental-no-shows"
  },
  {
    id: "guide-2",
    title: "The Complete Guide to AI Receptionists for Dental Practices",
    description: "Discover how an AI receptionist can answer patient calls 24/7, book appointments, handle FAQs, and cut your front-desk workload in half — without hiring more staff.",
    readTime: "10 min read",
    category: "AI Receptionist",
    slug: "ai-receptionist-dental"
  },
  {
    id: "guide-3",
    title: "How to Grow Your Google Reviews to 4.9 Stars on Autopilot",
    description: "Step-by-step guide to automating review requests after every patient visit so your clinic consistently builds a 5-star reputation that attracts new patients.",
    readTime: "7 min read",
    category: "Review Generation",
    slug: "grow-google-reviews-dental"
  },
  {
    id: "guide-4",
    title: "AI SOAP Notes: How Dentists Are Saving 2 Hours a Day on Charting",
    description: "See how AI clinical note generation and voice transcription are eliminating after-hours charting and helping dentists focus more time on patient care.",
    readTime: "9 min read",
    category: "Clinical Documentation",
    slug: "ai-soap-notes-dentists"
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
            <h2 className="text-3xl md:text-4xl font-poppins font-bold text-[#14532d]">Free Dental & Spa AI Guides</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl lg:max-w-none">
              Practical guides to help your clinic or spa save time, reduce no-shows, and grow with AI — written specifically for healthcare and wellness practices.
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
              src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800&h=400&fit=crop&crop=center"
              alt="Dental clinic"
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
                  <FileText className="h-8 w-8 text-[#b07d2a]" />
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
                  <div className="flex items-center text-gray-500 text-sm">
                    <Clock className="h-4 w-4 mr-1" />
                    <span>{guide.readTime}</span>
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
            onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Book a Free Consultation
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
