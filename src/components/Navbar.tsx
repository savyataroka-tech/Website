import React, { useState, useEffect } from 'react';
import { Search, ShoppingBag, Heart, Menu, X, ArrowRight, Sparkles } from 'lucide-react';
import { ActivePage } from '../types';

interface NavbarProps {
  activePage: ActivePage;
  setActivePage: (page: ActivePage) => void;
  cartCount: number;
  wishlistCount: number;
  onOpenCart: () => void;
  onOpenSearch: () => void;
  onOpenWishlist?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activePage,
  setActivePage,
  cartCount,
  wishlistCount,
  onOpenCart,
  onOpenSearch,
  onOpenWishlist
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: { label: string; page: ActivePage }[] = [
    { label: 'HOME', page: 'home' },
    { label: 'SHOP', page: 'shop' },
    { label: 'BEST SELLERS', page: 'bestsellers' },
    { label: 'NEW ARRIVALS', page: 'newarrivals' },
    { label: 'ABOUT', page: 'about' }
  ];

  const handleNavClick = (page: ActivePage) => {
    setActivePage(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 w-full transition-all duration-300">
      {/* Top Notification Announcement Bar */}
      <div className="bg-[#71585b] text-[#ffffff] text-[11px] sm:text-xs font-medium py-2 px-4 text-center tracking-wider uppercase flex items-center justify-center gap-2">
        <Sparkles className="w-3.5 h-3.5 text-[#f8d7da] hidden sm:inline" />
        <span>Complimentary delivery across Nepal on orders over Rs. 2,500</span>
        <button
          onClick={() => handleNavClick('shop')}
          className="underline hover:text-[#f8d7da] ml-2 font-semibold text-[10px] sm:text-xs hidden md:inline-flex items-center gap-1"
        >
          Shop Now <ArrowRight className="w-3 h-3" />
        </button>
      </div>

      {/* Main Navigation Bar */}
      <nav
        className={`w-full bg-[#fff8f7]/95 backdrop-blur-md border-b border-[#e8e1e0] transition-all duration-300 ${
          scrolled ? 'py-3.5 shadow-sm' : 'py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Mobile Menu Button */}
            <div className="flex items-center lg:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 -ml-2 text-[#1e1b1b] hover:text-[#71585b] transition-colors"
                aria-label="Toggle mobile menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

            {/* Desktop Left Navigation Links */}
            <div className="hidden lg:flex items-center gap-8 xl:gap-10">
              {navItems.slice(0, 3).map((item) => (
                <button
                  key={item.label}
                  onClick={() => handleNavClick(item.page)}
                  className={`text-xs tracking-[0.16em] font-semibold transition-all relative py-1 ${
                    activePage === item.page
                      ? 'text-[#71585b] font-bold'
                      : 'text-[#4f4445] hover:text-[#1e1b1b]'
                  }`}
                >
                  {item.label}
                  {activePage === item.page && (
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#71585b] rounded-full" />
                  )}
                </button>
              ))}
            </div>

            {/* Centered Brand Logo */}
            <div className="flex-1 lg:flex-initial text-center">
              <button
                onClick={() => handleNavClick('home')}
                className="inline-flex flex-col items-center group focus:outline-none"
              >
                <span className="font-serif text-2xl sm:text-3xl font-bold tracking-[0.18em] text-[#1e1b1b] group-hover:text-[#71585b] transition-colors uppercase">
                  SAVYATA
                </span>
                <span className="text-[9px] sm:text-[10px] tracking-[0.3em] text-[#817475] font-medium uppercase -mt-1 group-hover:text-[#71585b] transition-colors">
                  COSMETICS
                </span>
              </button>
            </div>

            {/* Desktop Right Navigation Links */}
            <div className="hidden lg:flex items-center gap-8 xl:gap-10">
              {navItems.slice(3).map((item) => (
                <button
                  key={item.label}
                  onClick={() => handleNavClick(item.page)}
                  className={`text-xs tracking-[0.16em] font-semibold transition-all relative py-1 ${
                    activePage === item.page
                      ? 'text-[#71585b] font-bold'
                      : 'text-[#4f4445] hover:text-[#1e1b1b]'
                  }`}
                >
                  {item.label}
                  {activePage === item.page && (
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#71585b] rounded-full" />
                  )}
                </button>
              ))}
            </div>

            {/* Right Action Icons (Search, Wishlist, Cart) */}
            <div className="flex items-center gap-2 sm:gap-4">
              <button
                onClick={onOpenSearch}
                className="p-2 text-[#4f4445] hover:text-[#71585b] transition-colors rounded-full hover:bg-[#f3ecec]"
                aria-label="Search products"
                title="Search (Click or /)"
              >
                <Search className="w-5 h-5" />
              </button>

              {onOpenWishlist && (
                <button
                  onClick={onOpenWishlist}
                  className="p-2 text-[#4f4445] hover:text-[#71585b] transition-colors rounded-full hover:bg-[#f3ecec] relative"
                  aria-label="Wishlist"
                  title="Your Wishlist"
                >
                  <Heart className={`w-5 h-5 ${wishlistCount > 0 ? 'text-[#71585b] fill-[#71585b]' : ''}`} />
                  {wishlistCount > 0 && (
                    <span className="absolute 0 top-1 right-1 w-4 h-4 bg-[#71585b] text-[#ffffff] text-[10px] font-bold rounded-full flex items-center justify-center">
                      {wishlistCount}
                    </span>
                  )}
                </button>
              )}

              <button
                onClick={onOpenCart}
                id="cart-trigger-btn"
                className="p-2 text-[#4f4445] hover:text-[#71585b] transition-colors rounded-full hover:bg-[#f3ecec] relative group"
                aria-label="Shopping Bag"
              >
                <ShoppingBag className="w-5 h-5 group-hover:scale-105 transition-transform" />
                {cartCount > 0 ? (
                  <span className="absolute top-1 right-1 w-4 h-4 bg-[#71585b] text-[#ffffff] text-[10px] font-bold rounded-full flex items-center justify-center shadow-sm animate-pulse">
                    {cartCount}
                  </span>
                ) : null}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-[#e8e1e0] bg-[#fff8f7] px-6 py-6 space-y-4 animate-in slide-in-from-top-4 duration-200">
            <div className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => handleNavClick(item.page)}
                  className={`text-left text-sm tracking-widest font-semibold py-2 transition-colors flex items-center justify-between ${
                    activePage === item.page ? 'text-[#71585b] font-bold' : 'text-[#4f4445]'
                  }`}
                >
                  <span>{item.label}</span>
                  {activePage === item.page && (
                    <span className="w-2 h-2 rounded-full bg-[#71585b]" />
                  )}
                </button>
              ))}
            </div>

            <div className="pt-4 border-t border-[#e8e1e0] flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenSearch();
                }}
                className="w-full py-2.5 px-4 bg-[#f3ecec] text-[#4f4445] rounded-lg text-xs font-medium flex items-center gap-2"
              >
                <Search className="w-4 h-4" />
                <span>Search lipstick, blush, skin tint...</span>
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenCart();
                }}
                className="btn-primary w-full py-3 rounded-lg text-center"
              >
                VIEW SHOPPING BAG ({cartCount})
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
