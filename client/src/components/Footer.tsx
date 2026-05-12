import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import { scrollToSection } from "@/lib/utils";
import ivoireLogo from "@assets/ChatGPT_Image_May_11,_2026,_11_13_28_PM_1778559339825.png";

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
                className="h-12 w-auto object-contain"
                style={{
                  mixBlendMode: 'screen',
                  maxWidth: '260px'
                }}
              />
            </a>
            <p className="text-gray-400 mb-6 text-sm sm:text-base">
              AI automation and digital marketing exclusively for dental clinics and spas in Dallas and beyond.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-[#b07d2a] transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#b07d2a] transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#b07d2a] transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#b07d2a] transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">AI Services</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li><span className="text-gray-400 text-sm sm:text-base">AI Dental Receptionist</span></li>
              <li><span className="text-gray-400 text-sm sm:text-base">AI Appointment Booking</span></li>
              <li><span className="text-gray-400 text-sm sm:text-base">Missed-Call Text Back</span></li>
              <li><span className="text-gray-400 text-sm sm:text-base">Patient Follow-Up & Reactivation</span></li>
              <li><span className="text-gray-400 text-sm sm:text-base">AI SOAP Note Generation</span></li>
              <li><span className="text-gray-400 text-sm sm:text-base">AI Review Generation</span></li>
            </ul>
          </div>

          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Marketing Services</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li><span className="text-gray-400 text-sm sm:text-base">Local SEO</span></li>
              <li><span className="text-gray-400 text-sm sm:text-base">Google & Meta Ads</span></li>
              <li><span className="text-gray-400 text-sm sm:text-base">Social Media Management</span></li>
              <li><span className="text-gray-400 text-sm sm:text-base">Email & SMS Marketing</span></li>
              <li><span className="text-gray-400 text-sm sm:text-base">Reputation Management</span></li>
              <li><span className="text-gray-400 text-sm sm:text-base">Content Marketing</span></li>
            </ul>
          </div>

          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Company</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <button onClick={() => handleNavClick("home")} className="text-gray-400 hover:text-[#b07d2a] transition-colors text-sm sm:text-base">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick("services")} className="text-gray-400 hover:text-[#b07d2a] transition-colors text-sm sm:text-base">
                  Services
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick("case-studies")} className="text-gray-400 hover:text-[#b07d2a] transition-colors text-sm sm:text-base">
                  Results
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick("faq")} className="text-gray-400 hover:text-[#b07d2a] transition-colors text-sm sm:text-base">
                  FAQ
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick("contact")} className="text-gray-400 hover:text-[#b07d2a] transition-colors text-sm sm:text-base">
                  Contact
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick("booking")} className="text-gray-400 hover:text-[#b07d2a] transition-colors text-sm sm:text-base">
                  Book Free Consultation
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-6 sm:pt-8 border-t border-gray-800 text-xs sm:text-sm text-gray-400">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4">
            <div className="text-center sm:text-left">
              &copy; {new Date().getFullYear()} Ivoire Digital. All rights reserved. Dallas, TX.
            </div>
            <div className="text-center sm:text-right">
              <a href="#" className="hover:text-[#b07d2a] transition-colors">Privacy Policy</a>
              <span className="mx-2">|</span>
              <a href="#" className="hover:text-[#b07d2a] transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
