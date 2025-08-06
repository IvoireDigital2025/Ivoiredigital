import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  MessageCircle, 
  X, 
  Send, 
  User, 
  Bot, 
  Clock,
  Phone,
  Mail,
  Minimize2,
  Maximize2
} from "lucide-react";

interface Message {
  id: string;
  type: 'user' | 'bot' | 'system';
  content: string;
  timestamp: Date;
}

interface ChatState {
  isOpen: boolean;
  isMinimized: boolean;
  messages: Message[];
  userInfo: {
    name: string;
    email: string;
    phone: string;
  };
  stage: 'greeting' | 'info-collection' | 'chat' | 'handoff';
}

export default function LiveChatWidget() {
  const [chatState, setChatState] = useState<ChatState>({
    isOpen: false,
    isMinimized: false,
    messages: [],
    userInfo: { name: '', email: '', phone: '' },
    stage: 'greeting'
  });
  
  const [currentMessage, setCurrentMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [chatState.messages]);

  const addMessage = (type: 'user' | 'bot' | 'system', content: string) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      type,
      content,
      timestamp: new Date()
    };
    
    setChatState(prev => ({
      ...prev,
      messages: [...prev.messages, newMessage]
    }));
  };

  const simulateTyping = async (response: string) => {
    setIsTyping(true);
    await new Promise(resolve => setTimeout(resolve, 1000 + Math.random() * 1000));
    setIsTyping(false);
    addMessage('bot', response);
  };

  const openChat = () => {
    setChatState(prev => ({ ...prev, isOpen: true }));
    
    if (chatState.messages.length === 0) {
      setTimeout(() => {
        addMessage('bot', "Hi there! 👋 I'm here to help you discover how our AI-powered solutions can transform your business. What brings you here today?");
      }, 500);
    }
  };

  const closeChat = () => {
    setChatState(prev => ({ ...prev, isOpen: false, isMinimized: false }));
  };

  const toggleMinimize = () => {
    setChatState(prev => ({ ...prev, isMinimized: !prev.isMinimized }));
  };

  const sendMessage = async () => {
    if (!currentMessage.trim()) return;

    const userMessage = currentMessage.trim();
    setCurrentMessage("");
    addMessage('user', userMessage);

    // AI response logic based on message content
    let response = "";
    const lowerMessage = userMessage.toLowerCase();

    if (lowerMessage.includes('price') || lowerMessage.includes('cost') || lowerMessage.includes('pricing')) {
      response = "Our pricing is tailored to your specific needs and business size. We offer flexible plans starting from $497/month for small businesses. Would you like me to connect you with our team for a custom quote based on your requirements?";
    } else if (lowerMessage.includes('ai') || lowerMessage.includes('artificial intelligence')) {
      response = "Great question! Our AI solutions include automated lead generation, intelligent chatbots, predictive analytics, and personalized customer experiences. Which specific AI capability interests you most?";
    } else if (lowerMessage.includes('website') || lowerMessage.includes('design')) {
      response = "We specialize in AI-powered website design that adapts to user behavior and optimizes for conversions. Our websites typically see 35-50% improvement in lead generation. Would you like to see some examples?";
    } else if (lowerMessage.includes('demo') || lowerMessage.includes('see')) {
      response = "I'd love to show you our solutions in action! Let me gather some quick details and I'll have our specialist set up a personalized demo for you. What's your name and email?";
    } else if (lowerMessage.includes('help') || lowerMessage.includes('support')) {
      response = "I'm here to help! Whether you need information about our services, want to see pricing, or schedule a consultation, I can assist you. What specific area would you like to explore?";
    } else {
      // Default responses based on conversation stage
      const responses = [
        "That's interesting! Tell me more about your current challenges with your website or marketing.",
        "I understand. Many of our clients had similar concerns before seeing the results. What's your biggest pain point right now?",
        "Based on what you're telling me, our AI solutions could be a perfect fit. Would you like to schedule a free consultation to discuss your specific needs?",
        "Great point! Let me connect you with one of our specialists who can provide detailed answers. What's the best way to reach you?"
      ];
      response = responses[Math.floor(Math.random() * responses.length)];
    }

    await simulateTyping(response);

    // After a few messages, suggest moving to consultation
    if (chatState.messages.length > 6 && Math.random() > 0.6) {
      setTimeout(async () => {
        await simulateTyping("It sounds like we could really help transform your business! Would you like to schedule a free 15-minute consultation with our team? I can set that up for you right now.");
      }, 2000);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <AnimatePresence>
        {!chatState.isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            className="fixed bottom-6 right-6 z-50"
          >
            <Button
              onClick={openChat}
              className="rounded-full w-16 h-16 bg-blue-600 hover:bg-blue-700 shadow-lg relative"
            >
              <MessageCircle className="h-6 w-6 text-white" />
              <div className="absolute -top-2 -right-2 w-5 h-5 bg-green-500 rounded-full border-2 border-white animate-pulse"></div>
            </Button>
            <div className="absolute -top-12 right-0 bg-gray-800 text-white px-3 py-1 rounded-lg text-sm whitespace-nowrap opacity-0 hover:opacity-100 transition-opacity">
              Chat with us!
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {chatState.isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.9 }}
            animate={{ 
              opacity: 1, 
              y: 0, 
              scale: 1,
              height: chatState.isMinimized ? 60 : 500 
            }}
            exit={{ opacity: 0, y: 100, scale: 0.9 }}
            className="fixed bottom-6 right-6 z-50 w-80 bg-white rounded-lg shadow-2xl border overflow-hidden"
          >
            {/* Chat Header */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-3 animate-pulse"></div>
                <div>
                  <div className="font-semibold">Ivoire Digital</div>
                  <div className="text-xs opacity-90">Typically replies instantly</div>
                </div>
              </div>
              <div className="flex items-center space-x-1">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={toggleMinimize}
                  className="text-white hover:bg-white/20 p-1 h-auto"
                >
                  {chatState.isMinimized ? (
                    <Maximize2 className="h-4 w-4" />
                  ) : (
                    <Minimize2 className="h-4 w-4" />
                  )}
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={closeChat}
                  className="text-white hover:bg-white/20 p-1 h-auto"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Chat Content */}
            {!chatState.isMinimized && (
              <div className="flex flex-col h-96">
                {/* Messages */}
                <div className="flex-1 overflow-y-auto p-4 space-y-4">
                  {chatState.messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${
                        message.type === 'user' ? 'justify-end' : 'justify-start'
                      }`}
                    >
                      <div
                        className={`max-w-xs lg:max-w-md px-3 py-2 rounded-lg ${
                          message.type === 'user'
                            ? 'bg-blue-600 text-white'
                            : 'bg-gray-100 text-gray-800'
                        }`}
                      >
                        <div className="flex items-center mb-1">
                          {message.type === 'bot' && (
                            <Bot className="h-3 w-3 mr-1 text-blue-600" />
                          )}
                          {message.type === 'user' && (
                            <User className="h-3 w-3 mr-1 text-white" />
                          )}
                          <span className="text-xs opacity-70">
                            {formatTime(message.timestamp)}
                          </span>
                        </div>
                        <div className="text-sm">{message.content}</div>
                      </div>
                    </div>
                  ))}
                  
                  {/* Typing Indicator */}
                  {isTyping && (
                    <div className="flex justify-start">
                      <div className="bg-gray-100 px-3 py-2 rounded-lg">
                        <div className="flex items-center space-x-1">
                          <Bot className="h-3 w-3 text-blue-600" />
                          <div className="flex space-x-1">
                            <div className="w-1 h-1 bg-gray-500 rounded-full animate-bounce"></div>
                            <div className="w-1 h-1 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                            <div className="w-1 h-1 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  <div ref={messagesEndRef} />
                </div>

                {/* Message Input */}
                <div className="p-4 border-t bg-gray-50">
                  <div className="flex space-x-2">
                    <Textarea
                      value={currentMessage}
                      onChange={(e) => setCurrentMessage(e.target.value)}
                      onKeyPress={handleKeyPress}
                      placeholder="Type your message..."
                      className="flex-1 min-h-[40px] max-h-[100px] resize-none"
                      rows={1}
                    />
                    <Button
                      onClick={sendMessage}
                      disabled={!currentMessage.trim()}
                      className="bg-blue-600 hover:bg-blue-700 px-3"
                    >
                      <Send className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="text-xs text-gray-500 mt-2 text-center">
                    We're online and ready to help!
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}