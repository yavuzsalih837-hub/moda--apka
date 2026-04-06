import React, { createContext, useContext, useState, useEffect } from 'react';
import { Product, products as initialProducts } from '../data/products';

interface ProductContextType {
  products: Product[];
  addProduct: (product: Omit<Product, 'id' | 'price' | 'isNew'>) => void;
  deleteProduct: (id: string) => void;
}

const ProductContext = createContext<ProductContextType | undefined>(undefined);

export const ProductProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [products, setProducts] = useState<Product[]>(() => {
    const saved = localStorage.getItem('modasapka_products');
    return saved ? JSON.parse(saved) : initialProducts;
  });

  useEffect(() => {
    localStorage.setItem('modasapka_products', JSON.stringify(products));
  }, [products]);

  const addProduct = (newProduct: Omit<Product, 'id' | 'price' | 'isNew'>) => {
    const product: Product = {
      ...newProduct,
      id: `prod-${Date.now()}`,
      price: '', // Catalog only, no pricing
      isNew: true,
    };
    setProducts((prev) => [product, ...prev]);
  };

  const deleteProduct = (id: string) => {
    setProducts((prev) => prev.filter((p) => p.id !== id));
  };

  return (
    <ProductContext.Provider value={{ products, addProduct, deleteProduct }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProducts = () => {
  const context = useContext(ProductContext);
  if (context === undefined) {
    throw new Error('useProducts must be used within a ProductProvider');
  }
  return context;
};
