import { motion } from 'motion/react';
import { Search, SlidersHorizontal, Grid2X2, Grid3X3 } from 'lucide-react';
import { ProductCard } from '../components/ProductCard';
import { useProducts } from '../context/ProductContext';
import { CONTACT_INFO } from '../constants';

export const Products = () => {
  const { products } = useProducts();
  
  // Curate products for the main catalog
  const curatedProducts = products.slice(0, 100);

  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <div className="py-24 px-6 bg-navy-900 border-b border-gold-500/10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <span className="text-gold-500 tracking-[0.4em] uppercase text-xs mb-4 block">Toptan Satış Kataloğu</span>
            <h1 className="text-4xl md:text-6xl font-serif mb-6">Tüm Ürünler</h1>
            <div className="w-24 h-[1px] bg-gold-500 mx-auto mb-8"></div>
            <p className="text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
              Premium bayan şapka koleksiyonumuzu keşfedin. Türkiye'deki lüks butikler ve üst düzey perakendeciler için tasarlandı.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Toolbar */}
      <div className="sticky top-20 z-30 bg-navy-900/95 backdrop-blur-md border-b border-gold-500/10 py-4 px-6">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-6">
          <div className="flex items-center space-x-8">
            <button className="flex items-center space-x-2 text-gray-400 hover:text-gold-500 transition-colors">
              <SlidersHorizontal size={18} />
              <span className="text-[10px] uppercase tracking-widest font-bold">Filtreler</span>
            </button>
            <div className="hidden md:flex items-center space-x-4 border-l border-gold-500/10 pl-8">
              <button className="text-gold-500"><Grid3X3 size={20} /></button>
              <button className="text-gray-500 hover:text-gold-500 transition-colors"><Grid2X2 size={20} /></button>
            </div>
          </div>

          <div className="flex-1 max-w-md relative">
            <input 
              type="text" 
              placeholder="Ürünlerde ara..." 
              className="w-full bg-navy-800/50 border border-gold-500/10 px-6 py-2 pl-12 rounded-full text-xs focus:outline-none focus:border-gold-500/40 transition-all text-gray-300"
            />
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gold-500/40" size={16} />
          </div>

          <div className="flex items-center space-x-4">
            <span className="text-[10px] text-gray-500 uppercase tracking-widest">Sırala:</span>
            <select className="bg-transparent text-[10px] text-gold-500 uppercase tracking-widest font-bold focus:outline-none cursor-pointer">
              <option className="bg-navy-900">En Yeni</option>
            </select>
          </div>
        </div>
      </div>

      {/* Product Grid */}
      <div className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-16">
          {curatedProducts.map((product) => (
            <ProductCard 
              key={product.id}
              name={product.name}
              image={product.image}
              price={product.price}
              description={product.description}
              isNew={product.isNew}
            />
          ))}
        </div>

        {/* Small note under product grid */}
        <div className="mt-12 text-center">
          <p className="text-gray-500 text-[10px] uppercase tracking-widest italic">
            Bu sayfada sınırlı sayıda model gösterilmektedir.
          </p>
        </div>

        {/* Daha Fazla Model Mevcut Section */}
        <div className="mt-24 text-center p-12 bg-navy-800/40 border border-gold-500/10 rounded-sm">
          <h3 className="text-2xl md:text-3xl font-serif text-white mb-4">Daha Fazla Model Mevcut</h3>
          <p className="text-gray-400 max-w-xl mx-auto mb-8 font-light leading-relaxed">
            Tüm ürünlerimizi görmek ve toptan fiyat bilgisi almak için bizimle iletişime geçin.
          </p>
          <a 
            href="https://wa.me/905332659304?text=Merhaba,%20tum%20sapka%20modellerinizi%20gormek%20istiyorum."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-gold-500 text-navy-900 px-12 py-5 text-[10px] font-bold tracking-widest uppercase hover:bg-white transition-all shadow-xl shadow-gold-500/5"
          >
            WhatsApp’tan Tüm Modelleri Gör
          </a>
        </div>

        {/* Load More / Pagination Placeholder */}
        <div className="mt-24 flex flex-col items-center">
          <div className="w-full max-w-xs h-[1px] bg-gold-500/10 mb-8"></div>
          <button className="text-gold-500 text-[10px] font-bold tracking-[0.4em] uppercase hover:text-white transition-colors">
            Daha Fazla Ürün Yükle
          </button>
        </div>

        {/* Wholesale Access Section */}
        <div className="mt-32 text-center p-20 bg-navy-800/20 border border-gold-500/5 rounded-sm">
          <h3 className="text-2xl font-serif text-gold-400 mb-4 italic">Özel Toptan Satış Erişimi</h3>
          <p className="text-gray-400 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
            Fiyatlandırma, stok seviyeleri ve toplu sipariş seçeneklerini içeren tam kataloğumuz için bizimle iletişime geçin.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a 
              href={CONTACT_INFO.whatsapp.getLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-gold-500 text-navy-900 px-10 py-4 text-[10px] font-bold tracking-widest uppercase hover:bg-white transition-all text-center"
            >
              WhatsApp ile Bilgi Alın
            </a>
            <a 
              href={CONTACT_INFO.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto border border-gold-500/30 text-gold-500 px-10 py-4 text-[10px] font-bold tracking-widest uppercase hover:bg-gold-500/10 transition-all text-center"
            >
              Instagram'dan Takip Edin
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
