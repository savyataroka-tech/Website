import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Star, Heart, ShoppingBag, Truck, ShieldCheck, ChevronDown, Check, Sparkles } from 'lucide-react';
import { Product, Shade } from '../types';

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (product: Product, shade: Shade, quantity: number) => void;
  onBuyNow: (product: Product, shade: Shade, quantity: number) => void;
  isWishlisted: boolean;
  onToggleWishlist: (product: Product) => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  onClose,
  onAddToCart,
  onBuyNow,
  isWishlisted,
  onToggleWishlist
}) => {
  if (!product) return null;

  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [selectedShade, setSelectedShade] = useState<Shade>(product.shades[0]);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<'desc' | 'usage' | 'ingredients' | 'shipping'>('desc');

  const handleIncrement = () => setQuantity((q) => Math.min(10, q + 1));
  const handleDecrement = () => setQuantity((q) => Math.max(1, q - 1));

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-y-auto bg-[#1e1b1b]/70 backdrop-blur-sm flex items-center justify-center p-2 sm:p-4 md:p-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="bg-[#ffffff] w-full max-w-4xl rounded-3xl shadow-2xl border border-[#e8e1e0] overflow-hidden relative max-h-[92vh] flex flex-col"
        >
          {/* Header Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 p-2 rounded-full bg-[#ffffff]/80 backdrop-blur-md text-[#1e1b1b] hover:bg-[#f3ecec] transition-colors border border-[#e8e1e0]"
            aria-label="Close product details"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Modal Scrollable Body */}
          <div className="overflow-y-auto flex-1 p-6 sm:p-8 md:p-10">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-10">
              {/* Left Gallery Column */}
              <div className="md:col-span-6 space-y-4">
                {/* Main Large Image */}
                <div className="aspect-square rounded-2xl overflow-hidden bg-[#f9f2f1] border border-[#e8e1e0] relative flex items-center justify-center p-4">
                  <img
                    src={product.images[selectedImageIndex] || product.images[0]}
                    alt={product.name}
                    className="w-full h-full object-contain object-center transition-all duration-300"
                  />

                  {product.badge && (
                    <span className="absolute top-4 left-4 px-3 py-1 bg-[#f8d7da] text-[#755c5f] text-[10px] font-bold tracking-widest uppercase rounded-full">
                      {product.badge}
                    </span>
                  )}
                </div>

                {/* Thumbnail Previews */}
                {product.images.length > 1 && (
                  <div className="flex items-center gap-3 overflow-x-auto pb-2">
                    {product.images.map((img, idx) => (
                      <button
                        key={idx}
                        onClick={() => setSelectedImageIndex(idx)}
                        className={`w-16 h-16 rounded-xl overflow-hidden bg-[#f9f2f1] border flex-shrink-0 transition-all ${
                          selectedImageIndex === idx
                            ? 'border-[#71585b] ring-2 ring-[#71585b]/30'
                            : 'border-[#e8e1e0] opacity-70 hover:opacity-100'
                        }`}
                      >
                        <img
                          src={img}
                          alt={`${product.name} preview ${idx + 1}`}
                          className="w-full h-full object-cover object-center"
                        />
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Right Details Column */}
              <div className="md:col-span-6 flex flex-col justify-between">
                <div>
                  {/* Category & Ratings */}
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#71585b]">
                      {product.category}
                    </span>
                    <div className="flex items-center gap-1 text-amber-500">
                      <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
                      <span className="text-xs font-bold text-[#1e1b1b]">
                        {product.rating}
                      </span>
                      <span className="text-xs text-[#817475]">
                        ({product.reviewCount} reviews)
                      </span>
                    </div>
                  </div>

                  {/* Title & Subtitle */}
                  <h2 className="text-2xl sm:text-3xl font-serif text-[#1e1b1b] font-normal leading-snug">
                    {product.name}
                  </h2>
                  {product.subtitle && (
                    <p className="text-xs text-[#71585b] font-medium mt-1">
                      {product.subtitle}
                    </p>
                  )}

                  {/* Price */}
                  <div className="flex items-baseline gap-3 my-4">
                    <span className="text-2xl font-bold text-[#1e1b1b]">
                      Rs. {product.price.toLocaleString()}
                    </span>
                    {product.originalPrice && (
                      <span className="text-sm text-[#817475] line-through">
                        Rs. {product.originalPrice.toLocaleString()}
                      </span>
                    )}
                    <span className="text-[11px] px-2.5 py-0.5 bg-[#f8d7da] text-[#755c5f] font-semibold rounded-full">
                      Inclusive of all taxes
                    </span>
                  </div>

                  {/* Shade Selection */}
                  {product.shades.length > 0 && (
                    <div className="mb-6 pt-4 border-t border-[#f3ecec]">
                      <div className="flex items-center justify-between mb-3">
                        <label className="text-xs font-bold uppercase tracking-wider text-[#1e1b1b]">
                          Shade: <span className="text-[#71585b] font-medium">{selectedShade.name}</span>
                        </label>
                      </div>

                      <div className="flex flex-wrap gap-2.5">
                        {product.shades.map((shade) => (
                          <button
                            key={shade.id}
                            onClick={() => setSelectedShade(shade)}
                            className={`flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs font-medium transition-all ${
                              selectedShade.id === shade.id
                                ? 'border-[#71585b] bg-[#f8d7da]/30 text-[#1e1b1b] ring-1 ring-[#71585b]'
                                : 'border-[#d2c3c4] text-[#4f4445] hover:border-[#817475]'
                            }`}
                          >
                            <span
                              className="w-3.5 h-3.5 rounded-full border border-black/15 flex-shrink-0"
                              style={{ backgroundColor: shade.hex }}
                            />
                            <span>{shade.name}</span>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Quantity & CTA Buttons */}
                  <div className="space-y-3 pt-2">
                    <div className="flex items-center gap-4">
                      {/* Quantity Stepper */}
                      <div className="flex items-center border border-[#d2c3c4] rounded-lg bg-[#ffffff]">
                        <button
                          onClick={handleDecrement}
                          className="px-3.5 py-2.5 text-[#1e1b1b] hover:bg-[#f3ecec] transition-colors rounded-l-lg"
                          aria-label="Decrease quantity"
                        >
                          -
                        </button>
                        <span className="px-4 py-2 text-sm font-bold text-[#1e1b1b]">
                          {quantity}
                        </span>
                        <button
                          onClick={handleIncrement}
                          className="px-3.5 py-2.5 text-[#1e1b1b] hover:bg-[#f3ecec] transition-colors rounded-r-lg"
                          aria-label="Increase quantity"
                        >
                          +
                        </button>
                      </div>

                      {/* Wishlist Button */}
                      <button
                        onClick={() => onToggleWishlist(product)}
                        className={`p-3 rounded-lg border transition-colors ${
                          isWishlisted
                            ? 'border-[#71585b] text-[#71585b] bg-[#f8d7da]/30'
                            : 'border-[#d2c3c4] text-[#817475] hover:text-[#71585b] hover:border-[#71585b]'
                        }`}
                        title="Save to Wishlist"
                      >
                        <Heart className={`w-5 h-5 ${isWishlisted ? 'fill-[#71585b]' : ''}`} />
                      </button>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                      <button
                        onClick={() => {
                          onAddToCart(product, selectedShade, quantity);
                        }}
                        className="btn-primary-dark w-full py-3.5 rounded-none"
                      >
                        <ShoppingBag className="w-4 h-4" />
                        <span>ADD TO BAG</span>
                      </button>

                      <button
                        onClick={() => {
                          onBuyNow(product, selectedShade, quantity);
                        }}
                        className="btn-primary w-full py-3.5 rounded-none text-center"
                      >
                        <span>BUY NOW</span>
                      </button>
                    </div>
                  </div>

                  {/* Delivery Trust Note */}
                  <div className="mt-6 p-3.5 bg-[#f9f2f1] rounded-xl border border-[#e8e1e0] flex items-center gap-3 text-xs text-[#4f4445]">
                    <Truck className="w-5 h-5 text-[#71585b] flex-shrink-0" />
                    <div>
                      <span className="font-bold text-[#1e1b1b]">Complimentary delivery</span> on orders above Rs. 2,500. Standard 2-3 day delivery across Kathmandu & Nepal.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Accordion Tabs for Rich Product Details */}
            <div className="mt-10 pt-8 border-t border-[#e8e1e0]">
              <div className="flex border-b border-[#e8e1e0] gap-4 sm:gap-8 overflow-x-auto">
                <button
                  onClick={() => setActiveTab('desc')}
                  className={`pb-3 text-xs font-bold uppercase tracking-wider transition-colors border-b-2 whitespace-nowrap ${
                    activeTab === 'desc'
                      ? 'border-[#71585b] text-[#71585b]'
                      : 'border-transparent text-[#817475] hover:text-[#1e1b1b]'
                  }`}
                >
                  Description & Features
                </button>
                <button
                  onClick={() => setActiveTab('usage')}
                  className={`pb-3 text-xs font-bold uppercase tracking-wider transition-colors border-b-2 whitespace-nowrap ${
                    activeTab === 'usage'
                      ? 'border-[#71585b] text-[#71585b]'
                      : 'border-transparent text-[#817475] hover:text-[#1e1b1b]'
                  }`}
                >
                  How to Use
                </button>
                <button
                  onClick={() => setActiveTab('ingredients')}
                  className={`pb-3 text-xs font-bold uppercase tracking-wider transition-colors border-b-2 whitespace-nowrap ${
                    activeTab === 'ingredients'
                      ? 'border-[#71585b] text-[#71585b]'
                      : 'border-transparent text-[#817475] hover:text-[#1e1b1b]'
                  }`}
                >
                  Ingredients
                </button>
                <button
                  onClick={() => setActiveTab('shipping')}
                  className={`pb-3 text-xs font-bold uppercase tracking-wider transition-colors border-b-2 whitespace-nowrap ${
                    activeTab === 'shipping'
                      ? 'border-[#71585b] text-[#71585b]'
                      : 'border-transparent text-[#817475] hover:text-[#1e1b1b]'
                  }`}
                >
                  Shipping in Nepal
                </button>
              </div>

              <div className="py-6 text-sm text-[#4f4445] leading-relaxed">
                {activeTab === 'desc' && (
                  <div className="space-y-4">
                    <p>{product.description}</p>
                    {product.features && (
                      <ul className="space-y-2 mt-3">
                        {product.features.map((feat, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <Check className="w-4 h-4 text-[#71585b] flex-shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                )}

                {activeTab === 'usage' && (
                  <div className="space-y-2">
                    <p className="font-semibold text-[#1e1b1b]">Application Ritual:</p>
                    <p>{product.howToUse || 'Apply as desired for effortless beauty.'}</p>
                  </div>
                )}

                {activeTab === 'ingredients' && (
                  <div className="space-y-2">
                    <div className="flex items-center gap-1.5 text-xs font-semibold text-[#71585b] uppercase tracking-wider">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>Himalayan Botanical Complex</span>
                    </div>
                    <p className="text-xs font-mono bg-[#f9f2f1] p-4 rounded-xl border border-[#e8e1e0] text-[#1e1b1b]">
                      {product.ingredients || 'Clean, non-toxic, talc-free, and vegan formulation.'}
                    </p>
                  </div>
                )}

                {activeTab === 'shipping' && (
                  <div className="space-y-3">
                    <p>
                      <strong>Kathmandu Valley:</strong> Express delivery within 24-48 hours.
                    </p>
                    <p>
                      <strong>All other Nepal Provinces:</strong> Standard courier delivery within 3-5 business days.
                    </p>
                    <p className="text-[#71585b] font-medium">
                      Orders over Rs. 2,500 qualify for free shipping. A flat Rs. 150 delivery charge applies to orders under Rs. 2,500.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
