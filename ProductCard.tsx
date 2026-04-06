import React from 'react';
import { motion } from 'motion/react';
import { Eye, MessageCircle } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

interface ProductCardProps {
  key?: React.Key;
  name: string;
  price?: string;
  image: string;
  description?: string;
  isNew?: boolean;
  stockStatus?: string;
  moq?: number;
  color?: string;
}

export const ProductCard = ({ name, price, image, description, isNew, stockStatus, moq, color }: ProductCardProps) => {
  const whatsappLink = CONTACT_INFO.whatsapp.getLink(`Merhaba, "${name}" ürünü hakkında bilgi almak istiyorum.`);

  const variants = color ? color.split(',').map(c => c.trim()) : [];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group bg-white border border-gray-100 p-4 rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
    >
      <div className="relative aspect-[4/3] overflow-hidden rounded-lg mb-4">
        {isNew && (
          <div className="absolute top-2 left-2 z-20 bg-black text-white text-[8px] font-bold tracking-widest uppercase px-2 py-1 rounded">
            Yeni
          </div>
        )}
        
        {/* Image Container */}
        <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-105">
          <img 
            src={image} 
            alt={name} 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
            loading="lazy"
          />
        </div>
      </div>

      <div className="space-y-3">
        <h3 className="text-xs font-bold text-gray-900 line-clamp-2 min-h-[2.5rem]">
          {name}
        </h3>

        {variants.length > 0 && (
          <div className="flex flex-wrap gap-1">
            {variants.map((v, i) => (
              <span key={i} className="bg-gray-100 text-gray-600 px-2 py-0.5 rounded text-[9px] font-medium">
                {v}
              </span>
            ))}
          </div>
        )}

        <div className="flex items-center justify-between">
          {stockStatus && (
            <p className={`text-[10px] font-bold ${
              stockStatus === 'Stokta Var' ? 'text-green-600' : 
              stockStatus === 'Sınırlı Stok' ? 'text-orange-500' : 'text-red-500'
            }`}>
              {stockStatus}
            </p>
          )}
          {moq && (
            <p className="text-[10px] text-gray-500">
              Min. Sipariş: {moq} Adet
            </p>
          )}
        </div>

        <motion.a 
          href="https://wa.me/905332659304?text=Merhaba,%20bir%20modeliniz%20hakkında%20toptan%20fiyat%20bilgisi%20almak%20istiyorum."
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.97 }}
          transition={{ duration: 0.2 }}
          className="flex items-center justify-center w-full bg-transparent border border-gold-500/30 text-gold-600 py-2.5 rounded-lg text-[10px] font-bold uppercase tracking-wider hover:bg-gold-500 hover:text-white transition-all duration-300 no-underline"
        >
          <MessageCircle className="mr-2" size={14} />
          Toptan Fiyat Sor
        </motion.a>
      </div>
    </motion.div>
  );
};
