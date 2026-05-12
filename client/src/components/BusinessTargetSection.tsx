import { motion } from "framer-motion";
import { Smile, Sparkles, PhoneOff, CalendarX, Clock, MessageSquareOff, TrendingDown, UserX } from "lucide-react";

const dentalProblems = [
  {
    icon: PhoneOff,
    problem: "Calls Going Unanswered",
    description: "New patients call after hours and get voicemail — then book with a competitor instead.",
  },
  {
    icon: CalendarX,
    problem: "Patients Not Showing Up",
    description: "No-shows and last-minute cancellations leave empty chairs and lost revenue every week.",
  },
  {
    icon: Clock,
    problem: "Doctors Buried in Paperwork",
    description: "Dentists spend 1–2 hours per day on SOAP notes and charting instead of treating patients.",
  },
];

const spaProblems = [
  {
    icon: TrendingDown,
    problem: "Empty Spots on the Calendar",
    description: "Your treatment rooms sit empty because clients don't self-book and staff can't follow up manually.",
  },
  {
    icon: UserX,
    problem: "Clients Not Coming Back",
    description: "First-time clients never hear from you again — and quietly rebook with a competitor.",
  },
  {
    icon: MessageSquareOff,
    problem: "No Google Reviews",
    description: "Happy clients walk out and never leave a review because nobody asks them at the right moment.",
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
            <span className="text-[#14532d]">Dental Clinics & Spas</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            These are the everyday frustrations that cost clinics and spas real revenue — and exactly why our clients come to us.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {/* Dental Column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-blue-100 p-2.5 rounded-xl">
                <Smile className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Dental Clinics</h3>
            </div>
            <div className="space-y-4">
              {dentalProblems.map((item, i) => {
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

          {/* Spa Column */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-rose-100 p-2.5 rounded-xl">
                <Sparkles className="w-6 h-6 text-rose-500" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Spas & Wellness Centers</h3>
            </div>
            <div className="space-y-4">
              {spaProblems.map((item, i) => {
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
            We fix all of this with AI automation and targeted marketing — fully set up and managed for you.
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
