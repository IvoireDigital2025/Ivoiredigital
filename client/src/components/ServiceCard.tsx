import { ArrowRight } from "lucide-react";
import { Service } from "@/lib/services";

interface ServiceCardProps {
  service: Service;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  const { icon: Icon, title, description } = service;
  
  return (
    <div className="service-card bg-gray-50 rounded-xl p-8 transition-all duration-300 border border-gray-100 h-full">
      <div className="w-16 h-16 bg-[#14532d]/10 rounded-lg flex items-center justify-center mb-6">
        <Icon className="h-8 w-8 text-[#14532d]" />
      </div>
      <h3 className="text-xl font-poppins font-semibold mb-3 text-[#14532d]">{title}</h3>
      <p className="text-gray-600 mb-4">
        {description}
      </p>
      <a href="#" className="text-[#f59e0b] font-medium hover:underline inline-flex items-center">
        Learn more
        <ArrowRight className="h-4 w-4 ml-1" />
      </a>
    </div>
  );
}
