import { Link } from "wouter";
import { Facebook, Linkedin, Instagram, Mail, MapPin } from "lucide-react";
import {
  scrollToSection,
  goToBooking,
  CONTACT_EMAIL,
} from "@/lib/utils";
import { services } from "@/lib/servicesContent";
import ivoireLogo from "@assets/ivoire-logo-cropped.png";

export default function Footer() {
  const handleNavClick = (id: string) => scrollToSection(id);

  return (
    <footer className="bg-ivoire-navy-deep text-white pt-10 sm:pt-16 pb-8 border-t border-white/10">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-8 sm:mb-12">
          <div className="col-span-2 lg:col-span-1">
            <img
              src={ivoireLogo}
              alt="Ivoire Digital Logo"
              className="h-16 w-auto object-contain mb-3"
              style={{ mixBlendMode: "screen", maxWidth: "240px" }}
            />
            <p className="text-white/60 mb-6 text-sm leading-relaxed">
              AI automation, websites, and digital marketing systems for
              ambitious businesses in Dallas and beyond.
            </p>
            <div className="flex space-x-3">
              {[
                { Icon: Facebook, label: "Facebook", href: "https://facebook.com" },
                { Icon: Instagram, label: "Instagram", href: "https://instagram.com" },
                { Icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com" },
              ].map(({ Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Ivoire Digital on ${label}`}
                  className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center text-white/60 hover:bg-ivoire-gold hover:text-ivoire-navy transition-all"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-display text-base font-bold mb-4 text-ivoire-gold">Services</h3>
            <ul className="space-y-2.5 text-sm text-white/60">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="hover:text-ivoire-gold transition-colors"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-base font-bold mb-4 text-ivoire-gold">Company</h3>
            <ul className="space-y-2.5 text-sm">
              {[
                { id: "services", label: "Services" },
                { id: "industries", label: "Industries" },
                { id: "process", label: "How It Works" },
                { id: "testimonials", label: "Reviews" },
                { id: "growth-plan", label: "Contact" },
              ].map((l) => (
                <li key={l.id}>
                  <button
                    onClick={() => handleNavClick(l.id)}
                    className="text-white/60 hover:text-ivoire-gold transition-colors"
                  >
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-2 sm:col-span-1">
            <h3 className="font-display text-base font-bold mb-4 text-ivoire-gold">Get In Touch</h3>
            <ul className="space-y-3 text-sm text-white/60">
              <li>
                <a href={`mailto:${CONTACT_EMAIL}`} className="flex items-center gap-2 hover:text-ivoire-gold transition-colors">
                  <Mail className="h-4 w-4 text-ivoire-gold" /> {CONTACT_EMAIL}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-ivoire-gold" /> Dallas, TX
              </li>
            </ul>
            <button onClick={goToBooking} className="btn-gold rounded-lg px-5 py-2.5 mt-5 text-sm">
              Book A Call
            </button>
          </div>
        </div>

        <div className="pt-6 border-t border-white/10 text-xs text-white/40 flex flex-col sm:flex-row gap-2 justify-between items-center">
          <div>&copy; {new Date().getFullYear()} Ivoire Digital. All rights reserved. Dallas, TX.</div>
          <div className="flex gap-4">
            <a href="#" className="hover:text-ivoire-gold transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-ivoire-gold transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
