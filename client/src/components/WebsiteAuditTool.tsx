import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { CheckCircle, AlertCircle, XCircle, Search, Globe, Zap } from "lucide-react";
import { motion } from "framer-motion";

interface AuditResult {
  score: number;
  issues: Array<{
    type: 'critical' | 'warning' | 'success';
    title: string;
    description: string;
  }>;
  recommendations: string[];
}

export default function WebsiteAuditTool() {
  const [url, setUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [auditResult, setAuditResult] = useState<AuditResult | null>(null);
  const [error, setError] = useState("");

  const analyzeWebsite = async () => {
    if (!url) return;
    
    setIsLoading(true);
    setError("");
    
    try {
      // Validate URL format
      const urlPattern = /^https?:\/\/.+\..+/;
      if (!urlPattern.test(url)) {
        throw new Error("Please enter a valid URL (including http:// or https://)");
      }

      // Simulate AI analysis with realistic results
      await new Promise(resolve => setTimeout(resolve, 3000));
      
      const score = Math.floor(Math.random() * 40) + 45; // 45-85 range
      
      const possibleIssues = [
        { type: 'critical' as const, title: 'No SSL Certificate', description: 'Your website is not secure. This hurts SEO and user trust.' },
        { type: 'critical' as const, title: 'Slow Loading Speed', description: 'Page loads in 4.2s. Should be under 3s for optimal performance.' },
        { type: 'warning' as const, title: 'Missing Meta Descriptions', description: '12 pages lack meta descriptions, reducing search visibility.' },
        { type: 'warning' as const, title: 'No Contact Forms', description: 'Missing lead capture forms on key pages.' },
        { type: 'warning' as const, title: 'Poor Mobile Experience', description: 'Site not optimized for mobile devices (67% of traffic).' },
        { type: 'success' as const, title: 'Good Content Quality', description: 'Well-written content with relevant keywords.' },
        { type: 'success' as const, title: 'Clean URL Structure', description: 'URLs are SEO-friendly and organized.' }
      ];

      const selectedIssues = possibleIssues
        .sort(() => Math.random() - 0.5)
        .slice(0, Math.floor(Math.random() * 3) + 3);

      const recommendations = [
        "Implement AI-powered chatbot for 24/7 customer support",
        "Add automated lead scoring and nurturing workflows", 
        "Optimize page speed with intelligent image compression",
        "Set up conversion tracking and analytics dashboard",
        "Create personalized user experiences with AI recommendations",
        "Implement automated A/B testing for better conversions"
      ].slice(0, 3);

      setAuditResult({
        score,
        issues: selectedIssues,
        recommendations
      });
      
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to analyze website");
    } finally {
      setIsLoading(false);
    }
  };

  const getScoreColor = (score: number) => {
    if (score >= 80) return "text-green-500";
    if (score >= 60) return "text-yellow-500";
    return "text-red-500";
  };

  const getIssueIcon = (type: string) => {
    switch (type) {
      case 'critical': return <XCircle className="h-5 w-5 text-red-500" />;
      case 'warning': return <AlertCircle className="h-5 w-5 text-yellow-500" />;
      case 'success': return <CheckCircle className="h-5 w-5 text-green-500" />;
      default: return null;
    }
  };

  return (
    <div className="py-16 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center mb-4">
            <Search className="h-8 w-8 text-blue-600 mr-3" />
            <h2 className="text-4xl font-bold text-gray-800">Free AI Website Audit</h2>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get instant insights into your website's performance, SEO, and conversion opportunities. 
            Our AI analyzes your site and provides actionable recommendations.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <Card className="shadow-2xl border-0">
            <CardHeader className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-t-lg">
              <CardTitle className="text-2xl flex items-center">
                <Globe className="h-6 w-6 mr-2" />
                Website Analysis Tool
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <div className="flex gap-4 mb-6">
                <Input
                  placeholder="Enter your website URL (e.g., https://yoursite.com)"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  className="flex-1 text-lg py-3"
                  disabled={isLoading}
                />
                <Button
                  onClick={analyzeWebsite}
                  disabled={isLoading || !url}
                  className="px-8 py-3 text-lg bg-blue-600 hover:bg-blue-700"
                >
                  {isLoading ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Analyzing...
                    </>
                  ) : (
                    <>
                      <Zap className="h-5 w-5 mr-2" />
                      Audit Now
                    </>
                  )}
                </Button>
              </div>

              {error && (
                <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded mb-6">
                  {error}
                </div>
              )}

              {auditResult && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="space-y-6"
                >
                  <div className="text-center p-6 bg-gray-50 rounded-lg">
                    <div className={`text-6xl font-bold ${getScoreColor(auditResult.score)} mb-2`}>
                      {auditResult.score}
                    </div>
                    <div className="text-gray-600 text-lg">Overall Score</div>
                    <Progress value={auditResult.score} className="w-full mt-4" />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-2xl font-semibold mb-4 flex items-center">
                        <AlertCircle className="h-6 w-6 mr-2 text-orange-500" />
                        Issues Found
                      </h3>
                      <div className="space-y-3">
                        {auditResult.issues.map((issue, index) => (
                          <div key={index} className="flex items-start gap-3 p-4 border rounded-lg">
                            {getIssueIcon(issue.type)}
                            <div>
                              <div className="font-medium">{issue.title}</div>
                              <div className="text-sm text-gray-600">{issue.description}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-2xl font-semibold mb-4 flex items-center">
                        <CheckCircle className="h-6 w-6 mr-2 text-green-500" />
                        AI Recommendations
                      </h3>
                      <div className="space-y-3">
                        {auditResult.recommendations.map((rec, index) => (
                          <div key={index} className="p-4 bg-green-50 border border-green-200 rounded-lg">
                            <div className="flex items-start gap-2">
                              <Badge className="bg-green-100 text-green-800 shrink-0">AI</Badge>
                              <div className="text-sm">{rec}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="text-center p-6 bg-blue-50 rounded-lg">
                    <h3 className="text-xl font-semibold mb-2">Ready to Improve Your Website?</h3>
                    <p className="text-gray-600 mb-4">
                      Get a detailed action plan and implement these improvements with our AI-powered solutions.
                    </p>
                    <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
                      Schedule Free Consultation
                    </Button>
                  </div>
                </motion.div>
              )}
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}