import React from 'react';
import { ArrowRight, Sparkles, ShieldCheck, Leaf, HeartHandshake } from 'lucide-react';
import { ActivePage } from '../types';

interface HeroSectionProps {
  onNavigate: (page: ActivePage) => void;
  onSelectProductById?: (id: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onNavigate }) => {
  return (
    <section className="relative overflow-hidden bg-[#fff8f7] pt-4 pb-16 lg:pt-8 lg:pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Hero Content */}
          <div className="lg:col-span-6 flex flex-col justify-center space-y-6 lg:pr-8 text-center lg:text-left">
            <div className="inline-flex items-center justify-center lg:justify-start gap-2">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#f8d7da] text-[#755c5f] text-[11px] font-semibold tracking-widest uppercase">
                <Sparkles className="w-3 h-3 text-[#71585b]" />
                Himalayan Radiance Collection
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-[#1e1b1b] font-normal leading-[1.12] tracking-tight">
              BEAUTY, <br />
              <span className="italic font-light text-[#71585b]">YOUR WAY.</span>
            </h1>

            <p className="text-[#4f4445] text-base sm:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0 font-normal">
              Thoughtfully formulated cosmetics crafted to celebrate your authentic glow.
              Clean Himalayan botanicals, velvety high-pigment shades, and featherlight textures.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={() => onNavigate('shop')}
                id="hero-shop-collection-btn"
                className="btn-primary-dark w-full sm:w-auto rounded-none shadow-md group"
              >
                <span>SHOP COLLECTION</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => onNavigate('bestsellers')}
                id="hero-explore-bestsellers-btn"
                className="btn-secondary w-full sm:w-auto rounded-none"
              >
                <span>EXPLORE BEST SELLERS</span>
              </button>
            </div>

            {/* Trust Highlights Grid */}
            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-[#e8e1e0] mt-4">
              <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                <div className="w-8 h-8 rounded-full bg-[#f3ecec] flex items-center justify-center text-[#71585b] mb-2">
                  <Leaf className="w-4 h-4" />
                </div>
                <span className="text-xs font-bold text-[#1e1b1b] tracking-wider uppercase">100% Vegan</span>
                <span className="text-[11px] text-[#817475]">Clean ingredients</span>
              </div>

              <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                <div className="w-8 h-8 rounded-full bg-[#f3ecec] flex items-center justify-center text-[#71585b] mb-2">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <span className="text-xs font-bold text-[#1e1b1b] tracking-wider uppercase">Cruelty Free</span>
                <span className="text-[11px] text-[#817475]">Never tested on animals</span>
              </div>

              <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                <div className="w-8 h-8 rounded-full bg-[#f3ecec] flex items-center justify-center text-[#71585b] mb-2">
                  <HeartHandshake className="w-4 h-4" />
                </div>
                <span className="text-xs font-bold text-[#1e1b1b] tracking-wider uppercase">Nepal Crafted</span>
                <span className="text-[11px] text-[#817475]">Himalayan botanicals</span>
              </div>
            </div>
          </div>

          {/* Right Hero Image Frame */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Back Accent Card */}
              <div className="absolute -inset-2 bg-[#f8d7da]/60 rounded-3xl transform rotate-2 blur-xs"></div>

              {/* Main Model Portrait Container */}
              <div className="relative rounded-2xl overflow-hidden bg-[#e8e1e0] aspect-[4/5] shadow-2xl border border-[#ffffff]">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCg7d4T2RTh_0kcHXg-L0XB03YaFvNvEwOYggzL5jJhPFYZyRlBPHzO0QMfyFiB72wfIms_OAl9f2xfcsBS-oDdzBgMm96mwYOMpqtZPkdoQhRi5y8_HeOV8Fv8nnzn8xQbEokQPtJBHC6ZSjGPjkFKp_hZJ8JdcUaQ3AYjhvI8cdabvGZxcYLhd5qP44OurE3B24z7ogxOKZoLb09aH26QHpDEFDkVhTOeYDeP24MU--Q8QVIz-D40"
                  alt="Savyata Cosmetics Model with radiant complexion and soft rosy lips"
                  className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
                />

                {/* Floating Product Badge */}
                <div className="absolute bottom-6 left-6 right-6 bg-[#ffffff]/90 backdrop-blur-md p-4 rounded-xl shadow-lg border border-[#e8e1e0] flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-[#f8d7da] flex items-center justify-center text-[#71585b] font-serif font-bold text-sm">
                      SC
                    </div>
                    <div>
                      <p className="text-xs font-bold text-[#1e1b1b] uppercase tracking-wider">Velvet Matte in Rosé</p>
                      <p className="text-[11px] text-[#71585b] font-medium">Rs. 1,299 • Bestseller</p>
                    </div>
                  </div>
                  <button
                    onClick={() => onNavigate('shop')}
                    className="text-xs font-semibold text-[#71585b] hover:text-[#1e1b1b] flex items-center gap-1 uppercase tracking-wider"
                  >
                    View <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
