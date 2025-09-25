import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton: React.FC = () => {
  return (
    <a
      href="https://wa.me/33651883151"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-2xl transition-all duration-300 transform hover:scale-110 flex items-center gap-3 group"
      style={{
        background: '#25D366',
        boxShadow: '0 4px 12px rgba(0,0,0,0.25)'
      }}
    >
      <MessageCircle className="w-6 h-6" />
      <span className="font-semibold hidden group-hover:block pr-2 transition-all duration-200">
        Écrivez-nous
      </span>
    </a>
  );
};

export default WhatsAppButton;