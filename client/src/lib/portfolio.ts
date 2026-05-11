export interface PortfolioItem {
  id: string;
  image: string;
  category: string;
  title: string;
  description: string;
}

export const portfolioItems: PortfolioItem[] = [
  {
    id: "dental-receptionist",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=600&fit=crop&crop=center",
    category: "AI Receptionist",
    title: "Dental Clinic — AI Phone System",
    description: "Implemented a 24/7 AI receptionist that answers calls, books appointments, and handles patient FAQs. Reduced front-desk workload by 50%."
  },
  {
    id: "spa-booking",
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&h=600&fit=crop&crop=center",
    category: "Booking Automation",
    title: "Luxury Spa — Automated Booking System",
    description: "Deployed an AI booking system with automated reminders and client follow-up sequences. Reduced no-shows by 65% and increased repeat bookings."
  },
  {
    id: "dental-notes",
    image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800&h=600&fit=crop&crop=center",
    category: "Clinical Documentation",
    title: "Dental Practice — AI SOAP Note System",
    description: "Integrated AI voice transcription and SOAP note generation, saving each dentist over 90 minutes of charting time per day."
  }
];
