import { motion } from 'motion/react';
import { Phone, MapPin, MessageCircle } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

export const Contact = () => {
  return (
    <div className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <span className="text-gold-500 tracking-[0.3em] uppercase text-xs mb-4 block">Bize Ulaşın</span>
          <h1 className="text-4xl md:text-6xl font-serif mb-6">Toptan Satış İçin İletişime Geçin</h1>
          <p className="text-gray-400 max-w-2xl mx-auto font-light">
            Ürünler, fiyatlar ve stok bilgisi için WhatsApp üzerinden bizimle iletişime geçebilirsiniz.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div className="lg:col-span-1 space-y-12">
            <div>
              <h3 className="text-xl font-serif text-gold-400 mb-6 flex items-center">
                <MapPin className="mr-3 text-gold-500" size={20} />
                Showroom
              </h3>
              <a 
                href={CONTACT_INFO.address.mapsUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 leading-relaxed hover:text-gold-300 transition-colors block"
              >
                {CONTACT_INFO.address.text}
              </a>
            </div>

            <div>
              <h3 className="text-xl font-serif text-gold-400 mb-6 flex items-center">
                <Phone className="mr-3 text-gold-500" size={20} />
                İletişim
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Telefon: {CONTACT_INFO.whatsapp.number}<br />
                WhatsApp: {CONTACT_INFO.whatsapp.number}
              </p>
            </div>

            </div>

            <div className="lg:col-span-2 flex items-center justify-center">
              <div className="w-full max-w-xl bg-navy-800/50 border border-gold-500/10 p-12 rounded-lg text-center">
                <div className="w-20 h-20 bg-gold-500/10 rounded-full flex items-center justify-center mx-auto mb-8">
                  <MessageCircle className="text-gold-500" size={40} />
                </div>
                <h2 className="text-2xl font-serif mb-6 text-white">Hızlı İletişim Hattı</h2>
                <p className="text-gray-400 mb-10 leading-relaxed">
                  Toptan siparişleriniz ve her türlü sorunuz için doğrudan WhatsApp üzerinden ekibimize ulaşabilirsiniz.
                </p>
                <motion.a 
                  href="https://wa.me/905332659304?text=Merhaba,%20toptan%20şapka%20hakkında%20bilgi%20almak%20istiyorum."
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ duration: 0.2 }}
                  className="inline-flex items-center justify-center bg-gold-500 hover:bg-gold-400 text-navy-900 px-12 py-5 text-sm font-bold tracking-[0.2em] uppercase transition-all duration-300 rounded-sm w-full md:w-auto"
                >
                  <MessageCircle size={20} className="mr-3" />
                  WhatsApp'tan Yaz
                </motion.a>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
};
