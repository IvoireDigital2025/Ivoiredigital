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
    title: "AI Receptionist",
    description: "A 24/7 AI receptionist that answers calls, schedules appointments, handles FAQs, and manages your front desk — so your team can focus on delivering great service.",
    detailedInfo: {
      features: [
        "Answers incoming calls 24/7 with a natural, human-like voice",
        "Schedules, reschedules, and cancels appointments automatically",
        "Answers common questions about services, pricing, and hours",
        "Sends instant confirmation texts and emails after every booking",
        "Seamlessly hands off complex calls to your human staff",
        "Full call recordings and transcripts for review"
      ],
      benefits: [
        "Never miss a new client call again — even after hours",
        "Reduce front desk workload by up to 50%",
        "Capture more bookings without adding staff",
        "Professional client experience every time",
        "Lower operational costs with automated call handling",
        "Works while your team focuses on delivering value"
      ],
      process: "We train the AI on your business's services, pricing, FAQs, and calendar — then integrate it with your phone system and scheduling platform.",
      timeline: "Live and answering calls within 3–5 business days."
    }
  },
  {
    id: "booking",
    icon: Calendar,
    title: "AI Appointment Booking System",
    description: "Let clients book, reschedule, or cancel appointments online 24/7. Automated reminders slash no-show rates and keep your schedule full.",
    detailedInfo: {
      features: [
        "24/7 online booking synced to your live calendar",
        "Automated SMS and email appointment reminders",
        "Two-way appointment confirmation via text",
        "New client intake forms collected before the visit",
        "Waitlist management to fill last-minute cancellations",
        "Multi-staff scheduling for larger teams"
      ],
      benefits: [
        "Reduce no-shows by up to 70% with automated reminders",
        "Fill your schedule around the clock without staff involvement",
        "Eliminate double-bookings and scheduling conflicts",
        "Reduce phone time spent on scheduling by 70%",
        "Collect intake information before arrival to save time",
        "Happier clients with a seamless booking experience"
      ],
      process: "We set up your booking system with your services, team, and availability — then integrate reminders and intake forms.",
      timeline: "Booking system live within 48 hours."
    }
  },
  {
    id: "missed-call",
    icon: MessageSquare,
    title: "AI Missed-Call Text Back",
    description: "Every missed call instantly gets an automatic text reply, keeping potential clients engaged and converting missed calls into booked appointments.",
    detailedInfo: {
      features: [
        "Instant text reply sent within seconds of a missed call",
        "Personalized message with your business name and services",
        "AI follows up with a booking link automatically",
        "Works after hours, weekends, and holidays",
        "Tracks and logs all missed call conversations",
        "Seamless handoff to staff when needed"
      ],
      benefits: [
        "Convert missed calls into appointments instead of lost clients",
        "Respond to leads faster than any competitor",
        "Capture leads even when your team is unavailable",
        "Reduce frustration from unanswered calls",
        "Increase new client acquisition without extra staff",
        "No missed opportunity — every call gets a response"
      ],
      process: "We configure the system with your business information, craft the perfect reply messages, and connect it to your phone number.",
      timeline: "Active and responding to missed calls within 24 hours."
    }
  },
  {
    id: "followup",
    icon: UserCheck,
    title: "AI Client Follow-Up & Reactivation",
    description: "Automatically follow up with clients after visits and re-engage those who haven't returned in months — bringing back lost revenue effortlessly.",
    detailedInfo: {
      features: [
        "Post-visit follow-up messages for care and rebooking",
        "Automated reactivation campaigns for lapsed clients",
        "Personalized messages based on last service type",
        "Multi-step sequences via SMS and email",
        "Appointment reminders for upcoming return visits",
        "Tracks responses and books appointments automatically"
      ],
      benefits: [
        "Bring back clients who haven't visited in 6–12 months",
        "Increase client lifetime value with consistent follow-up",
        "Fill schedule gaps with reactivated existing clients",
        "Reduce churn without any manual outreach from staff",
        "Improve client satisfaction with post-service check-ins",
        "Generate revenue from your existing client database"
      ],
      process: "We segment your client list, create personalized follow-up sequences, and automate outreach based on visit history and service type.",
      timeline: "First reactivation campaign launched within 3–5 days."
    }
  },
  {
    id: "webchat",
    icon: Globe,
    title: "AI Web Chat Assistant",
    description: "An intelligent chat widget on your website that answers visitor questions, captures leads, and books appointments — 24/7, without any staff involvement.",
    detailedInfo: {
      features: [
        "Conversational AI chat embedded on your website",
        "Answers FAQs about services, pricing, and hours",
        "Captures visitor contact information for follow-up",
        "Books appointments directly from the chat window",
        "Hands off to human staff for complex conversations",
        "Branded to match your business's look and feel"
      ],
      benefits: [
        "Turn website visitors into booked clients automatically",
        "Provide instant answers without tying up your team",
        "Capture leads from visitors who don't want to call",
        "Available 24/7 — never lose an after-hours inquiry",
        "Professional first impression that builds trust",
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
    description: "Automatically request Google reviews from satisfied clients after every visit — growing your 5-star reputation on autopilot.",
    detailedInfo: {
      features: [
        "Automated review request texts sent after each appointment",
        "Smart timing to maximize positive review submissions",
        "Direct link to your Google Business Profile for easy posting",
        "Filters unhappy clients before they leave public reviews",
        "Monitors and alerts for new reviews across platforms",
        "Review display widgets for your website"
      ],
      benefits: [
        "Grow Google reviews 3x faster without manual effort",
        "Rank higher in local Google searches with fresh reviews",
        "Build trust with new clients through social proof",
        "Address concerns privately before they go public",
        "Consistently maintain a 4.8–5.0 star rating",
        "Attract more new clients with a strong online reputation"
      ],
      process: "We connect the system to your appointment software, configure review request timing, craft your personalized request messages, and set up monitoring.",
      timeline: "First review requests sent within 24–48 hours of setup."
    }
  },
  {
    id: "transcription",
    icon: FileText,
    title: "AI Note Transcription",
    description: "Speak naturally during or after a meeting or session — AI transcribes everything into accurate, structured notes instantly, saving hours every day.",
    detailedInfo: {
      features: [
        "Real-time voice-to-text transcription",
        "High accuracy with industry-specific terminology",
        "Automatic formatting into structured note format",
        "Integrates with your existing tools and systems",
        "Secure, compliant data handling",
        "Available on mobile for on-the-go dictation"
      ],
      benefits: [
        "Save 1–2 hours per team member per day on documentation",
        "Reduce after-hours note-taking and burnout",
        "More accurate notes captured in real time",
        "Team spends more time on high-value work, less on paperwork",
        "Faster documentation improves workflows and billing cycles",
        "Works with any smartphone or microphone"
      ],
      process: "We configure the transcription system for your terminology, integrate it with your tools, and train your team on the simple recording workflow.",
      timeline: "System configured and team trained within 3–5 days."
    }
  },
  {
    id: "soap",
    icon: ClipboardList,
    title: "AI Report & Note Generation",
    description: "From a brief voice summary or transcript, AI generates complete structured reports and documentation — ready to review and finalize in seconds.",
    detailedInfo: {
      features: [
        "Generates complete structured reports from brief dictations",
        "Customizable templates for your industry and workflow",
        "Team reviews and approves before finalizing",
        "Pulls from transcription or brief voice input",
        "Consistent, compliant documentation every time",
        "Reduces copy-paste errors and missing elements"
      ],
      benefits: [
        "Cut report writing time from 10+ minutes to under 2 minutes",
        "Consistent, complete documentation for every interaction",
        "Reduce risk of incomplete or non-compliant records",
        "Free up team time for more clients or earlier sign-off",
        "Improve accuracy with thorough documentation",
        "Less burnout — your team goes home on time"
      ],
      process: "We configure the AI with your report templates and terminology, connect it to your transcription or dictation workflow, and test with your team.",
      timeline: "Generating reports for your business within 5–7 days."
    }
  },
  {
    id: "automation",
    icon: Zap,
    title: "AI Workflow Automation",
    description: "Automate the repetitive tasks that drain your team's time — from client intake to follow-ups, reminders, and internal notifications.",
    detailedInfo: {
      features: [
        "Automated client intake and onboarding",
        "Lead qualification and routing",
        "Recall and re-engagement scheduling campaigns",
        "Internal staff notifications and task assignments",
        "Billing and payment follow-up automation",
        "Custom workflows built around your business processes"
      ],
      benefits: [
        "Eliminate hours of manual, repetitive administrative work",
        "Reduce human error in data entry and client communication",
        "Staff focuses on high-value tasks and client care",
        "Faster client onboarding and pre-appointment preparation",
        "Improve collections with automated payment follow-ups",
        "Scale your business without scaling your overhead"
      ],
      process: "We map your existing workflows, identify the highest-impact automation opportunities, build custom automation sequences, and train your team.",
      timeline: "First automations live within 5–7 days depending on complexity."
    }
  }
];
