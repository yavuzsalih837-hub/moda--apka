import React from 'react';
import { motion } from 'motion/react';
import { MessageCircle } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

export const FloatingWhatsApp = () => {
  return (
    <motion.a
      href={CONTACT_INFO.whatsapp.getLink()}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ 
        scale: 1.1,
        rotate: [0, -5, 5, -5, 5, 0],
        boxShadow: "0 0 20px rgba(212, 175, 55, 0.4)"
      }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.3 }}
      className="fixed bottom-8 right-8 z-50 w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl border-2 border-transparent hover:border-gold-500/50 transition-all duration-300 group"
      aria-label="WhatsApp ile iletişime geçin"
    >
      <MessageCircle size={28} className="group-hover:animate-pulse" />
      
      {/* Tooltip */}
      <div className="absolute right-full mr-4 px-4 py-2 bg-navy-800 border border-gold-500/20 text-gold-500 text-[10px] uppercase tracking-widest font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-sm">
        WhatsApp ile Sorun
      </div>
    </motion.a>
  );
};
