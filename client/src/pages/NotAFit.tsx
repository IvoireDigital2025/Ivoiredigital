import { useEffect } from "react";
import { Link } from "wouter";
import { Heart, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

export default function NotAFit() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#0b0d14] flex flex-col">
      <Header scrolled={true} />
      <main className="flex-1 flex items-center justify-center px-4 py-24">
        <div className="max-w-xl w-full text-center rounded-2xl border border-white/10 bg-[#11131c]/85 p-8 sm:p-12">
          <span className="mx-auto w-14 h-14 rounded-full bg-ivoire-gold/15 border border-ivoire-gold/30 flex items-center justify-center mb-6">
            <Heart className="w-6 h-6 text-ivoire-gold" />
          </span>
          <h1 className="text-white font-display font-bold text-2xl sm:text-3xl mb-4">
            Thanks for reaching out!
          </h1>
          <p className="text-white/70 leading-relaxed mb-4">
            Based on your answers, our growth system may not be the right fit
            for your business at this stage. Our programs are designed for
            established businesses ready to scale, and we'd rather be upfront
            than waste your time.
          </p>
          <p className="text-white/70 leading-relaxed mb-8">
            We've saved your information — as your business grows, we'd love to
            reconnect and help you take it to the next level.
          </p>
          <Link href="/">
            <Button className="btn-gold px-6 py-3 font-bold inline-flex items-center gap-2">
              Back to Home <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
