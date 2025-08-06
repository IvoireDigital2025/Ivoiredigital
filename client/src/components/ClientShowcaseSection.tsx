import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, MapPin, TrendingUp, Users, Zap, Coffee } from "lucide-react";

export default function ClientShowcaseSection() {
  const showcaseProjects = [
    {
      title: "Coffee Pro - Complete Digital Transformation",
      location: "Astoria, NY",
      industry: "Food & Beverage",
      description: "Transformed a basic WordPress coffee shop website into a stunning, culturally-authentic digital experience celebrating Egyptian coffee heritage in NYC.",
      beforeUrl: "https://coffeeprocorp.online",
      afterUrl: "https://yourcoffeepro.com",
      results: [
        "300% increase in online engagement",
        "Modern responsive design implementation",
        "Authentic brand storytelling integration",
        "Enhanced local community connection"
      ],
      technologies: ["Custom Website Design", "Brand Development", "Mobile Optimization", "Cultural Branding"],
      featured: true,
      icon: Coffee
    }
  ];

  const partnerBadges = [
    "200+ Active Business Clients",
    "Dallas-Based Team",
    "Nationwide Service",
    "Custom AI Solutions"
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Real Projects, Real Results
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            See how we transform businesses with authentic storytelling, professional design, 
            and cutting-edge technology solutions.
          </p>
          
          {/* Partner Badges */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {partnerBadges.map((badge, index) => (
              <Badge key={index} variant="secondary" className="bg-blue-100 text-blue-800 px-4 py-2">
                {badge}
              </Badge>
            ))}
          </div>
        </motion.div>

        {/* Featured Project Showcase */}
        {showcaseProjects.map((project, index) => {
          const IconComponent = project.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-12"
            >
              <Card className="shadow-2xl border-0 overflow-hidden">
                <CardContent className="p-0">
                  <div className="grid md:grid-cols-2 gap-0">
                    {/* Project Details */}
                    <div className="p-8 bg-gradient-to-br from-blue-600 to-purple-600 text-white">
                      <div className="flex items-center mb-4">
                        <IconComponent className="h-8 w-8 mr-3" />
                        <div>
                          <Badge className="bg-white/20 text-white mb-2">
                            Featured Client Transformation
                          </Badge>
                          <div className="flex items-center text-sm opacity-80">
                            <MapPin className="h-4 w-4 mr-1" />
                            {project.location} • {project.industry}
                          </div>
                        </div>
                      </div>
                      
                      <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                      <p className="text-lg opacity-90 mb-6 leading-relaxed">
                        {project.description}
                      </p>

                      {/* Results */}
                      <div className="mb-6">
                        <h4 className="font-semibold mb-3 flex items-center">
                          <TrendingUp className="h-5 w-5 mr-2" />
                          Key Results:
                        </h4>
                        <ul className="space-y-2">
                          {project.results.map((result, idx) => (
                            <li key={idx} className="flex items-center text-sm">
                              <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                              {result}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies */}
                      <div className="mb-6">
                        <h4 className="font-semibold mb-3 flex items-center">
                          <Zap className="h-5 w-5 mr-2" />
                          Technologies Used:
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, idx) => (
                            <Badge key={idx} variant="outline" className="border-white/30 text-white">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* CTA Buttons */}
                      <div className="flex flex-col sm:flex-row gap-3">
                        <Button
                          variant="outline"
                          className="border-white text-white hover:bg-white hover:text-blue-600"
                          onClick={() => window.open(project.beforeUrl, '_blank')}
                        >
                          <ExternalLink className="h-4 w-4 mr-2" />
                          View Before
                        </Button>
                        <Button
                          className="bg-white text-blue-600 hover:bg-gray-100"
                          onClick={() => window.open(project.afterUrl, '_blank')}
                        >
                          <ExternalLink className="h-4 w-4 mr-2" />
                          View After
                        </Button>
                      </div>
                    </div>

                    {/* Visual Comparison */}
                    <div className="p-8 bg-white">
                      <h4 className="text-xl font-semibold text-gray-800 mb-6 text-center">
                        Before & After Transformation
                      </h4>
                      
                      <div className="space-y-6">
                        {/* Before */}
                        <div className="border-2 border-gray-200 rounded-lg overflow-hidden">
                          <div className="bg-red-50 px-4 py-2 border-b">
                            <span className="text-sm font-medium text-red-600">Before: Basic WordPress</span>
                          </div>
                          <div className="p-4 bg-gray-50">
                            <div className="space-y-2">
                              <div className="h-3 bg-gray-300 rounded w-3/4"></div>
                              <div className="h-3 bg-gray-300 rounded w-1/2"></div>
                              <div className="h-3 bg-gray-300 rounded w-2/3"></div>
                            </div>
                            <div className="mt-4 text-xs text-gray-500">
                              ✗ Generic template design<br/>
                              ✗ Poor mobile experience<br/>
                              ✗ No brand identity
                            </div>
                          </div>
                        </div>

                        {/* After */}
                        <div className="border-2 border-green-200 rounded-lg overflow-hidden">
                          <div className="bg-green-50 px-4 py-2 border-b">
                            <span className="text-sm font-medium text-green-600">After: Custom Design</span>
                          </div>
                          <div className="p-4 bg-gradient-to-br from-blue-50 to-purple-50">
                            <div className="space-y-2">
                              <div className="h-3 bg-gradient-to-r from-blue-400 to-purple-400 rounded w-full"></div>
                              <div className="h-3 bg-gradient-to-r from-green-400 to-blue-400 rounded w-5/6"></div>
                              <div className="h-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded w-4/5"></div>
                            </div>
                            <div className="mt-4 text-xs text-green-600">
                              ✓ Authentic brand storytelling<br/>
                              ✓ Professional photography<br/>
                              ✓ Mobile-optimized design
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="mt-6 text-center">
                        <div className="inline-flex items-center bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">
                          <TrendingUp className="h-4 w-4 mr-2" />
                          300% Engagement Increase
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}

        {/* Business Partnership Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center bg-white rounded-2xl p-8 shadow-xl"
        >
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            Ready for Your Business Transformation?
          </h3>
          <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
            Join Coffee Pro and 200+ other businesses that have transformed their digital presence 
            with our authentic storytelling approach and cutting-edge technology solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold"
              onClick={() => window.location.href = '#website-audit'}
            >
              Get Your Free Business Analysis
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold"
              onClick={() => window.location.href = '#booking'}
            >
              Schedule Strategy Consultation
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}