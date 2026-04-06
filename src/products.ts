export interface Product {
  id: string;
  category: string;
  subcategory?: string;
  name: string;
  image: string;
  price: string;
  description: string;
  isNew?: boolean;
  stockStatus?: 'Stokta Var' | 'Sınırlı Stok' | 'Tükendi';
  moq?: number;
  style?: string;
  usageArea?: string;
  brimWidth?: string;
  color?: string;
}

export const products: Product[] = [
  // Hasir Kadin Sapka
  {
    id: 'hasir-1',
    category: 'hasir-kadin-sapka',
    subcategory: 'fedora-hasir-sapkalar',
    name: 'Klasik Hasır Şapka',
    image: 'https://images.unsplash.com/photo-1533444841961-9918109e10ee?auto=format&fit=crop&q=80&w=800',
    price: '',
    description: 'Doğal hasır dokusuyla zamansız bir klasik. Plaj ve günlük kullanım için ideal.',
    isNew: true,
    stockStatus: 'Stokta Var',
    moq: 10,
    style: 'Fedora',
    usageArea: 'Günlük',
    brimWidth: 'Orta',
    color: 'Naturel'
  },
  {
    id: 'hasir-2',
    category: 'hasir-kadin-sapka',
    subcategory: 'genis-kenarli-hasir-sapkalar',
    name: 'Geniş Kenarlı Hasır',
    image: 'https://images.unsplash.com/photo-1514327605112-b887c0e61c0a?auto=format&fit=crop&q=80&w=800',
    price: '',
    description: 'Maksimum güneş koruması sağlayan geniş kenarlı şık tasarım.',
    isNew: false,
    stockStatus: 'Sınırlı Stok',
    moq: 12,
    style: 'Klasik',
    usageArea: 'Plaj',
    brimWidth: 'Geniş',
    color: 'Ekru'
  },
  {
    id: 'hasir-3',
    category: 'hasir-kadin-sapka',
    subcategory: 'sik-davet-sapkalar',
    name: 'Fiyonklu Hasır Şapka',
    image: 'https://images.unsplash.com/photo-1521335629791-ce4aec67dd15?auto=format&fit=crop&q=80&w=800',
    price: '',
    description: 'Arka kısmındaki zarif fiyonk detayıyla romantik bir görünüm sunar.',
    isNew: true,
    stockStatus: 'Stokta Var',
    moq: 6,
    style: 'Modern',
    usageArea: 'Şık',
    brimWidth: 'Orta',
    color: 'Taba'
  },
  {
    id: 'hasir-4',
    category: 'hasir-kadin-sapka',
    subcategory: 'kovboy-stili-hasir-sapkalar',
    name: 'Bohem Kovboy Şapkası',
    image: 'https://images.unsplash.com/photo-1575428652377-a2d80e2277fc?auto=format&fit=crop&q=80&w=800',
    price: '',
    description: 'Yaz festivalleri için ideal, bohem detaylı kovboy stili hasır şapka.',
    isNew: false,
    stockStatus: 'Stokta Var',
    moq: 20,
    style: 'Kovboy',
    usageArea: 'Günlük',
    brimWidth: 'Orta',
    color: 'Naturel'
  },
  {
    id: 'hasir-5',
    category: 'hasir-kadin-sapka',
    subcategory: 'katlanabilir-hasir-sapkalar',
    name: 'Pratik Katlanabilir Şapka',
    image: 'https://images.unsplash.com/photo-1556306535-0f09a537f0a3?auto=format&fit=crop&q=80&w=800',
    price: '',
    description: 'Çantanızda kolayca taşıyabileceğiniz, formunu koruyan katlanabilir model.',
    isNew: true,
    stockStatus: 'Sınırlı Stok',
    moq: 50,
    style: 'Klasik',
    usageArea: 'Tatil',
    brimWidth: 'Orta',
    color: 'Ekru'
  }
];
