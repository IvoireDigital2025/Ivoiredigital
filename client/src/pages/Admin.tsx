import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { Mail, Phone, Calendar, User, MessageSquare } from "lucide-react";
import { getQueryFn } from "@/lib/queryClient";

interface ContactMessage {
  id: number;
  name: string;
  email: string;
  phone: string | null;
  service: string;
  message: string;
  createdAt: string;
}

export default function Admin() {
  const { data: contacts = [], isLoading } = useQuery<ContactMessage[]>({
    queryKey: ["/api/admin/contacts"],
    queryFn: getQueryFn({ on401: "throw" })
  });

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#14532d] mx-auto mb-4"></div>
          <p className="text-gray-600">Loading contact messages...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-3xl font-bold text-[#14532d] mb-4">
            Contact Form Submissions
          </h1>
          <p className="text-gray-600">
            All messages from your website contact form
          </p>
        </motion.div>

        {contacts.length === 0 ? (
          <motion.div 
            className="text-center py-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <MessageSquare className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No messages yet</h3>
            <p className="text-gray-600">Contact form submissions will appear here</p>
          </motion.div>
        ) : (
          <div className="grid gap-6">
            {contacts.map((contact: ContactMessage, index: number) => (
              <motion.div
                key={contact.id}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="bg-[#14532d] p-2 rounded-full">
                      <User className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-[#14532d]">{contact.name}</h3>
                      <p className="text-sm text-gray-500">
                        <Calendar className="w-4 h-4 inline mr-1" />
                        {formatDate(contact.createdAt)}
                      </p>
                    </div>
                  </div>
                  <div className="bg-[#f59e0b] text-white px-3 py-1 rounded-full text-xs font-medium">
                    {contact.service}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div className="flex items-center space-x-2">
                    <Mail className="w-4 h-4 text-gray-400" />
                    <a 
                      href={`mailto:${contact.email}`}
                      className="text-blue-600 hover:text-blue-800 transition-colors"
                    >
                      {contact.email}
                    </a>
                  </div>
                  {contact.phone && (
                    <div className="flex items-center space-x-2">
                      <Phone className="w-4 h-4 text-gray-400" />
                      <a 
                        href={`tel:${contact.phone}`}
                        className="text-blue-600 hover:text-blue-800 transition-colors"
                      >
                        {contact.phone}
                      </a>
                    </div>
                  )}
                </div>

                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Message:</h4>
                  <p className="text-gray-700 leading-relaxed">{contact.message}</p>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}