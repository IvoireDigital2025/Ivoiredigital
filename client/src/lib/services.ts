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
    description: "Custom, responsive websites optimized for conversion that showcase your brand's unique identity."
  },
  {
    id: "ai",
    icon: Cpu,
    title: "AI Solutions",
    description: "Intelligent chatbots, virtual assistants, and automated systems to handle customer inquiries 24/7."
  },
  {
    id: "marketing",
    icon: BarChart,
    title: "Digital Marketing",
    description: "Strategic campaigns that increase visibility, attract qualified leads, and boost your conversion rates."
  },
  {
    id: "automation",
    icon: LayoutGrid,
    title: "Business Automation",
    description: "Streamline operations and reduce manual work with custom automation solutions tailored to your needs."
  },
  {
    id: "seo",
    icon: Search,
    title: "SEO Optimization",
    description: "Improve visibility in search engines and drive organic traffic through strategic optimization."
  },
  {
    id: "reviews",
    icon: MessageCircle,
    title: "Review Management",
    description: "Proactively gather and manage customer reviews to build trust and improve your online reputation."
  }
];
