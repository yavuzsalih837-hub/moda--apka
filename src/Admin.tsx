import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Plus, Trash2, Image as ImageIcon, Tag, Type, FileText } from 'lucide-react';
import { useProducts } from '../context/ProductContext';

export const Admin = () => {
  const { products, addProduct, deleteProduct } = useProducts();
  const [isAdding, setIsAdding] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    image: '',
    description: '',
    category: 'hasir-kadin-sapka',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addProduct(formData);
    setFormData({
      name: '',
      image: '',
      description: '',
      category: 'hasir-kadin-sapka',
    });
    setIsAdding(false);
  };

  return (
    <div className="min-h-screen bg-navy-900 py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
          <div>
            <span className="text-gold-500 tracking-[0.4em] uppercase text-xs mb-4 block">Yönetim Paneli</span>
            <h1 className="text-4xl md:text-5xl font-serif text-white">Ürün Yönetimi</h1>
          </div>
          <button
            onClick={() => setIsAdding(!isAdding)}
            className="flex items-center justify-center space-x-2 bg-gold-500 text-navy-900 px-8 py-4 text-xs font-bold tracking-widest uppercase hover:bg-white transition-all rounded-sm"
          >
            {isAdding ? <span className="text-lg">×</span> : <Plus size={18} />}
            <span>{isAdding ? 'Vazgeç' : 'Yeni Ürün Ekle'}</span>
          </button>
        </div>

        {isAdding && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-navy-800 border border-gold-500/20 p-8 rounded-sm mb-12"
          >
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <label className="block text-[10px] uppercase tracking-widest text-gold-500 mb-2 flex items-center">
                    <Type size={14} className="mr-2" /> Ürün Adı
                  </label>
                  <input
                    required
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-navy-900 border border-gold-500/10 px-4 py-3 text-sm text-gray-300 focus:outline-none focus:border-gold-500 transition-all"
                    placeholder="Örn: Klasik Yazlık Şapka"
                  />
                </div>
                <div>
                  <label className="block text-[10px] uppercase tracking-widest text-gold-500 mb-2 flex items-center">
                    <Tag size={14} className="mr-2" /> Kategori
                  </label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full bg-navy-900 border border-gold-500/10 px-4 py-3 text-sm text-gray-300 focus:outline-none focus:border-gold-500 transition-all"
                  >
                    <option value="hasir-kadin-sapka">Hasır Bayan Şapka</option>
                    <option value="siperlik-kadin-sapka">Siperlik Bayan Şapka</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[10px] uppercase tracking-widest text-gold-500 mb-2 flex items-center">
                    <ImageIcon size={14} className="mr-2" /> Görsel URL
                  </label>
                  <input
                    required
                    type="url"
                    value={formData.image}
                    onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                    className="w-full bg-navy-900 border border-gold-500/10 px-4 py-3 text-sm text-gray-300 focus:outline-none focus:border-gold-500 transition-all"
                    placeholder="https://images.unsplash.com/..."
                  />
                </div>
              </div>
              <div className="space-y-6">
                <div>
                  <label className="block text-[10px] uppercase tracking-widest text-gold-500 mb-2 flex items-center">
                    <FileText size={14} className="mr-2" /> Açıklama
                  </label>
                  <textarea
                    required
                    rows={8}
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    className="w-full bg-navy-900 border border-gold-500/10 px-4 py-3 text-sm text-gray-300 focus:outline-none focus:border-gold-500 transition-all resize-none"
                    placeholder="Ürün detaylarını buraya yazın..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-gold-500 text-navy-900 py-4 text-xs font-bold tracking-widest uppercase hover:bg-white transition-all"
                >
                  Ürünü Kaydet
                </button>
              </div>
            </form>
          </motion.div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-navy-800 border border-gold-500/10 p-4 flex items-center space-x-6 group hover:border-gold-500/30 transition-all"
            >
              <div className="w-24 h-24 shrink-0 overflow-hidden bg-navy-900">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex-grow min-w-0">
                <h3 className="text-sm uppercase tracking-widest text-white truncate mb-1">
                  {product.name}
                </h3>
                <p className="text-[10px] text-gold-500/60 uppercase tracking-widest mb-4">
                  {product.category === 'hasir-kadin-sapka' ? 'Hasır' : 'Siperlik'}
                </p>
                <button
                  onClick={() => {
                    if (window.confirm('Bu ürünü silmek istediğinize emin misiniz?')) {
                      deleteProduct(product.id);
                    }
                  }}
                  className="text-red-400 hover:text-red-300 transition-colors flex items-center text-[10px] uppercase tracking-widest font-bold"
                >
                  <Trash2 size={14} className="mr-1" /> Sil
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
