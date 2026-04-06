import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Categories } from './pages/Categories';
import { CategoryDetail } from './pages/CategoryDetail';
import { HasirKadinSapka } from './pages/HasirKadinSapka';
import { SiperlikSapka } from './pages/SiperlikSapka';
// import { Products } from './pages/Products';
import { Contact } from './pages/Contact';
// import { Admin } from './pages/Admin';
import { ProductProvider } from './context/ProductContext';

const AnimatedRoutes = () => {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <motion.div 
        key={location.pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/categories/hasir-kadin-sapka" element={<HasirKadinSapka />} />
          <Route path="/categories/siperlik-kadin-sapka" element={<SiperlikSapka />} />
          <Route path="/categories/:slug" element={<CategoryDetail />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
};

export default function App() {
  return (
    <ProductProvider>
      <Router>
        <Layout>
          <AnimatedRoutes />
        </Layout>
      </Router>
    </ProductProvider>
  );
}
