import { LucideIcon, Monitor, Phone, Mail, Calendar, Star, Users, Smartphone, MessageSquare } from "lucide-react";

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
    id: "website",
    icon: Monitor,
    title: "New Professional Website",
    description: "Beautiful, mobile-friendly websites that turn visitors into customers and help you get found on Google.",
    detailedInfo: {
      features: [
        "Mobile-responsive design optimized for all devices",
        "Fast-loading pages with Google Core Web Vitals optimization",
        "SEO-ready structure with meta tags and schema markup",
        "Contact forms with lead capture and CRM integration",
        "Google Analytics and conversion tracking setup",
        "SSL certificate and security features included"
      ],
      benefits: [
        "Rank higher on Google search results for Dallas businesses",
        "Convert 40% more visitors into customers with proven layouts",
        "Mobile-first design captures 78% of local searches",
        "Professional credibility that builds customer trust",
        "24/7 online presence that works while you sleep",
        "Local SEO optimization for Dallas market visibility"
      ],
      process: "We start with your brand analysis, create custom designs using high-converting templates, integrate your content and business information, optimize for search engines, test on all devices, and launch with full training on content management.",
      timeline: "Complete website delivered in 1-3 days with hosting, domain, and training included."
    }
  },
  {
    id: "calls",
    icon: Phone,
    title: "Never Miss a Call Again",
    description: "Automatic call handling and missed call text-back so you never lose a potential customer.",
    detailedInfo: {
      features: [
        "AI-powered call answering with natural conversation",
        "Automatic missed call text-back within 30 seconds",
        "Call routing to your mobile or office phone",
        "Voicemail transcription sent via text and email",
        "Business hours customization and after-hours handling",
        "Call recording and analytics for quality improvement"
      ],
      benefits: [
        "Capture 95% more leads from phone inquiries",
        "Professional image even when you're busy with customers",
        "Reduce customer frustration from unanswered calls",
        "Instant lead response improves conversion by 60%",
        "Work-life balance with automated after-hours coverage",
        "Dallas market competitive advantage with 24/7 availability"
      ],
      process: "We configure your virtual phone assistant with your business information, customize response messages, set up call routing preferences, train the AI on your services, and integrate with your existing phone system.",
      timeline: "Phone automation system activated within 24 hours of setup completion."
    }
  },
  {
    id: "appointments",
    icon: Calendar,
    title: "Online Booking & Scheduling",
    description: "Let customers book appointments online 24/7. Automatic reminders reduce no-shows by 80%.",
    detailedInfo: {
      features: [
        "24/7 online booking calendar synchronized with your schedule",
        "Automatic SMS and email appointment reminders",
        "Payment processing with deposits and full payments",
        "Service menu with pricing and duration settings",
        "Staff scheduling for multi-employee businesses",
        "Cancellation and rescheduling management"
      ],
      benefits: [
        "Reduce no-shows by 80% with automated reminder system",
        "Fill schedule gaps with last-minute online bookings",
        "Increase revenue with 24/7 booking availability",
        "Reduce phone time spent on scheduling by 70%",
        "Professional booking experience improves customer satisfaction",
        "Real-time calendar updates prevent double-bookings"
      ],
      process: "We customize your booking calendar with services and pricing, integrate payment processing, set up automated reminders, configure your availability preferences, sync with your existing calendar, and train your team on management.",
      timeline: "Booking system live and taking appointments within 48 hours of implementation."
    }
  },
  {
    id: "marketing",
    icon: Mail,
    title: "Email & Text Marketing",
    description: "Send promotions and stay in touch with customers through email campaigns and text messages.",
    detailedInfo: {
      features: [
        "Automated welcome series for new customers",
        "Promotional campaigns with professional design templates",
        "Customer segmentation for targeted messaging",
        "SMS marketing with 95% open rates",
        "Birthday and anniversary automated campaigns",
        "Abandoned cart recovery for e-commerce businesses"
      ],
      benefits: [
        "Increase repeat business by 40% with targeted campaigns",
        "Build customer relationships with personalized messaging",
        "Drive immediate sales with text message promotions",
        "Cost-effective marketing with high ROI (4200% average)",
        "Stay top-of-mind between customer visits",
        "Compete with larger Dallas businesses using automation"
      ],
      process: "We import your customer database, create branded email templates, set up automated campaigns, configure text messaging compliance, design promotional campaigns, and provide campaign management training.",
      timeline: "First marketing campaign launched within 2-3 days of customer data import."
    }
  },
  {
    id: "reviews",
    icon: Star,
    title: "Get More Google Reviews",
    description: "Automatically ask happy customers for reviews and respond to feedback to boost your online reputation.",
    detailedInfo: {
      features: [
        "Automated review requests sent after service completion",
        "Google My Business optimization for local Dallas searches",
        "Review response automation for positive and negative feedback",
        "Review monitoring across Google, Yelp, and Facebook",
        "Customer feedback collection before public reviews",
        "Review display widgets for your website"
      ],
      benefits: [
        "Increase Google reviews by 300% with systematic requests",
        "Improve local search rankings with fresh review content",
        "Build trust with potential customers through social proof",
        "Address negative feedback before it becomes public",
        "Compete effectively in Dallas market with strong reputation",
        "Higher conversion rates with 4.5+ star average rating"
      ],
      process: "We optimize your Google My Business profile, set up automated review request campaigns, create response templates for different review types, configure monitoring dashboards, and train your team on reputation management.",
      timeline: "Review system activated and first requests sent within 24-48 hours."
    }
  },
  {
    id: "loyalty",
    icon: Users,
    title: "Customer Loyalty Programs",
    description: "Keep customers coming back with automated rewards, special offers, and personalized follow-ups.",
    detailedInfo: {
      features: [
        "Points-based reward system with automatic tracking",
        "VIP customer tier recognition and exclusive offers",
        "Birthday and anniversary special promotions",
        "Referral program with rewards for both parties",
        "Purchase history tracking for personalized offers",
        "Mobile app integration for easy point redemption"
      ],
      benefits: [
        "Increase customer retention by 65% with reward incentives",
        "Higher average transaction value through tier upgrades",
        "Reduce customer acquisition costs with referral programs",
        "Build emotional connection with personalized recognition",
        "Compete with franchise chains using professional loyalty systems",
        "Generate predictable repeat revenue from loyal customers"
      ],
      process: "We design your loyalty program structure, set up automated point tracking, create reward redemption systems, configure personalized campaign triggers, integrate with your POS system, and launch with customer enrollment campaigns.",
      timeline: "Loyalty program launched with existing customer enrollment within 3-5 days."
    }
  },
  {
    id: "communication",
    icon: MessageSquare,
    title: "Customer Communication Hub",
    description: "Manage all customer conversations in one place - SMS, email, calls, and voicemails.",
    detailedInfo: {
      features: [
        "Unified inbox for SMS, email, and voicemail messages",
        "Automated conversation routing to appropriate team members",
        "Template responses for common customer inquiries",
        "Customer conversation history and interaction tracking",
        "Team collaboration tools for internal communication",
        "Integration with existing business phone and email systems"
      ],
      benefits: [
        "Respond to customers 3x faster with centralized communication",
        "Never lose customer messages across different platforms",
        "Maintain professional consistency with template responses",
        "Improve customer service quality with conversation history",
        "Reduce response time from hours to minutes",
        "Scale customer service without hiring additional staff"
      ],
      process: "We integrate your existing communication channels, set up the unified dashboard, create response templates, configure team access permissions, train your staff on the system, and migrate existing conversation history.",
      timeline: "Communication hub operational with team training completed within 2-3 days."
    }
  },
  {
    id: "social",
    icon: Smartphone,
    title: "Social Media Management",
    description: "Professional social media posts and content creation to attract new customers online.",
    detailedInfo: {
      features: [
        "Automated posting schedule across Facebook, Instagram, and Google My Business",
        "Professional content creation with branded graphics and copy",
        "Local Dallas market content and event promotion",
        "Customer feature posts and success story highlights",
        "Engagement monitoring and response management",
        "Analytics tracking for post performance and audience growth"
      ],
      benefits: [
        "Maintain consistent online presence without daily time investment",
        "Attract new Dallas customers through local social media visibility",
        "Build brand awareness with professional, engaging content",
        "Showcase customer success stories for social proof",
        "Compete with larger businesses through strategic content marketing",
        "Drive website traffic and bookings through social media channels"
      ],
      process: "We analyze your brand voice, create content calendar templates, design branded graphics, set up automated posting schedules, configure engagement monitoring, and provide monthly performance reports.",
      timeline: "Social media automation active with first posts published within 48 hours."
    }
  }
];
