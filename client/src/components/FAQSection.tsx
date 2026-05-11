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
    question: "What AI services do you offer for dental clinics?",
    answer: "We offer a full suite of AI systems built specifically for dental practices: an AI receptionist that answers calls and books appointments 24/7, automated appointment reminders to reduce no-shows, a missed-call text-back system, patient follow-up and reactivation campaigns, Google review generation, an AI web chat assistant for your website, AI doctor note transcription, AI SOAP/clinical note generation, and full workflow automation for tasks like patient intake and insurance verification."
  },
  {
    id: "faq-2",
    question: "Can your AI receptionist handle real patient calls?",
    answer: "Yes. Our AI receptionist uses natural, human-like voice technology to answer incoming calls, schedule appointments, answer common questions about your services, hours, and insurance — and seamlessly transfer to your staff when needed. It works 24/7, including evenings and weekends, so you never miss a new patient inquiry again."
  },
  {
    id: "faq-3",
    question: "How much time can your AI SOAP note system save our doctors?",
    answer: "Most dentists spend 1–2 hours per day on charting and documentation. Our AI transcription and SOAP note generation system can cut that down to just minutes per patient. Doctors speak naturally during or after a visit, the AI transcribes it and generates a structured SOAP note ready to review and sign — saving significant time every single day."
  },
  {
    id: "faq-4",
    question: "Will your systems work with our existing practice management software?",
    answer: "Yes. We integrate with most major dental practice management platforms including Dentrix, Eaglesoft, Open Dental, Carestream, and others. We also connect with Google Calendar, EHR systems, and phone providers. During your free consultation, we'll assess your current setup and confirm compatibility before we start."
  },
  {
    id: "faq-5",
    question: "Do your systems work for spas and wellness centers too?",
    answer: "Absolutely. We build AI systems for spas, med spas, and wellness centers as well — including automated booking, client follow-up and reactivation campaigns, missed-call text back, AI chat on your website, and Google review generation. The goal is the same: fill your schedule, reduce no-shows, and keep clients coming back without your staff having to do it manually."
  },
  {
    id: "faq-6",
    question: "How long does it take to get set up?",
    answer: "Most systems are live within 3–7 business days depending on what you're implementing. Simple systems like missed-call text-back or review generation can go live within 24–48 hours. More complex setups like full AI receptionist integration or SOAP note generation typically take 5–7 days including testing and staff training."
  },
  {
    id: "faq-7",
    question: "Is patient data secure and HIPAA compliant?",
    answer: "Yes. All systems we implement follow HIPAA compliance standards. Patient data is encrypted, access is controlled, and we sign Business Associate Agreements (BAAs) as required. Your patients' information is handled with the same care and security standards expected in a healthcare environment."
  },
  {
    id: "faq-8",
    question: "What makes Ivoire Digital different from other AI agencies?",
    answer: "We specialize exclusively in dental clinics and spas — we don't try to serve every industry. This means our systems are purpose-built for healthcare and wellness workflows, not adapted from generic templates. We handle everything from setup to training, and we measure our success by the actual outcomes you see: fewer no-shows, more booked appointments, time saved on documentation, and more 5-star reviews."
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
            Common questions from dental clinics and spas about our AI systems.
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
