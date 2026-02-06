
import React, { useState, useMemo } from 'react';
import { Category, Product, Page } from './types';
import { PRODUCTS } from './constants';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductCard from './components/ProductCard';
import ProductModal from './components/ProductModal';
import Reviews from './components/Reviews';
import Boutique from './components/Boutique';
import { Instagram, Twitter, Facebook, Youtube } from 'lucide-react';

const App: React.FC = () => {
  const [activePage, setActivePage] = useState<Page>('Home');
  const [currentCategory, setCurrentCategory] = useState<Category | 'All'>('All');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Filter products based on selected category
  const filteredProducts = useMemo(() => {
    if (currentCategory === 'All') return PRODUCTS;
    return PRODUCTS.filter(p => p.category === currentCategory);
  }, [currentCategory]);

  // Categories to show in sections if 'All' is selected
  const sections: Category[] = ['New In', 'Luxe', 'Men', 'Women'];

  return (
    <div className="min-h-screen bg-white">
      <Navbar 
        activePage={activePage}
        activeCategory={currentCategory} 
        setPage={setActivePage}
        setCategory={setCurrentCategory}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />

      <main className="pt-16">
        {activePage === 'Boutique' ? (
          <Boutique />
        ) : (
          <>
            {currentCategory === 'All' && <Hero />}

            <div id="products" className="max-w-7xl mx-auto px-6 py-20">
              {currentCategory === 'All' ? (
                <>
                  {sections.map((section) => {
                    const sectionProducts = PRODUCTS.filter(p => p.category === section).slice(0, 8);
                    return (
                      <section key={section} className="mb-24 last:mb-0">
                        <div className="flex items-end justify-between mb-12">
                          <div>
                            <h2 className="text-4xl font-bold tracking-tight text-black">{section} Edition</h2>
                            <p className="text-gray-400 mt-2 font-light">Curated excellence for the modern minimalist.</p>
                          </div>
                          <button 
                            onClick={() => {
                              setCurrentCategory(section);
                              window.scrollTo(0, 0);
                            }}
                            className="text-black font-medium hover:underline flex items-center group mb-1"
                          >
                            See all
                            <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                          </button>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
                          {sectionProducts.map(product => (
                            <ProductCard 
                              key={product.id} 
                              product={product} 
                              onClick={setSelectedProduct} 
                            />
                          ))}
                        </div>
                      </section>
                    );
                  })}
                  
                  {/* Reviews Section integrated into the landing page */}
                  <Reviews />
                </>
              ) : (
                <section className="animate-fade-in">
                  <div className="mb-16">
                    <h2 className="text-5xl font-bold tracking-tight text-black">{currentCategory} Edition</h2>
                    <p className="text-gray-400 mt-4 text-lg font-light">Showing all {filteredProducts.length} pieces from our {currentCategory} collection.</p>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-12">
                    {filteredProducts.map(product => (
                      <ProductCard 
                        key={product.id} 
                        product={product} 
                        onClick={setSelectedProduct} 
                      />
                    ))}
                  </div>
                </section>
              )}
            </div>
          </>
        )}
      </main>

      <footer className="bg-[#f5f5f7] py-20 px-6 border-t border-gray-200">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-6">SOLEIL</h3>
            <p className="text-gray-500 max-w-sm leading-relaxed font-light mb-8">
              Crafting luxury footwear since 2018. Each pair is a testament to our commitment to quality, sustainability, and timeless design.
            </p>
            <div className="flex space-x-5">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="p-3 bg-white rounded-full text-gray-400 hover:text-black hover:shadow-md transition-all">
                <Instagram size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="p-3 bg-white rounded-full text-gray-400 hover:text-black hover:shadow-md transition-all">
                <Twitter size={20} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="p-3 bg-white rounded-full text-gray-400 hover:text-black hover:shadow-md transition-all">
                <Facebook size={20} />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="p-3 bg-white rounded-full text-gray-400 hover:text-black hover:shadow-md transition-all">
                <Youtube size={20} />
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-black mb-6">Explore</h4>
            <ul className="space-y-4 text-sm text-gray-500 font-light">
              {['Men', 'Women', 'Luxe', 'New In'].map(cat => (
                <li key={cat}>
                  <button 
                    onClick={() => {
                      setActivePage('Home');
                      setCurrentCategory(cat as Category);
                      window.scrollTo(0, 0);
                    }} 
                    className="hover:text-black transition-colors"
                  >
                    {cat} Edition
                  </button>
                </li>
              ))}
              <li>
                <button 
                  onClick={() => {
                    setActivePage('Boutique');
                    window.scrollTo(0, 0);
                  }} 
                  className="hover:text-black transition-colors"
                >
                  Our Boutique
                </button>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-black mb-6">Support</h4>
            <ul className="space-y-4 text-sm text-gray-500 font-light">
              <li><button className="hover:text-black transition-colors">Order Inquiry</button></li>
              <li><button className="hover:text-black transition-colors">Shipping & Returns</button></li>
              <li><button className="hover:text-black transition-colors">Sustainability</button></li>
              <li><button className="hover:text-black transition-colors">Contact WhatsApp</button></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-[10px] text-gray-400 font-bold uppercase tracking-widest">
          <p>© 2025 SOLEIL GLOBAL LTD. ALL RIGHTS RESERVED.</p>
          <div className="flex space-x-6">
            <button className="hover:text-black">Privacy Policy</button>
            <button className="hover:text-black">Terms of Service</button>
          </div>
        </div>
      </footer>

      {/* Modal Overlay */}
      <ProductModal 
        product={selectedProduct} 
        onClose={() => setSelectedProduct(null)} 
      />

      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slide-up {
          from { transform: translateY(50px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }
        .animate-fade-in {
          animation: fade-in 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .animate-slide-up {
          animation: slide-up 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default App;
