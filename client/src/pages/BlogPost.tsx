import { useRoute } from "wouter";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  content: {
    introduction: string;
    keyPoints: string[];
    benefits: string[];
    actionItems: string[];
    conclusion: string;
    seoKeywords: string[];
  };
}

const blogPosts: Record<string, BlogPost> = {
  "ai-chatbots-customer-service": {
    id: "1",
    title: "How AI-Powered Chatbots Are Revolutionizing Small Business Customer Service in 2025",
    excerpt: "Discover how small businesses are using AI chatbots to provide 24/7 customer support, increase satisfaction rates, and reduce operational costs by up to 30%.",
    date: "April 25, 2025",
    readTime: "7 min read",
    category: "AI Solutions",
    image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
    content: {
      introduction: "In today's fast-paced business environment, Dallas small businesses are discovering that AI-powered chatbots aren't just a luxury—they're becoming essential for competitive customer service. With 67% of customers expecting instant responses and 24/7 availability, traditional phone-only customer service simply can't meet modern expectations. AI chatbots powered by platforms like GoHighLevel are transforming how small businesses interact with their customers, providing professional, consistent support that rivals larger corporations.",
      keyPoints: [
        "AI chatbots handle 80% of routine customer inquiries without human intervention, freeing your staff for complex issues",
        "Small businesses see 95% faster response times with automated customer service compared to manual responses",
        "Integration with GoHighLevel CRM captures every customer interaction automatically, building comprehensive customer profiles",
        "Natural language processing understands customer intent and provides accurate responses in conversational tone",
        "24/7 availability increases customer satisfaction scores by 45% on average across all industries",
        "Multi-channel support handles inquiries from websites, Facebook, Instagram, and text messages in one system"
      ],
      benefits: [
        "Reduce customer service costs by up to 30% while maintaining or improving quality of support",
        "Capture leads outside business hours when competitors are unavailable, gaining competitive advantage",
        "Scale customer support without hiring additional staff members or increasing overhead costs",
        "Provide instant responses that modern customers expect, improving satisfaction and retention",
        "Free up staff time to focus on high-value customer interactions and business development",
        "Maintain consistent brand voice and messaging across all customer touchpoints"
      ],
      actionItems: [
        "Audit your current customer service response times and identify bottlenecks that frustrate customers",
        "List the top 10 most common customer questions your business receives daily or weekly",
        "Evaluate your current phone system and track missed call patterns during business hours",
        "Calculate potential cost savings from automated customer service based on current staff time",
        "Schedule a consultation with Ivoire Digital to see AI chatbot demos tailored to your specific industry",
        "Review competitor customer service offerings to identify gaps your AI solution can fill"
      ],
      conclusion: "AI-powered chatbots represent a fundamental shift in how small businesses can compete with larger companies. By implementing intelligent automation through GoHighLevel, Dallas businesses are not just keeping up—they're setting new standards for customer service excellence. The businesses that adopt these technologies now will have a significant advantage as customer expectations continue to evolve.",
      seoKeywords: ["AI chatbots Dallas", "automated customer service", "small business AI", "customer service automation", "Dallas business technology", "GoHighLevel chatbots"]
    }
  },
  "dallas-digital-marketing-strategies": {
    id: "2",
    title: "5 Digital Marketing Strategies That Small Businesses in Dallas Are Using to Double Their Leads",
    excerpt: "Learn the exact strategies that local Dallas businesses are implementing to attract more clients through targeted SEO, social media marketing, and content optimization.",
    date: "April 15, 2025",
    readTime: "9 min read",
    category: "Digital Marketing",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
    content: {
      introduction: "Dallas small businesses are thriving by implementing strategic digital marketing approaches that level the playing field with larger competitors. The key isn't having the biggest budget—it's using the right combination of local SEO, targeted content, and automated marketing systems. Our analysis of successful Dallas businesses reveals five core strategies that consistently double lead generation within 90 days when properly implemented.",
      keyPoints: [
        "Local SEO optimization targeting Dallas-specific keywords increases visibility by 200% in local search results",
        "Google My Business optimization with regular posts and reviews drives 60% more phone calls from local searches",
        "Social media automation maintains consistent presence across all platforms without daily time investment",
        "Email marketing campaigns achieve 4,200% ROI when properly segmented and automated through GoHighLevel",
        "Integrated marketing funnels convert 40% more leads than standalone campaigns by nurturing prospects systematically"
      ],
      benefits: [
        "Dominate local search results ahead of Dallas competitors who rely on outdated marketing methods",
        "Build brand recognition through consistent digital presence across multiple channels",
        "Generate qualified leads that convert into paying customers rather than just website traffic",
        "Maximize marketing budget with data-driven campaign optimization and performance tracking",
        "Create predictable revenue streams through automated marketing systems that work 24/7"
      ],
      actionItems: [
        "Claim and optimize your Google My Business listing with professional photos and complete information",
        "Research Dallas-specific keywords your target customers are searching for using Google Keyword Planner",
        "Set up conversion tracking to measure which marketing channels drive the most qualified leads",
        "Create a content calendar for consistent social media posting that showcases your expertise",
        "Implement email capture forms on your website and social media to build your marketing database",
        "Analyze your top 3 local competitors' digital marketing strategies to identify opportunities"
      ],
      conclusion: "The most successful Dallas small businesses understand that digital marketing isn't about being everywhere—it's about being strategic. By focusing on these five proven strategies and implementing them systematically, any small business can compete effectively in the Dallas market and achieve sustainable growth.",
      seoKeywords: ["Dallas digital marketing", "local SEO Dallas", "small business marketing", "Dallas business leads", "digital marketing agency Dallas", "Dallas marketing strategies"]
    }
  },
  "ai-business-automation-guide": {
    id: "3",
    title: "The Complete Guide to AI Business Automation for Service-Based Companies",
    excerpt: "This comprehensive guide shows how service providers can automate scheduling, client onboarding, follow-ups, and more with affordable AI tools and minimal technical knowledge.",
    date: "April 10, 2025",
    readTime: "12 min read",
    category: "Business Automation",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
    content: {
      introduction: "Service-based businesses face unique challenges: managing appointments, following up with clients, handling payments, and maintaining relationships—all while delivering excellent service. AI business automation solves these challenges by handling routine tasks automatically, allowing business owners to focus on what they do best. This comprehensive guide reveals how Dallas service providers are using GoHighLevel and AI automation to scale their operations without proportionally increasing their workload.",
      keyPoints: [
        "Automated appointment scheduling reduces no-shows by 80% with intelligent reminder systems and confirmation workflows",
        "Client onboarding sequences create consistent experience and reduce manual administrative work by 70%",
        "Follow-up automation maintains customer relationships without constant manual effort or memory requirements",
        "Payment processing automation improves cash flow with automatic invoicing and payment collection systems",
        "Review collection systems increase online reputation with minimal effort while addressing issues proactively"
      ],
      benefits: [
        "Save 15-20 hours per week on administrative tasks that don't directly generate revenue",
        "Provide professional customer experience that builds trust and loyalty throughout the client journey",
        "Reduce human error in scheduling, payment processing, and client communication",
        "Scale your service business without proportionally increasing overhead costs or staff requirements",
        "Compete with larger companies through professional automation systems that enhance your capabilities"
      ],
      actionItems: [
        "Map out your current client journey from initial contact to project completion and payment",
        "Identify repetitive tasks that consume the most time each week and prioritize for automation",
        "Calculate the cost of missed appointments, delayed payments, and manual follow-up time",
        "Research automation tools that integrate with your existing business systems and workflows",
        "Start with one automation process (like appointment reminders) and expand gradually as you see results",
        "Document your current processes before automating to ensure nothing important is missed"
      ],
      conclusion: "Business automation isn't about replacing human touch—it's about amplifying your ability to provide excellent service consistently. By implementing these AI-powered systems, service-based businesses can operate more professionally, reduce stress, and focus on growth rather than getting bogged down in administrative tasks.",
      seoKeywords: ["business automation Dallas", "service business automation", "AI business tools", "small business efficiency", "automated scheduling systems", "GoHighLevel automation"]
    }
  }
};

export default function BlogPost() {
  const [, params] = useRoute("/blog/:slug");
  const slug = params?.slug;
  const post = slug ? blogPosts[slug] : null;

  if (!post) {
    return (
      <div className="container mx-auto px-6 py-20 text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Article Not Found</h1>
        <p className="text-gray-600 mb-8">The article you're looking for doesn't exist.</p>
        <Button asChild>
          <a href="/blog">Back to Blog</a>
        </Button>
      </div>
    );
  }

  return (
    <article className="bg-white">
      {/* Hero Section */}
      <div className="relative h-96 overflow-hidden">
        <img 
          src={post.image} 
          alt={post.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-end">
          <div className="container mx-auto px-6 pb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="bg-[#f59e0b] text-white text-sm px-3 py-1 rounded-full mb-4 inline-block">
                {post.category}
              </span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 max-w-4xl">
                {post.title}
              </h1>
              <div className="flex items-center text-white/80 text-sm">
                <div className="flex items-center mr-6">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-2" />
                  <span>{post.readTime}</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <Button variant="outline" asChild>
              <a href="/" className="inline-flex items-center">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Home
              </a>
            </Button>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="prose prose-lg max-w-none"
          >
            {/* Introduction */}
            <div className="mb-8">
              <p className="text-xl text-gray-700 leading-relaxed">
                {post.excerpt}
              </p>
            </div>

            <div className="mb-8">
              <p className="text-gray-700 leading-relaxed">
                {post.content.introduction}
              </p>
            </div>

            {/* Key Points */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-[#14532d] mb-4">Key Insights</h2>
              <ul className="space-y-3">
                {post.content.keyPoints.map((point, index) => (
                  <li key={index} className="text-gray-700 leading-relaxed">
                    <span className="font-semibold text-[#14532d]">•</span> {point}
                  </li>
                ))}
              </ul>
            </div>

            {/* Benefits */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-[#14532d] mb-4">Business Benefits</h2>
              <ul className="space-y-3">
                {post.content.benefits.map((benefit, index) => (
                  <li key={index} className="text-gray-700 leading-relaxed">
                    <span className="font-semibold text-[#f59e0b]">✓</span> {benefit}
                  </li>
                ))}
              </ul>
            </div>

            {/* Action Items */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-[#14532d] mb-4">Action Steps</h2>
              <ol className="space-y-3">
                {post.content.actionItems.map((item, index) => (
                  <li key={index} className="text-gray-700 leading-relaxed">
                    <span className="font-semibold text-[#14532d] mr-2">{index + 1}.</span>
                    {item}
                  </li>
                ))}
              </ol>
            </div>

            {/* Conclusion */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-[#14532d] mb-4">Conclusion</h2>
              <p className="text-gray-700 leading-relaxed">
                {post.content.conclusion}
              </p>
            </div>

            {/* CTA Section */}
            <div className="bg-[#14532d] rounded-xl p-8 text-center text-white">
              <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Business?</h3>
              <p className="text-lg mb-6 opacity-90">
                Let Ivoire Digital help you implement these strategies for your Dallas business.
              </p>
              <Button size="lg" className="bg-[#f59e0b] hover:bg-[#d97706] text-white">
                <a href="#contact">Get Your Free Consultation</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Hidden SEO Content */}
      <div className="sr-only">
        <h2>Keywords:</h2>
        <p>{post.content.seoKeywords.join(", ")}</p>
      </div>
    </article>
  );
}