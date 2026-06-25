import { motion } from "framer-motion";
import {
  Bot,
  Workflow,
  Target,
  PenTool,
  MessageSquare,
  PhoneMissed,
  Users,
  BarChart3,
  BookOpen,
  GraduationCap,
} from "lucide-react";
import { goToBooking } from "@/lib/utils";

const services = [
  {
    icon: Bot,
    title: "AI Customer Support Chatbots & Voice Agents",
    desc: "Website chatbots, FAQ bots, booking bots, WhatsApp/SMS bots, and AI call answering that handle support and order-status questions so you never miss a lead.",
  },
  {
    icon: Workflow,
    title: "Workflow Automation",
    desc: "We connect your tools — Gmail, Slack, HubSpot, GoHighLevel, Airtable, Sheets, CRMs, and invoicing — to automate follow-ups, lead routing, quotes, onboarding, and admin tasks.",
  },
  {
    icon: Target,
    title: "AI Lead Generation & Sales Outreach",
    desc: "Lead scraping and enrichment, personalized cold email, LinkedIn outreach, CRM updates, appointment setting, and AI sales assistants that keep your pipeline full.",
  },
  {
    icon: PenTool,
    title: "AI Content Creation & Social Media",
    desc: "Blog posts, ads, email campaigns, short-form video scripts, captions, and product descriptions — all in a consistent brand voice, produced at scale.",
  },
  {
    icon: MessageSquare,
    title: "AI Website Chat + Lead Capture",
    desc: "An AI receptionist for your site that qualifies visitors, answers questions, captures their info, books calls, and pushes everything straight into your CRM.",
  },
  {
    icon: PhoneMissed,
    title: "AI Booking & Missed-Call Text-Back",
    desc: "An AI/SMS system that instantly texts back missed calls, books appointments, confirms visits, and follows up — so busy lines never cost you a customer.",
  },
  {
    icon: Users,
    title: "AI CRM Setup (GoHighLevel / HubSpot)",
    desc: "AI-powered CRM packages: pipeline setup, automations, nurture campaigns, lead scoring, smart follow-ups, and dashboards so leads stop falling through the cracks.",
  },
  {
    icon: BarChart3,
    title: "AI Data Analysis & Reporting Dashboards",
    desc: "Dashboards, weekly executive summaries, ad performance reports, sales forecasting, customer segmentation, and spreadsheet automation that turn data into decisions.",
  },
  {
    icon: BookOpen,
    title: "Knowledge-Base Bots & Internal Copilots",
    desc: "Bots trained on your docs, SOPs, policies, manuals, and FAQs so your HR, ops, support, and sales teams get instant, accurate answers to repetitive questions.",
  },
  {
    icon: GraduationCap,
    title: "AI Consulting, Training & Roadmaps",
    desc: "AI opportunity audits, implementation roadmaps, staff training, prompt libraries, tool selection, and pilot rollouts to help you adopt AI with confidence.",
  },
];

export default function ServicesGridSection() {
  return (
    <section id="all-services" className="bg-ivoire-navy py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block bg-ivoire-gold/10 text-ivoire-gold text-sm font-semibold px-4 py-1.5 rounded-full mb-4 uppercase tracking-wide">
            What We Offer
          </span>
          <h2 className="font-display font-extrabold text-white text-3xl sm:text-4xl md:text-5xl leading-tight">
            AI Services That <span className="text-ivoire-gold">Grow Your Business</span>
          </h2>
          <p className="mt-4 text-lg text-white/60">
            From chatbots to full automation systems — we build the tools that bring you more
            customers and save you hours every week.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              className="group bg-ivoire-navy-card rounded-xl p-6 border border-white/5 hover:border-ivoire-gold/40 transition-all"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: (i % 3) * 0.07 }}
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-ivoire-gold/10 flex items-center justify-center mb-4 group-hover:bg-ivoire-gold/20 transition-colors">
                <service.icon className="w-6 h-6 sm:w-7 sm:h-7 text-ivoire-gold" />
              </div>
              <h3 className="text-white font-semibold text-lg leading-snug mb-2">
                {service.title}
              </h3>
              <p className="text-white/60 text-sm leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <button onClick={goToBooking} className="btn-gold rounded-lg px-8 py-4 text-base">
            Get These Services for Your Business
          </button>
        </motion.div>
      </div>
    </section>
  );
}
