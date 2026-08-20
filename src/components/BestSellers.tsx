import React, { useState } from 'react';
import { Star, Heart, ArrowRight, ShoppingBag, Eye } from 'lucide-react';
import { Product, Shade, ActivePage } from '../types';

interface BestSellersProps {
  products: Product[];
  onSelectProduct: (product: Product) => void;
  onAddToCart: (product: Product, shade?: Shade) => void;
  onToggleWishlist: (product: Product) => void;
  wishlistIds: string[];
  onNavigate: (page: ActivePage) => void;
}

export const BestSellers: React.FC<BestSellersProps> = ({
  products,
  onSelectProduct,
  onAddToCart,
  onToggleWishlist,
  wishlistIds,
  onNavigate
}) => {
  // Take top bestsellers
  const bestsellers = products.filter((p) => p.isBestSeller).slice(0, 3);
  const [selectedShades, setSelectedShades] = useState<{ [productId: string]: Shade }>({});

  const handleShadeSelect = (e: React.MouseEvent, product: Product, shade: Shade) => {
    e.stopPropagation();
    setSelectedShades((prev) => ({ ...prev, [product.id]: shade }));
  };

  return (
    <section className="py-16 bg-[#fff8f7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#71585b] block mb-2">
              Most Loved
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif text-[#1e1b1b]">
              BEST SELLERS
            </h2>
          </div>

          <button
            onClick={() => onNavigate('bestsellers')}
            className="text-xs font-semibold tracking-widest text-[#71585b] hover:text-[#1e1b1b] flex items-center gap-1 uppercase group self-start md:self-auto"
          >
            <span>VIEW ALL BEST SELLERS</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* 3-Column Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {bestsellers.map((product) => {
            const currentShade = selectedShades[product.id] || product.shades[0];
            const isWishlisted = wishlistIds.includes(product.id);

            return (
              <div
                key={product.id}
                onClick={() => onSelectProduct(product)}
                className="group flex flex-col bg-[#ffffff] rounded-2xl overflow-hidden border border-[#e8e1e0] transition-all duration-300 hover:shadow-xl cursor-pointer"
              >
                {/* Product Image Frame */}
                <div className="relative aspect-square overflow-hidden bg-[#f9f2f1] flex items-center justify-center p-6">
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="w-full h-full object-contain object-center transform group-hover:scale-105 transition-transform duration-500"
                  />

                  {/* Badge */}
                  {product.badge && (
                    <span className="absolute top-4 left-4 px-3 py-1 bg-[#f8d7da] text-[#755c5f] text-[10px] font-bold tracking-widest uppercase rounded-full">
                      {product.badge}
                    </span>
                  )}

                  {/* Wishlist Button */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onToggleWishlist(product);
                    }}
                    className={`absolute top-4 right-4 p-2 rounded-full bg-[#ffffff]/90 backdrop-blur-xs shadow-sm hover:bg-[#ffffff] transition-all ${
                      isWishlisted ? 'text-[#71585b]' : 'text-[#817475] hover:text-[#71585b]'
                    }`}
                    aria-label="Add to wishlist"
                  >
                    <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-[#71585b]' : ''}`} />
                  </button>

                  {/* Hover Quick View / Add overlay */}
                  <div className="absolute inset-x-4 bottom-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onAddToCart(product, currentShade);
                      }}
                      className="flex-1 py-2.5 bg-[#71585b] text-[#ffffff] text-xs font-semibold uppercase tracking-wider rounded-lg flex items-center justify-center gap-1.5 hover:bg-[#584144] shadow-md transition-colors"
                    >
                      <ShoppingBag className="w-3.5 h-3.5" />
                      <span>Quick Add</span>
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onSelectProduct(product);
                      }}
                      className="p-2.5 bg-[#ffffff] text-[#1e1b1b] rounded-lg shadow-md hover:bg-[#f3ecec] transition-colors"
                      title="View Details"
                    >
                      <Eye className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Product Information */}
                <div className="p-6 flex flex-col flex-1">
                  {/* Shade Swatches */}
                  {product.shades.length > 1 && (
                    <div className="flex items-center gap-1.5 mb-3">
                      {product.shades.map((shade) => (
                        <button
                          key={shade.id}
                          onClick={(e) => handleShadeSelect(e, product, shade)}
                          style={{ backgroundColor: shade.hex }}
                          title={shade.name}
                          className={`w-4 h-4 rounded-full border transition-all ${
                            currentShade.id === shade.id
                              ? 'ring-2 ring-[#71585b] ring-offset-1 scale-110'
                              : 'border-[#d2c3c4] hover:scale-105'
                          }`}
                        />
                      ))}
                      <span className="text-[11px] text-[#817475] ml-1.5 font-medium">
                        {currentShade.name}
                      </span>
                    </div>
                  )}

                  {/* Rating */}
                  <div className="flex items-center gap-1 mb-2">
                    <div className="flex text-amber-500">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-3.5 h-3.5 ${
                            i < Math.floor(product.rating)
                              ? 'fill-amber-500 text-amber-500'
                              : 'text-[#d2c3c4]'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-xs font-semibold text-[#1e1b1b] ml-1">
                      {product.rating}
                    </span>
                    <span className="text-xs text-[#817475]">
                      ({product.reviewCount})
                    </span>
                  </div>

                  {/* Title & Short Description */}
                  <h3 className="font-serif text-lg font-bold text-[#1e1b1b] group-hover:text-[#71585b] transition-colors line-clamp-1">
                    {product.name}
                  </h3>
                  <p className="text-xs text-[#817475] line-clamp-2 mt-1 mb-4 flex-1">
                    {product.shortDescription || product.description}
                  </p>

                  {/* Price & Add Action */}
                  <div className="flex items-center justify-between pt-4 border-t border-[#f3ecec] mt-auto">
                    <div>
                      <span className="text-base font-bold text-[#1e1b1b]">
                        Rs. {product.price.toLocaleString()}
                      </span>
                      {product.originalPrice && (
                        <span className="text-xs text-[#817475] line-through ml-2">
                          Rs. {product.originalPrice.toLocaleString()}
                        </span>
                      )}
                    </div>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onAddToCart(product, currentShade);
                      }}
                      className="text-xs font-semibold uppercase tracking-wider text-[#71585b] hover:text-[#1e1b1b] underline"
                    >
                      Add to Bag
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
