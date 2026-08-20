import React, { useState } from 'react';
import { ArrowRight, Check, Sparkles, Droplets, Sun, Shield } from 'lucide-react';
import { Product, Shade } from '../types';

interface FeaturedSkinTintProps {
  product?: Product;
  onSelectProduct: (product: Product) => void;
  onAddToCart: (product: Product, shade: Shade) => void;
}

export const FeaturedSkinTint: React.FC<FeaturedSkinTintProps> = ({
  product,
  onSelectProduct,
  onAddToCart
}) => {
  if (!product) return null;

  const [selectedShade, setSelectedShade] = useState<Shade>(product.shades[0]);

  return (
    <section className="py-16 lg:py-24 bg-[#f9f2f1] border-y border-[#e8e1e0] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Visual Area */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="aspect-[4/5] rounded-3xl overflow-hidden bg-[#ffffff] shadow-xl border border-[#e8e1e0] relative">
                <img
                  src={product.images[0]}
                  alt="Savyata Skin Tint"
                  className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-6 left-6 px-4 py-1.5 bg-[#ffffff]/90 backdrop-blur-md rounded-full text-[11px] font-bold tracking-widest text-[#71585b] uppercase shadow-sm">
                  SPF 30 Broad Spectrum
                </div>
              </div>

              {/* Decorative mini swatch badge */}
              <div className="absolute -bottom-6 -right-4 sm:right-6 bg-[#ffffff] p-4 rounded-2xl shadow-xl border border-[#e8e1e0] max-w-[220px]">
                <p className="text-[11px] font-bold text-[#71585b] uppercase tracking-wider">Himalayan Hydration</p>
                <p className="text-xs text-[#4f4445] mt-0.5">Infused with Rhododendron & Niacinamide</p>
              </div>
            </div>
          </div>

          {/* Right Product Spotlight Content */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#f8d7da] text-[#755c5f] text-xs font-semibold tracking-widest uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              Featured Innovation
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#1e1b1b] font-normal leading-tight">
              SAVYATA <br />
              <span className="italic font-light text-[#71585b]">SKIN TINT.</span>
            </h2>

            <div className="flex items-baseline gap-3">
              <span className="text-2xl font-bold text-[#1e1b1b]">
                Rs. {product.price.toLocaleString()}
              </span>
              {product.originalPrice && (
                <span className="text-sm text-[#817475] line-through">
                  Rs. {product.originalPrice.toLocaleString()}
                </span>
              )}
              <span className="text-xs px-2.5 py-0.5 bg-[#f8d7da] text-[#755c5f] font-semibold rounded-full">
                Save Rs. {((product.originalPrice || 0) - product.price).toLocaleString()}
              </span>
            </div>

            <p className="text-[#4f4445] text-base leading-relaxed">
              {product.description}
            </p>

            {/* Key Benefits Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-2.5 text-sm text-[#1e1b1b] font-medium">
                <Droplets className="w-4 h-4 text-[#71585b]" />
                <span>Hyaluronic Acid Hydration</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-[#1e1b1b] font-medium">
                <Sun className="w-4 h-4 text-[#71585b]" />
                <span>SPF 30 Mineral Protection</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-[#1e1b1b] font-medium">
                <Shield className="w-4 h-4 text-[#71585b]" />
                <span>Non-Comedogenic & Clean</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-[#1e1b1b] font-medium">
                <Check className="w-4 h-4 text-[#71585b]" />
                <span>12-Hour Radiant Wear</span>
              </div>
            </div>

            {/* Shade Selection */}
            <div className="pt-4 border-t border-[#e8e1e0]">
              <label className="text-xs font-bold uppercase tracking-wider text-[#1e1b1b] block mb-3">
                Select Shade: <span className="text-[#71585b] font-normal">{selectedShade.name}</span>
              </label>

              <div className="flex flex-wrap gap-3">
                {product.shades.map((shade) => (
                  <button
                    key={shade.id}
                    onClick={() => setSelectedShade(shade)}
                    className={`flex items-center gap-2 px-3 py-1.5 rounded-full border transition-all ${
                      selectedShade.id === shade.id
                        ? 'border-[#71585b] bg-[#ffffff] shadow-sm ring-1 ring-[#71585b]'
                        : 'border-[#d2c3c4] hover:bg-[#ffffff]'
                    }`}
                  >
                    <span
                      className="w-3.5 h-3.5 rounded-full border border-black/10"
                      style={{ backgroundColor: shade.hex }}
                    />
                    <span className="text-xs font-medium text-[#1e1b1b]">{shade.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
              <button
                onClick={() => onAddToCart(product, selectedShade)}
                className="btn-primary-dark w-full sm:w-auto flex-1 rounded-none shadow-md"
              >
                ADD TO BAG — RS. {product.price.toLocaleString()}
              </button>

              <button
                onClick={() => onSelectProduct(product)}
                className="btn-secondary w-full sm:w-auto rounded-none flex items-center justify-center gap-2"
              >
                <span>DISCOVER MORE</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
