import React, { useState, useMemo } from 'react';
import { Star, Heart, ShoppingBag, Eye, SlidersHorizontal, ArrowUpDown, X, Check } from 'lucide-react';
import { Product, Shade } from '../types';

interface ShopPageProps {
  products: Product[];
  initialCategory?: string;
  onSelectProduct: (product: Product) => void;
  onAddToCart: (product: Product, shade: Shade) => void;
  onToggleWishlist: (product: Product) => void;
  wishlistIds: string[];
}

export const ShopPage: React.FC<ShopPageProps> = ({
  products,
  initialCategory = 'All',
  onSelectProduct,
  onAddToCart,
  onToggleWishlist,
  wishlistIds
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory);
  const [selectedFinish, setSelectedFinish] = useState<string>('All');
  const [selectedSkinType, setSelectedSkinType] = useState<string>('All');
  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc' | 'rating'>('featured');
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  const [selectedShades, setSelectedShades] = useState<{ [id: string]: Shade }>({});

  const categories = ['All', 'Lips', 'Face', 'Blush', 'Highlighter', 'Eyes'];
  const finishes = ['All', 'Matte', 'Dewy', 'Satin', 'Radiant', 'Natural'];
  const skinTypes = ['All', 'Dry', 'Oily', 'Combination', 'Sensitive'];

  const filteredProducts = useMemo(() => {
    return products.filter((p) => {
      if (selectedCategory !== 'All' && p.category !== selectedCategory) {
        return false;
      }
      if (selectedFinish !== 'All' && p.finish !== selectedFinish) {
        return false;
      }
      if (selectedSkinType !== 'All') {
        if (!p.skinType || (!p.skinType.includes(selectedSkinType as any) && !p.skinType.includes('All'))) {
          return false;
        }
      }
      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-asc') return a.price - b.price;
      if (sortBy === 'price-desc') return b.price - a.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      return 0; // featured
    });
  }, [products, selectedCategory, selectedFinish, selectedSkinType, sortBy]);

  const handleShadeSelect = (e: React.MouseEvent, product: Product, shade: Shade) => {
    e.stopPropagation();
    setSelectedShades((prev) => ({ ...prev, [product.id]: shade }));
  };

  const hasActiveFilters = selectedCategory !== 'All' || selectedFinish !== 'All' || selectedSkinType !== 'All';

  const clearAllFilters = () => {
    setSelectedCategory('All');
    setSelectedFinish('All');
    setSelectedSkinType('All');
  };

  return (
    <div className="py-10 bg-[#fff8f7] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#71585b] block mb-2">
            The Savyata Collection
          </span>
          <h1 className="text-3xl sm:text-5xl font-serif text-[#1e1b1b]">
            {selectedCategory === 'All' ? 'All Cosmetics' : `${selectedCategory} Collection`}
          </h1>
          <p className="text-sm text-[#4f4445] mt-3">
            Pure botanical cosmetics inspired by the Himalayan peaks. Handcrafted textures, rich pigments, and clean finishes in NPR.
          </p>
        </div>

        {/* Category Pill Filters Bar */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-4 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2 rounded-full text-xs font-semibold tracking-wider uppercase transition-all whitespace-nowrap ${
                selectedCategory === cat
                  ? 'bg-[#71585b] text-[#ffffff] shadow-md'
                  : 'bg-[#ffffff] text-[#4f4445] hover:bg-[#f8d7da] hover:text-[#755c5f] border border-[#e8e1e0]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Filter Controls Bar */}
        <div className="bg-[#ffffff] p-4 rounded-2xl border border-[#e8e1e0] mb-8 flex flex-col md:flex-row items-center justify-between gap-4 shadow-sm">
          {/* Left: Filter triggers */}
          <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
            <button
              onClick={() => setShowMobileFilters(!showMobileFilters)}
              className="px-4 py-2 bg-[#f3ecec] hover:bg-[#e8e1e0] text-[#1e1b1b] rounded-xl text-xs font-semibold uppercase tracking-wider flex items-center gap-2 transition-colors"
            >
              <SlidersHorizontal className="w-4 h-4 text-[#71585b]" />
              <span>Filters</span>
              {hasActiveFilters && (
                <span className="w-2 h-2 rounded-full bg-[#71585b]" />
              )}
            </button>

            {/* Desktop Quick Dropdowns */}
            <div className="hidden lg:flex items-center gap-3">
              {/* Finish Selector */}
              <select
                value={selectedFinish}
                onChange={(e) => setSelectedFinish(e.target.value)}
                aria-label="Filter by finish"
                className="text-xs bg-[#f9f2f1] border border-[#e8e1e0] text-[#1e1b1b] py-2 px-3 rounded-xl focus:outline-none focus:border-[#71585b] font-medium"
              >
                <option value="All">Finish: All</option>
                {finishes.filter(f => f !== 'All').map(f => (
                  <option key={f} value={f}>{f} Finish</option>
                ))}
              </select>

              {/* Skin Type Selector */}
              <select
                value={selectedSkinType}
                onChange={(e) => setSelectedSkinType(e.target.value)}
                aria-label="Filter by skin type"
                className="text-xs bg-[#f9f2f1] border border-[#e8e1e0] text-[#1e1b1b] py-2 px-3 rounded-xl focus:outline-none focus:border-[#71585b] font-medium"
              >
                <option value="All">Skin Type: All</option>
                {skinTypes.filter(s => s !== 'All').map(s => (
                  <option key={s} value={s}>{s} Skin</option>
                ))}
              </select>
            </div>

            {hasActiveFilters && (
              <button
                onClick={clearAllFilters}
                className="text-xs font-semibold text-[#71585b] hover:text-[#1e1b1b] flex items-center gap-1 underline"
              >
                <X className="w-3.5 h-3.5" /> Clear All
              </button>
            )}
          </div>

          {/* Right: Results Count & Sort Dropdown */}
          <div className="flex items-center justify-between w-full md:w-auto gap-4">
            <span className="text-xs text-[#817475] font-medium">
              Showing <strong>{filteredProducts.length}</strong> items
            </span>

            <div className="flex items-center gap-2">
              <ArrowUpDown className="w-3.5 h-3.5 text-[#817475]" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                aria-label="Sort products"
                className="text-xs bg-transparent border-none text-[#1e1b1b] font-semibold focus:outline-none cursor-pointer"
              >
                <option value="featured">Sort: Featured</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>
          </div>
        </div>

        {/* Mobile Filter Drawer / Collapse */}
        {showMobileFilters && (
          <div className="p-6 bg-[#ffffff] rounded-2xl border border-[#e8e1e0] mb-8 space-y-6 animate-in slide-in-from-top-4 duration-200">
            <div className="flex items-center justify-between pb-3 border-b border-[#e8e1e0]">
              <h3 className="font-serif text-base font-bold text-[#1e1b1b]">Filter Products</h3>
              <button
                onClick={() => setShowMobileFilters(false)}
                className="text-xs text-[#71585b] font-bold uppercase"
              >
                Done
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-[#1e1b1b] block mb-2">
                  Finish
                </label>
                <div className="flex flex-wrap gap-2">
                  {finishes.map((f) => (
                    <button
                      key={f}
                      onClick={() => setSelectedFinish(f)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-medium border ${
                        selectedFinish === f
                          ? 'border-[#71585b] bg-[#f8d7da] text-[#755c5f]'
                          : 'border-[#e8e1e0] text-[#4f4445]'
                      }`}
                    >
                      {f}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-[#1e1b1b] block mb-2">
                  Skin Type
                </label>
                <div className="flex flex-wrap gap-2">
                  {skinTypes.map((s) => (
                    <button
                      key={s}
                      onClick={() => setSelectedSkinType(s)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-medium border ${
                        selectedSkinType === s
                          ? 'border-[#71585b] bg-[#f8d7da] text-[#755c5f]'
                          : 'border-[#e8e1e0] text-[#4f4445]'
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Product Grid */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-20 bg-[#ffffff] rounded-3xl border border-[#e8e1e0] p-8">
            <h3 className="font-serif text-2xl text-[#1e1b1b] mb-2">No products match your filters</h3>
            <p className="text-sm text-[#817475] mb-6">
              Try adjusting your category or finish selection to see more of our collection.
            </p>
            <button
              onClick={clearAllFilters}
              className="btn-primary-dark rounded-none"
            >
              RESET ALL FILTERS
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => {
              const currentShade = selectedShades[product.id] || product.shades[0];
              const isWishlisted = wishlistIds.includes(product.id);

              return (
                <div
                  key={product.id}
                  onClick={() => onSelectProduct(product)}
                  className="group flex flex-col bg-[#ffffff] rounded-2xl overflow-hidden border border-[#e8e1e0] transition-all duration-300 hover:shadow-xl cursor-pointer"
                >
                  {/* Image Frame */}
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
                      aria-label="Save to wishlist"
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

                  {/* Product Details */}
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

                    {/* Product Name */}
                    <h3 className="font-serif text-lg font-bold text-[#1e1b1b] group-hover:text-[#71585b] transition-colors line-clamp-1">
                      {product.name}
                    </h3>
                    <p className="text-xs text-[#817475] line-clamp-2 mt-1 mb-4 flex-1">
                      {product.shortDescription || product.description}
                    </p>

                    {/* Price & Action */}
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
        )}
      </div>
    </div>
  );
};
