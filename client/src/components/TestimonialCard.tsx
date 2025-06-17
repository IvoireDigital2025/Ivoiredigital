import { Star } from "lucide-react";
import { Testimonial } from "@/lib/testimonials";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  const { rating, content, author, position, company, image } = testimonial;
  
  return (
    <div className="testimonial-card bg-white rounded-xl p-4 sm:p-6 md:p-8 shadow-sm h-full">
      <div className="flex items-center space-x-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`h-4 w-4 sm:h-5 sm:w-5 ${i < rating ? "text-[#f59e0b] fill-[#f59e0b]" : "text-gray-300"}`}
          />
        ))}
      </div>
      <p className="text-gray-600 mb-6 text-sm sm:text-base leading-relaxed">
        {content}
      </p>
      <div className="flex items-center">
        <img 
          className="h-10 w-10 sm:h-12 sm:w-12 rounded-full mr-3 flex-shrink-0" 
          src={image} 
          alt={author}
        />
        <div className="min-w-0">
          <h4 className="font-medium text-gray-900 text-sm sm:text-base truncate">{author}</h4>
          <p className="text-xs sm:text-sm text-gray-500 truncate">{position}, {company}</p>
        </div>
      </div>
    </div>
  );
}
