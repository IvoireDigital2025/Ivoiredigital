import { motion } from "framer-motion";
import { goToBooking } from "@/lib/utils";
import {
  PhoneCall,
  Globe,
  Star,
  MessageSquareText,
  Megaphone,
  Search,
  CheckCircle2,
} from "lucide-react";

type Feature = {
  id: string;
  icon: typeof PhoneCall;
  title: string;
  intro: string;
  points: { title: string; desc: string }[];
  mockup: "ai" | "website" | "reviews" | "missed" | "campaigns" | "seo";
};

const features: Feature[] = [
  {
    id: "ai-receptionist",
    icon: PhoneCall,
    title: "AI Receptionist",
    intro:
      "An AI that answers every call and chat 24/7, books appointments, and sends the details straight to your phone.",
    points: [
      { title: "Never Miss a Lead Again", desc: "Your AI answers instantly, day or night, even when you're busy." },
      { title: "Books Appointments For You", desc: "It checks your calendar and schedules clients automatically." },
      { title: "Sounds Human, Works Tirelessly", desc: "Natural conversations that make customers feel taken care of." },
    ],
    mockup: "ai",
  },
  {
    id: "functional-website",
    icon: Globe,
    title: "Functional Website",
    intro:
      "Get a website that instantly turns visitors into text conversations that go DIRECTLY to your phone.",
    points: [
      { title: "Actually Get Found Online", desc: "If a customer googles you and can't find you, that's awkward. We won't let that happen." },
      { title: "Showcase Your Best Reviews", desc: "We put your 5-star reviews front and center where they convert." },
      { title: "Mobile Friendly", desc: "87% of people visit on their phone. We make sure you look great on mobile." },
    ],
    mockup: "website",
  },
  {
    id: "review-funnel",
    icon: Star,
    title: "5-Star Review Funnel",
    intro:
      "\"Sure, I'll leave you a review\" — but people forget. We'll gently remind them until they remember.",
    points: [
      { title: "5-Star Reviews Only", desc: "Our smart funnel guides happy customers straight to a public review." },
      { title: "Automatic Follow-Up Reminders", desc: "We nudge customers for a few weeks until they actually leave it." },
      { title: "Ask In One Click", desc: "Request a review with a single tap — we keep it simple." },
    ],
    mockup: "reviews",
  },
  {
    id: "missed-call",
    icon: MessageSquareText,
    title: "Missed Call Text Back",
    intro:
      "Everyone misses calls, but not everyone texts back. Be the one who does and outshine your competition.",
    points: [
      { title: "No More Lost Leads", desc: "Can't answer? We fire off a text and start the conversation for you." },
      { title: "Show Customers You Care", desc: "A quick text tells them they matter — even when you're slammed." },
      { title: "Available 24/7", desc: "After-hours calls still get a reply, even while you sleep." },
    ],
    mockup: "missed",
  },
  {
    id: "campaigns",
    icon: Megaphone,
    title: "One-Click Marketing Campaigns",
    intro:
      "Referrals and repeat customers are the best customers. Let's get you more of both — automatically.",
    points: [
      { title: "Done For You", desc: "Activate pre-built campaigns with a single click. No marketing team needed." },
      { title: "Referral Campaigns", desc: "Remind happy customers to tell their friends about you." },
      { title: "Win-Back Campaigns", desc: "Bring past customers back with timely, special offers." },
    ],
    mockup: "campaigns",
  },
  {
    id: "seo",
    icon: Search,
    title: "Local SEO",
    intro:
      "\"Rank #1 on Google in a week!\" ...just kidding, SEO takes time. But we build you a system that actually lasts.",
    points: [
      { title: "Qualified Leads", desc: "Beats paying $50 for a lead that never picks up the phone." },
      { title: "Stop Paying For Junk Leads", desc: "Quality over quantity — real local customers ready to buy." },
      { title: "Organic Acquisition System", desc: "Create your own free leads instead of renting them forever." },
    ],
    mockup: "seo",
  },
];

function Mockup({ type }: { type: Feature["mockup"] }) {
  const phone = (children: React.ReactNode) => (
    <div className="relative mx-auto w-[230px] sm:w-[260px]">
      <div className="rounded-[2.2rem] bg-ivoire-navy-deep border-[6px] border-[#0e1326] shadow-2xl p-3 gold-glow">
        <div className="rounded-[1.6rem] bg-ivoire-navy overflow-hidden h-[420px] p-4">
          {children}
        </div>
      </div>
    </div>
  );

  const bubble = (text: string, mine = false) => (
    <div className={`max-w-[80%] rounded-2xl px-3 py-2 text-xs leading-snug ${mine ? "ml-auto bg-ivoire-gold text-ivoire-navy" : "bg-white/10 text-white/90"}`}>
      {text}
    </div>
  );

  switch (type) {
    case "ai":
      return phone(
        <div className="flex flex-col h-full">
          <div className="flex items-center gap-2 pb-3 border-b border-white/10">
            <div className="w-8 h-8 rounded-full bg-ivoire-gold/20 flex items-center justify-center">
              <PhoneCall className="w-4 h-4 text-ivoire-gold" />
            </div>
            <div>
              <div className="text-white text-xs font-semibold">AI Receptionist</div>
              <div className="text-green-400 text-[10px]">● Online 24/7</div>
            </div>
          </div>
          <div className="flex-1 space-y-2 py-3">
            {bubble("Hi! Thanks for calling Ivoire. How can I help?")}
            {bubble("I'd like to book an appointment", true)}
            {bubble("Great! I have Tue 2pm or Wed 10am open. Which works?")}
            {bubble("Tuesday at 2 please", true)}
            {bubble("Booked! ✅ You'll get a text confirmation now.")}
          </div>
        </div>
      );
    case "website":
      return phone(
        <div className="flex flex-col h-full">
          <div className="h-20 rounded-xl bg-gradient-to-br from-ivoire-gold/30 to-ivoire-gold/5 flex items-center justify-center mb-3">
            <div className="text-white font-display font-bold text-sm">YOUR BUSINESS</div>
          </div>
          <div className="space-y-2">
            <div className="h-3 rounded bg-white/15 w-3/4" />
            <div className="h-3 rounded bg-white/10 w-full" />
            <div className="h-3 rounded bg-white/10 w-5/6" />
          </div>
          <div className="mt-3 grid grid-cols-2 gap-2">
            <div className="h-16 rounded-lg bg-white/5" />
            <div className="h-16 rounded-lg bg-white/5" />
          </div>
          <button className="mt-4 w-full rounded-lg bg-ivoire-gold text-ivoire-navy text-xs font-bold py-2.5">
            Get a Free Quote
          </button>
          <div className="mt-3 flex items-center justify-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3 h-3 fill-ivoire-gold text-ivoire-gold" />
            ))}
            <span className="text-white/60 text-[10px] ml-1">4.9 (212)</span>
          </div>
        </div>
      );
    case "reviews":
      return phone(
        <div className="flex flex-col h-full justify-center text-center">
          <div className="mx-auto w-14 h-14 rounded-full bg-ivoire-gold/20 flex items-center justify-center mb-4">
            <Star className="w-7 h-7 fill-ivoire-gold text-ivoire-gold" />
          </div>
          <div className="text-white text-sm font-semibold mb-1">How was your experience?</div>
          <div className="text-white/50 text-[11px] mb-4">Tap to rate us</div>
          <div className="flex justify-center gap-1 mb-5">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 fill-ivoire-gold text-ivoire-gold" />
            ))}
          </div>
          <button className="w-full rounded-lg bg-ivoire-gold text-ivoire-navy text-xs font-bold py-2.5 mb-2">
            Leave a Google Review
          </button>
          <div className="text-green-400 text-[10px]">+1 new 5-star review today 🎉</div>
        </div>
      );
    case "missed":
      return phone(
        <div className="flex flex-col h-full">
          <div className="flex items-center gap-2 pb-3 border-b border-white/10">
            <div className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center">
              <PhoneCall className="w-4 h-4 text-red-400" />
            </div>
            <div>
              <div className="text-white text-xs font-semibold">Missed Call</div>
              <div className="text-white/50 text-[10px]">Auto text sent</div>
            </div>
          </div>
          <div className="flex-1 space-y-2 py-3">
            {bubble("Hey! Sorry we missed your call. This is Ivoire — how can we help? 😊")}
            {bubble("Hi, do you have availability this week?", true)}
            {bubble("We sure do! What day works best for you?")}
            {bubble("Thursday afternoon?", true)}
            {bubble("Perfect, booking you in now ✅")}
          </div>
        </div>
      );
    case "campaigns":
      return phone(
        <div className="flex flex-col h-full">
          <div className="text-white text-xs font-semibold mb-3">Campaigns</div>
          {[
            { name: "Referral Boost", on: true },
            { name: "Win-Back Offer", on: true },
            { name: "Holiday Special", on: false },
          ].map((c) => (
            <div key={c.name} className="flex items-center justify-between bg-white/5 rounded-lg px-3 py-2.5 mb-2">
              <span className="text-white/85 text-xs">{c.name}</span>
              <div className={`w-9 h-5 rounded-full flex items-center px-0.5 ${c.on ? "bg-ivoire-gold justify-end" : "bg-white/15 justify-start"}`}>
                <div className="w-4 h-4 rounded-full bg-white" />
              </div>
            </div>
          ))}
          <div className="mt-3 rounded-xl bg-ivoire-gold/10 p-3 text-center">
            <div className="text-ivoire-gold font-display font-bold text-lg">+38%</div>
            <div className="text-white/60 text-[10px]">repeat customers this month</div>
          </div>
        </div>
      );
    case "seo":
      return phone(
        <div className="flex flex-col h-full">
          <div className="flex items-center gap-2 bg-white/10 rounded-lg px-3 py-2 mb-3">
            <Search className="w-3.5 h-3.5 text-white/60" />
            <span className="text-white/70 text-[11px]">plumber near me</span>
          </div>
          {[1, 2, 3].map((n) => (
            <div key={n} className={`rounded-lg px-3 py-2.5 mb-2 ${n === 1 ? "bg-ivoire-gold/15 border border-ivoire-gold/40" : "bg-white/5"}`}>
              <div className="flex items-center gap-2">
                {n === 1 && <span className="text-ivoire-gold text-[9px] font-bold bg-ivoire-gold/20 px-1.5 py-0.5 rounded">#1</span>}
                <div className="h-2.5 rounded bg-white/30 w-2/3" />
              </div>
              <div className="flex gap-0.5 mt-1.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-2.5 h-2.5 fill-ivoire-gold text-ivoire-gold" />
                ))}
              </div>
            </div>
          ))}
          <div className="mt-auto text-center text-green-400 text-[10px]">↑ Ranking #1 in your area</div>
        </div>
      );
  }
}

export default function FeaturesSection() {
  return (
    <section id="services" className="bg-ivoire-navy py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display font-extrabold text-white text-3xl sm:text-4xl md:text-5xl leading-tight">
            Simple systems that <span className="text-ivoire-gold">actually work</span>
          </h2>
          <p className="mt-4 text-lg text-white/60">
            No tech degree required — just a business you want to grow.
          </p>
        </motion.div>

        <div className="space-y-20 sm:space-y-28">
          {features.map((f, idx) => {
            const reverse = idx % 2 === 1;
            return (
              <div
                key={f.id}
                className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center"
              >
                {/* Mockup */}
                <motion.div
                  className={reverse ? "lg:order-2" : ""}
                  initial={{ opacity: 0, x: reverse ? 40 : -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <Mockup type={f.mockup} />
                </motion.div>

                {/* Text */}
                <motion.div
                  className={reverse ? "lg:order-1" : ""}
                  initial={{ opacity: 0, x: reverse ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="inline-flex items-center gap-2 bg-ivoire-gold/10 text-ivoire-gold rounded-full px-4 py-1.5 text-sm font-semibold mb-4">
                    <f.icon className="w-4 h-4" />
                    Feature
                  </div>
                  <h3 className="font-display font-extrabold text-white text-2xl sm:text-3xl md:text-4xl mb-4">
                    {f.title}
                  </h3>
                  <p className="text-white/70 text-base sm:text-lg leading-relaxed mb-6">
                    {f.intro}
                  </p>
                  <ul className="space-y-4">
                    {f.points.map((p) => (
                      <li key={p.title} className="flex gap-3">
                        <CheckCircle2 className="w-5 h-5 text-ivoire-gold flex-shrink-0 mt-0.5" />
                        <div>
                          <div className="text-white font-semibold">{p.title}</div>
                          <div className="text-white/55 text-sm">{p.desc}</div>
                        </div>
                      </li>
                    ))}
                  </ul>
                  <button
                    onClick={goToBooking}
                    className="btn-gold rounded-lg px-6 py-3 mt-8 text-sm"
                  >
                    See It In Action
                  </button>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
