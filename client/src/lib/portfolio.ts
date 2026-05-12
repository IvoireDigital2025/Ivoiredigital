export interface PortfolioItem {
  id: string;
  image: string;
  category: string;
  title: string;
  description: string;
}

export const portfolioItems: PortfolioItem[] = [
  {
    id: "ai-receptionist",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=600&fit=crop&crop=center",
    category: "AI Receptionist",
    title: "Local Business — AI Phone System",
    description: "Implemented a 24/7 AI receptionist that answers calls, books appointments, and handles client FAQs. Reduced front-desk workload by 50%."
  },
  {
    id: "booking-automation",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&h=600&fit=crop&crop=center",
    category: "Booking Automation",
    title: "Service Business — Automated Booking System",
    description: "Deployed an AI booking system with automated reminders and client follow-up sequences. Reduced no-shows by 65% and increased repeat bookings."
  },
  {
    id: "workflow-automation",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&crop=center",
    category: "Workflow Automation",
    title: "Growing Business — AI Workflow Automation",
    description: "Automated client intake, follow-ups, and internal notifications — saving the team over 90 minutes of admin work per day."
  }
];
