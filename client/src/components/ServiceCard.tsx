import { ArrowRight } from "lucide-react";
import { Service } from "@/lib/services";

interface ServiceCardProps {
  service: Service;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  const { icon: Icon, title, description } = service;
  
  return (
    <div className="service-card bg-white/80 backdrop-blur-sm rounded-xl p-8 transition-all duration-300 h-full futuristic-border">
      <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-6 glow-blue">
        <Icon className="h-8 w-8 text-primary" />
      </div>
      <h3 className="text-xl font-poppins font-semibold mb-3 text-foreground">{title}</h3>
      <p className="text-muted-foreground mb-4">
        {description}
      </p>
      <a href="#" className="text-accent font-medium hover:text-accent/80 inline-flex items-center group">
        Learn more
        <ArrowRight className="h-4 w-4 ml-1 transition-transform duration-300 group-hover:translate-x-1" />
      </a>
    </div>
  );
}
