import { useRoute } from "wouter";
import { ArrowLeft, Calendar, Clock, FileText, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import { useEffect, useState } from "react";

interface GuideContent {
  id: string;
  title: string;
  description: string;
  readTime: string;
  category: string;
  lastUpdated: string;
  sections: {
    title: string;
    content: string[];
    actionItems?: string[];
  }[];
  keyTakeaways: string[];
  nextSteps: string[];
}

const guides: Record<string, GuideContent> = {
  "ai-chatbots-implementation": {
    id: "guide-1",
    title: "The Complete Guide to Implementing AI Chatbots for Small Business Customer Service",
    description: "Learn how to select, implement, and optimize AI chatbots for your small business to provide 24/7 customer support without increasing staff costs.",
    readTime: "15 min read",
    category: "AI Implementation",
    lastUpdated: "December 2024",
    sections: [
      {
        title: "Understanding AI Chatbots for Small Business",
        content: [
          "AI chatbots have evolved from simple scripted responses to sophisticated conversational partners capable of handling 80% of routine customer inquiries. For small businesses, this technology represents a game-changing opportunity to provide professional customer service without the overhead of hiring additional staff.",
          "Modern AI chatbots use natural language processing (NLP) to understand customer intent, context, and emotion. They can handle multiple conversations simultaneously, work 24/7 without breaks, and integrate directly with your existing business systems like CRM, scheduling, and payment processing.",
          "The key advantage for small businesses is cost efficiency. While hiring a full-time customer service representative costs $30,000-40,000 annually, an AI chatbot solution typically costs $299-599 per month while handling significantly more inquiries."
        ]
      },
      {
        title: "Choosing the Right Chatbot Platform",
        content: [
          "Not all chatbot platforms are created equal. For small businesses, the ideal platform should offer easy setup, integration capabilities, and scalable pricing. GoHighLevel stands out as the preferred choice for service-based businesses because it combines chatbot functionality with CRM, marketing automation, and appointment scheduling.",
          "Key features to evaluate include: natural language understanding quality, integration options with your existing tools, customization flexibility, analytics and reporting capabilities, and the quality of customer support provided by the platform.",
          "Avoid platforms that require coding knowledge or charge per conversation. Look for solutions that offer templates for your industry and provide clear setup instructions with ongoing support."
        ],
        actionItems: [
          "List the top 5 customer questions you receive daily",
          "Identify which business systems need chatbot integration",
          "Set a monthly budget for chatbot implementation",
          "Research platform reviews from businesses similar to yours"
        ]
      },
      {
        title: "Implementation Strategy",
        content: [
          "Successful chatbot implementation follows a phased approach. Start with handling frequently asked questions and simple tasks like appointment scheduling or information requests. This allows you to test the system and train it with real customer interactions before expanding functionality.",
          "Phase 1 (Week 1-2): Set up basic FAQ responses and contact information collection. Phase 2 (Week 3-4): Add appointment scheduling and service information. Phase 3 (Month 2): Integrate with CRM and add personalized responses based on customer history.",
          "Train your chatbot using your actual customer service conversations. Upload common questions and ideal responses. The more real data you provide, the better your chatbot will perform from day one."
        ],
        actionItems: [
          "Document your current customer service process",
          "Create a library of ideal responses to common questions",
          "Set up your chatbot platform account and basic configuration",
          "Test the chatbot with family or friends before going live"
        ]
      },
      {
        title: "Optimization and Continuous Improvement",
        content: [
          "Chatbot optimization is an ongoing process. Monitor conversation logs weekly to identify gaps in understanding or areas where customers become frustrated. Use this data to add new responses and improve existing ones.",
          "Track key metrics: response accuracy rate, conversation completion rate, customer satisfaction scores, and the percentage of conversations that require human handoff. Aim for 80% automated resolution within the first three months.",
          "Regular updates are essential. As your business grows and changes, your chatbot responses should evolve too. Schedule monthly reviews to update information, add new services, and refine responses based on customer feedback."
        ],
        actionItems: [
          "Set up weekly conversation review sessions",
          "Create a feedback collection system for chatbot interactions",
          "Establish performance benchmarks and tracking methods",
          "Plan monthly chatbot improvement sessions"
        ]
      }
    ],
    keyTakeaways: [
      "AI chatbots can handle 80% of routine customer inquiries automatically",
      "Implementation should follow a phased approach starting with basic FAQ responses",
      "GoHighLevel provides the best integration for service-based small businesses",
      "Monthly optimization based on real conversation data is essential for success",
      "ROI typically becomes positive within 2-3 months of implementation"
    ],
    nextSteps: [
      "Schedule a consultation with Ivoire Digital to discuss your specific chatbot needs",
      "Begin documenting your most common customer questions and ideal responses",
      "Set up a GoHighLevel account to explore chatbot functionality",
      "Plan your chatbot implementation timeline and budget allocation"
    ]
  },
  "local-seo-mastery": {
    id: "guide-2",
    title: "Local SEO Mastery: How to Dominate Google Maps for Your Business",
    description: "A step-by-step guide to optimizing your Google Business Profile, building local citations, and earning reviews to increase your visibility in local search.",
    readTime: "20 min read",
    category: "Digital Marketing",
    lastUpdated: "December 2024",
    sections: [
      {
        title: "Understanding Local SEO Fundamentals",
        content: [
          "Local SEO is the practice of optimizing your online presence to attract customers from relevant local searches. When someone searches for 'plumber near me' or 'best restaurant in [city]', local SEO determines whether your business appears in the results.",
          "Google uses three primary factors for local search rankings: relevance (how well your business matches the search), distance (how close your business is to the searcher), and prominence (how well-known your business is both online and offline).",
          "For small businesses, local SEO offers the best ROI because you're competing with businesses in your immediate area rather than nationwide companies with massive marketing budgets."
        ]
      },
      {
        title: "Google Business Profile Optimization",
        content: [
          "Your Google Business Profile (formerly Google My Business) is the foundation of local SEO. A fully optimized profile can increase your visibility by 200% and drive significantly more phone calls and website visits.",
          "Complete every section of your profile: business name, address, phone number, website, hours, business description, categories, and services. Upload high-quality photos of your business, products, services, and team. Google favors businesses with complete, accurate information.",
          "The business description should include your primary keywords naturally while explaining what makes your business unique. Focus on benefits to customers rather than just listing services."
        ],
        actionItems: [
          "Claim and verify your Google Business Profile if you haven't already",
          "Complete all profile sections with accurate, detailed information",
          "Upload at least 10 high-quality photos covering different aspects of your business",
          "Write a compelling business description that includes your main keywords"
        ]
      },
      {
        title: "Building Local Citations and NAP Consistency",
        content: [
          "Local citations are mentions of your business name, address, and phone number (NAP) on other websites. Consistent NAP information across all platforms signals to Google that your business is legitimate and established.",
          "Start with major directories like Yelp, Yellow Pages, Better Business Bureau, and industry-specific directories relevant to your business. Ensure your NAP information is identical across all platforms.",
          "Focus on quality over quantity. Having 10 citations on high-authority sites is better than 50 citations on low-quality directories. Local newspapers, chamber of commerce websites, and local business associations provide particularly valuable citations."
        ],
        actionItems: [
          "Audit your current citations for NAP consistency",
          "Create accounts on the top 10 directories relevant to your industry",
          "Submit your business to local chamber of commerce and business association websites",
          "Set up a system to monitor and maintain citation accuracy"
        ]
      },
      {
        title: "Review Generation and Management Strategy",
        content: [
          "Online reviews are a critical ranking factor and heavily influence customer decisions. Businesses with higher ratings and more reviews consistently outrank competitors in local search results.",
          "Implement a systematic approach to earning reviews: ask satisfied customers immediately after service completion, send follow-up emails with review requests, and make the review process as easy as possible by providing direct links.",
          "Respond to all reviews professionally and promptly. Thank positive reviewers and address negative reviews constructively. This shows potential customers that you care about customer satisfaction and are actively engaged with your community."
        ],
        actionItems: [
          "Set up automated review request sequences for satisfied customers",
          "Create templates for responding to positive and negative reviews",
          "Establish a weekly review monitoring and response schedule",
          "Train your team on how to naturally ask for reviews during customer interactions"
        ]
      }
    ],
    keyTakeaways: [
      "Google Business Profile optimization can increase visibility by 200%",
      "NAP consistency across all online platforms is crucial for local rankings",
      "Reviews are both a ranking factor and a major influence on customer decisions",
      "Local citations from high-authority sites boost credibility and rankings",
      "Regular monitoring and optimization are essential for maintaining local search visibility"
    ],
    nextSteps: [
      "Complete a comprehensive audit of your current local SEO status",
      "Implement a review generation system for your business",
      "Set up monthly local SEO monitoring and optimization tasks",
      "Consider professional local SEO services if you need faster results"
    ]
  },
  "business-automation-blueprint": {
    id: "guide-3",
    title: "Small Business Automation Blueprint: 5 Processes to Automate Today",
    description: "Discover the five business processes that every small business should automate, with implementation instructions and recommended tools.",
    readTime: "18 min read",
    category: "Business Automation",
    lastUpdated: "December 2024",
    sections: [
      {
        title: "The Business Case for Automation",
        content: [
          "Small business owners spend 40% of their time on repetitive administrative tasks that could be automated. This time drain prevents focus on growth activities like customer acquisition, product development, and strategic planning.",
          "Automation isn't just about saving time—it's about consistency, accuracy, and professional customer experience. Automated systems don't forget to send follow-ups, don't make data entry errors, and work 24/7 without breaks.",
          "The five processes outlined in this guide can save the average small business owner 15-20 hours per week while improving customer satisfaction and reducing operational costs."
        ]
      },
      {
        title: "Process 1: Customer Inquiry and Lead Management",
        content: [
          "Automating your lead management process ensures no potential customer falls through the cracks. Set up automated responses to website inquiries, social media messages, and phone calls with immediate acknowledgment and next steps.",
          "Use lead scoring to automatically prioritize hot prospects. When someone fills out a contact form requesting a quote, they should automatically receive priority follow-up compared to someone just downloading a general information guide.",
          "Automated lead nurturing sequences keep prospects engaged until they're ready to buy. A potential customer who isn't ready today might be ready in 3-6 months if you stay top-of-mind with valuable, automated communications."
        ],
        actionItems: [
          "Set up automated email responses for all lead generation sources",
          "Create lead scoring criteria based on customer behavior and information",
          "Develop nurturing email sequences for different types of prospects",
          "Implement automated task creation for sales follow-up"
        ]
      },
      {
        title: "Process 2: Appointment Scheduling and Reminders",
        content: [
          "Manual appointment scheduling is time-consuming and error-prone. Automated scheduling systems allow customers to book appointments 24/7 while preventing double-bookings and reducing no-shows by 80%.",
          "Implement automated reminder sequences: confirmation immediately after booking, reminder 24 hours before, and final reminder 2 hours before the appointment. Include relevant preparation information and easy rescheduling options.",
          "Post-appointment automation should include thank you messages, service feedback requests, and follow-up appointment scheduling for ongoing services."
        ],
        actionItems: [
          "Set up online scheduling system integrated with your calendar",
          "Create automated reminder sequences for different appointment types",
          "Implement post-appointment follow-up automation",
          "Set up automated rescheduling and cancellation management"
        ]
      },
      {
        title: "Process 3: Invoice Generation and Payment Collection",
        content: [
          "Automated invoicing eliminates delays in billing and improves cash flow. Generate invoices immediately upon service completion with automated delivery to customers via email.",
          "Set up payment reminders for overdue accounts with escalating urgency. Start with gentle reminders and progress to more assertive collection messages. Include easy payment links in all communications.",
          "Automate payment confirmation and receipt delivery. When customers pay, they should immediately receive confirmation and any necessary documentation or next steps."
        ],
        actionItems: [
          "Set up automated invoice generation triggers",
          "Create payment reminder sequences with escalating urgency",
          "Implement automatic payment confirmation and receipt delivery",
          "Set up automated reporting for accounts receivable tracking"
        ]
      },
      {
        title: "Process 4: Customer Onboarding and Welcome Sequences",
        content: [
          "First impressions matter. Automated onboarding ensures every new customer receives the same high-quality welcome experience regardless of who handles their account or when they sign up.",
          "Create progressive onboarding that delivers information and next steps over time rather than overwhelming customers with everything at once. This improves completion rates and customer satisfaction.",
          "Include automated check-ins during the onboarding process to identify and address any issues before they become problems."
        ],
        actionItems: [
          "Map out your ideal customer onboarding journey",
          "Create automated welcome sequences for new customers",
          "Set up progress tracking and automated check-in triggers",
          "Implement automated resource delivery and education sequences"
        ]
      },
      {
        title: "Process 5: Review and Feedback Collection",
        content: [
          "Systematic review collection improves your online reputation and provides valuable business intelligence. Automate review requests to satisfied customers while directing dissatisfied customers to private feedback channels.",
          "Time your review requests for maximum impact. Send requests when customer satisfaction is highest—immediately after successful project completion or positive service interactions.",
          "Automate responses to reviews and feedback to show you're engaged and care about customer experience. This builds trust with potential customers reading your reviews."
        ],
        actionItems: [
          "Set up automated review request sequences for satisfied customers",
          "Create private feedback collection for addressing concerns",
          "Implement automated review response systems",
          "Set up reputation monitoring and alert systems"
        ]
      }
    ],
    keyTakeaways: [
      "Automation can save small business owners 15-20 hours per week",
      "Lead management automation prevents prospects from falling through cracks",
      "Automated scheduling reduces no-shows by 80% while improving customer convenience",
      "Invoice automation improves cash flow and reduces collection delays",
      "Systematic review collection significantly improves online reputation"
    ],
    nextSteps: [
      "Prioritize which of the five processes would have the biggest impact on your business",
      "Choose automation tools that integrate with your existing business systems",
      "Start with one process and perfect it before moving to the next",
      "Schedule regular reviews to optimize and expand your automation systems"
    ]
  },
  "high-converting-website": {
    id: "guide-4",
    title: "Creating a High-Converting Website for Service-Based Businesses",
    description: "Learn the essential elements that every service business website needs to effectively convert visitors into leads and customers.",
    readTime: "12 min read",
    category: "Web Development",
    lastUpdated: "December 2024",
    sections: [
      {
        title: "Understanding Website Conversion Fundamentals",
        content: [
          "A high-converting website doesn't just look good—it's strategically designed to guide visitors toward taking specific actions. For service businesses, the primary goal is typically generating qualified leads through contact forms, phone calls, or appointment bookings.",
          "Conversion rate is the percentage of website visitors who complete a desired action. The average service business website converts 2-3% of visitors. With strategic design and optimization, this can be improved to 5-8% or higher.",
          "Three core principles drive conversions: clarity (visitors immediately understand what you do), credibility (visitors trust your expertise), and convenience (taking action is easy and obvious)."
        ]
      },
      {
        title: "Essential Page Elements for Service Businesses",
        content: [
          "Your homepage should communicate your value proposition within 5 seconds. Use a clear headline that states what you do and who you serve, followed by a brief explanation of the primary benefit customers receive.",
          "Include social proof prominently: customer testimonials, review ratings, certifications, awards, and logos of notable clients. Social proof reduces perceived risk and builds confidence in your services.",
          "Multiple contact methods should be visible on every page: phone number in the header, contact form above the fold, and chat widget if available. Make it impossible for interested visitors to leave without a way to reach you."
        ],
        actionItems: [
          "Write a clear, benefit-focused headline for your homepage",
          "Collect and organize customer testimonials and social proof elements",
          "Ensure contact information is visible on every page",
          "Create clear calls-to-action for your primary conversion goals"
        ]
      },
      {
        title: "Mobile Optimization and User Experience",
        content: [
          "78% of local searches happen on mobile devices, making mobile optimization crucial for service businesses. Your website must load quickly and function perfectly on smartphones and tablets.",
          "Mobile-first design means designing for mobile devices first, then adapting for desktop. This ensures the best possible experience for the majority of your visitors who will access your site on mobile.",
          "Page speed is critical for both user experience and search rankings. Aim for loading times under 3 seconds. Compress images, minimize plugins, and choose fast hosting to achieve optimal performance."
        ],
        actionItems: [
          "Test your website on multiple mobile devices and browsers",
          "Use Google PageSpeed Insights to identify performance issues",
          "Optimize images and implement performance best practices",
          "Ensure all forms and contact methods work perfectly on mobile"
        ]
      },
      {
        title: "Content Strategy for Service Businesses",
        content: [
          "Service businesses must overcome the challenge of selling intangible products. Use before-and-after case studies, detailed process explanations, and customer success stories to make your services tangible.",
          "Address common customer concerns and questions throughout your website. Create FAQ sections, detailed service pages, and educational content that demonstrates your expertise while addressing buyer hesitations.",
          "Local content helps service businesses rank in local search results. Include location-specific pages, local keywords naturally in your content, and testimonials from local customers."
        ],
        actionItems: [
          "Create detailed case studies showcasing your best client results",
          "Develop FAQ content addressing common customer concerns",
          "Write location-specific content for your service areas",
          "Document your service process to build transparency and trust"
        ]
      },
      {
        title: "Lead Generation and Conversion Optimization",
        content: [
          "Effective lead magnets offer valuable information in exchange for contact details. For service businesses, this might include free consultations, industry reports, checklists, or cost calculators.",
          "Multiple conversion opportunities should exist throughout the customer journey. Not every visitor is ready to hire you immediately, so offer different levels of engagement from newsletter signup to consultation requests.",
          "A/B testing different elements helps optimize conversion rates over time. Test headlines, call-to-action buttons, form lengths, and page layouts to identify what works best for your specific audience."
        ],
        actionItems: [
          "Create valuable lead magnets relevant to your target customers",
          "Set up multiple conversion paths for different visitor intentions",
          "Implement tracking to measure conversion rates and identify improvement opportunities",
          "Plan regular A/B tests to optimize key page elements"
        ]
      }
    ],
    keyTakeaways: [
      "High-converting websites focus on clarity, credibility, and convenience",
      "Mobile optimization is essential as 78% of local searches happen on mobile devices",
      "Social proof and testimonials significantly impact conversion rates for service businesses",
      "Multiple contact methods and conversion opportunities maximize lead generation",
      "Regular testing and optimization are necessary for sustained conversion improvement"
    ],
    nextSteps: [
      "Audit your current website against the principles in this guide",
      "Implement mobile optimization and page speed improvements first",
      "Add social proof elements and improve your value proposition messaging",
      "Set up conversion tracking and plan ongoing optimization efforts"
    ]
  }
};

export default function Guide() {
  const [, params] = useRoute("/guide/:slug");
  const slug = params?.slug;
  const guide = slug ? guides[slug] : null;
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (!guide) {
    return (
      <div className="font-inter text-gray-800 bg-gray-50">
        <Header scrolled={scrolled} />
        <div className="container mx-auto px-6 py-20 text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Guide Not Found</h1>
          <p className="text-gray-600 mb-8">The guide you're looking for doesn't exist.</p>
          <Button asChild>
            <a href="/">Back to Home</a>
          </Button>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="font-inter text-gray-800 bg-gray-50">
      <Header scrolled={scrolled} />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-[#14532d] to-[#166534]">
        <div className="container mx-auto px-6">
          <div className="mb-8">
            <a href="/" className="inline-flex items-center bg-white text-[#14532d] border border-white px-4 py-2 rounded-md hover:bg-gray-50 transition-colors font-medium">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </a>
          </div>
          
          <motion.div
            className="max-w-4xl mx-auto text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="bg-[#f59e0b] text-white text-sm px-3 py-1 rounded-full mb-4 inline-block">
              {guide.category}
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              {guide.title}
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              {guide.description}
            </p>
            <div className="flex items-center text-white/80 text-sm space-x-6">
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-2" />
                <span>{guide.readTime}</span>
              </div>
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-2" />
                <span>Updated {guide.lastUpdated}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="prose prose-lg max-w-none"
          >
            {/* Guide Sections */}
            {guide.sections.map((section, index) => (
              <div key={index} className="mb-12">
                <h2 className="text-2xl font-bold text-[#14532d] mb-6">{section.title}</h2>
                {section.content.map((paragraph, pIndex) => (
                  <p key={pIndex} className="text-gray-700 leading-relaxed mb-4">
                    {paragraph}
                  </p>
                ))}
                
                {section.actionItems && (
                  <div className="bg-[#f59e0b]/10 rounded-lg p-6 mt-6">
                    <h4 className="font-semibold text-[#14532d] mb-3 flex items-center">
                      <CheckCircle className="h-5 w-5 mr-2" />
                      Action Items
                    </h4>
                    <ul className="space-y-2">
                      {section.actionItems.map((item, itemIndex) => (
                        <li key={itemIndex} className="text-gray-700 flex items-start">
                          <span className="bg-[#f59e0b] text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold mr-3 mt-0.5 flex-shrink-0">
                            {itemIndex + 1}
                          </span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}

            {/* Key Takeaways */}
            <div className="bg-[#14532d] rounded-xl p-8 text-white mb-8">
              <h2 className="text-2xl font-bold mb-6 flex items-center">
                <FileText className="h-6 w-6 mr-3" />
                Key Takeaways
              </h2>
              <ul className="space-y-3">
                {guide.keyTakeaways.map((takeaway, index) => (
                  <li key={index} className="flex items-start">
                    <span className="bg-[#f59e0b] rounded-full w-2 h-2 mt-2 mr-3 flex-shrink-0"></span>
                    <span>{takeaway}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Next Steps */}
            <div className="bg-gray-50 rounded-xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-[#14532d] mb-6">Next Steps</h2>
              <ol className="space-y-3">
                {guide.nextSteps.map((step, index) => (
                  <li key={index} className="flex items-start">
                    <span className="bg-[#14532d] text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5 flex-shrink-0">
                      {index + 1}
                    </span>
                    <span className="text-gray-700">{step}</span>
                  </li>
                ))}
              </ol>
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-r from-[#14532d] to-[#166534] rounded-xl p-8 text-center text-white">
              <h3 className="text-2xl font-bold mb-4">Need Help Implementing These Strategies?</h3>
              <p className="text-lg mb-6 opacity-90">
                Let Ivoire Digital help you implement these proven strategies for your business.
              </p>
              <Button size="lg" className="bg-[#f59e0b] hover:bg-[#d97706] text-white">
                <a href="/#contact">Get Your Free Consultation</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>

      <Footer />
      <BackToTop />
    </div>
  );
}