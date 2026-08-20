import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, X, Star, ArrowRight, ShoppingBag } from 'lucide-react';
import { Product } from '../types';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  products: Product[];
  onSelectProduct: (product: Product) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  products,
  onSelectProduct
}) => {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    } else {
      setQuery('');
    }
  }, [isOpen]);

  const filteredProducts = query.trim()
    ? products.filter((p) => {
        const q = query.toLowerCase();
        return (
          p.name.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q) ||
          (p.description && p.description.toLowerCase().includes(q)) ||
          p.shades.some((s) => s.name.toLowerCase().includes(q))
        );
      })
    : [];

  const suggestedQueries = [
    'Velvet Lipstick',
    'Cloud Blush',
    'Skin Tint',
    'Glass Shine Lip Gloss',
    'Glow Highlighter',
    'Mascara'
  ];

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-y-auto bg-[#1e1b1b]/70 backdrop-blur-sm flex items-start justify-center pt-12 sm:pt-20 px-4">
        <motion.div
          initial={{ opacity: 0, y: -20, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -20, scale: 0.98 }}
          transition={{ duration: 0.2 }}
          className="bg-[#ffffff] w-full max-w-2xl rounded-3xl shadow-2xl border border-[#e8e1e0] overflow-hidden flex flex-col max-h-[80vh]"
        >
          {/* Search Input Bar */}
          <div className="p-4 sm:p-6 border-b border-[#e8e1e0] flex items-center gap-3 bg-[#fff8f7]">
            <Search className="w-5 h-5 text-[#71585b] flex-shrink-0" />
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search lipsticks, blush, shades, skin tint..."
              className="w-full bg-transparent border-none text-base sm:text-lg text-[#1e1b1b] placeholder-[#817475] focus:outline-none font-sans"
            />
            {query && (
              <button
                onClick={() => setQuery('')}
                className="text-xs text-[#817475] hover:text-[#1e1b1b] font-medium px-2 py-1 bg-[#e8e1e0] rounded-full"
              >
                Clear
              </button>
            )}
            <button
              onClick={onClose}
              className="p-1.5 rounded-full text-[#817475] hover:text-[#1e1b1b] hover:bg-[#f3ecec] transition-colors"
              aria-label="Close search"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body Content */}
          <div className="p-6 overflow-y-auto flex-1">
            {!query.trim() ? (
              <div className="space-y-4">
                <span className="text-xs uppercase tracking-widest font-semibold text-[#817475] block">
                  Popular Searches
                </span>
                <div className="flex flex-wrap gap-2">
                  {suggestedQueries.map((item) => (
                    <button
                      key={item}
                      onClick={() => setQuery(item)}
                      className="px-3.5 py-1.5 rounded-full bg-[#f3ecec] text-xs font-medium text-[#1e1b1b] hover:bg-[#f8d7da] hover:text-[#755c5f] transition-colors"
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>
            ) : filteredProducts.length === 0 ? (
              <div className="text-center py-10">
                <p className="text-sm font-semibold text-[#1e1b1b]">
                  No cosmetics found matching "{query}"
                </p>
                <p className="text-xs text-[#817475] mt-1">
                  Try searching for "Lipstick", "Blush", "Tint", or "Glow".
                </p>
              </div>
            ) : (
              <div className="space-y-3">
                <span className="text-xs uppercase tracking-widest font-semibold text-[#71585b] block">
                  {filteredProducts.length} {filteredProducts.length === 1 ? 'Product' : 'Products'} Found
                </span>
                <div className="divide-y divide-[#f3ecec]">
                  {filteredProducts.map((product) => (
                    <div
                      key={product.id}
                      onClick={() => {
                        onSelectProduct(product);
                        onClose();
                      }}
                      className="py-3 flex items-center justify-between gap-4 group cursor-pointer hover:bg-[#f9f2f1] px-3 rounded-xl transition-colors"
                    >
                      <div className="flex items-center gap-3.5">
                        <div className="w-12 h-12 rounded-lg bg-[#ffffff] border border-[#e8e1e0] p-1 flex-shrink-0 flex items-center justify-center">
                          <img
                            src={product.images[0]}
                            alt={product.name}
                            className="w-full h-full object-contain"
                          />
                        </div>
                        <div>
                          <h4 className="text-xs sm:text-sm font-bold text-[#1e1b1b] font-serif group-hover:text-[#71585b] transition-colors">
                            {product.name}
                          </h4>
                          <div className="flex items-center gap-2 text-[11px] text-[#817475] mt-0.5">
                            <span>{product.category}</span>
                            <span>•</span>
                            <span className="flex items-center gap-0.5 text-amber-500 font-medium">
                              <Star className="w-3 h-3 fill-amber-500" />
                              {product.rating}
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        <span className="text-xs sm:text-sm font-bold text-[#1e1b1b]">
                          Rs. {product.price.toLocaleString()}
                        </span>
                        <ArrowRight className="w-4 h-4 text-[#817475] group-hover:text-[#71585b] group-hover:translate-x-0.5 transition-all" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
