import { useState, useMemo, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'motion/react';
import { MessageCircle } from 'lucide-react';
import { ProductCard } from '../components/ProductCard';
import { useProducts } from '../context/ProductContext';
import { CONTACT_INFO } from '../constants';

interface SiperlikProduct {
  id: number;
  name: string;
  image: string;
}

const categoryData: Record<string, { name: string; description: string; image: string }> = {
  'hasir-kadin-sapka': {
    name: 'Hasır Bayan Şapka',
    description: 'Toptan bayan hasır şapka koleksiyonumuzla butiğinize değer katın. Geniş model yelpazesi, uygun fiyat baremleri ve hızlı stok gönderimi ile B2B çözüm ortağınızız.',
    image: '/images/hasir/hasir-sapka-fiyonklu-bejsapka-hasir-sa-76-910.jpg?v=1'
  },
  'siperlik-kadin-sapka': {
    name: 'Siperlik Şapka Modelleri',
    description: 'Maksimum koruma ve eşsiz stil için tasarlanmış şık siperlikler ve geniş kenarlı güneş şapkaları.',
    image: '/images/hasir/yilan-derisi-orgu-hasir-vizor-sapka-gunes-koruyucu-siperlik-rs-2114-bej01-36765-97-B-1.jpg'
  }
};

export const CategoryDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const { products } = useProducts();
  
  const category = slug ? categoryData[slug] : null;

  const filteredProducts = useMemo(() => {
    return products.filter(p => p.category === slug);
  }, [products, slug]);

  if (!category) {
    return (
      <div className="py-24 px-6 text-center">
        <h1 className="text-4xl font-serif text-gold-500">Kategori Bulunamadı</h1>
        <p className="text-gray-400 mt-4">Aradığınız kategori mevcut değil.</p>
      </div>
    );
  }

  const displayTitle = category.name;
  const displayDesc = category.description;

  const whatsappLink = CONTACT_INFO.whatsapp.getLink(`Merhaba, ${displayTitle} koleksiyonunuz hakkında toptan fiyat teklifi almak istiyorum.`);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[40vh] md:h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={category.image} 
            alt={displayTitle} 
            className="w-full h-full object-cover opacity-30"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-navy-900/80 via-navy-900/60 to-navy-900"></div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-6"
        >
          <span className="text-gold-500 tracking-[0.4em] uppercase text-[10px] mb-4 block">B2B Toptan Koleksiyonu</span>
          <h1 className="text-4xl md:text-6xl font-serif mb-6 text-white">{displayTitle}</h1>
          <div className="w-24 h-[1px] bg-gold-500 mx-auto mb-8"></div>
          <p className="text-gray-300 max-w-2xl mx-auto font-light leading-relaxed text-sm">
            {displayDesc}
          </p>
        </motion.div>
      </div>

      {/* Product Grid */}
      <div className={`py-6 px-6 ${(slug === 'siperlik-kadin-sapka' || slug === 'hasir-kadin-sapka') ? 'bg-navy-900' : ''}`}>
        <div className="max-w-7xl mx-auto">
          {slug === 'siperlik-kadin-sapka' ? (
            <div id="visor-category-content">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-5xl font-serif mb-4 text-white">Siperlik Bayan Şapka Modelleri</h2>
                <div className="w-24 h-[1px] bg-gold-500 mx-auto"></div>
              </div>
              
              <VisorGrid />
            </div>
          ) : slug === 'hasir-kadin-sapka' ? (
            <div id="hasir-category-content">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-5xl font-serif mb-4 text-white">Hasır Bayan Şapka</h2>
                <div className="w-24 h-[1px] bg-gold-500 mx-auto"></div>
              </div>
              
              <HasirGrid />
            </div>
          ) : (
            <>
              {filteredProducts.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
                  {filteredProducts.map((product) => (
                    <ProductCard 
                      key={product.id}
                      name={product.name}
                      image={product.image}
                      price={product.price}
                      description={product.description}
                      isNew={product.isNew}
                      stockStatus={product.stockStatus}
                      moq={product.moq}
                      color={product.color}
                    />
                  ))}
                </div>
              ) : (
                <div className="text-center py-24">
                  <p className="text-gray-500 italic">Seçilen filtrelere uygun model bulunamadı.</p>
                  <button 
                    onClick={() => {
                      // Reset logic if needed
                    }}
                    className="mt-6 text-gold-500 text-[10px] uppercase tracking-widest font-bold hover:text-white transition-colors"
                  >
                    Tüm Ürünleri Gör
                  </button>
                </div>
              )}

              {/* Small note under product grid */}
              <div className="mt-12 text-center">
                <p className="text-gray-500 text-[10px] uppercase tracking-widest italic">
                  Koleksiyonumuzdaki modelleri yukarıdaki filtreleri kullanarak inceleyebilirsiniz.
                </p>
              </div>

              {/* Daha Fazla Model Mevcut Section */}
              <div className={`mt-24 text-center p-12 border border-gold-500/10 rounded-sm bg-navy-800/40`}>
                <h3 className="text-2xl md:text-3xl font-serif mb-4 text-white">Daha Fazla Model Mevcut</h3>
                <p className="max-w-xl mx-auto mb-8 font-light leading-relaxed text-sm text-gray-400">
                  Tüm ürünlerimizi görmek ve toptan fiyat bilgisi almak için bizimle iletişime geçin. Butiğiniz için en uygun koleksiyonu birlikte seçelim.
                </p>
                <motion.a 
                  href="https://wa.me/905332659304?text=Merhaba,%20tum%20sapka%20modellerinizi%20gormek%20istiyorum."
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ duration: 0.2 }}
                  className="inline-flex items-center bg-gold-500 text-navy-900 px-12 py-5 text-[10px] font-bold tracking-widest uppercase hover:bg-white transition-all shadow-xl shadow-gold-500/5"
                >
                  WhatsApp’tan Tüm Modelleri Gör
                </motion.a>
              </div>

              {/* B2B Info Section */}
              <div className={`mt-32 text-center p-20 border border-gold-500/5 rounded-sm bg-navy-800/20`}>
                <h3 className="text-2xl font-serif mb-4 italic text-gold-400">Özel Toptan Satış Kataloğu</h3>
                <p className="max-w-2xl mx-auto mb-10 font-light leading-relaxed text-sm text-gray-400">
                  Tam {displayTitle} koleksiyonumuz sadece kayıtlı toptan satış ortaklarımıza özeldir. Fiyatları görmek ve toplu sipariş vermek için iletişime geçin.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                  <motion.a 
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.97 }}
                    transition={{ duration: 0.2 }}
                    className="w-full sm:w-auto bg-gold-500 text-navy-900 px-10 py-4 text-[10px] font-bold tracking-widest uppercase hover:bg-white transition-all text-center"
                  >
                    WhatsApp ile Bilgi Alın
                  </motion.a>
                  <motion.a 
                    href={CONTACT_INFO.instagram.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.97 }}
                    transition={{ duration: 0.2 }}
                    className="w-full sm:w-auto border border-gold-500/30 text-gold-500 px-10 py-4 text-[10px] font-bold tracking-widest uppercase hover:bg-gold-500/10 transition-all text-center"
                  >
                    Instagram'dan Takip Edin
                  </motion.a>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

const HasirGrid = () => {
  const [imageErrors, setImageErrors] = useState<Record<number, boolean>>({});

  // Force 99 items as requested, mapping to new naming convention
  const products = useMemo(() => {
    return Array.from({ length: 99 }, (_, i) => ({
      id: i + 1,
      name: `Hasır Model - ${i + 1}`,
      image: `/images/hasir/sapka 1 (${i + 1}).jpeg`,
      price: 'Toptan Fiyat Sor'
    }));
  }, []);

  const handleImageError = (id: number) => {
    setImageErrors(prev => ({ ...prev, [id]: true }));
  };

  return (
    <div id="productGrid" className="product-grid">
      <div className="flex flex-col items-center justify-center py-20 border border-gold-500/20 bg-navy-800/40 rounded-sm w-full">
        <div className="w-12 h-12 border-4 border-gold-500/30 border-t-gold-500 rounded-full animate-spin mb-6"></div>
        <h2 className="text-2xl font-serif text-white mb-2 tracking-widest uppercase">Galeri Güncelleniyor...</h2>
        <p className="text-gold-500/60 font-light tracking-wider">Yeni modellerimiz yükleniyor, lütfen bekleyiniz.</p>
      </div>
      {/* 
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
        {products.map((product) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="bg-navy-800/40 border border-gold-500/5 rounded-sm overflow-hidden p-4 group hover:border-gold-500/30 transition-all duration-300"
          >
            <div className="aspect-[4/5] bg-navy-700/50 rounded-sm mb-4 overflow-hidden relative">
              {imageErrors[product.id] ? (
                <div className="w-full h-full bg-gold-500/10 flex flex-col items-center justify-center border border-gold-500/20">
                  <div className="w-6 h-6 border-2 border-gold-500/30 border-t-gold-500 rounded-full animate-spin mb-2"></div>
                  <span className="text-gold-500 text-[8px] font-bold tracking-widest uppercase">Yükleniyor...</span>
                </div>
              ) : (
                <img
                  src={encodeURI(product.image)}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  onError={() => handleImageError(product.id)}
                />
              )}
            </div>
            
            <div className="space-y-3 text-center">
              <h3 className="text-white font-medium text-sm line-clamp-2 min-h-[2.5rem]">
                {product.name}
              </h3>
              
              <motion.a 
                href={`https://wa.me/905332659304?text=${encodeURIComponent(`Merhaba, ${product.name} hakkında toptan fiyat bilgisi almak istiyorum.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center text-gold-400 font-bold hover:text-gold-300 transition-colors no-underline group/link"
              >
                <MessageCircle className="mr-2 opacity-70 group-hover/link:opacity-100 transition-opacity" size={16} />
                {product.price}
              </motion.a>
            </div>
          </motion.div>
        ))}
      </div>
      */}
    </div>
  );
};

const VisorGrid = () => {
  const [visorProducts, setVisorProducts] = useState<SiperlikProduct[]>([]);
  const WHATSAPP_LINK = "https://wa.me/905332659304?text=Merhaba,%20bir%20modeliniz%20hakkında%20toptan%20fiyat%20bilgisi%20almak%20istiyorum.";

  useEffect(() => {
    if (window.location.pathname.includes("siperlik-kadin-sapka")) {
      fetch('/data/products.json')
        .then(res => res.json())
        .then(data => {
          // Filter out products without images
          const validProducts = data.filter((p: SiperlikProduct) => p.image);
          setVisorProducts(validProducts);
        })
        .catch(err => {
          console.error("Failed to fetch products:", err);
          // No fallback generation here as per user request
          setVisorProducts([]);
        });
    }
  }, []);

  return (
    <div id="productGrid" className="product-grid grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
      {visorProducts.map((product, i) => (
        <motion.div
          key={product.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: (i % 4) * 0.05 }}
          className="group bg-navy-800 border border-gold-500/10 rounded-sm overflow-hidden hover:border-gold-500/30 transition-all duration-500 hover:scale-[1.02]"
        >
          <div className="aspect-[4/5] overflow-hidden relative">
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              referrerPolicy="no-referrer"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-navy-900/20 group-hover:bg-transparent transition-colors duration-500"></div>
          </div>
          
          <div className="p-4 md:p-6 text-center">
            <h3 className="text-white font-serif text-lg mb-4 tracking-wide">
              {product.name}
            </h3>
            <a 
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-full bg-transparent border border-gold-500/30 hover:bg-gold-500 hover:text-navy-900 text-gold-500 py-3 text-xs font-bold tracking-widest uppercase transition-all duration-300 rounded-sm"
            >
              <MessageCircle className="mr-2" size={14} />
              Toptan Fiyat Sor
            </a>
          </div>
        </motion.div>
      ))}
    </div>
  );
};
