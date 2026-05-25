import { motion } from "framer-motion";
import { PhoneOff, CalendarX, MessageSquareOff, TrendingDown, UserX, Globe, Zap, BarChart } from "lucide-react";

const leftProblems = [
  {
    icon: PhoneOff,
    problem: "Leads Slipping Through the Cracks",
    description: "Potential customers call after hours or fill out a form and never hear back — so they go to a competitor.",
  },
  {
    icon: CalendarX,
    problem: "No-Shows & Last-Minute Cancellations",
    description: "Empty appointment slots and wasted time cost you real money every single week.",
  },
  {
    icon: TrendingDown,
    problem: "Marketing That Doesn't Deliver",
    description: "You're spending on ads or social media but can't tell what's actually working or driving revenue.",
  },
];

const rightProblems = [
  {
    icon: UserX,
    problem: "Customers Not Coming Back",
    description: "You work hard to win a customer, but with no follow-up system they quietly disappear and rebook elsewhere.",
  },
  {
    icon: MessageSquareOff,
    problem: "Few or No Online Reviews",
    description: "Happy customers leave and never post a review because no one asks at the right moment — hurting your reputation.",
  },
  {
    icon: Globe,
    problem: "A Website That Doesn't Convert",
    description: "Your site looks outdated, loads slowly, or fails to clearly explain what you do — so visitors bounce without contacting you.",
  },
];

export default function BusinessTargetSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block bg-[#b07d2a]/10 text-[#b07d2a] text-sm font-semibold px-4 py-1.5 rounded-full mb-4 uppercase tracking-wide">
            Sound Familiar?
          </span>
          <h2 className="text-3xl md:text-4xl font-poppins font-bold text-gray-900 mb-4">
            The Problems We Solve for<br />
            <span className="text-[#14532d]">Businesses Like Yours</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            These are the everyday frustrations that cost businesses real revenue — and exactly why our clients come to us.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-blue-100 p-2.5 rounded-xl">
                <Zap className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Losing Time & Leads</h3>
            </div>
            <div className="space-y-4">
              {leftProblems.map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={i}
                    className="flex gap-4 bg-white rounded-xl p-5 shadow-sm border border-gray-100 hover:border-[#14532d]/30 hover:shadow-md transition-all duration-300"
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                  >
                    <div className="bg-red-50 p-2.5 rounded-lg flex-shrink-0 h-fit">
                      <Icon className="w-5 h-5 text-red-500" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">{item.problem}</h4>
                      <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Right Column */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-amber-100 p-2.5 rounded-xl">
                <BarChart className="w-6 h-6 text-amber-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Losing Growth & Revenue</h3>
            </div>
            <div className="space-y-4">
              {rightProblems.map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={i}
                    className="flex gap-4 bg-white rounded-xl p-5 shadow-sm border border-gray-100 hover:border-[#14532d]/30 hover:shadow-md transition-all duration-300"
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                  >
                    <div className="bg-red-50 p-2.5 rounded-lg flex-shrink-0 h-fit">
                      <Icon className="w-5 h-5 text-red-500" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">{item.problem}</h4>
                      <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <p className="text-gray-600 mb-5 text-lg max-w-xl mx-auto">
            We fix all of this with AI automation, targeted marketing, and high-converting websites — fully set up and managed for you.
          </p>
          <button
            onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-[#14532d] hover:bg-[#166534] text-white px-8 py-3.5 rounded-lg font-semibold transition-colors duration-300 shadow-lg hover:shadow-xl"
          >
            See How We Fix It →
          </button>
        </motion.div>
      </div>
    </section>
  );
}
