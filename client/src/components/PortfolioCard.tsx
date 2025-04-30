import { PortfolioItem } from "@/lib/portfolio";

interface PortfolioCardProps {
  item: PortfolioItem;
}

export default function PortfolioCard({ item }: PortfolioCardProps) {
  const { image, category, title, description } = item;
  
  return (
    <div className="bg-gray-50 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow h-full">
      <img 
        src={image} 
        alt={title} 
        className="w-full h-56 object-cover"
      />
      <div className="p-6">
        <span className="text-xs font-semibold text-[#f59e0b] uppercase tracking-wide">{category}</span>
        <h3 className="mt-2 text-xl font-poppins font-semibold">{title}</h3>
        <p className="mt-2 text-gray-600">
          {description}
        </p>
        <a href="#" className="mt-4 inline-block text-[#f59e0b] font-medium hover:underline">View Case Study</a>
      </div>
    </div>
  );
}
