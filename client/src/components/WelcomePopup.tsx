import { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { BadgeCheck, Smartphone, ArrowRight } from "lucide-react";

export default function WelcomePopup() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    try {
      if (sessionStorage.getItem("ivoire-welcome-shown-v2")) return;
    } catch {
      return;
    }
    const timer = setTimeout(() => {
      setOpen(true);
      try {
        sessionStorage.setItem("ivoire-welcome-shown-v2", "1");
      } catch {
        // ignore storage errors in restrictive privacy modes
      }
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  const goToForm = () => {
    setOpen(false);
    setTimeout(() => {
      const el = document.getElementById("growth-plan");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }, 150);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="max-w-md bg-[#0b0d14] border border-ivoire-gold/30 text-white p-6 sm:p-8 rounded-2xl">
        <div className="flex flex-col items-center text-center gap-4">
          <div className="w-14 h-14 rounded-full bg-ivoire-gold/15 border border-ivoire-gold/40 flex items-center justify-center">
            <BadgeCheck className="w-7 h-7 text-ivoire-gold" />
          </div>
          <DialogTitle className="text-xl sm:text-2xl font-bold leading-snug">
            Our <span className="text-ivoire-gold">100% Guarantee</span>
          </DialogTitle>
          <DialogDescription className="text-white/75 text-sm sm:text-base leading-relaxed">
            The service we are offering is 100% needed for your business.
          </DialogDescription>
          <div className="w-full flex items-center gap-3 rounded-xl border border-ivoire-gold/30 bg-ivoire-gold/10 px-4 py-3 text-left">
            <Smartphone className="w-5 h-5 text-ivoire-gold shrink-0" />
            <p className="text-sm sm:text-base font-semibold text-ivoire-gold">
              Your leads will now be sent straight to your phone.
            </p>
          </div>
          <Button
            onClick={goToForm}
            className="w-full btn-gold py-3 text-base font-bold inline-flex items-center justify-center gap-2"
          >
            Claim My Free Consultation
            <ArrowRight className="w-4 h-4" />
          </Button>
          <button
            onClick={() => setOpen(false)}
            className="text-white/50 text-xs hover:text-white/80 transition-colors"
          >
            No thanks, I'll keep looking around
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
