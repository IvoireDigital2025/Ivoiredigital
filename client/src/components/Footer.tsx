import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import { scrollToSection } from "@/lib/utils";

export default function Footer() {
  const handleNavClick = (id: string) => {
    scrollToSection(id);
  };

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <a href="#" className="text-2xl font-poppins font-bold mb-4 block">
              <span className="text-[#f59e0b]">Ivoire</span> Digital
            </a>
            <p className="text-gray-400 mb-6">
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
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-[#f59e0b] transition-colors">Website Development</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#f59e0b] transition-colors">AI Solutions</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#f59e0b] transition-colors">Digital Marketing</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#f59e0b] transition-colors">Business Automation</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#f59e0b] transition-colors">SEO Optimization</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#f59e0b] transition-colors">Review Management</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-[#f59e0b] transition-colors">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#f59e0b] transition-colors">Case Studies</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#f59e0b] transition-colors">Guides</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#f59e0b] transition-colors">FAQ</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#f59e0b] transition-colors">Support</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-[#f59e0b] transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#f59e0b] transition-colors">Team</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#f59e0b] transition-colors">Careers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#f59e0b] transition-colors">Press</a></li>
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
