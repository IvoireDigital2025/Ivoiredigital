import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  slug: string;
}

const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "How AI-Powered Chatbots Are Revolutionizing Small Business Customer Service in 2025",
    excerpt: "Discover how small businesses are using AI chatbots to provide 24/7 customer support, increase satisfaction rates, and reduce operational costs by up to 30%.",
    date: "April 25, 2025",
    readTime: "7 min read",
    category: "AI Solutions",
    image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
    slug: "ai-chatbots-customer-service"
  },
  {
    id: "2",
    title: "5 Digital Marketing Strategies That Small Businesses in Dallas Are Using to Double Their Leads",
    excerpt: "Learn the exact strategies that local Dallas businesses are implementing to attract more clients through targeted SEO, social media marketing, and content optimization.",
    date: "April 15, 2025",
    readTime: "9 min read",
    category: "Digital Marketing",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
    slug: "dallas-digital-marketing-strategies"
  },
  {
    id: "3",
    title: "The Complete Guide to AI Business Automation for Service-Based Companies",
    excerpt: "This comprehensive guide shows how service providers can automate scheduling, client onboarding, follow-ups, and more with affordable AI tools and minimal technical knowledge.",
    date: "April 10, 2025",
    readTime: "12 min read",
    category: "Business Automation",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
    slug: "ai-business-automation-guide"
  }
];

function BlogCard({ post, index }: { post: BlogPost; index: number }) {
  return (
    <motion.article
      className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="relative h-48 overflow-hidden">
        <img 
          src={post.image} 
          alt={post.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-0 left-0 m-4">
          <span className="bg-[#b07d2a] text-white text-sm px-3 py-1 rounded-full">
            {post.category}
          </span>
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex items-center text-gray-500 text-sm mb-4">
          <div className="flex items-center mr-4">
            <Calendar className="h-4 w-4 mr-1" />
            <span>{post.date}</span>
          </div>
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-1" />
            <span>{post.readTime}</span>
          </div>
        </div>
        
        <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
          {post.title}
        </h3>
        
        <p className="text-gray-600 mb-4 line-clamp-3">
          {post.excerpt}
        </p>
        
        <a 
          href={`/blog/${post.slug}`}
          className="inline-flex items-center text-[#14532d] font-medium hover:text-[#b07d2a] transition-colors"
        >
          Read More <ArrowRight className="h-4 w-4 ml-1" />
        </a>
      </div>
    </motion.article>
  );
}

export default function BlogSection() {
  return (
    <section id="blog" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-poppins font-bold text-[#14532d]">Insights & Resources</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Expert knowledge on AI solutions, digital marketing strategies, and business automation to help your small business thrive in the digital age.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <BlogCard key={post.id} post={post} index={index} />
          ))}
        </div>
        
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Button 
            className="bg-[#14532d] hover:bg-[#166534] text-white font-medium py-3 px-8"
          >
            View All Articles
          </Button>
        </motion.div>

        {/* Hidden SEO-rich content section */}
        <div className="sr-only">
          <h2>Top AI Agency in Dallas - AI Marketing Solutions for Small Businesses</h2>
          <p>
            Looking for the best AI agency in Dallas, TX? Ivoire Digital specializes in implementing 
            cutting-edge artificial intelligence solutions for small businesses. Our services include 
            AI chatbots for 24/7 customer service, AI-powered content generation, automated lead 
            qualification, smart CRM integrations, and data analytics.
          </p>
          
          <h2>Digital Marketing Agency Dallas - SEO, Social Media & Content Marketing</h2>
          <p>
            Ivoire Digital is a leading digital marketing agency serving small businesses in Dallas 
            and beyond. Our comprehensive digital marketing services include search engine optimization (SEO), 
            local SEO, Google My Business optimization, PPC advertising, social media marketing, 
            content marketing, email marketing, and conversion rate optimization.
          </p>
          
          <h2>Small Business Automation Solutions - Streamline Your Business Operations</h2>
          <p>
            Struggling with manual processes? Our business automation solutions help small businesses 
            save time and money. We implement customized workflow automation, appointment scheduling systems, 
            client onboarding sequences, invoice and payment collection, email marketing automation, 
            and social media posting tools designed specifically for small business needs.
          </p>
          
          <h2>Website Development for Small Businesses - Mobile-Friendly & SEO-Optimized</h2>
          <p>
            Ivoire Digital creates beautiful, functional websites that convert visitors into customers. 
            Our web development services include responsive website design, e-commerce development, 
            landing page creation, website optimization, hosting and maintenance, and ADA-compliant 
            accessible websites for businesses of all sizes.
          </p>
          
          <h2>AI Marketing Tools - Leverage Artificial Intelligence for Business Growth</h2>
          <p>
            Stay ahead of competitors with our AI marketing tools and strategies. We implement AI-powered 
            customer segmentation, predictive analytics, personalized marketing campaigns, automated social 
            media management, and intelligent content creation to help your business reach more customers.
          </p>
        </div>
      </div>
    </section>
  );
}