import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { ActivePage } from '../types';

interface EditorialBentoProps {
  onNavigate: (page: ActivePage) => void;
}

export const EditorialBento: React.FC<EditorialBentoProps> = ({ onNavigate }) => {
  return (
    <section className="py-12 bg-[#fff8f7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#f3ecec] rounded-3xl overflow-hidden border border-[#e8e1e0] grid grid-cols-1 lg:grid-cols-12 items-center">
          {/* Left Editorial Visual */}
          <div className="lg:col-span-6 h-80 sm:h-96 lg:h-[460px] relative overflow-hidden bg-[#e8e1e0]">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBq0v547y3fV6T0aI4x18h6WlT8kL6T0PekXkMqqdI8F25FvLw_VnZ8uX7pE9Yg8J8vT8L8P6e0Y8F0Vw_VnZ8uX7pE9Yg8J8vT8L8P6e0Y8F0Vw_VnZ8uX7pE9Yg8J8vT8L8P6e0Y8F0V"
              onError={(e) => {
                // Fallback image if needed
                (e.target as HTMLImageElement).src = 'https://lh3.googleusercontent.com/aida-public/AB6AXuACW2dXct7GBKSL1Z8OXQV03N9TpV1yNlM7DyrSfJzf7mgLluYWPNELo5ZO2EpNrKKG_n3M6g0nVi_sOkVa95EbeUGts1-6o5u51TtPOG8CHBSLm0G6w_iDvZtAgwuAL9pk5RqW1TirL4bKrnMui11zUKD6DzzXRuNz8xySk4TZYCOYH6dMv64F6cI6hJ0uZxVxXZmaIEr0TXXd3j2rDmP3BnwxbAwCI91VxC3kVkDmZC-SfoSNdUXx';
              }}
              alt="Everyday beauty essentials"
              className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1e1b1b]/40 via-transparent to-transparent lg:hidden" />
          </div>

          {/* Right Editorial Copy */}
          <div className="lg:col-span-6 p-8 sm:p-12 lg:p-16 flex flex-col justify-center space-y-6">
            <div className="inline-flex items-center gap-2 text-[#71585b] text-xs font-semibold uppercase tracking-widest">
              <Sparkles className="w-4 h-4" />
              <span>Curated Routine</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#1e1b1b] font-normal leading-tight tracking-tight">
              YOUR EVERYDAY <br />
              <span className="italic font-light text-[#71585b]">BEAUTY ESSENTIALS.</span>
            </h2>

            <p className="text-[#4f4445] text-base leading-relaxed font-normal">
              Designed to simplify your routine while delivering high-impact, skin-loving results.
              From our cult-favorite Velvet Matte Lipsticks to the airy Cloud Blush, build your
              bespoke vanity with textures that breathe.
            </p>

            <div className="pt-2">
              <button
                onClick={() => onNavigate('shop')}
                id="bento-shop-makeup-btn"
                className="btn-primary-dark rounded-none shadow-md group"
              >
                <span>SHOP MAKEUP</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
