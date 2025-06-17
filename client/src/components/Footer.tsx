import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import { scrollToSection } from "@/lib/utils";
import ivoireLogo from "@/assets/ivoire-logo-new.png";

export default function Footer() {
  const handleNavClick = (id: string) => {
    scrollToSection(id);
  };

  return (
    <footer className="bg-gray-900 text-white pt-12 sm:pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-8 sm:mb-12">
          <div className="col-span-1 sm:col-span-2 lg:col-span-1">
            <a href="#" onClick={() => handleNavClick("home")} className="inline-block mb-4">
              <img 
                src={ivoireLogo} 
                alt="Ivoire Digital Logo" 
                className="h-24 sm:h-28 md:h-32 object-contain" 
                style={{ 
                  filter: 'brightness(1.2) drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.3))',
                  background: 'transparent' 
                }} 
              />
            </a>
            <p className="text-gray-400 mb-6 text-sm sm:text-base">
              Empowering small businesses with AI and digital solutions to attract more clients and automate operations.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-[#f59e0b] transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#f59e0b] transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#f59e0b] transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#f59e0b] transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Services</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-[#f59e0b] transition-colors text-sm sm:text-base">Website Development</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#f59e0b] transition-colors text-sm sm:text-base">AI Solutions</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#f59e0b] transition-colors text-sm sm:text-base">Digital Marketing</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#f59e0b] transition-colors text-sm sm:text-base">Business Automation</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#f59e0b] transition-colors text-sm sm:text-base">SEO Optimization</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#f59e0b] transition-colors text-sm sm:text-base">Review Management</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Resources</h3>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => handleNavClick("blog")} 
                  className="text-gray-400 hover:text-[#f59e0b] transition-colors"
                >
                  Blog
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavClick("case-studies")} 
                  className="text-gray-400 hover:text-[#f59e0b] transition-colors"
                >
                  Case Studies
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavClick("guides")} 
                  className="text-gray-400 hover:text-[#f59e0b] transition-colors"
                >
                  Guides
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavClick("faq")} 
                  className="text-gray-400 hover:text-[#f59e0b] transition-colors"
                >
                  FAQ
                </button>
              </li>
              <li><a href="#" className="text-gray-400 hover:text-[#f59e0b] transition-colors">Support</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => handleNavClick("about-us")} 
                  className="text-gray-400 hover:text-[#f59e0b] transition-colors"
                >
                  About Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavClick("services")} 
                  className="text-gray-400 hover:text-[#f59e0b] transition-colors"
                >
                  Services
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavClick("portfolio")} 
                  className="text-gray-400 hover:text-[#f59e0b] transition-colors"
                >
                  Portfolio
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavClick("contact")} 
                  className="text-gray-400 hover:text-[#f59e0b] transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-800 text-sm text-gray-400">
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="text-center sm:text-left">
              &copy; {new Date().getFullYear()} Ivoire Digital. All rights reserved. | Dallas, TX
            </div>
            <div className="text-center sm:text-right">
              <a href="#" className="hover:text-[#f59e0b] transition-colors">Privacy Policy</a>
              <span className="mx-2">|</span>
              <a href="#" className="hover:text-[#f59e0b] transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
