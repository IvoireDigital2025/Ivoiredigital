import { useState } from "react";
import { scrollToSection } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import ivoireLogo from "@/assets/ivoire-logo-new.png";

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
      <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
        <a href="#" className="flex items-center" onClick={() => handleNavClick("home")}>
          <img 
            src={ivoireLogo} 
            alt="Ivoire Digital Logo" 
            className="h-16 object-contain" 
            style={{ 
              filter: 'drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.3))',
              background: 'transparent' 
            }} 
          />
        </a>
        
        <div className="hidden md:flex space-x-8 text-white">
          <button onClick={() => handleNavClick("home")} className="hover:text-[#f59e0b] transition-colors">Home</button>
          <button onClick={() => handleNavClick("services")} className="hover:text-[#f59e0b] transition-colors">Services</button>
          <button onClick={() => handleNavClick("portfolio")} className="hover:text-[#f59e0b] transition-colors">Portfolio</button>
          <button onClick={() => handleNavClick("testimonials")} className="hover:text-[#f59e0b] transition-colors">Testimonials</button>
          <button onClick={() => handleNavClick("blog")} className="hover:text-[#f59e0b] transition-colors">Blog</button>
          <button onClick={() => handleNavClick("contact")} className="hover:text-[#f59e0b] transition-colors">Contact</button>
        </div>
        
        <Button 
          className="hidden md:block bg-[#f59e0b] hover:bg-[#fbbf24] text-white"
          onClick={() => handleNavClick("contact")}
        >
          Get Started
        </Button>
        
        <button
          onClick={toggleMobileMenu}
          className="md:hidden text-white text-2xl focus:outline-none"
          aria-label="Toggle mobile menu"
        >
          <Menu className="h-6 w-6" />
        </button>
      </nav>
      
      {/* Mobile menu */}
      <div className={`md:hidden bg-white p-4 rounded-b-lg shadow-lg absolute w-full ${mobileMenuOpen ? 'block' : 'hidden'}`}>
        <div className="flex flex-col space-y-4">
          <button onClick={() => handleNavClick("home")} className="text-[#14532d] hover:text-[#f59e0b] transition-colors">Home</button>
          <button onClick={() => handleNavClick("services")} className="text-[#14532d] hover:text-[#f59e0b] transition-colors">Services</button>
          <button onClick={() => handleNavClick("portfolio")} className="text-[#14532d] hover:text-[#f59e0b] transition-colors">Portfolio</button>
          <button onClick={() => handleNavClick("testimonials")} className="text-[#14532d] hover:text-[#f59e0b] transition-colors">Testimonials</button>
          <button onClick={() => handleNavClick("blog")} className="text-[#14532d] hover:text-[#f59e0b] transition-colors">Blog</button>
          <button onClick={() => handleNavClick("contact")} className="text-[#14532d] hover:text-[#f59e0b] transition-colors">Contact</button>
          <Button 
            className="bg-[#f59e0b] hover:bg-[#fbbf24] text-white w-full"
            onClick={() => handleNavClick("contact")}
          >
            Get Started
          </Button>
        </div>
      </div>
    </header>
  );
}
