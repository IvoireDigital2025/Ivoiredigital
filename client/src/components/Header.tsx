import { useState } from "react";
import { scrollToSection, openCalendly } from "@/lib/utils";
import { Menu, X, Phone } from "lucide-react";
import ivoireLogo from "@assets/ChatGPT_Image_May_11,_2026,_11_13_28_PM_1778559339825.png";

interface HeaderProps {
  scrolled: boolean;
}

const navLinks = [
  { id: "services", label: "Services" },
  { id: "industries", label: "Industries" },
  { id: "process", label: "How It Works" },
  { id: "testimonials", label: "Reviews" },
  { id: "contact", label: "Contact" },
];

export default function Header({ scrolled }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (id: string) => {
    scrollToSection(id);
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-ivoire-navy-deep/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 py-2 flex items-center justify-between">
        <a
          href="#"
          className="flex items-center flex-shrink-0"
          onClick={() => handleNavClick("home")}
        >
          <img
            src={ivoireLogo}
            alt="Ivoire Digital Logo"
            className="h-20 sm:h-24 w-auto object-contain"
            style={{ mixBlendMode: "screen", maxWidth: "360px" }}
          />
        </a>

        <div className="hidden lg:flex items-center gap-7 text-white/90 text-sm font-medium">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className="hover:text-ivoire-gold transition-colors"
            >
              {link.label}
            </button>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-4">
          <button
            onClick={openCalendly}
            className="btn-gold rounded-lg px-5 py-2.5 text-sm"
          >
            Book A Call
          </button>
        </div>

        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden text-white focus:outline-none"
          aria-label="Toggle mobile menu"
        >
          {mobileMenuOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`lg:hidden bg-ivoire-navy-deep border-t border-white/10 ${
          mobileMenuOpen ? "block" : "hidden"
        }`}
      >
        <div className="flex flex-col px-5 py-4 gap-1">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className="text-white/90 hover:text-ivoire-gold transition-colors py-3 text-left border-b border-white/5"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={openCalendly}
            className="btn-gold rounded-lg px-5 py-3 mt-3 text-center"
          >
            Book A Call
          </button>
        </div>
      </div>
    </header>
  );
}
