import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Calendar, Clock, User, Mail, Phone, MessageSquare, CheckCircle, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { insertAppointmentSchema } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";
import { z } from "zod";

const bookingFormSchema = insertAppointmentSchema.extend({
  name: z.string().min(2, "Please enter your full name"),
  email: z.string().email("Please enter a valid email address"),
  businessType: z.string().min(2, "Please tell us what type of business you run"),
  service: z.string().min(1, "Please select the service you need"),
  preferredDate: z.string().min(1, "Please select a preferred date"),
  preferredTime: z.string().min(1, "Please select a preferred time"),
  timezone: z.string().min(1, "Please select your timezone"),
});

type BookingFormValues = z.infer<typeof bookingFormSchema>;

const consultationTypes = [
  {
    name: "Free AI Strategy Call",
    duration: "15 minutes",
    description: "Quick assessment of your AI automation opportunities",
    icon: "zap",
    popular: true
  },
  {
    name: "Website Audit & Consultation",
    duration: "30 minutes", 
    description: "Comprehensive review of your current website and improvement recommendations",
    icon: "computer"
  },
  {
    name: "Business Growth Planning",
    duration: "45 minutes",
    description: "Strategic planning session for scaling your business with digital solutions",
    icon: "trending-up"
  },
  {
    name: "Technical Implementation Call",
    duration: "60 minutes",
    description: "Detailed technical discussion for complex integrations and custom solutions",
    icon: "settings"
  }
];

const services = [
  "AI Phone Receptionist",
  "AI Appointment Booking System",
  "Missed-Call Text Back",
  "Client Follow-Up & Reactivation",
  "AI Web Chat Assistant",
  "AI Review Generation",
  "AI Workflow Automation",
  "Custom Website Design",
  "E-Commerce Website",
  "Landing Page Design",
  "Local SEO",
  "Google & Meta Ads",
  "Social Media Management",
  "Email & SMS Marketing",
  "Reputation Management",
  "Full AI + Marketing Package",
  "Not Sure — Need Advice",
];

const timeSlots = [
  "9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM",
  "12:00 PM", "12:30 PM", "1:00 PM", "1:30 PM", "2:00 PM", "2:30 PM",
  "3:00 PM", "3:30 PM", "4:00 PM", "4:30 PM", "5:00 PM"
];

const timezones = [
  "EST (Eastern Standard Time)",
  "CST (Central Standard Time)", 
  "MST (Mountain Standard Time)",
  "PST (Pacific Standard Time)",
  "UTC (Coordinated Universal Time)"
];

export default function BookingSection() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const form = useForm<BookingFormValues>({
    resolver: zodResolver(bookingFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      businessType: "",
      service: "",
      preferredDate: "",
      preferredTime: "",
      timezone: "",
      message: "",
    },
  });

  const mutation = useMutation({
    mutationFn: async (data: BookingFormValues) => {
      const response = await fetch("/api/appointments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      
      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || "Failed to book appointment");
      }
      
      return response.json();
    },
    onSuccess: () => {
      setIsSubmitted(true);
      form.reset();
      toast({
        title: "Appointment Booked Successfully!",
        description: "We'll contact you soon to confirm your consultation time.",
      });
      queryClient.invalidateQueries({ queryKey: ["/api/admin/appointments"] });
    },
    onError: (error: any) => {
      toast({
        title: "Booking Failed",
        description: error.message || "Please try again or contact us directly.",
        variant: "destructive",
      });
    },
  });

  function onSubmit(data: BookingFormValues) {
    mutation.mutate(data);
  }

  // Get today's date for min date input
  const today = new Date().toISOString().split('T')[0];

  if (isSubmitted) {
    return (
      <section id="booking" className="py-12 sm:py-16 md:py-20 bg-ivoire-navy-deep">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            className="max-w-2xl mx-auto text-center text-white px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <CheckCircle className="h-12 w-12 sm:h-16 sm:w-16 mx-auto mb-4 sm:mb-6 text-green-400" />
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-poppins font-bold mb-4">
              Appointment Booked Successfully!
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-white/90 mb-6 sm:mb-8 leading-relaxed">
              Thank you for scheduling a consultation with us. We'll contact you within 24 hours to confirm your appointment details and send you a calendar invite.
            </p>
            <Button 
              onClick={() => setIsSubmitted(false)}
              variant="outline"
              className="bg-white text-[#14532d] border-white hover:bg-gray-50 px-6 py-3"
            >
              Book Another Appointment
            </Button>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="booking" className="py-12 sm:py-16 md:py-20 navy-grid">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div 
          className="text-center mb-8 sm:mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-poppins font-bold text-white mb-4">
            Book Your Free Consultation
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-white/90 max-w-2xl mx-auto px-4">
            Schedule a 30-minute consultation to discuss how AI and digital marketing can transform your business. No commitment required.
          </p>
        </motion.div>

        {/* Quick Book with Calendly */}
        <motion.div 
          className="max-w-2xl mx-auto mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="text-center mb-4">
              <h3 className="text-xl font-semibold text-white mb-2">Quick Booking</h3>
              <p className="text-white/80 text-sm">Schedule instantly with our calendar</p>
            </div>
            <div className="space-y-3">
              <Button 
                onClick={() => window.open('https://calendly.com/koneyassine49/fitness-consultation', '_blank')}
                className="w-full bg-[#b07d2a] hover:bg-[#b07d2a]/90 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <Calendar className="h-5 w-5 mr-2" />
                Book Now - Free 30 Min Consultation
              </Button>
              <p className="text-white/70 text-xs text-center">
                Choose your preferred time slot and get instant confirmation
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div 
          className="text-center mb-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="flex items-center justify-center space-x-4 text-white/60">
            <div className="h-px bg-white/20 flex-1"></div>
            <span className="text-sm">or fill out the form below</span>
            <div className="h-px bg-white/20 flex-1"></div>
          </div>
        </motion.div>

        <motion.div 
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="bg-white rounded-2xl shadow-2xl p-4 sm:p-6 md:p-8 lg:p-12">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 sm:space-y-6">
                <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                  {/* Personal Information */}
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="flex items-center text-gray-700 font-medium">
                          <User className="h-4 w-4 mr-2" />
                          Full Name *
                        </FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Enter your full name" 
                            {...field} 
                            className="border-gray-300 focus:border-[#14532d]"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="flex items-center text-gray-700 font-medium">
                          <Mail className="h-4 w-4 mr-2" />
                          Email Address *
                        </FormLabel>
                        <FormControl>
                          <Input 
                            type="email" 
                            placeholder="Enter your email address" 
                            {...field} 
                            className="border-gray-300 focus:border-[#14532d]"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="flex items-center text-gray-700 font-medium">
                          <Phone className="h-4 w-4 mr-2" />
                          Phone Number
                        </FormLabel>
                        <FormControl>
                          <Input 
                            type="tel" 
                            placeholder="(555) 123-4567" 
                            onChange={field.onChange}
                            onBlur={field.onBlur}
                            value={field.value || ""}
                            name={field.name}
                            className="border-gray-300 focus:border-[#14532d]"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="businessType"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="flex items-center text-gray-700 font-medium">
                          <Briefcase className="h-4 w-4 mr-2" />
                          Type of Business *
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="e.g. Dental clinic, restaurant, law firm"
                            {...field}
                            className="border-gray-300 focus:border-[#14532d]"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="service"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="flex items-center text-gray-700 font-medium">
                          <MessageSquare className="h-4 w-4 mr-2" />
                          Service Interest *
                        </FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="border-gray-300 focus:border-[#14532d]">
                              <SelectValue placeholder="Select a service" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {services.map((service) => (
                              <SelectItem key={service} value={service}>
                                {service}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                {/* Scheduling Information */}
                <div className="border-t border-gray-200 pt-4 sm:pt-6">
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-3 sm:mb-4">Preferred Schedule</h3>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
                    <FormField
                      control={form.control}
                      name="preferredDate"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="flex items-center text-gray-700 font-medium">
                            <Calendar className="h-4 w-4 mr-2" />
                            Preferred Date *
                          </FormLabel>
                          <FormControl>
                            <Input 
                              type="date" 
                              min={today}
                              {...field} 
                              className="border-gray-300 focus:border-[#14532d]"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="preferredTime"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="flex items-center text-gray-700 font-medium">
                            <Clock className="h-4 w-4 mr-2" />
                            Preferred Time *
                          </FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger className="border-gray-300 focus:border-[#14532d]">
                                <SelectValue placeholder="Select time" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {timeSlots.map((time) => (
                                <SelectItem key={time} value={time}>
                                  {time}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="timezone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="flex items-center text-gray-700 font-medium">
                            <Clock className="h-4 w-4 mr-2" />
                            Timezone *
                          </FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger className="border-gray-300 focus:border-[#14532d]">
                                <SelectValue placeholder="Select timezone" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {timezones.map((timezone) => (
                                <SelectItem key={timezone} value={timezone}>
                                  {timezone}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>

                {/* Additional Information */}
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-700 font-medium">
                        Additional Information (Optional)
                      </FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Tell us about your business, current challenges, or specific questions you'd like to discuss during the consultation..."
                          className="min-h-[120px] border-gray-300 focus:border-[#14532d]"
                          onChange={field.onChange}
                          onBlur={field.onBlur}
                          value={field.value || ""}
                          name={field.name}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="pt-4 sm:pt-6 border-t border-gray-200">
                  <Button 
                    type="submit" 
                    className="w-full btn-gold py-3 sm:py-4 text-base sm:text-lg"
                    disabled={mutation.isPending}
                  >
                    {mutation.isPending ? "Booking Your Appointment..." : "Book Free Consultation"}
                  </Button>
                  
                  <p className="text-xs sm:text-sm text-gray-600 text-center mt-3 sm:mt-4 px-2">
                    By booking this consultation, you agree to our terms of service. 
                    We'll contact you within 24 hours to confirm your appointment.
                  </p>
                </div>
              </form>
            </Form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}