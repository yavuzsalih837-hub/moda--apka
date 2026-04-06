import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { MessageCircle } from 'lucide-react';

const categories = [
  {
    name: 'Hasır Bayan Şapka',
    slug: 'hasir-kadin-sapka',
    description: 'Elegant straw hats',
    image: '/images/hasir/44.jpeg'
  },
  {
    name: 'Siperlik Bayan Şapka',
    slug: 'siperlik-kadin-sapka',
    description: 'Stylish visors',
    image: '/images/hasir/yilan-derisi-orgu-hasir-vizor-sapka-gunes-koruyucu-siperlik-rs-2114-bej01-36765-97-B-1.jpg?v=1'
  }
];

export const Categories = () => {
  return (
    <div className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <span className="text-gold-500 tracking-[0.3em] uppercase text-xs mb-4 block">Koleksiyonlar</span>
          <h1 className="text-4xl md:text-6xl font-serif mb-6">Kategorilerimiz</h1>
          <div className="w-24 h-[1px] bg-gold-500 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {categories.map((category, i) => (
            <Link key={category.slug} to={`/categories/${category.slug}`}>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{ 
                  scale: 1.03,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.4)"
                }}
                transition={{ 
                  duration: 0.3,
                  ease: "easeInOut"
                }}
                className="relative aspect-[3/4] bg-navy-800 border border-gold-500/10 group overflow-hidden cursor-pointer rounded-sm"
              >
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                  <img 
                    src={category.image} 
                    alt={category.name} 
                    className={`w-full h-full ${category.slug === 'hasir-kadin-sapka' ? 'object-contain' : 'object-cover'} ${category.slug === 'siperlik-kadin-sapka' ? 'object-[0%_35%]' : category.slug === 'hasir-kadin-sapka' ? 'object-center' : ''} opacity-40 group-hover:opacity-60 group-hover:scale-105 transition-all duration-700`}
                    referrerPolicy="no-referrer"
                  />
                </div>

                <div className="absolute inset-0 bg-navy-900/40 group-hover:bg-navy-900/20 transition-colors duration-500 z-10"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center z-20">
                  <h3 className="text-2xl font-serif text-white tracking-widest uppercase group-hover:scale-110 transition-transform duration-500 text-center px-4">
                    {category.name}
                  </h3>
                  <span className="text-gold-500 text-xs tracking-[0.3em] uppercase mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    Koleksiyonu Görüntüle
                  </span>
                </div>
                <div className="absolute inset-0 bg-gold-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </motion.div>
            </Link>
          ))}
        </div>

        {/* Global WhatsApp Catalog Button */}
        <div className="max-w-4xl mx-auto mt-16">
          <motion.a
            href="https://wa.me/c/905332659304"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.02, backgroundColor: '#128C7E' }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center justify-center w-full bg-[#25D366] text-white py-6 md:py-8 px-8 rounded-sm shadow-2xl shadow-green-500/20 transition-all duration-300 group"
          >
            <MessageCircle className="mr-4 animate-pulse" size={28} />
            <span className="text-sm md:text-xl font-bold tracking-[0.15em] uppercase text-center">
              TÜM KATALOĞU WHATSAPP'TA GÖRÜNTÜLE
            </span>
          </motion.a>
        </div>

        <div className="mt-24 text-center p-12 border border-dashed border-gold-500/20 rounded-lg">
          <p className="text-gray-400 italic">Yeni sezon için daha fazla kategori hazırlanıyor. Takipte kalın.</p>
        </div>
      </div>
    </div>
  );
};
