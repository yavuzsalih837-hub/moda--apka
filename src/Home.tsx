import { motion } from 'motion/react';
import { ArrowRight, Star, ShieldCheck, Truck, MessageCircle, MapPin, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const categories = [
  {
    name: 'Hasır Bayan Şapka',
    slug: 'hasir-kadin-sapka',
    image: '/images/hasir/44.jpeg'
  },
  {
    name: 'Siperlik Şapka',
    slug: 'siperlik-kadin-sapka',
    image: '/images/hasir/yilan-derisi-orgu-hasir-vizor-sapka-gunes-koruyucu-siperlik-rs-2114-bej01-36765-97-B-1.jpg?v=1'
  }
];

const trustPoints = [
  {
    title: "Toptan satışa özel fiyat avantajı",
    icon: <Star className="text-gold-500" size={24} />
  },
  {
    title: "Türkiye içi hızlı gönderim",
    icon: <Truck className="text-gold-500" size={24} />
  },
  {
    title: "Geniş ürün yelpazesi",
    icon: <ShieldCheck className="text-gold-500" size={24} />
  },
  {
    title: "Kemeraltı’nda fiziksel mağaza",
    icon: <MapPin className="text-gold-500" size={24} />
  }
];

const WHATSAPP_LINK = "https://wa.me/905332659304?text=Merhaba,%20toptan%20şapka%20hakkında%20bilgi%20almak%20istiyorum.";

export const Home = () => {
  return (
    <div className="overflow-hidden bg-navy-900">
      {/* 1. HERO SECTION */}
      <section className="relative py-32 md:py-48 px-6 border-b border-gold-500/10 overflow-hidden">
        {/* Atmospheric Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/hasir/duvar-resimleri-muhtesem-gunbatiminda-deniz-kenarinda-sezlong.jpg.jpg?v=1" 
            alt="Atmospheric Sunset Background" 
            className="w-full h-full object-cover opacity-[0.12] scale-105"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-navy-900/40 via-navy-900/20 to-navy-900"></div>
        </div>

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-serif mb-8 leading-tight text-white">
              Toptan Bayan <br /> <span className="italic gold-text-gradient">Şapka Modelleri</span>
            </h1>
            <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-12 font-light tracking-wide">
              150+ model seçeneği • Türkiye geneli gönderim • Hızlı iletişim
            </p>
            <motion.a 
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ 
                scale: 1.05, 
                y: -2,
                boxShadow: "0 10px 25px -5px rgba(212, 175, 55, 0.4)"
              }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.2 }}
              className="inline-flex items-center bg-gold-500 hover:bg-gold-400 text-navy-900 px-10 py-5 text-sm font-bold tracking-[0.2em] uppercase transition-all duration-300 rounded-sm group"
            >
              <MessageCircle className="mr-3" size={20} />
              WhatsApp’tan İletişime Geç
            </motion.a>
          </motion.div>
        </div>
        
        {/* Subtle background elements */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold-500/5 rounded-full blur-[120px] -z-10"></div>
      </section>

      {/* 2. CATEGORIES SECTION */}
      <section className="py-24 px-6 bg-navy-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-serif mb-4 text-white">Kategoriler</h2>
            <div className="w-24 h-[1px] bg-gold-500 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {categories.map((category, i) => (
              <Link key={category.slug} to={`/categories/${category.slug}`}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    boxShadow: "0 25px 50px -12px rgba(0,0,0,0.5)",
                    borderColor: "rgba(212, 175, 55, 0.4)"
                  }}
                  transition={{ 
                    duration: 0.5,
                    delay: i * 0.2,
                    ease: "easeOut"
                  }}
                  className="relative aspect-[16/9] bg-navy-800 border border-gold-500/10 group overflow-hidden rounded-sm"
                >
                  <div className="absolute inset-0 z-0">
                    <img 
                      src={category.image} 
                      alt={category.name} 
                      className={`w-full h-full ${category.slug === 'hasir-kadin-sapka' ? 'object-contain' : 'object-cover'} ${category.slug === 'siperlik-kadin-sapka' ? 'object-[0%_35%]' : category.slug === 'hasir-kadin-sapka' ? 'object-center' : ''} opacity-40 group-hover:opacity-60 group-hover:scale-105 transition-all duration-700`}
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-navy-900/40 to-transparent"></div>
                  </div>
                  
                  <div className="absolute inset-0 flex flex-col items-center justify-center z-10 p-6">
                    <h3 className="text-2xl md:text-3xl font-serif text-white tracking-widest uppercase text-center mb-4">
                      {category.name}
                    </h3>
                    <div className="flex items-center text-gold-500 text-xs tracking-[0.3em] uppercase opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
                      Koleksiyonu İncele <ArrowRight className="ml-2" size={14} />
                    </div>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>

        {/* Global WhatsApp Catalog Button */}
        <div className="max-w-5xl mx-auto mt-16 px-6">
          <motion.a
            href="https://wa.me/c/905332659304"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ 
              scale: 1.02, 
              backgroundColor: '#128C7E',
              boxShadow: "0 20px 40px -10px rgba(37, 211, 102, 0.3)"
            }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center justify-center w-full bg-[#25D366] text-white py-6 md:py-8 px-8 rounded-sm shadow-2xl shadow-green-500/20 transition-all duration-300 group"
          >
            <MessageCircle className="mr-4 animate-pulse" size={28} />
            <span className="text-sm md:text-xl font-bold tracking-[0.15em] uppercase text-center">
              TÜM KATALOĞU WHATSAPP'TA GÖRÜNTÜLE
            </span>
          </motion.a>
        </div>
      </section>

      {/* 3. TRUST SECTION */}
      <section className="py-24 px-6 border-y border-gold-500/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-serif mb-4 text-white">Neden Moda Şapka?</h2>
            <div className="w-24 h-[1px] bg-gold-500 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {trustPoints.map((point, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 bg-navy-800/50 border border-gold-500/5 rounded-sm hover:border-gold-500/20 transition-colors text-center"
              >
                <div className="w-12 h-12 bg-gold-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  {point.icon}
                </div>
                <h3 className="text-lg font-serif text-gray-200 leading-relaxed">
                  {point.title}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. FINAL CTA SECTION */}
      <section className="py-32 px-6 bg-navy-800/50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-6xl font-serif mb-8 text-white">Toptan Alım İçin Hemen Yazın</h2>
            <p className="text-gray-400 mb-12 text-lg max-w-xl mx-auto font-light">
              Tüm modellerimiz ve toptan fiyat listemiz için WhatsApp üzerinden anında bilgi alabilirsiniz.
            </p>
            <motion.a 
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ 
                scale: 1.05, 
                y: -2,
                boxShadow: "0 20px 40px -10px rgba(212, 175, 55, 0.3)"
              }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.2 }}
              className="inline-flex items-center bg-gold-500 hover:bg-gold-400 text-navy-900 px-16 py-6 text-sm font-bold tracking-[0.2em] uppercase transition-all duration-300 rounded-sm shadow-xl shadow-gold-500/10"
            >
              <MessageCircle className="mr-3" size={24} />
              WhatsApp’tan Yaz
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
