import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, User, Phone, ChevronDown, Instagram, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../lib/utils';
import { CONTACT_INFO } from '../constants';
import { FloatingWhatsApp } from './FloatingWhatsApp';

interface NavItemProps {
  to: string;
  children: React.ReactNode;
  onClick?: () => void;
}

const NavItem = ({ to, children, onClick }: NavItemProps) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link
      to={to}
      onClick={onClick}
      className={cn(
        "text-sm uppercase tracking-widest transition-colors duration-300 py-2",
        isActive ? "text-gold-400" : "text-gray-300 hover:text-gold-300",
        "nav-link-hover"
      )}
    >
      {children}
    </Link>
  );
};

export const Layout = ({ children }: { children: React.ReactNode }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      <header className="fixed top-0 left-0 w-full z-50 bg-navy-900/80 backdrop-blur-md border-b border-gold-500/20">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link to="/" className="flex flex-col items-center">
            <span className="font-serif text-2xl tracking-[0.2em] gold-text-gradient font-bold">MODA ŞAPKA</span>
            <span className="text-[10px] tracking-[0.4em] text-gold-500/70 uppercase -mt-1">Toptan Butik</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-10">
            <NavItem to="/">Ana Sayfa</NavItem>
            <div className="relative group">
              <Link to="/categories" className="text-sm uppercase tracking-widest text-gray-300 hover:text-gold-300 transition-colors duration-300 py-2 flex items-center group">
                Kategoriler
                <ChevronDown size={14} className="ml-1 group-hover:rotate-180 transition-transform duration-300" />
              </Link>
              <div className="absolute top-full left-0 w-64 bg-navy-900 border border-gold-500/20 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 pt-2">
                <div className="bg-navy-900 p-4 space-y-4 shadow-2xl">
                  <Link to="/categories/hasir-kadin-sapka" className="block text-xs uppercase tracking-widest text-gray-400 hover:text-gold-400 transition-colors">Hasır Bayan Şapka</Link>
                  <Link to="/categories/siperlik-kadin-sapka" className="block text-xs uppercase tracking-widest text-gray-400 hover:text-gold-400 transition-colors">Siperlik Bayan Şapka</Link>
                </div>
              </div>
            </div>
            <NavItem to="/contact">İletişim</NavItem>
          </nav>

          <div className="hidden md:flex items-center space-x-6">
            <motion.a 
              href={CONTACT_INFO.instagram.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-gold-400 transition-colors relative group"
              aria-label="Instagram"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Instagram size={20} />
              <div className="absolute inset-0 bg-gold-500/20 blur-lg rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.a>
            <motion.div
              whileHover={{ 
                scale: 1.05, 
                y: -2,
                boxShadow: "0 10px 20px -5px rgba(212, 175, 55, 0.3)"
              }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.2 }}
            >
              <Link to="/contact" className="bg-gold-500 hover:bg-gold-400 text-navy-900 px-6 py-2 text-xs font-bold tracking-widest uppercase transition-all duration-300 rounded-sm block">
                Toptan Satış Talebi
              </Link>
            </motion.div>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-gold-500"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </header>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-navy-900 pt-24 px-6 md:hidden"
          >
            <nav className="flex flex-col space-y-8 items-center text-center">
              <NavItem to="/" onClick={() => setIsMenuOpen(false)}>Ana Sayfa</NavItem>
              <div className="flex flex-col items-center space-y-4">
                <NavItem to="/categories" onClick={() => setIsMenuOpen(false)}>Kategoriler</NavItem>
                <div className="flex flex-col space-y-3">
                  <Link to="/categories/hasir-kadin-sapka" onClick={() => setIsMenuOpen(false)} className="text-xs uppercase tracking-widest text-gold-500/60 hover:text-gold-400">Hasır Bayan Şapka</Link>
                  <Link to="/categories/siperlik-kadin-sapka" onClick={() => setIsMenuOpen(false)} className="text-xs uppercase tracking-widest text-gold-500/60 hover:text-gold-400">Siperlik Bayan Şapka</Link>
                </div>
              </div>
              <NavItem to="/contact" onClick={() => setIsMenuOpen(false)}>İletişim</NavItem>
              <div className="pt-8 flex flex-col space-y-6 w-full max-w-xs">
                <Link 
                  to="/contact" 
                  onClick={() => setIsMenuOpen(false)}
                  className="bg-gold-500 text-navy-900 py-3 rounded-sm text-center text-sm font-bold tracking-widest uppercase"
                >
                  Toptan Satış Talebi
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="flex-grow pt-20">
        {children}
      </main>

      <footer className="bg-navy-900 border-t border-gold-500/10 py-16 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex flex-col mb-6">
              <span className="font-serif text-xl tracking-[0.2em] gold-text-gradient font-bold">MODA ŞAPKA</span>
              <span className="text-[8px] tracking-[0.4em] text-gold-500/70 uppercase">Toptan Butik</span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Türkiye'deki lüks butikler ve perakendeciler için toptan dağıtım konusunda uzmanlaşmış premium bayan şapka markası.
            </p>
            <div className="flex space-x-4">
              <motion.a 
                href={CONTACT_INFO.instagram.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gold-500 hover:text-white transition-colors relative group"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Instagram size={20} />
                <div className="absolute inset-0 bg-gold-500/20 blur-md rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.a>
              <motion.a 
                href={CONTACT_INFO.whatsapp.getLink()} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gold-500 hover:text-white transition-colors"
                whileHover={{ rotate: [0, -10, 10, -10, 10, 0] }}
                transition={{ duration: 0.5 }}
              >
                <MessageCircle size={20} />
              </motion.a>
            </div>
          </div>

          <div>
            <h4 className="text-gold-400 font-serif text-lg mb-6">Hızlı Bağlantılar</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><Link to="/" className="hover:text-gold-300 transition-colors">Ana Sayfa</Link></li>
              <li><Link to="/categories" className="hover:text-gold-300 transition-colors">Kategoriler</Link></li>
              <li><Link to="/contact" className="hover:text-gold-300 transition-colors">İletişim</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-gold-400 font-serif text-lg mb-6">Toptan Satış</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><Link to="/contact" className="hover:text-gold-300 transition-colors">İş Ortağımız Olun</Link></li>
              <li><Link to="/contact" className="hover:text-gold-300 transition-colors">Toplu Siparişler</Link></li>
              <li><Link to="/contact" className="hover:text-gold-300 transition-colors">Özel Tasarımlar</Link></li>
              <li><Link to="/contact" className="hover:text-gold-300 transition-colors">Gönderim Politikası</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-gold-400 font-serif text-lg mb-6">Bize Ulaşın</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-start space-x-3">
                <Phone size={16} className="text-gold-500 mt-1 shrink-0" />
                <span>{CONTACT_INFO.whatsapp.number}</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-4 h-4 mt-1 shrink-0 flex items-center justify-center">
                  <span className="text-gold-500">📍</span>
                </div>
                <a 
                  href={CONTACT_INFO.address.mapsUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-gold-300 transition-colors"
                >
                  {CONTACT_INFO.address.text}
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-gold-500/5 text-center text-xs text-gray-500 tracking-widest uppercase">
          MODA ŞAPKA
        </div>
      </footer>

      <FloatingWhatsApp />
    </div>
  );
};
