import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, Instagram, Facebook, Mail, Phone, MapPin, Sparkles } from 'lucide-react';
import { ActivePage } from '../types';

interface FooterProps {
  onNavigate: (page: ActivePage) => void;
  onSelectCategory?: (cat: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onSelectCategory }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  const handleCategoryNav = (cat: string) => {
    if (onSelectCategory) {
      onSelectCategory(cat);
    }
    onNavigate('shop');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#1e1b1b] text-[#e8e1e0] pt-16 pb-12 border-t border-[#373233]">
      {/* Newsletter Signup Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 border-b border-[#373233]">
        <div className="bg-[#282324] rounded-3xl p-8 sm:p-12 border border-[#4f4445]/40 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="max-w-xl text-center lg:text-left">
            <div className="inline-flex items-center gap-2 text-[#f8d7da] text-xs font-semibold uppercase tracking-widest mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Savyata Circle</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-serif text-[#ffffff]">
              Enjoy 10% Off Your First Order
            </h3>
            <p className="text-sm text-[#d2c3c4] mt-2 font-normal">
              Subscribe for exclusive Nepal launches, shade releases, and clean Himalayan beauty rituals.
            </p>
          </div>

          <div className="w-full lg:w-auto flex-1 max-w-md">
            {subscribed ? (
              <div className="flex items-center gap-2 p-4 bg-[#71585b]/40 rounded-xl border border-[#71585b] text-[#f8d7da] text-sm">
                <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                <span>Welcome to the circle! Check your email for your 10% promo code.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  required
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="px-4 py-3 bg-[#1e1b1b] border border-[#4f4445] rounded-none text-sm text-[#ffffff] placeholder-[#817475] focus:outline-none focus:border-[#f8d7da] flex-1 font-sans"
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-[#f8d7da] text-[#755c5f] hover:bg-[#debfc2] font-semibold text-xs tracking-widest uppercase transition-colors flex items-center justify-center gap-1.5"
                >
                  <span>SUBSCRIBE</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Brand Col */}
          <div className="lg:col-span-4 space-y-4">
            <div className="space-y-1">
              <span className="font-serif text-2xl font-bold tracking-[0.18em] text-[#ffffff] uppercase">
                SAVYATA
              </span>
              <p className="text-[10px] tracking-[0.3em] text-[#d2c3c4] uppercase font-semibold">
                COSMETICS
              </p>
            </div>

            <p className="text-xs text-[#d2c3c4] leading-relaxed max-w-sm">
              Contemporary cosmetics rooted in clean Himalayan botany. Formulated with care to elevate and celebrate your authentic radiance.
            </p>

            <div className="space-y-2 pt-2 text-xs text-[#d2c3c4]">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#f8d7da]" />
                <span>Kathmandu & Lalitpur, Nepal</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#f8d7da]" />
                <span>care@savyatacosmetics.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#f8d7da]" />
                <span>+977 9801234567</span>
              </div>
            </div>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-[#282324] hover:bg-[#71585b] text-[#ffffff] flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-[#282324] hover:bg-[#71585b] text-[#ffffff] flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Shop Column */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs uppercase font-bold tracking-[0.2em] text-[#ffffff]">
              Shop Collection
            </h4>
            <ul className="space-y-2 text-xs text-[#d2c3c4]">
              <li>
                <button
                  onClick={() => handleCategoryNav('Lips')}
                  className="hover:text-[#f8d7da] transition-colors"
                >
                  Velvet Matte Lipsticks
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleCategoryNav('Lips')}
                  className="hover:text-[#f8d7da] transition-colors"
                >
                  Glass Shine Lip Gloss
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleCategoryNav('Blush')}
                  className="hover:text-[#f8d7da] transition-colors"
                >
                  Cloud Whipped Blush
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleCategoryNav('Highlighter')}
                  className="hover:text-[#f8d7da] transition-colors"
                >
                  Liquid Glow Highlighter
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleCategoryNav('Face')}
                  className="hover:text-[#f8d7da] transition-colors"
                >
                  Skin Tint SPF 30
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleCategoryNav('Eyes')}
                  className="hover:text-[#f8d7da] transition-colors"
                >
                  Lash Lift Mascara
                </button>
              </li>
            </ul>
          </div>

          {/* About / Brand Column */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs uppercase font-bold tracking-[0.2em] text-[#ffffff]">
              About Savyata
            </h4>
            <ul className="space-y-2 text-xs text-[#d2c3c4]">
              <li>
                <button
                  onClick={() => {
                    onNavigate('about');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-[#f8d7da] transition-colors"
                >
                  Our Brand Story
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigate('about');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-[#f8d7da] transition-colors"
                >
                  Himalayan Botanicals
                </button>
              </li>
              <li>
                <span className="text-[#817475] cursor-default">
                  100% Cruelty Free Pledge
                </span>
              </li>
              <li>
                <span className="text-[#817475] cursor-default">
                  Clean Formulation Promise
                </span>
              </li>
            </ul>
          </div>

          {/* Customer Care Column */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs uppercase font-bold tracking-[0.2em] text-[#ffffff]">
              Customer Care
            </h4>
            <ul className="space-y-2 text-xs text-[#d2c3c4]">
              <li>
                <span className="hover:text-[#f8d7da] transition-colors cursor-pointer">
                  Shipping Across Nepal
                </span>
              </li>
              <li>
                <span className="hover:text-[#f8d7da] transition-colors cursor-pointer">
                  Free Over Rs. 2,500
                </span>
              </li>
              <li>
                <span className="hover:text-[#f8d7da] transition-colors cursor-pointer">
                  Returns & Exchanges
                </span>
              </li>
              <li>
                <span className="hover:text-[#f8d7da] transition-colors cursor-pointer">
                  Track Order
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Legal & Payment Badges */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 border-t border-[#373233] flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#817475]">
        <p>© {new Date().getFullYear()} SAVYATA COSMETICS NEPAL. All rights reserved.</p>

        <div className="flex items-center gap-3">
          <span className="px-2.5 py-1 bg-[#282324] rounded border border-[#373233] text-[#d2c3c4] font-medium">
            Cash on Delivery
          </span>
          <span className="px-2.5 py-1 bg-[#282324] rounded border border-[#373233] text-[#d2c3c4] font-medium">
            eSewa
          </span>
          <span className="px-2.5 py-1 bg-[#282324] rounded border border-[#373233] text-[#d2c3c4] font-medium">
            Khalti
          </span>
          <span className="px-2.5 py-1 bg-[#282324] rounded border border-[#373233] text-[#d2c3c4] font-medium">
            Card
          </span>
        </div>
      </div>
    </footer>
  );
};
