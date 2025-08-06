import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Badge } from "@/components/ui/badge";
import { Calculator, TrendingUp, DollarSign, Clock, Users, Target } from "lucide-react";
import { motion } from "framer-motion";

interface ROIMetrics {
  currentCosts: number;
  timeSaved: number;
  leadIncrease: number;
  conversionImprovement: number;
  annualSavings: number;
  roi: number;
  paybackPeriod: number;
}

export default function ROICalculator() {
  const [businessType, setBusinessType] = useState("");
  const [monthlyRevenue, setMonthlyRevenue] = useState([50000]);
  const [employeeCount, setEmployeeCount] = useState([10]);
  const [currentMarketingSpend, setCurrentMarketingSpend] = useState("");
  const [hoursPerWeek, setHoursPerWeek] = useState([20]);
  const [results, setResults] = useState<ROIMetrics | null>(null);

  const businessTypes = [
    { value: "retail", label: "Retail/E-commerce", multiplier: 1.2 },
    { value: "professional", label: "Professional Services", multiplier: 1.5 },
    { value: "healthcare", label: "Healthcare", multiplier: 1.3 },
    { value: "real-estate", label: "Real Estate", multiplier: 1.4 },
    { value: "manufacturing", label: "Manufacturing", multiplier: 1.1 },
    { value: "technology", label: "Technology", multiplier: 1.6 },
    { value: "restaurant", label: "Restaurant/Food", multiplier: 1.0 },
    { value: "consulting", label: "Consulting", multiplier: 1.7 }
  ];

  const calculateROI = () => {
    if (!businessType || !currentMarketingSpend) return;

    const selectedBusiness = businessTypes.find(b => b.value === businessType);
    const multiplier = selectedBusiness?.multiplier || 1.0;
    
    const monthly = monthlyRevenue[0];
    const employees = employeeCount[0];
    const marketingSpend = parseFloat(currentMarketingSpend);
    const hours = hoursPerWeek[0];

    // Calculate time savings (AI automation saves 60-80% of manual work)
    const timeSavedHours = hours * 0.7; // 70% time savings
    const hourlyCost = 50; // Average cost per hour
    const timeSavings = timeSavedHours * hourlyCost * 52; // Annual

    // Calculate lead increase (AI typically increases leads by 25-45%)
    const leadIncrease = 0.35 * multiplier; // 35% average increase
    const leadRevenue = monthly * 12 * leadIncrease;

    // Calculate conversion improvement (AI improves conversions by 15-30%)
    const conversionImprovement = 0.22 * multiplier; // 22% average improvement
    const conversionRevenue = monthly * 12 * conversionImprovement;

    // Calculate current costs (manual processes, inefficiencies)
    const manualProcessCosts = employees * 2000; // $2k per employee annually
    const inefficiencyLoss = marketingSpend * 12 * 0.3; // 30% inefficiency loss
    const currentCosts = manualProcessCosts + inefficiencyLoss;

    // Total annual savings and benefits
    const annualSavings = timeSavings + leadRevenue + conversionRevenue + currentCosts;
    
    // Estimated investment (SaaS subscription + implementation)
    const estimatedInvestment = Math.min(monthly * 0.5, 25000); // Max $25k investment
    
    const roi = ((annualSavings - estimatedInvestment) / estimatedInvestment) * 100;
    const paybackPeriod = estimatedInvestment / (annualSavings / 12);

    setResults({
      currentCosts,
      timeSaved: timeSavedHours * 52,
      leadIncrease: leadIncrease * 100,
      conversionImprovement: conversionImprovement * 100,
      annualSavings,
      roi,
      paybackPeriod
    });
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0
    }).format(amount);
  };

  const formatNumber = (num: number) => {
    return new Intl.NumberFormat('en-US').format(Math.round(num));
  };

  return (
    <div className="py-16 bg-gradient-to-br from-green-50 to-emerald-100">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center mb-4">
            <Calculator className="h-8 w-8 text-green-600 mr-3" />
            <h2 className="text-4xl font-bold text-gray-800">ROI Calculator</h2>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Calculate the potential return on investment from our AI-powered software solutions. 
            See how much you could save and earn with intelligent automation.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Card className="shadow-xl border-0 h-fit">
              <CardHeader className="bg-gradient-to-r from-green-600 to-emerald-600 text-white">
                <CardTitle className="text-2xl flex items-center">
                  <TrendingUp className="h-6 w-6 mr-2" />
                  Business Information
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-6">
                <div>
                  <Label className="text-base font-medium">Business Type</Label>
                  <Select value={businessType} onValueChange={setBusinessType}>
                    <SelectTrigger className="mt-2">
                      <SelectValue placeholder="Select your industry" />
                    </SelectTrigger>
                    <SelectContent>
                      {businessTypes.map((type) => (
                        <SelectItem key={type.value} value={type.value}>
                          {type.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label className="text-base font-medium">
                    Monthly Revenue: {formatCurrency(monthlyRevenue[0])}
                  </Label>
                  <Slider
                    value={monthlyRevenue}
                    onValueChange={setMonthlyRevenue}
                    max={500000}
                    min={10000}
                    step={5000}
                    className="mt-3"
                  />
                  <div className="flex justify-between text-sm text-gray-500 mt-1">
                    <span>$10K</span>
                    <span>$500K+</span>
                  </div>
                </div>

                <div>
                  <Label className="text-base font-medium">
                    Team Size: {employeeCount[0]} employees
                  </Label>
                  <Slider
                    value={employeeCount}
                    onValueChange={setEmployeeCount}
                    max={200}
                    min={1}
                    step={1}
                    className="mt-3"
                  />
                  <div className="flex justify-between text-sm text-gray-500 mt-1">
                    <span>1</span>
                    <span>200+</span>
                  </div>
                </div>

                <div>
                  <Label htmlFor="marketing-spend" className="text-base font-medium">
                    Monthly Marketing Spend
                  </Label>
                  <Input
                    id="marketing-spend"
                    type="number"
                    placeholder="e.g., 5000"
                    value={currentMarketingSpend}
                    onChange={(e) => setCurrentMarketingSpend(e.target.value)}
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label className="text-base font-medium">
                    Hours/Week on Manual Tasks: {hoursPerWeek[0]} hours
                  </Label>
                  <Slider
                    value={hoursPerWeek}
                    onValueChange={setHoursPerWeek}
                    max={80}
                    min={5}
                    step={5}
                    className="mt-3"
                  />
                  <div className="flex justify-between text-sm text-gray-500 mt-1">
                    <span>5hrs</span>
                    <span>80hrs</span>
                  </div>
                </div>

                <Button
                  onClick={calculateROI}
                  disabled={!businessType || !currentMarketingSpend}
                  className="w-full bg-green-600 hover:bg-green-700 text-lg py-3"
                >
                  Calculate My ROI
                </Button>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {results ? (
              <Card className="shadow-xl border-0">
                <CardHeader className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                  <CardTitle className="text-2xl flex items-center">
                    <DollarSign className="h-6 w-6 mr-2" />
                    Your ROI Projection
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="grid grid-cols-2 gap-6 mb-6">
                    <div className="text-center p-4 bg-green-50 rounded-lg">
                      <div className="text-3xl font-bold text-green-600">
                        {Math.round(results.roi)}%
                      </div>
                      <div className="text-sm text-gray-600">Annual ROI</div>
                    </div>
                    <div className="text-center p-4 bg-blue-50 rounded-lg">
                      <div className="text-3xl font-bold text-blue-600">
                        {results.paybackPeriod.toFixed(1)}
                      </div>
                      <div className="text-sm text-gray-600">Months to Payback</div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center">
                        <Clock className="h-5 w-5 text-orange-500 mr-3" />
                        <div>
                          <div className="font-medium">Time Savings</div>
                          <div className="text-sm text-gray-500">
                            {formatNumber(results.timeSaved)} hours/year
                          </div>
                        </div>
                      </div>
                      <Badge className="bg-orange-100 text-orange-800">
                        70% reduction
                      </Badge>
                    </div>

                    <div className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center">
                        <Users className="h-5 w-5 text-blue-500 mr-3" />
                        <div>
                          <div className="font-medium">Lead Increase</div>
                          <div className="text-sm text-gray-500">
                            {results.leadIncrease.toFixed(1)}% more qualified leads
                          </div>
                        </div>
                      </div>
                      <Badge className="bg-blue-100 text-blue-800">
                        AI-powered
                      </Badge>
                    </div>

                    <div className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center">
                        <Target className="h-5 w-5 text-purple-500 mr-3" />
                        <div>
                          <div className="font-medium">Conversion Rate</div>
                          <div className="text-sm text-gray-500">
                            {results.conversionImprovement.toFixed(1)}% improvement
                          </div>
                        </div>
                      </div>
                      <Badge className="bg-purple-100 text-purple-800">
                        Optimized
                      </Badge>
                    </div>
                  </div>

                  <div className="mt-6 p-6 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-gray-800 mb-2">
                        Total Annual Savings
                      </div>
                      <div className="text-4xl font-bold text-green-600 mb-4">
                        {formatCurrency(results.annualSavings)}
                      </div>
                      <Button className="bg-green-600 hover:bg-green-700 px-8 py-3">
                        Get Your Custom Plan
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ) : (
              <Card className="shadow-xl border-0 h-full flex items-center justify-center">
                <CardContent className="text-center p-8">
                  <Calculator className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-600 mb-2">
                    Ready to Calculate Your ROI?
                  </h3>
                  <p className="text-gray-500">
                    Fill out the form on the left to see your potential savings and return on investment.
                  </p>
                </CardContent>
              </Card>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}