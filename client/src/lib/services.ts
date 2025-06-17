import { LucideIcon, Monitor, Phone, Mail, Calendar, Star, Users, Smartphone, MessageSquare } from "lucide-react";

export interface Service {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
}

export const services: Service[] = [
  {
    id: "website",
    icon: Monitor,
    title: "New Professional Website",
    description: "Beautiful, mobile-friendly websites that turn visitors into customers and help you get found on Google."
  },
  {
    id: "calls",
    icon: Phone,
    title: "Never Miss a Call Again",
    description: "Automatic call handling and missed call text-back so you never lose a potential customer."
  },
  {
    id: "appointments",
    icon: Calendar,
    title: "Online Booking & Scheduling",
    description: "Let customers book appointments online 24/7. Automatic reminders reduce no-shows by 80%."
  },
  {
    id: "marketing",
    icon: Mail,
    title: "Email & Text Marketing",
    description: "Send promotions and stay in touch with customers through email campaigns and text messages."
  },
  {
    id: "reviews",
    icon: Star,
    title: "Get More Google Reviews",
    description: "Automatically ask happy customers for reviews and respond to feedback to boost your online reputation."
  },
  {
    id: "loyalty",
    icon: Users,
    title: "Customer Loyalty Programs",
    description: "Keep customers coming back with automated rewards, special offers, and personalized follow-ups."
  },
  {
    id: "communication",
    icon: MessageSquare,
    title: "Customer Communication Hub",
    description: "Manage all customer conversations in one place - SMS, email, calls, and voicemails."
  },
  {
    id: "social",
    icon: Smartphone,
    title: "Social Media Management",
    description: "Professional social media posts and content creation to attract new customers online."
  }
];
