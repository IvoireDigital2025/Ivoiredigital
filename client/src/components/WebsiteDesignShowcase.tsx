import { motion } from "framer-motion";
import { Globe, Smartphone, ShoppingCart, Zap, Search, TrendingUp, ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const websiteTypes = [
  {
    icon: Globe,
    title: "Business Websites",
    description: "Professional, branded websites that establish credibility and convert visitors into leads. Perfect for service businesses, agencies, and local companies.",
    features: ["Custom design & branding", "Contact & lead capture forms", "Google Maps integration", "Fast load times"],
    color: "from-[#14532d] to-[#166534]"
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce Stores",
    description: "Full-featured online stores built to sell. Secure checkout, product management, and conversion-optimized layouts that drive revenue.",
    features: ["Product catalog & checkout", "Secure payment processing", "Inventory management", "Mobile shopping experience"],
    color: "from-[#b07d2a] to-[#c49030]"
  },
  {
    icon: Zap,
    title: "Landing Pages",
    description: "Laser-focused pages built for one goal: convert. Ideal for ad campaigns, promotions, and lead generation with maximum ROI.",
    features: ["High-converting layout", "A/B tested elements", "Fast & lightweight", "Campaign-ready design"],
    color: "from-blue-600 to-blue-700"
  },
  {
    icon: Smartphone,
    title: "Mobile-First Design",
    description: "Every website we build works beautifully on phones, tablets, and desktops. Over 60% of traffic is mobile — we make sure you're ready.",
    features: ["Responsive across all devices", "Touch-friendly navigation", "Fast mobile load times", "App-like experience"],
    color: "from-purple-600 to-purple-700"
  }
];

const processSteps = [
  { step: "01", title: "Discovery Call", description: "We learn about your business, goals, and target audience." },
  { step: "02", title: "Design Mockup", description: "You see exactly what your site will look like before a single line of code is written." },
  { step: "03", title: "Development", description: "We build your site with clean code, fast performance, and SEO best practices." },
  { step: "04", title: "Launch & Support", description: "We go live and stay available to make updates and improvements." }
];

const included = [
  "Custom design — no templates",
  "Mobile-first, responsive layout",
  "SEO-optimized structure",
  "Fast page load speeds",
  "Contact forms & lead capture",
  "Google Analytics integration",
  "SSL security certificate",
  "30-day post-launch support"
];

const portfolioExamples = [
  {
    name: "Coffee Pro",
    industry: "Food & Beverage",
    result: "300% more engagement",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&h=400&fit=crop&crop=center",
    tag: "Complete Redesign"
  },
  {
    name: "Service Business",
    industry: "Home Services",
    result: "2x more leads",
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600&h=400&fit=crop&crop=center",
    tag: "New Website"
  },
  {
    name: "Retail Brand",
    industry: "E-Commerce",
    result: "180% revenue increase",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop&crop=center",
    tag: "E-Commerce Store"
  }
];

export default function WebsiteDesignShowcase() {
  return (
    <section id="website-design" className="py-20 bg-white">
      <div className="container mx-auto px-6">

        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block bg-[#14532d]/10 text-[#14532d] text-sm font-semibold px-4 py-1.5 rounded-full mb-4 uppercase tracking-wide">
            Website Design & Development
          </span>
          <h2 className="text-3xl md:text-4xl font-poppins font-bold text-gray-900 mb-4">
            Websites That Actually <span className="text-[#14532d]">Win Customers</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Your website is your #1 sales tool — it works 24/7 and is often the first impression you make. 
            We build custom, high-converting websites that look great, load fast, and turn visitors into paying customers.
          </p>
        </motion.div>

        {/* Website Types Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {websiteTypes.map((type, index) => {
            const Icon = type.icon;
            return (
              <motion.div
                key={index}
                className="rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className={`bg-gradient-to-br ${type.color} p-6 text-white`}>
                  <Icon className="h-10 w-10 mb-3 opacity-90" />
                  <h3 className="text-xl font-bold mb-2">{type.title}</h3>
                  <p className="text-sm opacity-85 leading-relaxed">{type.description}</p>
                </div>
                <div className="bg-gray-50 p-5">
                  <ul className="space-y-2">
                    {type.features.map((feat, i) => (
                      <li key={i} className="flex items-center text-sm text-gray-700">
                        <CheckCircle className="h-4 w-4 text-[#14532d] mr-2 flex-shrink-0" />
                        {feat}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* What's Included + Process */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20 items-start">

          {/* What's Included */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-[#14532d] rounded-2xl p-8 text-white"
          >
            <h3 className="text-2xl font-bold mb-2">Everything Included</h3>
            <p className="text-white/75 mb-6 text-sm">No hidden fees. No upsells. Every website we build comes with:</p>
            <ul className="space-y-3">
              {included.map((item, i) => (
                <li key={i} className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-[#b07d2a] mr-3 flex-shrink-0" />
                  <span className="text-white/90">{item}</span>
                </li>
              ))}
            </ul>
            <Button
              className="mt-8 w-full bg-[#b07d2a] hover:bg-[#c49030] text-white font-semibold py-3"
              onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get a Free Website Consultation
            </Button>
          </motion.div>

          {/* Process */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Simple 4-Step Process</h3>
            <div className="space-y-6">
              {processSteps.map((step, i) => (
                <div key={i} className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#14532d]/10 rounded-xl flex items-center justify-center mr-4">
                    <span className="text-[#14532d] font-bold text-sm">{step.step}</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">{step.title}</h4>
                    <p className="text-gray-600 text-sm">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 p-5 bg-amber-50 border border-amber-200 rounded-xl">
              <p className="text-sm text-amber-800 font-medium">
                ⚡ Most websites are live in <strong>2–4 weeks</strong>. Book a free call and we'll give you a timeline and quote with no obligation.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Portfolio Previews */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Recent Website Projects</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {portfolioExamples.map((ex, i) => (
              <motion.div
                key={i}
                className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={ex.image}
                    alt={ex.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 left-3 bg-[#14532d] text-white text-xs font-medium px-3 py-1 rounded-full">
                    {ex.tag}
                  </div>
                </div>
                <div className="p-5 bg-white">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-semibold text-gray-900">{ex.name}</h4>
                      <p className="text-sm text-gray-500">{ex.industry}</p>
                    </div>
                    <span className="text-xs font-semibold text-[#14532d] bg-[#14532d]/10 px-3 py-1 rounded-full">
                      {ex.result}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Button
              size="lg"
              className="bg-[#14532d] hover:bg-[#166534] text-white font-semibold px-8"
              onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Start Your Website Project
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
