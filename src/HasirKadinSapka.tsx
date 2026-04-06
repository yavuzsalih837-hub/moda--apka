import React from 'react';
import { MessageCircle } from 'lucide-react';

export const HasirKadinSapka = () => {
  const series2 = Array.from({ length: 150 }, (_, i) => {
    const id = i + 1;
    const path = encodeURI("/images/hasir/2 (" + id + ").jpeg");
    return { id: `2-${id}`, name: `Hasır Model - 2 (${id})`, path };
  });

  const series4 = [
    { id: '4-0', name: 'Hasır Model - 4', path: encodeURI("/images/hasir/4.jpeg") },
    ...Array.from({ length: 150 }, (_, i) => {
      const id = i + 1;
      const path = encodeURI("/images/hasir/4 (" + id + ").jpeg");
      return { id: `4-${id}`, name: `Hasır Model - 4 (${id})`, path };
    })
  ];

  const products = [...series2, ...series4];

  const whatsappLink = `https://wa.me/905332659304`;

  return (
    <div className="min-h-screen bg-navy-900">
      {/* High-end Hero Section */}
      <section className="relative h-[40vh] flex items-center justify-center overflow-hidden border-b border-gold-500/10">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1533481480057-3ba677949174?auto=format&fit=crop&q=80&w=1920" 
            alt="Hasır Şapka Koleksiyonu" 
            className="w-full h-full object-cover opacity-40"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-navy-900/90 via-navy-900/50 to-navy-900"></div>
        </div>
        
        <div className="relative z-10 text-center px-6">
          <span className="text-gold-500 uppercase text-[10px] tracking-[0.5em] mb-4 block font-bold">
            Lüks B2B Koleksiyonu
          </span>
          <h1 className="text-4xl md:text-6xl font-serif text-white tracking-tight">
            Hasır Bayan <span className="italic gold-text-gradient">Şapka Modelleri</span>
          </h1>
        </div>
      </section>

      {/* Product Grid */}
      <section className="py-12 px-4 md:px-8">
        <div className="max-w-[1800px] mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {products.map((product, index) => (
              <div
                key={product.id}
                className="product-card group bg-navy-800/40 border border-gold-500/5 rounded-sm overflow-hidden hover:border-gold-500/30 transition-all duration-500"
              >
                <div className="aspect-[3/4] overflow-hidden relative product-card-img-container">
                  <img 
                    src={product.path} 
                    alt={product.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                    loading={index < 8 ? "eager" : "lazy"}
                    decoding="async"
                    onError={(e) => {
                      const card = e.currentTarget.closest('.product-card');
                      if (card instanceof HTMLElement) {
                        card.style.display = 'none';
                      }
                    }}
                  />
                </div>
                
                <div className="p-4 text-center">
                  <h3 className="text-white font-serif text-[11px] md:text-xs mb-3 tracking-wider line-clamp-1">
                    {product.name}
                  </h3>
                  
                  <a 
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-full bg-transparent border border-gold-500/30 text-gold-500 py-2 text-[9px] font-bold tracking-[0.2em] uppercase transition-all duration-300 rounded-sm hover:bg-gold-500 hover:text-navy-900"
                  >
                    <MessageCircle className="mr-2" size={12} />
                    TOPTAN FİYAT SOR
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WhatsApp CTA */}
      <section className="py-20 px-6 bg-navy-800/40 border-t border-gold-500/10 text-center">
        <h2 className="text-2xl md:text-4xl font-serif mb-6 text-white tracking-wide">Toptan Katalog Talebi</h2>
        <p className="text-gray-400 mb-8 text-sm font-light max-w-xl mx-auto">
          Özel B2B fiyat listemize ulaşmak için WhatsApp üzerinden bizimle iletişime geçebilirsiniz.
        </p>
        <a 
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center bg-gold-500 text-navy-900 px-10 py-4 text-xs font-bold tracking-[0.3em] uppercase hover:bg-white transition-all duration-500 rounded-sm"
        >
          <MessageCircle className="mr-3" size={18} />
          WhatsApp İletişim
        </a>
      </section>
    </div>
  );
};

