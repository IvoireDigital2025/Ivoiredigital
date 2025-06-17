export interface Testimonial {
  id: string;
  rating: number;
  content: string;
  author: string;
  position: string;
  company: string;
  image: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    rating: 5,
    content: "Ivoire Digital transformed our online presence and automated our customer support, increasing our efficiency while improving client satisfaction. The AI solutions they implemented save us countless hours every week.",
    author: "Sarah Johnson",
    position: "CEO",
    company: "StyleBoutique",
    image: "https://randomuser.me/api/portraits/women/42.jpg"
  },
  {
    id: "2",
    rating: 5,
    content: "The team at Ivoire Digital helped us implement an AI-powered booking system that revolutionized our operations. Our clients love the seamless experience, and we've seen a 40% increase in bookings.",
    author: "Michael Rodriguez",
    position: "Owner",
    company: "Urban Spa",
    image: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    id: "3",
    rating: 5,
    content: "Working with Ivoire Digital completely changed our digital marketing strategy. Their data-driven approach and AI tools helped us target the right audience and tripled our conversion rate within months.",
    author: "Jennifer Patel",
    position: "Marketing Director",
    company: "TechSolutions",
    image: "https://randomuser.me/api/portraits/women/28.jpg"
  },
  {
    id: "4",
    rating: 5,
    content: "Ivoire Digital's automation solutions transformed our coffee shop operations. Their AI chatbot handles customer orders and inquiries 24/7, while their automated marketing brings in new customers daily. Our efficiency has doubled since working with them.",
    author: "Maria Santos",
    position: "Owner",
    company: "Coffee Pro",
    image: "https://randomuser.me/api/portraits/women/45.jpg"
  }
];
