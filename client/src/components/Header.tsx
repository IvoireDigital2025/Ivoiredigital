import { useState } from "react";
import { scrollToSection } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import ivoireLogo from "@assets/ChatGPT_Image_May_11,_2026,_11_13_28_PM_1778559339825.png";

interface HeaderProps {
  scrolled: boolean;
}

export default function Header({ scrolled }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleNavClick = (id: string) => {
    scrollToSection(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? "bg-[#14532d] shadow-md" : "bg-transparent"
    }`}>
      <nav className="container mx-auto px-4 sm:px-6 py-2 sm:py-3 flex items-center">
        <a href="#" className="flex items-center flex-shrink-0" onClick={() => handleNavClick("home")}>
          <img 
            src={ivoireLogo} 
            alt="Ivoire Digital Logo" 
            className="h-36 sm:h-44 w-auto object-contain" 
            style={{ 
              mixBlendMode: 'screen',
              maxWidth: '680px'
            }} 
          />
        </a>
        
        <div className="hidden lg:flex space-x-6 text-white mx-auto text-sm xl:text-base">
          <button onClick={() => handleNavClick("home")} className="hover:text-[#b07d2a] transition-colors">Home</button>
          <button onClick={() => handleNavClick("services")} className="hover:text-[#b07d2a] transition-colors">Services</button>
          <button onClick={() => handleNavClick("case-studies")} className="hover:text-[#b07d2a] transition-colors">Results</button>
          <button onClick={() => handleNavClick("faq")} className="hover:text-[#b07d2a] transition-colors">FAQ</button>
          <button onClick={() => handleNavClick("contact")} className="hover:text-[#b07d2a] transition-colors">Contact</button>
        </div>
        
        <Button 
          size="sm"
          className="hidden lg:block bg-[#b07d2a] hover:bg-[#c49030] text-white flex-shrink-0 text-xs lg:text-sm px-3 lg:px-4 py-2"
          onClick={() => handleNavClick("booking")}
        >
          Book Free Consultation
        </Button>
        
        <button
          onClick={toggleMobileMenu}
          className="lg:hidden text-white text-2xl focus:outline-none ml-auto"
          aria-label="Toggle mobile menu"
        >
          <Menu className="h-6 w-6" />
        </button>
      </nav>
      
      {/* Mobile menu */}
      <div className={`lg:hidden bg-white p-4 rounded-b-lg shadow-lg absolute w-full left-0 right-0 z-50 ${mobileMenuOpen ? 'block' : 'hidden'}`}>
        <div className="flex flex-col space-y-3">
          <button onClick={() => handleNavClick("home")} className="text-[#14532d] hover:text-[#b07d2a] transition-colors py-2 text-left">Home</button>
          <button onClick={() => handleNavClick("services")} className="text-[#14532d] hover:text-[#b07d2a] transition-colors py-2 text-left">Services</button>
          <button onClick={() => handleNavClick("case-studies")} className="text-[#14532d] hover:text-[#b07d2a] transition-colors py-2 text-left">Results</button>
          <button onClick={() => handleNavClick("faq")} className="text-[#14532d] hover:text-[#b07d2a] transition-colors py-2 text-left">FAQ</button>
          <button onClick={() => handleNavClick("booking")} className="text-[#14532d] hover:text-[#b07d2a] transition-colors py-2 text-left font-medium">Book Consultation</button>
          <button onClick={() => handleNavClick("contact")} className="text-[#14532d] hover:text-[#b07d2a] transition-colors py-2 text-left">Contact</button>
          <div className="pt-2">
            <Button 
              className="bg-[#b07d2a] hover:bg-[#c49030] text-white w-full py-3"
              onClick={() => handleNavClick("booking")}
            >
              Book Free Consultation
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
