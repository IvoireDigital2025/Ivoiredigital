import { LucideIcon, Phone, Calendar, MessageSquare, Star, Globe, FileText, ClipboardList, Zap, UserCheck } from "lucide-react";

interface DetailedInfo {
  features: string[];
  benefits: string[];
  process: string;
  timeline: string;
}

export interface Service {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
  detailedInfo?: DetailedInfo;
}

export const services: Service[] = [
  {
    id: "receptionist",
    icon: Phone,
    title: "AI Dental Receptionist",
    description: "A 24/7 AI receptionist that answers patient calls, schedules appointments, handles FAQs, and manages your front desk — so your staff can focus on patients in the chair.",
    detailedInfo: {
      features: [
        "Answers incoming calls 24/7 with a natural, human-like voice",
        "Schedules, reschedules, and cancels appointments automatically",
        "Answers common patient questions about services, insurance, and hours",
        "Sends instant confirmation texts and emails after every booking",
        "Seamlessly hands off complex calls to your human staff",
        "Full call recordings and transcripts for review"
      ],
      benefits: [
        "Never miss a new patient call again — even after hours",
        "Reduce front desk workload by up to 50%",
        "Capture more bookings without adding staff",
        "Professional patient experience every time",
        "Lower operational costs with automated call handling",
        "Works while your team focuses on in-clinic care"
      ],
      process: "We train the AI on your clinic's services, pricing, FAQs, and calendar — then integrate it with your phone system and scheduling platform.",
      timeline: "Live and answering calls within 3–5 business days."
    }
  },
  {
    id: "booking",
    icon: Calendar,
    title: "AI Appointment Booking System",
    description: "Let patients book, reschedule, or cancel appointments online 24/7. Automated reminders slash no-show rates and keep your schedule full.",
    detailedInfo: {
      features: [
        "24/7 online booking synced to your live calendar",
        "Automated SMS and email appointment reminders",
        "Two-way appointment confirmation via text",
        "New patient intake forms collected before the visit",
        "Waitlist management to fill last-minute cancellations",
        "Multi-provider scheduling for group practices"
      ],
      benefits: [
        "Reduce no-shows by up to 70% with automated reminders",
        "Fill your schedule around the clock without staff involvement",
        "Eliminate double-bookings and scheduling conflicts",
        "Reduce phone time spent on scheduling by 70%",
        "Collect intake information before arrival to save chair time",
        "Happier patients with a seamless booking experience"
      ],
      process: "We set up your booking system with your services, providers, and availability — then integrate reminders and intake forms.",
      timeline: "Booking system live within 48 hours."
    }
  },
  {
    id: "missed-call",
    icon: MessageSquare,
    title: "AI Missed-Call Text Back",
    description: "Every missed call instantly gets an automatic text reply, keeping potential patients engaged and converting missed calls into booked appointments.",
    detailedInfo: {
      features: [
        "Instant text reply sent within seconds of a missed call",
        "Personalized message with your clinic's name and services",
        "AI follows up with a booking link automatically",
        "Works after hours, weekends, and holidays",
        "Tracks and logs all missed call conversations",
        "Seamless handoff to staff when needed"
      ],
      benefits: [
        "Convert missed calls into appointments instead of lost patients",
        "Respond to patients faster than any competitor",
        "Capture leads even when your team is unavailable",
        "Reduce patient frustration from unanswered calls",
        "Increase new patient acquisition without extra staff",
        "No missed opportunity — every call gets a response"
      ],
      process: "We configure the system with your clinic's information, craft the perfect reply messages, and connect it to your phone number.",
      timeline: "Active and responding to missed calls within 24 hours."
    }
  },
  {
    id: "followup",
    icon: UserCheck,
    title: "AI Patient Follow-Up & Reactivation",
    description: "Automatically follow up with patients after visits and re-engage patients who haven't returned in months — bringing back lost revenue effortlessly.",
    detailedInfo: {
      features: [
        "Post-visit follow-up messages for care and rebooking",
        "Automated reactivation campaigns for lapsed patients",
        "Personalized messages based on last treatment type",
        "Multi-step sequences via SMS and email",
        "Appointment reminders for upcoming recall visits",
        "Tracks responses and books appointments automatically"
      ],
      benefits: [
        "Bring back patients who haven't visited in 6–12 months",
        "Increase patient lifetime value with consistent follow-up",
        "Fill schedule gaps with reactivated existing patients",
        "Reduce churn without any manual outreach from staff",
        "Improve patient outcomes with post-care check-ins",
        "Generate revenue from your existing patient database"
      ],
      process: "We segment your patient list, create personalized follow-up sequences, and automate outreach based on visit history and treatment type.",
      timeline: "First reactivation campaign launched within 3–5 days."
    }
  },
  {
    id: "webchat",
    icon: Globe,
    title: "AI Web Chat Assistant",
    description: "An intelligent chat widget on your website that answers patient questions, captures leads, and books appointments — 24/7, without any staff involvement.",
    detailedInfo: {
      features: [
        "Conversational AI chat embedded on your website",
        "Answers FAQs about services, insurance, pricing, and hours",
        "Captures visitor contact information for follow-up",
        "Books appointments directly from the chat window",
        "Hands off to human staff for complex conversations",
        "Branded to match your clinic's look and feel"
      ],
      benefits: [
        "Turn website visitors into booked patients automatically",
        "Provide instant answers without tying up your front desk",
        "Capture leads from visitors who don't want to call",
        "Available 24/7 — never lose an after-hours inquiry",
        "Professional first impression that builds patient trust",
        "Increase website conversion rates significantly"
      ],
      process: "We train the AI on your services and FAQs, embed it on your website, and connect it to your booking system.",
      timeline: "Chat assistant live on your website within 48 hours."
    }
  },
  {
    id: "reviews",
    icon: Star,
    title: "AI Review Generation System",
    description: "Automatically request Google reviews from satisfied patients after every visit — growing your 5-star reputation on autopilot.",
    detailedInfo: {
      features: [
        "Automated review request texts sent after each appointment",
        "Smart timing to maximize positive review submissions",
        "Direct link to your Google Business Profile for easy posting",
        "Filters unhappy patients before they leave public reviews",
        "Monitors and alerts for new reviews across platforms",
        "Review display widgets for your website"
      ],
      benefits: [
        "Grow Google reviews 3x faster without manual effort",
        "Rank higher in local Google searches with fresh reviews",
        "Build trust with new patients through social proof",
        "Address patient concerns privately before they go public",
        "Consistently maintain a 4.8–5.0 star rating",
        "Attract more new patients with a strong online reputation"
      ],
      process: "We connect the system to your appointment software, configure review request timing, craft your personalized request messages, and set up monitoring.",
      timeline: "First review requests sent within 24–48 hours of setup."
    }
  },
  {
    id: "transcription",
    icon: FileText,
    title: "AI Doctor Note Transcription",
    description: "Doctors speak naturally during or after a patient visit — AI transcribes everything into accurate, structured notes instantly, saving hours every day.",
    detailedInfo: {
      features: [
        "Real-time voice-to-text transcription for clinical conversations",
        "High accuracy with dental and medical terminology",
        "Automatic formatting into structured note format",
        "Integrates with your existing EHR or practice management system",
        "Secure, HIPAA-compliant data handling",
        "Available on mobile for on-the-go dictation"
      ],
      benefits: [
        "Save 1–2 hours per doctor per day on documentation",
        "Reduce after-hours charting and burnout for providers",
        "More accurate notes captured in real time",
        "Doctors spend more time with patients, less on paperwork",
        "Faster chart completion improves billing cycles",
        "Works with any smartphone or microphone"
      ],
      process: "We configure the transcription system for your terminology, integrate it with your EHR, and train your providers on the simple recording workflow.",
      timeline: "System configured and providers trained within 3–5 days."
    }
  },
  {
    id: "soap",
    icon: ClipboardList,
    title: "AI SOAP / Clinical Note Generation",
    description: "From a brief voice summary or transcript, AI generates complete SOAP notes and clinical documentation — ready to review and sign in seconds.",
    detailedInfo: {
      features: [
        "Generates full Subjective, Objective, Assessment, Plan notes",
        "Tailored templates for dental-specific procedures and visits",
        "Doctor reviews and approves before finalizing",
        "Pulls from transcription or brief dictation input",
        "Consistent, compliant documentation every time",
        "Reduces copy-paste errors and missing chart elements"
      ],
      benefits: [
        "Cut charting time from 10+ minutes to under 2 minutes per patient",
        "Consistent, complete documentation for every visit",
        "Reduce risk of incomplete or non-compliant notes",
        "Free up doctor time for more patients or earlier sign-off",
        "Improve billing accuracy with thorough documentation",
        "Less burnout — providers go home on time"
      ],
      process: "We configure the AI with your SOAP note templates and dental terminology, connect it to your transcription or dictation workflow, and test with your team.",
      timeline: "Generating clinical notes for your practice within 5–7 days."
    }
  },
  {
    id: "automation",
    icon: Zap,
    title: "AI Workflow Automation",
    description: "Automate the repetitive tasks that drain your staff's time — from insurance verification to patient intake, recalls, and internal notifications.",
    detailedInfo: {
      features: [
        "Automated patient intake and new patient onboarding",
        "Insurance verification and eligibility checks",
        "Recall and hygiene appointment scheduling campaigns",
        "Internal staff notifications and task assignments",
        "Billing and payment follow-up automation",
        "Custom workflows built around your clinic's processes"
      ],
      benefits: [
        "Eliminate hours of manual, repetitive administrative work",
        "Reduce human error in data entry and patient communication",
        "Staff focuses on high-value patient care tasks",
        "Faster patient onboarding and pre-appointment preparation",
        "Improve collections with automated payment follow-ups",
        "Scale your practice without scaling your overhead"
      ],
      process: "We map your existing workflows, identify the highest-impact automation opportunities, build custom automation sequences, and train your team on the new systems.",
      timeline: "First automations live within 5–7 days depending on complexity."
    }
  }
];
