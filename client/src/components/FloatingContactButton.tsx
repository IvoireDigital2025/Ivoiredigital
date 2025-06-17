import { useState } from "react";
import { Button } from "@/components/ui/button";
import { MessageCircle, X, Phone, Mail, Calendar } from "lucide-react";
import { scrollToSection } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

export default function FloatingContactButton() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleContactAction = (action: string) => {
    setIsOpen(false);
    if (action === "contact-form") {
      scrollToSection("contact");
    } else if (action === "phone") {
      window.open("tel:945-223-8799", "_self");
    } else if (action === "email") {
      window.open("mailto:Koneyassine49@gmail.com", "_self");
    }
  };

  const contactOptions = [
    {
      id: "contact-form",
      icon: MessageCircle,
      label: "Contact Form",
      color: "bg-[#14532d] hover:bg-[#166534]"
    },
    {
      id: "phone",
      icon: Phone,
      label: "Call Us",
      color: "bg-[#f59e0b] hover:bg-[#fbbf24]"
    },
    {
      id: "email",
      icon: Mail,
      label: "Email Us",
      color: "bg-blue-600 hover:bg-blue-700"
    }
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="absolute bottom-16 right-0 space-y-3"
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.2 }}
          >
            {contactOptions.map((option, index) => (
              <motion.div
                key={option.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ delay: index * 0.05 }}
                className="flex items-center space-x-3"
              >
                <span className="bg-white text-gray-800 px-3 py-2 rounded-lg shadow-lg text-sm font-medium whitespace-nowrap">
                  {option.label}
                </span>
                <Button
                  size="sm"
                  className={`${option.color} text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300`}
                  onClick={() => handleContactAction(option.id)}
                >
                  <option.icon className="h-5 w-5" />
                </Button>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <Button
        className={`w-14 h-14 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 ${
          isOpen 
            ? "bg-red-500 hover:bg-red-600 rotate-45" 
            : "bg-[#14532d] hover:bg-[#166534]"
        } text-white`}
        onClick={toggleMenu}
      >
        {isOpen ? (
          <X className="h-6 w-6" />
        ) : (
          <MessageCircle className="h-6 w-6" />
        )}
      </Button>
    </div>
  );
}