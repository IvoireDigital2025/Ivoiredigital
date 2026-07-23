import { useEffect } from "react";
import { Link } from "wouter";
import { CheckCircle, Phone, ArrowLeft } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const BUSINESS_PHONE = "972-236-4451";

export default function ThankYou() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-ivoire-navy-deep flex flex-col">
      <Header scrolled={true} />
      <main
        className="flex-1 flex items-center justify-center px-4 sm:px-6 pt-28 sm:pt-32 pb-16"
        style={{
          background:
            "radial-gradient(120% 90% at 50% 20%, #1a1407 0%, #0c0e16 45%, #0b0d14 100%)",
        }}
      >
        <div className="w-full max-w-lg text-center rounded-2xl border border-ivoire-gold/30 bg-[#11131c]/85 backdrop-blur-sm p-6 sm:p-10 shadow-2xl">
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
            className="btn-gold rounded-lg px-6 sm:px-8 py-3.5 text-base font-bold flex w-full sm:w-auto sm:inline-flex items-center justify-center gap-2 mb-5 sm:mx-auto sm:max-w-max whitespace-nowrap"
          >
            <Phone className="w-4 h-4" />
            Call Us Now {BUSINESS_PHONE}
          </a>
          <div>
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
