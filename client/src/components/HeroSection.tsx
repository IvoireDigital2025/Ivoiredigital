import { useLocation } from "wouter";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import {
  Star,
  ArrowRight,
  BrainCircuit,
  TrendingUp,
  BarChart3,
  Target,
  User,
  Mail,
  Phone,
  Briefcase,
  Building2,
  MapPin,
  ClipboardList,
  Flame,
} from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  SiGoogle,
  SiFacebook,
  SiTrustpilot,
  SiOpenai,
  SiMeta,
  SiZapier,
  SiMake,
  SiWordpress,
} from "react-icons/si";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { insertAppointmentSchema } from "@shared/schema";
import { z } from "zod";
import robot from "@assets/generated_images/ivoire_robot_hero.png";
import avatar1 from "@assets/stock_images/team_avatar_1.jpg";
import avatar2 from "@assets/stock_images/team_avatar_2.jpg";
import avatar3 from "@assets/stock_images/team_avatar_3.jpg";
import avatar4 from "@assets/stock_images/team_avatar_4.jpg";
import avatar5 from "@assets/stock_images/team_avatar_5.jpg";

const avatars = [avatar1, avatar2, avatar3, avatar4, avatar5];

const reviewBadges = [
  { icon: SiGoogle, label: "Google", color: "#ffffff" },
  { icon: SiFacebook, label: "Facebook", color: "#1877F2" },
  { icon: SiTrustpilot, label: "Trustpilot", color: "#00B67A" },
];

const partners = [
  { icon: SiOpenai, label: "OpenAI" },
  { icon: SiMeta, label: "Meta" },
  { icon: SiGoogle, label: "Google" },
  { icon: SiZapier, label: "Zapier" },
  { icon: SiMake, label: "Make" },
  { icon: SiWordpress, label: "WordPress" },
];

const statCards = [
  {
    icon: BrainCircuit,
    label: "AI AUTOMATION",
    value: "24/7",
    sub: "Working For You",
    className: "left-0 top-10",
    delay: 0,
  },
  {
    icon: TrendingUp,
    label: "LEAD GENERATION",
    value: "+390%",
    sub: "More Leads",
    className: "right-0 top-2",
    delay: 0.6,
  },
  {
    icon: BarChart3,
    label: "REVENUE GROWTH",
    value: "+250%",
    sub: "Average Increase",
    className: "right-0 top-[46%]",
    delay: 1.1,
  },
  {
    icon: Target,
    label: "CONVERSION RATE",
    value: "+180%",
    sub: "More Sales",
    className: "left-0 bottom-24",
    delay: 1.6,
  },
];

const heroFormSchema = insertAppointmentSchema.extend({
  name: z.string().min(2, "Please enter your full name"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(7, "Please enter your phone number"),
  businessType: z.string().min(2, "Please tell us what type of business you run"),
  businessName: z.string().min(2, "Please enter your business name"),
  location: z.string().min(2, "Please enter your city and state"),
  seriousness: z.string().min(1, "Please let us know how ready you are"),
});

type HeroFormValues = z.infer<typeof heroFormSchema>;

const fieldClass =
  "bg-white/5 border-white/10 text-white placeholder:text-white/35 focus:border-ivoire-gold h-10";
const labelClass =
  "flex items-center gap-1.5 text-white/80 text-xs font-medium";
const iconClass = "h-3.5 w-3.5 text-ivoire-gold";

function Stars() {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className="w-3 h-3 fill-ivoire-gold text-ivoire-gold" />
      ))}
    </div>
  );
}

function GrowthPlanForm() {
  const [, setLocation] = useLocation();
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const form = useForm<HeroFormValues>({
    resolver: zodResolver(heroFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      businessType: "",
      businessName: "",
      location: "",
      seriousness: "",
      message: "",
    },
  });

  const mutation = useMutation({
    mutationFn: async (data: HeroFormValues) => {
      const response = await fetch("/api/appointments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || "Failed to book appointment");
      }
      return response.json();
    },
    onSuccess: () => {
      form.reset();
      queryClient.invalidateQueries({ queryKey: ["/api/admin/appointments"] });
      setLocation("/thank-you");
    },
    onError: (error: any) => {
      toast({
        title: "Booking Failed",
        description: error.message || "Please try again or contact us directly.",
        variant: "destructive",
      });
    },
  });

  return (
    <div
      id="growth-plan"
      className="scroll-mt-28 rounded-2xl border border-ivoire-gold/30 bg-[#11131c]/85 backdrop-blur-sm p-5 sm:p-7 shadow-2xl"
    >
      <>
          <div className="flex items-center gap-2.5 mb-5">
            <span className="w-9 h-9 rounded-lg bg-ivoire-gold/15 border border-ivoire-gold/30 flex items-center justify-center">
              <ClipboardList className="w-4.5 h-4.5 text-ivoire-gold" />
            </span>
            <h2 className="text-white font-display font-bold text-base sm:text-lg tracking-wide">
              SCHEDULE A <span className="text-ivoire-gold">FREE CONSULTATION</span>
            </h2>
          </div>

          <Form {...form}>
            <form
              onSubmit={form.handleSubmit((data) => mutation.mutate(data))}
              className="space-y-4"
            >
              <div className="grid sm:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className={labelClass}>
                        <User className={iconClass} /> Full Name *
                      </FormLabel>
                      <FormControl>
                        <Input placeholder="Enter your full name" {...field} className={fieldClass} />
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
                      <FormLabel className={labelClass}>
                        <Mail className={iconClass} /> Email Address *
                      </FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="Enter your email address" {...field} className={fieldClass} />
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
                      <FormLabel className={labelClass}>
                        <Phone className={iconClass} /> Phone Number *
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="tel"
                          placeholder="(555) 123-4567"
                          onChange={field.onChange}
                          onBlur={field.onBlur}
                          value={field.value || ""}
                          name={field.name}
                          className={fieldClass}
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
                      <FormLabel className={labelClass}>
                        <Briefcase className={iconClass} /> Type of Business *
                      </FormLabel>
                      <FormControl>
                        <Input placeholder="e.g. Dental clinic, restaurant, law firm" {...field} className={fieldClass} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="businessName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className={labelClass}>
                        <Building2 className={iconClass} /> Business Name *
                      </FormLabel>
                      <FormControl>
                        <Input placeholder="Enter your business name" {...field} className={fieldClass} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="location"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className={labelClass}>
                        <MapPin className={iconClass} /> Location *
                      </FormLabel>
                      <FormControl>
                        <Input placeholder="City, State (e.g. Dallas, TX)" {...field} className={fieldClass} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="seriousness"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className={labelClass}>
                      <Flame className={iconClass} /> How Ready Are You To Get
                      Started? *
                    </FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      value={field.value || ""}
                    >
                      <FormControl>
                        <SelectTrigger className={fieldClass}>
                          <SelectValue placeholder="Select one" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent className="bg-[#161926] border-white/10 text-white max-w-[calc(100vw-2rem)] [&_*]:whitespace-normal">
                        <SelectItem value="I'm ready to start right away">
                          I'm ready to start right away
                        </SelectItem>
                        <SelectItem value="Very serious — I want to start within 30 days">
                          Very serious — I want to start within 30 days
                        </SelectItem>
                        <SelectItem value="Serious — I just have a few questions first">
                          Serious — I just have a few questions first
                        </SelectItem>
                        <SelectItem value="I want to grow, help me choose the right plan">
                          I want to grow, help me choose the right plan
                        </SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className={labelClass}>
                      Additional Information (Optional)
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Tell us about your business, current challenges, or specific questions you'd like to discuss during the consultation..."
                        className="min-h-[80px] bg-white/5 border-white/10 text-white placeholder:text-white/35 focus:border-ivoire-gold"
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

              <Button
                type="submit"
                className="w-full btn-gold py-3.5 text-base font-bold inline-flex items-center justify-center gap-2"
                disabled={mutation.isPending}
              >
                {mutation.isPending ? "Submitting..." : "Submit"}
                {!mutation.isPending && <ArrowRight className="w-4 h-4" />}
              </Button>
            </form>
          </Form>
        </>
    </div>
  );
}

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative overflow-hidden pt-28 sm:pt-32 pb-10 sm:pb-14"
      style={{
        background:
          "radial-gradient(120% 90% at 75% 30%, #1a1407 0%, #0c0e16 45%, #0b0d14 100%)",
      }}
    >
      {/* ambient gold glow */}
      <div className="absolute top-1/4 right-[8%] w-[520px] h-[520px] rounded-full bg-ivoire-gold/15 blur-[130px] pointer-events-none" />
      {/* fade into navy site */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-ivoire-navy-deep pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 relative">
        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-10 lg:gap-12 items-start">
          {/* Left: Text + Form */}
          <motion.div
            className="flex flex-col"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="w-10 h-[3px] bg-ivoire-gold rounded-full" />
              <span className="text-ivoire-gold font-semibold tracking-[0.18em] text-xs sm:text-sm">
                AI POWERED. RESULTS DRIVEN.
              </span>
            </div>

            <h1 className="font-display font-extrabold text-white leading-[1.08] text-3xl sm:text-4xl md:text-5xl">
              AI &amp; Marketing Systems For{" "}
              <span className="text-ivoire-gold">Growing Businesses</span>
            </h1>

            <p className="order-3 lg:order-none mt-5 lg:mt-4 text-sm sm:text-base text-white/70 max-w-xl leading-relaxed">
              Cut the fluff. Growth isn't rocket science. We build your website,
              run your social media, create your content, and set up the AI
              automation to{" "}
              <span className="text-ivoire-gold font-semibold">
                win more customers
              </span>{" "}
              — you just have to commit to using them.
            </p>

            <div className="order-2 lg:order-none mt-5 lg:mt-7">
              <GrowthPlanForm />
            </div>
          </motion.div>

          {/* Right: Robot + glow + stat cards */}
          <motion.div
            className="relative mx-auto w-full max-w-[17rem] sm:max-w-md lg:max-w-lg lg:sticky lg:top-28"
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative aspect-[4/5] flex items-end justify-center">
              {/* concentric glow rings */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="absolute w-[78%] aspect-square rounded-full border border-ivoire-gold/25" />
                <div className="absolute w-[60%] aspect-square rounded-full border border-ivoire-gold/20" />
                <div className="absolute w-[44%] aspect-square rounded-full bg-ivoire-gold/20 blur-3xl" />
              </div>

              {/* podium */}
              <div className="absolute bottom-[6%] left-1/2 -translate-x-1/2 w-[68%] h-6 rounded-[100%] bg-ivoire-gold/30 blur-md" />
              <div className="absolute bottom-[7%] left-1/2 -translate-x-1/2 w-[60%] h-3 rounded-[100%] border border-ivoire-gold/40" />

              <motion.img
                src={robot}
                alt="Ivoire Digital AI mascot"
                className="relative z-10 w-[82%] h-auto object-contain drop-shadow-[0_20px_40px_rgba(240,168,50,0.25)]"
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              />

              {/* floating stat cards (desktop) */}
              {statCards.map((c) => (
                <motion.div
                  key={c.label}
                  className={`hidden lg:flex absolute z-20 ${c.className} flex-col gap-1 rounded-xl border border-ivoire-gold/30 bg-[#11131c]/90 px-4 py-3 backdrop-blur-sm shadow-xl`}
                  animate={{ y: [0, -8, 0] }}
                  transition={{
                    duration: 4.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: c.delay,
                  }}
                >
                  <div className="flex items-center gap-1.5 text-white/65 text-[10px] font-semibold tracking-wide">
                    <c.icon className="w-3.5 h-3.5 text-ivoire-gold" />
                    {c.label}
                  </div>
                  <div className="text-ivoire-gold font-display font-extrabold text-xl leading-none">
                    {c.value}
                  </div>
                  <div className="text-white/60 text-[11px]">{c.sub}</div>
                </motion.div>
              ))}
            </div>

            {/* stat chips (mobile) */}
            <div className="grid grid-cols-2 gap-3 mt-6 lg:hidden">
              {statCards.map((c) => (
                <div
                  key={c.label}
                  className="flex flex-col gap-1 rounded-xl border border-ivoire-gold/30 bg-[#11131c]/90 px-4 py-3"
                >
                  <div className="flex items-center gap-1.5 text-white/65 text-[10px] font-semibold tracking-wide">
                    <c.icon className="w-3.5 h-3.5 text-ivoire-gold" />
                    {c.label}
                  </div>
                  <div className="text-ivoire-gold font-display font-extrabold text-xl leading-none">
                    {c.value}
                  </div>
                  <div className="text-white/60 text-[11px]">{c.sub}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Reviews + avatars strip */}
        <div className="mt-7 sm:mt-12 flex flex-col lg:flex-row items-center gap-5 lg:gap-8">
          <div className="inline-flex flex-row flex-wrap items-center justify-center gap-x-4 sm:gap-x-8 gap-y-3 rounded-xl border border-white/10 bg-white/[0.03] px-4 sm:px-6 py-3 sm:py-4 backdrop-blur-sm">
            {reviewBadges.map((b, i) => (
              <div key={b.label} className="flex items-center gap-1.5 sm:gap-2.5">
                {i > 0 && (
                  <span className="block h-8 w-px bg-white/10 -ml-2 mr-1 sm:-ml-5 sm:mr-3" />
                )}
                <b.icon className="w-5 h-5 sm:w-6 sm:h-6 shrink-0" style={{ color: b.color }} />
                <div className="text-left">
                  <div className="text-white text-xs sm:text-sm font-semibold leading-none">
                    {b.label} <span className="text-white/60 font-normal">5.0</span>
                  </div>
                  <div className="mt-1.5">
                    <Stars />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <div className="flex -space-x-3">
              {avatars.map((a, i) => (
                <img
                  key={i}
                  src={a}
                  alt="Happy client"
                  className="w-10 h-10 rounded-full border-2 border-[#0b0d14] object-cover"
                />
              ))}
            </div>
            <div className="text-left">
              <div className="text-white/50 text-[11px] font-semibold tracking-wide">
                JOIN 200+ BUSINESSES
              </div>
              <div className="text-ivoire-gold text-[11px] font-semibold tracking-wide">
                GROWING FASTER WITH AI
              </div>
            </div>
          </div>
        </div>

        {/* WE WORK WITH strip */}
        <div className="mt-7 sm:mt-12 border-t border-white/10 pt-6 sm:pt-7">
          <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-10">
            <span className="text-ivoire-gold text-xs font-semibold tracking-[0.18em] shrink-0">
              WE WORK WITH
            </span>
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 lg:gap-x-12">
              {partners.map((p) => (
                <div
                  key={p.label}
                  className="flex items-center gap-2 text-white/45 hover:text-white/80 transition-colors"
                >
                  <p.icon className="w-6 h-6" />
                  <span className="font-semibold text-sm">{p.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
