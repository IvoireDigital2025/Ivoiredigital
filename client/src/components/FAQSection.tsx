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
    question: "What industries do you work with?",
    answer: "We work with businesses across every industry — retail, hospitality, real estate, professional services, e-commerce, food & beverage, health & wellness, and more. Our AI automation, digital marketing, and website design solutions are built to fit any business model. If you have customers, we can help you get more of them and serve them better."
  },
  {
    id: "faq-2",
    question: "What does an AI receptionist actually do for my business?",
    answer: "Our AI receptionist answers inbound calls 24/7 using natural, human-like voice technology. It can schedule appointments, answer common questions about your services, hours, and pricing — and seamlessly transfer to your team when needed. This means you never miss a lead, even outside business hours or when your staff is busy."
  },
  {
    id: "faq-3",
    question: "How long does it take to build my website?",
    answer: "Most custom websites are delivered within 2–4 weeks depending on scope and complexity. A landing page or simple business site typically takes 1–2 weeks. A full multi-page website with custom features, e-commerce, or integrations may take 3–4 weeks. We keep you involved throughout the process with clear milestones and revisions included."
  },
  {
    id: "faq-4",
    question: "Will my website work on mobile devices?",
    answer: "Absolutely. Every website we build is mobile-first — meaning it's designed to look and perform perfectly on phones and tablets before anything else. Over 60% of web traffic comes from mobile devices, so this is non-negotiable for us. We also optimize for fast load times and Core Web Vitals to help your Google ranking."
  },
  {
    id: "faq-5",
    question: "How quickly can AI automation be set up?",
    answer: "Most AI systems go live within 3–7 business days. Simple setups like missed-call text-back or automated review requests can be live within 24–48 hours. More complex systems like full AI receptionist integration or multi-step follow-up campaigns typically take 5–7 days, including testing and a walkthrough with your team."
  },
  {
    id: "faq-6",
    question: "Do I need to sign a long-term contract?",
    answer: "No long-term contracts required. We believe in earning your business every month through results. Our services are offered on flexible monthly terms. For website design projects, those are typically a one-time fee. We'll always be upfront about pricing before any work begins — no hidden fees."
  },
  {
    id: "faq-7",
    question: "Will your systems integrate with the tools I already use?",
    answer: "Yes. We integrate with most major business tools including Google Calendar, CRMs, booking platforms, e-commerce systems, phone providers, and more. During your free consultation, we'll review your current tech stack and confirm compatibility before we start any implementation."
  },
  {
    id: "faq-8",
    question: "What makes Ivoire Digital different from other agencies?",
    answer: "We're a small, focused team that treats every client like a partner — not a ticket number. We combine AI automation, digital marketing, and custom website design under one roof so your entire digital strategy works together. We measure success by your actual outcomes: more leads, more bookings, more revenue — and we don't stop until you see them."
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
            Everything you need to know about working with Ivoire Digital.
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
      </div>
    </section>
  );
}
