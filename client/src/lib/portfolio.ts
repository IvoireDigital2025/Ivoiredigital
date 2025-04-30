export interface PortfolioItem {
  id: string;
  image: string;
  category: string;
  title: string;
  description: string;
}

export const portfolioItems: PortfolioItem[] = [
  {
    id: "boutique",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "E-commerce",
    title: "Boutique Fashion Store",
    description: "Custom online store with AI-powered product recommendations and automated marketing."
  },
  {
    id: "service",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Automation",
    title: "Local Service Provider",
    description: "AI-powered booking system and client management solution that increased efficiency by 70%."
  },
  {
    id: "professional",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Marketing",
    title: "Professional Services Firm",
    description: "Comprehensive digital marketing strategy that resulted in 150% increase in qualified leads."
  }
];
