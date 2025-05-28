import { LucideIcon, Monitor, Cpu, BarChart, LayoutGrid, Search, MessageCircle } from "lucide-react";

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
    title: "Website Development",
    description: "Professional, mobile-responsive websites that convert visitors into customers and showcase your brand effectively."
  },
  {
    id: "ai",
    icon: Cpu,
    title: "AI Automation",
    description: "Smart chatbots and virtual assistants that handle customer inquiries, schedule appointments, and qualify leads automatically."
  },
  {
    id: "marketing",
    icon: BarChart,
    title: "Digital Marketing",
    description: "Data-driven marketing campaigns that attract your ideal customers and generate measurable business growth."
  },
  {
    id: "automation",
    icon: LayoutGrid,
    title: "Business Process Automation",
    description: "Custom automation solutions that eliminate repetitive tasks and streamline your daily operations."
  },
  {
    id: "seo",
    icon: Search,
    title: "Search Engine Optimization",
    description: "Strategic SEO that improves your Google rankings and brings qualified customers to your business."
  },
  {
    id: "reviews",
    icon: MessageCircle,
    title: "Reputation Management",
    description: "Automated review collection and management systems that build trust and attract new customers."
  }
];
