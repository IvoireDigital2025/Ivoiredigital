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
        className="w-full h-48 sm:h-52 md:h-56 object-cover"
      />
      <div className="p-4 sm:p-5 md:p-6">
        <span className="text-xs font-semibold text-[#b07d2a] uppercase tracking-wide">{category}</span>
        <h3 className="mt-2 text-lg sm:text-xl font-poppins font-semibold leading-tight">{title}</h3>
        <p className="mt-2 text-gray-600 text-sm sm:text-base leading-relaxed">
          {description}
        </p>
        <a href="#" className="mt-4 inline-block text-[#b07d2a] font-medium hover:underline text-sm sm:text-base">View Case Study</a>
      </div>
    </div>
  );
}
