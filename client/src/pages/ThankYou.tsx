import { useEffect } from "react";
import { Link } from "wouter";
import {
  CheckCircle,
  Phone,
  ArrowLeft,
  Globe,
  Bot,
  MessageSquareText,
  Star,
  TrendingUp,
  MapPin,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const BUSINESS_PHONE = "972-236-4451";

const benefits = [
  {
    icon: Globe,
    title: "A Website That Sells For You",
    desc: "A modern, mobile-friendly website built to turn visitors into paying customers — not just look pretty.",
  },
  {
    icon: Bot,
    title: "AI Chatbot Working 24/7",
    desc: "Answers questions, captures leads, and books appointments even while you sleep.",
  },
  {
    icon: MessageSquareText,
    title: "Missed Call Text Back",
    desc: "Can't pick up? We instantly text the caller so you never lose a lead to a missed call again.",
  },
  {
    icon: Star,
    title: "Automated Review Generation",
    desc: "We ask every happy customer for a review automatically — so your 5-star reputation grows on autopilot.",
  },
  {
    icon: MapPin,
    title: "Rank On Google Locally",
    desc: "Local SEO that puts your business in front of people searching in your area right now.",
  },
  {
    icon: TrendingUp,
    title: "More Leads, All Automated",
    desc: "Everything works together as one system — more leads, more reviews, more growth, less work for you.",
  },
];

export default function ThankYou() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-ivoire-navy-deep flex flex-col">
      <Header scrolled={true} />
      <main
        className="flex-1 px-4 sm:px-6 pt-28 sm:pt-32 pb-14 sm:pb-20"
        style={{
          background:
            "radial-gradient(120% 90% at 50% 20%, #1a1407 0%, #0c0e16 45%, #0b0d14 100%)",
        }}
      >
        <div className="container mx-auto max-w-4xl">
          {/* Confirmation card */}
          <div className="text-center rounded-2xl border border-ivoire-gold/30 bg-[#11131c]/85 backdrop-blur-sm p-6 sm:p-10 shadow-2xl mb-10 sm:mb-14">
            <CheckCircle className="h-14 w-14 sm:h-16 sm:w-16 mx-auto mb-5 text-green-400" />
            <h1 className="text-white font-display font-bold text-2xl sm:text-3xl mb-3">
              Thank You!
            </h1>
            <p className="text-white/70 text-sm sm:text-base mb-6 max-w-md mx-auto">
              We received your request. A member of our team will call you
              shortly to schedule your free consultation.
            </p>
            <p className="text-ivoire-gold font-semibold text-sm sm:text-base mb-5">
              Don't want to wait? Call us right now:
            </p>
            <a
              href={`tel:${BUSINESS_PHONE.replace(/[^+\d]/g, "")}`}
              className="btn-gold rounded-lg px-6 sm:px-8 py-3.5 text-base font-bold flex w-full sm:w-auto sm:inline-flex items-center justify-center gap-2 sm:mx-auto sm:max-w-max whitespace-nowrap"
            >
              <Phone className="w-4 h-4" />
              Call Us Now {BUSINESS_PHONE}
            </a>
          </div>

          {/* Benefits */}
          <div className="text-center mb-8 sm:mb-10">
            <h2 className="text-white font-display font-bold text-xl sm:text-3xl mb-3">
              Here's What Your Business{" "}
              <span className="text-ivoire-gold">Is About To Get</span>
            </h2>
            <p className="text-white/60 text-sm sm:text-base max-w-2xl mx-auto">
              On your consultation call, we'll show you exactly how these
              systems work together to grow your business — all automated.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-10 sm:mb-14">
            {benefits.map((b) => (
              <div
                key={b.title}
                className="rounded-xl border border-white/10 bg-white/[0.03] p-5 sm:p-6 text-left hover:border-ivoire-gold/40 transition-colors"
              >
                <span className="w-10 h-10 rounded-lg bg-ivoire-gold/15 border border-ivoire-gold/30 flex items-center justify-center mb-4">
                  <b.icon className="w-5 h-5 text-ivoire-gold" />
                </span>
                <h3 className="text-white font-semibold text-base mb-1.5">
                  {b.title}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-white/60 hover:text-ivoire-gold text-sm font-medium transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
