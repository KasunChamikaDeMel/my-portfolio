import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Bot, User, Loader2 } from 'lucide-react';

const AssistantChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content: 'Hi! I\'m your portfolio assistant. Ask me about Kasun\'s skills, projects, or experience!'
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const handleSendMessage = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');

    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);

    try {
      const lowerMessage = userMessage.toLowerCase();
      let assistantMessage = '';

      // responses
      if (lowerMessage.includes('skill') || lowerMessage.includes('technology') || lowerMessage.includes('tech stack')) {
        assistantMessage = "Kasun specializes in Full Stack Development with expertise in React, Next.js, Node.js, TypeScript, Python, and modern DevOps tools. He's also experienced in AI/ML, UI/UX design, and cloud platforms like AWS.";
      } else if (lowerMessage.includes('experience') || lowerMessage.includes('work')) {
        assistantMessage = "Kasun has 3+ years of experience as a Software Engineer, specializing in building scalable, high-performance applications. He's worked on various projects ranging from e-commerce platforms to AI-powered solutions.";
      } else if (lowerMessage.includes('project')) {
        assistantMessage = "You can explore Kasun's projects in the Projects section above! He's built everything from travel blogs and e-commerce platforms to AI-powered tools and cross-platform file sharing apps.";
      } else if (lowerMessage.includes('contact') || lowerMessage.includes('hire') || lowerMessage.includes('reach')) {
        assistantMessage = "You can reach Kasun through the Contact section at the bottom of this page. He's available for freelance work, collaborations, and full-time opportunities!";
      } else if (lowerMessage.includes('education') || lowerMessage.includes('degree')) {
        assistantMessage = "Kasun holds a BSc (Hons) in Software Engineering from Sri Lanka Technology Campus and has a strong foundation in Physical Sciences from his Advanced Level studies.";
      } else if (lowerMessage.includes('service') || lowerMessage.includes('offer')) {
        assistantMessage = "Kasun offers Frontend Development, Backend Development, Full Stack Solutions, and UI/UX Design services. Check out the Services section for more details!";
      } else if (lowerMessage.includes('hello') || lowerMessage.includes('hi') || lowerMessage.includes('hey')) {
        assistantMessage = "Hello! I'm here to help you learn more about Kasun Chamika De Mel's portfolio. Feel free to ask about his skills, projects, experience, or how to get in touch!";
      } else if (lowerMessage.includes('who') || lowerMessage.includes('about')) {
        assistantMessage = "Kasun Chamika De Mel is a dedicated Software Engineer with a passion for building scalable, high-performance applications. He specializes in Full Stack development, AI/ML, DevOps, and creating intuitive user experiences.";
      } else {
        assistantMessage = "I'm here to help you explore Kasun's portfolio! You can ask me about his skills, experience, projects, education, or how to contact him. What would you like to know?";
      }

      // delay
      await new Promise(resolve => setTimeout(resolve, 500));

      setMessages(prev => [...prev, { role: 'assistant', content: assistantMessage }]);

    } catch (error) {
      console.error('Chatbot Error:', error);
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: "I'm here to help! Ask me about Kasun's skills, projects, or experience."
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(true)}
            style={{ top: '20%', transform: 'translateY(-50%)' }}
            className="fixed right-6 z-[9999] p-4 bg-gradient-to-r from-primary-600 to-green-600 text-white rounded-full shadow-2xl hover:shadow-primary-500/50 transition-all duration-300"
          >
            <MessageCircle className="w-6 h-6" />
          </motion.button>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: 100, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 100, scale: 0.8 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            style={{ top: '25%', transform: 'translateY(-50%)' }}
            className="fixed right-6 z-[9999] w-96 h-[450px] bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-primary-200 flex flex-col overflow-hidden"
          >
            <div className="flex items-center justify-between p-4 bg-gradient-to-r from-primary-500/10 to-green-600/10 border-b border-primary-100">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary-100 rounded-lg">
                  <Bot className="w-5 h-5 text-primary-600" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-950">Virtual Portfolio Assistant</h3>
                  <p className="text-xs text-slate-600">Ask me anything!</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <X className="w-5 h-5 text-slate-500" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-blue-400/50 scrollbar-track-gray-100">
              {messages.map((message, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`flex gap-3 ${message.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}
                >
                  <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${message.role === 'user'
                    ? 'bg-primary-600'
                    : 'bg-green-100 border border-green-200'
                    }`}>
                    {message.role === 'user' ? (
                      <User className="w-4 h-4 text-white" />
                    ) : (
                      <Bot className="w-4 h-4 text-primary-600" />
                    )}
                  </div>
                  <div className={`flex-1 ${message.role === 'user' ? 'text-right' : 'text-left'}`}>
                    <div className={`inline-block px-4 py-2 rounded-2xl ${message.role === 'user'
                      ? 'bg-primary-600 text-white shadow-sm'
                      : 'bg-slate-100 text-slate-900 border border-slate-200'
                      }`}>
                      <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                    </div>
                  </div>
                </motion.div>
              ))}

              {isLoading && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex gap-3"
                >
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-100 border border-green-200 flex items-center justify-center">
                    <Bot className="w-4 h-4 text-primary-600" />
                  </div>
                  <div className="bg-slate-100 border border-slate-200 px-4 py-2 rounded-2xl">
                    <Loader2 className="w-5 h-5 text-primary-600 animate-spin" />
                  </div>
                </motion.div>
              )}

              <div ref={messagesEndRef} />
            </div>

            <div className="p-4 border-t border-primary-100 bg-slate-50/50">
              <div className="flex gap-2">
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Type your message..."
                  disabled={isLoading}
                  className="flex-1 px-4 py-3 bg-white text-slate-900 rounded-xl border border-slate-200 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/25 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                />
                <button
                  onClick={handleSendMessage}
                  disabled={!input.trim() || isLoading}
                  className="px-4 py-3 bg-gradient-to-r from-primary-600 to-green-600 text-white rounded-xl hover:shadow-lg hover:shadow-primary-500/50 transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:shadow-none"
                >
                  <Send className="w-5 h-5" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .scrollbar-thin::-webkit-scrollbar {
          width: 6px;
        }
        .scrollbar-thin::-webkit-scrollbar-track {
          background: rgba(31, 41, 55, 0.5);
          border-radius: 10px;
        }
        .scrollbar-thin::-webkit-scrollbar-thumb {
          background: rgba(137, 166, 127, 0.5);
          border-radius: 10px;
        }
        .scrollbar-thin::-webkit-scrollbar-thumb:hover {
          background: rgba(137, 166, 127, 0.7);
        }
      `}</style>
    </>
  );
};

export default AssistantChatbot;