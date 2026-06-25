import {
  LucideIcon,
  Monitor,
  Share2,
  PenTool,
  Bot,
  Phone,
  PhoneMissed,
  Workflow,
  Target,
  Users,
  BarChart3,
  BookOpen,
  GraduationCap,
  Search,
} from "lucide-react";

export interface ServiceContent {
  slug: string;
  icon: LucideIcon;
  title: string;
  tagline: string;
  cardDesc: string;
  overview: string[];
  features: string[];
  benefits: string[];
  seo: { title: string; description: string; keywords: string };
}

export const services: ServiceContent[] = [
  {
    slug: "website-design",
    icon: Monitor,
    title: "Website Design & Development",
    tagline: "Websites that turn visitors into paying customers — built to work for you 24/7.",
    cardDesc:
      "Beautiful, high-converting websites built to work for you 24/7 — custom business sites, e-commerce stores, and landing pages that are fast, mobile-friendly, and SEO-ready.",
    overview: [
      "Your website is your hardest-working employee. We design and build fast, modern, mobile-first websites that look great and are engineered to turn visitors into leads and sales.",
      "From custom business sites to e-commerce stores and high-converting landing pages, every site we build is SEO-ready, secure, and easy for you to manage.",
    ],
    features: [
      "Custom design tailored to your brand and goals",
      "Mobile-first and fully responsive on every device",
      "Built-in booking, contact forms, and lead capture",
      "Fast load times and clean, SEO-optimized code",
      "E-commerce and online payment integration",
      "Ongoing maintenance, hosting, and updates",
    ],
    benefits: [
      "Make a powerful first impression that builds trust",
      "Capture more leads with clear calls-to-action",
      "Rank higher on Google with an SEO-ready foundation",
      "Look professional on phones, tablets, and desktops",
      "Stop losing customers to a slow or outdated site",
    ],
    seo: {
      title: "Website Design & Development in Dallas–Fort Worth | Ivoire Digital",
      description:
        "Custom, high-converting website design for businesses in Dallas–Fort Worth and across the U.S. Mobile-first, fast, and SEO-ready. Book a free call with Ivoire Digital.",
      keywords:
        "website design Dallas, web development Fort Worth, DFW web design agency, website designer near me, small business website USA, ecommerce website Dallas",
    },
  },
  {
    slug: "social-media-management",
    icon: Share2,
    title: "Social Media Management",
    tagline: "Stay active, grow your audience, and win customers — without lifting a finger.",
    cardDesc:
      "Done-for-you posting, scheduling, and engagement across Instagram, Facebook, TikTok, and more — we keep your brand active and growing without you lifting a finger.",
    overview: [
      "We run your social media so you can run your business. From strategy and posting to engagement and growth, we keep your brand consistent and visible where your customers spend their time.",
      "Instagram, Facebook, TikTok, LinkedIn, and more — handled for you, with content that actually reflects your brand.",
    ],
    features: [
      "Full content calendar planned around your goals",
      "Consistent posting across all major platforms",
      "Branded graphics, captions, and hashtags",
      "Community management and comment engagement",
      "Audience growth and follower strategy",
      "Monthly performance reports",
    ],
    benefits: [
      "Show up consistently without the daily effort",
      "Build trust and stay top-of-mind with customers",
      "Turn followers into paying customers",
      "Keep a professional, on-brand presence everywhere",
      "Free up hours every week to focus on your business",
    ],
    seo: {
      title: "Social Media Management in Dallas–Fort Worth | Ivoire Digital",
      description:
        "Done-for-you social media management for businesses in DFW and nationwide. Strategy, posting, and growth across Instagram, Facebook, and TikTok. Book a free call.",
      keywords:
        "social media management Dallas, social media agency Fort Worth, DFW social media marketing, social media manager near me, Instagram management USA",
    },
  },
  {
    slug: "content-creation",
    icon: PenTool,
    title: "Content Creation",
    tagline: "Scroll-stopping content that gets attention and drives action.",
    cardDesc:
      "Short-form videos, reels, graphics, blog posts, ads, and email campaigns — produced in your brand voice and built to convert.",
    overview: [
      "Great content is what gets you noticed. We create scroll-stopping short-form videos, reels, graphics, blogs, and ad creative that grab attention and move people to act.",
      "Everything is produced in a consistent brand voice and tailored to each platform — so you always have fresh content ready to post.",
    ],
    features: [
      "Short-form video and reels editing",
      "Branded graphics and carousels",
      "Blog posts and SEO articles",
      "Ad creative for paid campaigns",
      "Email and newsletter content",
      "Consistent brand voice and style",
    ],
    benefits: [
      "Stand out in a crowded feed",
      "Post consistently without the creative burnout",
      "Turn attention into leads and sales",
      "Repurpose one idea across every channel",
      "Look polished and professional everywhere",
    ],
    seo: {
      title: "Content Creation in Dallas–Fort Worth | Ivoire Digital",
      description:
        "Professional content creation for businesses in DFW and across the U.S. Short-form video, graphics, blogs, and ad creative in your brand voice. Book a free call.",
      keywords:
        "content creation Dallas, video content Fort Worth, DFW content agency, social media content creator near me, short form video USA",
    },
  },
  {
    slug: "ai-chatbots",
    icon: Bot,
    title: "AI Chatbots & Voice Agents",
    tagline: "Answer every customer instantly, day or night — and never miss a lead.",
    cardDesc:
      "Website chatbots, FAQ bots, booking bots, WhatsApp/SMS bots, and AI call answering that handle support and order-status questions so you never miss a lead.",
    overview: [
      "Your customers expect instant answers. Our AI chatbots and voice agents handle support questions, FAQs, bookings, and order updates 24/7 — across your website, WhatsApp, and SMS.",
      "They sound natural, work tirelessly, and hand off to your team when it matters.",
    ],
    features: [
      "Website chat, FAQ, and booking bots",
      "AI voice agents that answer calls",
      "WhatsApp and SMS automation",
      "Order-status and support ticket handling",
      "Seamless handoff to human staff",
      "Trained on your business and services",
    ],
    benefits: [
      "Never miss a lead, even after hours",
      "Cut support workload dramatically",
      "Respond instantly, every time",
      "Give customers a smooth experience",
      "Lower costs without adding staff",
    ],
    seo: {
      title: "AI Chatbots & Voice Agents in Dallas–Fort Worth | Ivoire Digital",
      description:
        "24/7 AI chatbots and voice agents for businesses in DFW and nationwide. Website, WhatsApp, and SMS automation that never misses a lead. Book a free call.",
      keywords:
        "AI chatbot Dallas, AI voice agent Fort Worth, DFW AI automation, customer service chatbot near me, AI phone answering USA",
    },
  },
  {
    slug: "ai-receptionist",
    icon: Phone,
    title: "AI Receptionist",
    tagline: "A 24/7 AI receptionist that answers, books, and never takes a day off.",
    cardDesc:
      "An AI receptionist that answers calls, books appointments, and handles FAQs around the clock — so your team can focus on the work.",
    overview: [
      "Missed calls are missed revenue. Our AI receptionist answers every call with a natural, human-like voice, books appointments, and answers common questions 24/7.",
      "It integrates with your calendar and phone system and hands complex calls off to your team.",
    ],
    features: [
      "Answers calls 24/7 with a natural voice",
      "Books, reschedules, and cancels appointments",
      "Answers questions on services, pricing, and hours",
      "Sends instant confirmation texts and emails",
      "Hands off complex calls to your staff",
      "Full call recordings and transcripts",
    ],
    benefits: [
      "Never miss a new client call again",
      "Reduce front-desk workload",
      "Capture more bookings without more staff",
      "Deliver a professional experience every time",
      "Lower operational costs",
    ],
    seo: {
      title: "AI Receptionist in Dallas–Fort Worth | Ivoire Digital",
      description:
        "A 24/7 AI receptionist for businesses in DFW and across the U.S. Answers calls, books appointments, and handles FAQs. Book a free call with Ivoire Digital.",
      keywords:
        "AI receptionist Dallas, AI answering service Fort Worth, DFW virtual receptionist, AI call answering near me, 24/7 receptionist USA",
    },
  },
  {
    slug: "missed-call-text-back",
    icon: PhoneMissed,
    title: "Missed Call Text-Back",
    tagline: "Turn every missed call into a conversation — automatically.",
    cardDesc:
      "When you can't pick up, we instantly text the caller back, start the conversation, and book the appointment for you.",
    overview: [
      "Every missed call is a customer who might call your competitor next. Our missed-call text-back system instantly replies by text, starts a conversation, and keeps the lead warm.",
      "Simple to set up, and it works around the clock.",
    ],
    features: [
      "Instant automated text after a missed call",
      "Two-way conversation handling",
      "Appointment booking by text",
      "After-hours and weekend coverage",
      "Custom message templates",
      "Lead capture into your CRM",
    ],
    benefits: [
      "Stop losing leads to missed calls",
      "Respond in seconds, not hours",
      "Show customers you care",
      "Book more jobs without extra effort",
      "Works 24/7, even while you sleep",
    ],
    seo: {
      title: "Missed Call Text-Back in Dallas–Fort Worth | Ivoire Digital",
      description:
        "Automatic missed-call text-back for businesses in DFW and nationwide. Instantly reply, start the conversation, and book the appointment. Book a free call.",
      keywords:
        "missed call text back Dallas, missed call automation Fort Worth, DFW lead recovery, text back service near me, missed call SMS USA",
    },
  },
  {
    slug: "workflow-automation",
    icon: Workflow,
    title: "Workflow Automation",
    tagline: "Connect your tools and automate the busywork that slows you down.",
    cardDesc:
      "We connect your tools — Gmail, Slack, HubSpot, GoHighLevel, Airtable, Sheets, CRMs, and invoicing — to automate follow-ups, lead routing, quotes, onboarding, and admin tasks.",
    overview: [
      "Stop doing the same manual tasks over and over. We connect your tools — Gmail, Slack, HubSpot, GoHighLevel, Airtable, Sheets, calendars, and invoicing — and automate the workflows in between.",
      "Auto follow-ups, lead routing, quotes, onboarding, reporting, and admin tasks, all handled for you.",
    ],
    features: [
      "App and CRM integrations",
      "Automated follow-ups and reminders",
      "Lead routing and assignment",
      "Quote and document generation",
      "Client onboarding flows",
      "Automated reporting",
    ],
    benefits: [
      "Save hours of manual work every week",
      "Eliminate dropped balls and human error",
      "Respond to leads faster",
      "Scale without adding headcount",
      "Keep everything running on autopilot",
    ],
    seo: {
      title: "Workflow Automation in Dallas–Fort Worth | Ivoire Digital",
      description:
        "Business workflow automation for companies in DFW and across the U.S. Connect your tools and automate follow-ups, lead routing, and admin. Book a free call.",
      keywords:
        "workflow automation Dallas, business automation Fort Worth, DFW automation agency, Zapier Make consultant near me, CRM automation USA",
    },
  },
  {
    slug: "lead-generation",
    icon: Target,
    title: "Lead Generation & Outreach",
    tagline: "Fill your pipeline with qualified leads — on autopilot.",
    cardDesc:
      "Lead scraping and enrichment, personalized cold email, LinkedIn outreach, CRM updates, appointment setting, and AI sales assistants that keep your pipeline full.",
    overview: [
      "Growth starts with a full pipeline. We build AI-powered lead generation and outreach systems that find, enrich, and contact your ideal customers — then book them on your calendar.",
      "Cold email, LinkedIn outreach, and CRM updates, all done for you.",
    ],
    features: [
      "Lead scraping and enrichment",
      "Personalized cold email campaigns",
      "LinkedIn outreach",
      "AI sales assistants",
      "Appointment setting",
      "CRM updates and tracking",
    ],
    benefits: [
      "Keep your pipeline consistently full",
      "Reach the right prospects at scale",
      "Book more qualified appointments",
      "Free your team from manual prospecting",
      "Grow predictably month over month",
    ],
    seo: {
      title: "Lead Generation & Sales Outreach in Dallas–Fort Worth | Ivoire Digital",
      description:
        "AI lead generation and outreach for businesses in DFW and nationwide. Cold email, LinkedIn, and appointment setting that fills your pipeline. Book a free call.",
      keywords:
        "lead generation Dallas, B2B outreach Fort Worth, DFW lead gen agency, cold email service near me, appointment setting USA",
    },
  },
  {
    slug: "crm-setup",
    icon: Users,
    title: "CRM Setup & Automation",
    tagline: "Stop letting leads fall through the cracks.",
    cardDesc:
      "AI-powered CRM setup — pipelines, automations, nurture campaigns, lead scoring, and dashboards built around your business.",
    overview: [
      "A great CRM turns chaos into a clear, repeatable process. We set up and automate GoHighLevel, HubSpot, and other CRMs with pipelines, nurture campaigns, lead scoring, and smart follow-ups.",
      "Your leads get followed up with automatically, and you get dashboards that show what's working.",
    ],
    features: [
      "CRM setup and configuration",
      "Pipeline and stage design",
      "Automated nurture campaigns",
      "Lead scoring and smart follow-ups",
      "Dashboards and reporting",
      "GoHighLevel and HubSpot expertise",
    ],
    benefits: [
      "Never let a lead slip away again",
      "Follow up automatically, every time",
      "See exactly where every deal stands",
      "Close more with less effort",
      "Build a system that scales",
    ],
    seo: {
      title: "CRM Setup & Automation in Dallas–Fort Worth | Ivoire Digital",
      description:
        "CRM setup and automation for businesses in DFW and across the U.S. GoHighLevel and HubSpot pipelines, nurture campaigns, and dashboards. Book a free call.",
      keywords:
        "CRM setup Dallas, GoHighLevel agency Fort Worth, HubSpot consultant DFW, CRM automation near me, sales pipeline setup USA",
    },
  },
  {
    slug: "data-analytics",
    icon: BarChart3,
    title: "Data Analytics & Reporting",
    tagline: "Turn your data into decisions you can act on.",
    cardDesc:
      "Dashboards, executive summaries, ad performance reports, and forecasting that turn raw numbers into clear next steps.",
    overview: [
      "You can't grow what you can't measure. We build dashboards and automated reports that turn your scattered data into clear, actionable insights.",
      "Ad performance, sales forecasting, customer segmentation, and weekly executive summaries — all in one place.",
    ],
    features: [
      "Custom KPI dashboards",
      "Automated weekly and monthly reports",
      "Ad performance tracking",
      "Sales forecasting",
      "Customer segmentation",
      "Spreadsheet automation",
    ],
    benefits: [
      "Make confident, data-backed decisions",
      "Spot problems and opportunities early",
      "Save hours on manual reporting",
      "Know exactly what's driving revenue",
      "Keep your whole team aligned",
    ],
    seo: {
      title: "Data Analytics & Reporting in Dallas–Fort Worth | Ivoire Digital",
      description:
        "Data analytics and reporting dashboards for businesses in DFW and nationwide. Ad reports, forecasting, and executive summaries. Book a free call.",
      keywords:
        "data analytics Dallas, business reporting Fort Worth, DFW dashboard agency, KPI dashboard near me, sales forecasting USA",
    },
  },
  {
    slug: "knowledge-base-bots",
    icon: BookOpen,
    title: "Knowledge-Base Bots & Copilots",
    tagline: "Instant, accurate answers from your own company knowledge.",
    cardDesc:
      "Internal AI copilots trained on your docs, SOPs, and FAQs so your team gets instant answers to repetitive questions.",
    overview: [
      "Your team wastes hours digging for answers. We build internal AI copilots trained on your documents, SOPs, policies, manuals, and FAQs — so the right answer is one question away.",
      "Perfect for HR, operations, support, and sales enablement.",
    ],
    features: [
      "Bots trained on your internal docs",
      "Secure, private knowledge base",
      "Instant answers from SOPs and policies",
      "Support, HR, and ops use cases",
      "Sales enablement copilots",
      "Easy to update as you grow",
    ],
    benefits: [
      "Stop answering the same questions",
      "Onboard new staff faster",
      "Keep answers accurate and consistent",
      "Save your team hours every week",
      "Scale knowledge across the company",
    ],
    seo: {
      title: "Knowledge-Base Bots & AI Copilots in Dallas–Fort Worth | Ivoire Digital",
      description:
        "Custom AI knowledge-base bots and internal copilots for teams in DFW and across the U.S. Trained on your docs and SOPs. Book a free call with Ivoire Digital.",
      keywords:
        "AI knowledge base Dallas, internal copilot Fort Worth, DFW AI assistant, company chatbot near me, document AI USA",
    },
  },
  {
    slug: "ai-consulting",
    icon: GraduationCap,
    title: "AI Consulting & Training",
    tagline: "A clear roadmap to put AI to work in your business.",
    cardDesc:
      "AI audits, roadmaps, staff training, prompt libraries, and pilot rollouts to help you adopt AI with confidence.",
    overview: [
      "Not sure where AI fits in your business? We help you find out. Our AI consulting includes opportunity audits, implementation roadmaps, staff training, and pilot rollouts.",
      "You get a clear, practical plan — not hype.",
    ],
    features: [
      "AI opportunity audits",
      "Implementation roadmaps",
      "Staff training and prompt libraries",
      "Tool selection guidance",
      "Security and policy guidance",
      "Pilot project rollouts",
    ],
    benefits: [
      "Know exactly where AI will pay off",
      "Avoid wasting money on the wrong tools",
      "Get your team confident and capable",
      "Move from idea to results faster",
      "Adopt AI safely and responsibly",
    ],
    seo: {
      title: "AI Consulting & Training in Dallas–Fort Worth | Ivoire Digital",
      description:
        "AI consulting, training, and implementation roadmaps for businesses in DFW and nationwide. Audits, staff training, and pilots. Book a free call.",
      keywords:
        "AI consulting Dallas, AI training Fort Worth, DFW AI consultant, AI implementation near me, AI strategy USA",
    },
  },
  {
    slug: "local-seo",
    icon: Search,
    title: "Local SEO",
    tagline: "Get found by customers searching for you right now.",
    cardDesc:
      "Rank higher on Google and Maps so local customers find you first — built to win in DFW and grow anywhere in the U.S.",
    overview: [
      "When customers search for what you offer, you need to be at the top. Our local SEO gets you ranking on Google Search and Maps so you attract qualified, ready-to-buy local customers.",
      "We optimize your Google Business Profile, reviews, citations, and on-site SEO — tuned to win in the Dallas–Fort Worth market and scalable to any city in the country.",
    ],
    features: [
      "Google Business Profile optimization",
      "Local keyword and map ranking",
      "Review generation strategy",
      "Citations and directory listings",
      "On-page SEO and content",
      "Monthly ranking reports",
    ],
    benefits: [
      "Show up first when customers search",
      "Attract qualified local leads",
      "Beat competitors in your area",
      "Build trust with strong reviews",
      "Grow organic traffic that compounds",
    ],
    seo: {
      title: "Local SEO in Dallas–Fort Worth | Ivoire Digital",
      description:
        "Local SEO for businesses in Dallas–Fort Worth and across the U.S. Rank higher on Google and Maps and attract ready-to-buy local customers. Book a free call.",
      keywords:
        "local SEO Dallas, SEO company Fort Worth, DFW SEO agency, Google Maps ranking near me, local SEO services USA",
    },
  },
];

export function getService(slug: string): ServiceContent | undefined {
  return services.find((s) => s.slug === slug);
}
