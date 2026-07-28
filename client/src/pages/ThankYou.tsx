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
  Smartphone,
  MapPin,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { trackLeadOnceOnThankYou } from "@/lib/tracking";

const BUSINESS_PHONE = "972-236-4451";

const testimonials = [
  {
    quote:
      "I'm getting organic leads now that don't cost me any money. I would recommend them to anyone!",
    name: "Scott W.",
    role: "Contractor",
  },
  {
    quote:
      "They built me a new website and within 10 days I got my first lead I didn't pay for. Best money I've spent.",
    name: "Armando G.",
    role: "Local Retailer",
  },
  {
    quote:
      "If you are looking for someone to get that phone ringing, they're the right fit for you! I'm so happy with them!",
    name: "Cody R.",
    role: "Service Business Owner",
  },
  {
    quote:
      "Ever since they implemented the new website and landing pages our conversions went way up. We started getting calls almost immediately.",
    name: "Manny D.",
    role: "Real Estate Agent",
  },
  {
    quote:
      "Getting 5-star reviews always gave me anxiety. Their system took that away and I've seen a significant increase in business.",
    name: "Wendy L.",
    role: "Salon Owner",
  },
  {
    quote:
      "After going through 2-3 other agencies I finally found someone that told me the truth. Easy to work with and very respectable.",
    name: "James T.",
    role: "Clinic Owner",
  },
];

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
    icon: Smartphone,
    title: "Manage Leads From Our Mobile App",
    desc: "Every lead lands in one simple mobile app — see them, text them, and follow up from your phone, anywhere. All automated: more leads, more reviews, more growth.",
  },
];

export default function ThankYou() {
  useEffect(() => {
    window.scrollTo(0, 0);
    trackLeadOnceOnThankYou();
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

          {/* Services demo video */}
          <div className="mb-10 sm:mb-14 text-center">
            <h2 className="text-white font-display font-bold text-xl sm:text-3xl mb-3">
              Watch How Our System{" "}
              <span className="text-ivoire-gold">Works For You</span>
            </h2>
            <p className="text-white/60 text-sm sm:text-base max-w-2xl mx-auto mb-6">
              This example features a painting business — but the exact same
              system works for all contractors and small businesses.
            </p>
            <div className="rounded-2xl border border-ivoire-gold/30 overflow-hidden shadow-2xl bg-black">
              <video
                src="/videos/services-demo.mp4"
                autoPlay
                muted
                playsInline
                controls
                className="w-full h-auto"
              />
            </div>
            <p className="text-white/45 text-xs sm:text-sm mt-3">
              Tap the speaker icon to turn on sound.
            </p>
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
            <p className="mt-4 inline-flex items-center gap-2 rounded-xl sm:rounded-full border border-ivoire-gold/40 bg-ivoire-gold/10 px-4 sm:px-5 py-2 text-ivoire-gold font-semibold text-sm sm:text-base max-w-full">
              All these features + access to our mobile app — for one very low
              price
            </p>
          </div>

          {/* Service visuals */}
          <div className="grid sm:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-10">
            {[
              {
                src: "/images/service-website.jpg",
                alt: "Modern website design on laptop and phone",
                label: "High-Converting Websites",
              },
              {
                src: "/images/service-ai-chat.jpg",
                alt: "AI chatbot answering customers on a smartphone",
                label: "AI That Talks To Customers",
              },
              {
                src: "/images/service-reviews.jpg",
                alt: "Five-star reviews and business growth chart",
                label: "5-Star Reviews On Autopilot",
              },
            ].map((v) => (
              <div
                key={v.label}
                className="rounded-xl border border-white/10 overflow-hidden bg-[#11131c]/85 hover:border-ivoire-gold/40 transition-colors"
              >
                <img
                  src={v.src}
                  alt={v.alt}
                  loading="lazy"
                  className="w-full aspect-video object-cover"
                />
                <div className="px-4 py-3 text-center text-white font-semibold text-sm">
                  {v.label}
                </div>
              </div>
            ))}
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

          {/* Results stats */}
          <div className="rounded-2xl border border-ivoire-gold/25 bg-[#11131c]/85 p-6 sm:p-8 mb-10 sm:mb-14">
            <h2 className="text-white font-display font-bold text-lg sm:text-2xl text-center mb-6">
              Real Results Our Clients{" "}
              <span className="text-ivoire-gold">Are Getting</span>
            </h2>
            <div className="grid grid-cols-2 gap-3 sm:gap-6 text-center">
              <div>
                <div className="text-ivoire-gold font-display font-bold text-2xl sm:text-4xl">
                  +250%
                </div>
                <div className="text-white/60 text-xs sm:text-sm mt-1">
                  Revenue Growth
                </div>
              </div>
              <div>
                <div className="text-ivoire-gold font-display font-bold text-2xl sm:text-4xl">
                  24/7
                </div>
                <div className="text-white/60 text-xs sm:text-sm mt-1">
                  AI Working For You
                </div>
              </div>
            </div>
          </div>

          {/* Testimonials */}
          <div className="mb-10 sm:mb-14">
            <h2 className="text-white font-display font-bold text-lg sm:text-2xl text-center mb-2">
              Business Owners <span className="text-ivoire-gold">Like You</span>{" "}
              Are Saying
            </h2>
            <div className="flex items-center justify-center gap-1.5 mb-6 sm:mb-8">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-4 h-4 sm:w-5 sm:h-5 text-ivoire-gold fill-ivoire-gold"
                />
              ))}
              <span className="text-white/60 text-xs sm:text-sm ml-2">
                Rated 5.0 by local business owners
              </span>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {testimonials.map((t) => (
                <div
                  key={t.name}
                  className="rounded-xl border border-white/10 bg-white/[0.03] p-5 sm:p-6 flex flex-col hover:border-ivoire-gold/40 transition-colors"
                >
                  <div className="flex gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-3.5 h-3.5 text-ivoire-gold fill-ivoire-gold"
                      />
                    ))}
                  </div>
                  <p className="text-white/75 text-sm leading-relaxed flex-1">
                    "{t.quote}"
                  </p>
                  <div className="mt-4 pt-4 border-t border-white/10">
                    <div className="text-white font-semibold text-sm">
                      {t.name}
                    </div>
                    <div className="text-ivoire-gold/80 text-xs">{t.role}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* What happens next */}
          <div className="mb-10 sm:mb-14">
            <h2 className="text-white font-display font-bold text-lg sm:text-2xl text-center mb-6 sm:mb-8">
              What Happens <span className="text-ivoire-gold">Next?</span>
            </h2>
            <div className="grid sm:grid-cols-3 gap-4 sm:gap-6">
              {[
                {
                  step: "1",
                  title: "We Call You",
                  desc: "A member of our team calls you to schedule your free consultation at a time that works for you.",
                },
                {
                  step: "2",
                  title: "Free Strategy Session",
                  desc: "We look at your business together and show you exactly where you're losing leads — and how to fix it.",
                },
                {
                  step: "3",
                  title: "Your System Goes Live",
                  desc: "If it's a fit, we build and launch everything for you. Most clients are up and running fast.",
                },
              ].map((s) => (
                <div
                  key={s.step}
                  className="rounded-xl border border-white/10 bg-white/[0.03] p-5 sm:p-6 text-left"
                >
                  <span className="w-9 h-9 rounded-full bg-ivoire-gold text-[#0b0d14] font-bold flex items-center justify-center mb-4">
                    {s.step}
                  </span>
                  <h3 className="text-white font-semibold text-base mb-1.5">
                    {s.title}
                  </h3>
                  <p className="text-white/60 text-sm leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Reassurance + final CTA */}
          <div className="text-center rounded-2xl border border-ivoire-gold/30 bg-ivoire-gold/[0.06] p-6 sm:p-10 mb-10">
            <h2 className="text-white font-display font-bold text-lg sm:text-2xl mb-3">
              No Pressure. <span className="text-ivoire-gold">Just Results.</span>
            </h2>
            <p className="text-white/70 text-sm sm:text-base max-w-xl mx-auto mb-6">
              The consultation is 100% free and there's zero obligation. Our
              plans are built to be affordable for small businesses — worst
              case, you walk away with a clear plan to get more customers.
            </p>
            <a
              href={`tel:${BUSINESS_PHONE.replace(/[^+\d]/g, "")}`}
              className="btn-gold rounded-lg px-6 sm:px-8 py-3.5 text-base font-bold flex w-full sm:w-auto sm:inline-flex items-center justify-center gap-2 sm:mx-auto sm:max-w-max whitespace-nowrap"
            >
              <Phone className="w-4 h-4" />
              Call Us Now {BUSINESS_PHONE}
            </a>
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
