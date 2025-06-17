import { useState } from "react";
import { ArrowRight, ChevronDown, ChevronUp } from "lucide-react";
import { Service } from "@/lib/services";

interface ServiceCardProps {
  service: Service;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
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
      
      {isExpanded && (
        <div className="mb-4 p-4 bg-white rounded-lg border border-gray-200">
          <div className="space-y-3 text-sm text-gray-700">
            {service.detailedInfo?.features && (
              <div>
                <h4 className="font-semibold text-[#14532d] mb-2">What You Get:</h4>
                <ul className="list-disc list-inside space-y-1">
                  {service.detailedInfo.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
            )}
            
            {service.detailedInfo?.benefits && (
              <div>
                <h4 className="font-semibold text-[#14532d] mb-2">Business Benefits:</h4>
                <ul className="list-disc list-inside space-y-1">
                  {service.detailedInfo.benefits.map((benefit, index) => (
                    <li key={index}>{benefit}</li>
                  ))}
                </ul>
              </div>
            )}
            
            {service.detailedInfo?.process && (
              <div>
                <h4 className="font-semibold text-[#14532d] mb-2">Our Process:</h4>
                <p>{service.detailedInfo.process}</p>
              </div>
            )}
            
            {service.detailedInfo?.timeline && (
              <div>
                <h4 className="font-semibold text-[#14532d] mb-2">Timeline:</h4>
                <p>{service.detailedInfo.timeline}</p>
              </div>
            )}
          </div>
        </div>
      )}
      
      <button 
        onClick={() => setIsExpanded(!isExpanded)}
        className="text-[#f59e0b] font-medium hover:underline inline-flex items-center transition-colors"
      >
        {isExpanded ? 'Show less' : 'Learn more'}
        {isExpanded ? (
          <ChevronUp className="h-4 w-4 ml-1" />
        ) : (
          <ArrowRight className="h-4 w-4 ml-1" />
        )}
      </button>
    </div>
  );
}
