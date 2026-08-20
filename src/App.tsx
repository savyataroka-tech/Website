import React, { useState, useEffect } from 'react';
import { PRODUCTS } from './data/products';
import { Product, Shade, CartItem, Order, ActivePage } from './types';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { EditorialBento } from './components/EditorialBento';
import { CategoryGrid } from './components/CategoryGrid';
import { BestSellers } from './components/BestSellers';
import { FeaturedSkinTint } from './components/FeaturedSkinTint';
import { CustomerReviews } from './components/CustomerReviews';
import { InstagramGrid } from './components/InstagramGrid';
import { Footer } from './components/Footer';
import { ProductDetailModal } from './components/ProductDetailModal';
import { CartDrawer } from './components/CartDrawer';
import { SearchModal } from './components/SearchModal';
import { ShopPage } from './components/ShopPage';
import { CheckoutPage } from './components/CheckoutPage';
import { OrderConfirmationModal } from './components/OrderConfirmationModal';
import { AboutPage } from './components/AboutPage';
import { Toast, ToastMessage } from './components/Toast';

export function App() {
  // Navigation State
  const [activePage, setActivePage] = useState<ActivePage>('home');
  const [shopCategory, setShopCategory] = useState<string>('All');

  // Interactive Modals & Drawers
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [lastOrder, setLastOrder] = useState<Order | null>(null);

  // Cart & Wishlist State with local storage sync
  const [cart, setCart] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('savyata_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [wishlist, setWishlist] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('savyata_wishlist');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Toasts
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  useEffect(() => {
    try {
      localStorage.setItem('savyata_cart', JSON.stringify(cart));
    } catch {}
  }, [cart]);

  useEffect(() => {
    try {
      localStorage.setItem('savyata_wishlist', JSON.stringify(wishlist));
    } catch {}
  }, [wishlist]);

  // Keyboard shortcut '/' to search
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === '/' && !isSearchOpen && (e.target as HTMLElement).tagName !== 'INPUT') {
        e.preventDefault();
        setIsSearchOpen(true);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isSearchOpen]);

  const showToast = (toast: Omit<ToastMessage, 'id'>) => {
    const id = Math.random().toString(36).substring(2, 9);
    setToasts((prev) => [...prev, { ...toast, id }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 4000);
  };

  const handleDismissToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  // Add to Cart handler
  const handleAddToCart = (product: Product, shade?: Shade, quantity: number = 1) => {
    const targetShade = shade || product.shades[0];

    setCart((prev) => {
      const existingIdx = prev.findIndex(
        (item) => item.product.id === product.id && item.selectedShade.id === targetShade.id
      );

      if (existingIdx > -1) {
        const updated = [...prev];
        updated[existingIdx].quantity += quantity;
        return updated;
      } else {
        return [...prev, { product, selectedShade: targetShade, quantity }];
      }
    });

    showToast({
      type: 'cart',
      title: 'Added to Bag',
      message: `${quantity}x ${product.name} (${targetShade.name})`,
      image: product.images[0]
    });
  };

  // Buy Now handler (adds to cart & goes directly to checkout)
  const handleBuyNow = (product: Product, shade: Shade, quantity: number = 1) => {
    handleAddToCart(product, shade, quantity);
    setSelectedProduct(null);
    setActivePage('checkout');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Cart quantity updater
  const handleUpdateQuantity = (productId: string, shadeId: string, delta: number) => {
    setCart((prev) => {
      return prev
        .map((item) => {
          if (item.product.id === productId && item.selectedShade.id === shadeId) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[];
    });
  };

  const handleRemoveFromCart = (productId: string, shadeId: string) => {
    setCart((prev) =>
      prev.filter(
        (item) => !(item.product.id === productId && item.selectedShade.id === shadeId)
      )
    );
  };

  // Toggle Wishlist
  const handleToggleWishlist = (product: Product) => {
    setWishlist((prev) => {
      const isAlready = prev.includes(product.id);
      if (isAlready) {
        showToast({
          type: 'info',
          title: 'Removed from Wishlist',
          message: product.name
        });
        return prev.filter((id) => id !== product.id);
      } else {
        showToast({
          type: 'wishlist',
          title: 'Saved to Wishlist',
          message: product.name,
          image: product.images[0]
        });
        return [...prev, product.id];
      }
    });
  };

  const handleCategorySelect = (category: string) => {
    setShopCategory(category);
    setActivePage('shop');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOrderPlaced = (order: Order) => {
    setCart([]);
    setLastOrder(order);
    setActivePage('home');
  };

  const skinTintProduct = PRODUCTS.find((p) => p.id === 'skin-tint') || PRODUCTS[4];
  const cartTotalCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen flex flex-col bg-[#fff8f7] text-[#1e1b1b] font-sans antialiased selection:bg-[#f8d7da] selection:text-[#755c5f]">
      {/* Universal Navigation */}
      <Navbar
        activePage={activePage}
        setActivePage={(page) => {
          setActivePage(page);
          if (page === 'shop') setShopCategory('All');
        }}
        cartCount={cartTotalCount}
        wishlistCount={wishlist.length}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenWishlist={() => {
          setShopCategory('All');
          setActivePage('shop');
        }}
      />

      {/* Page Routing */}
      <main className="flex-1">
        {activePage === 'home' && (
          <>
            <HeroSection
              onNavigate={(page) => {
                setActivePage(page);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />

            <EditorialBento
              onNavigate={(page) => {
                setActivePage(page);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />

            <CategoryGrid
              onSelectCategory={handleCategorySelect}
              onNavigate={setActivePage}
            />

            <BestSellers
              products={PRODUCTS}
              onSelectProduct={setSelectedProduct}
              onAddToCart={handleAddToCart}
              onToggleWishlist={handleToggleWishlist}
              wishlistIds={wishlist}
              onNavigate={setActivePage}
            />

            <FeaturedSkinTint
              product={skinTintProduct}
              onSelectProduct={setSelectedProduct}
              onAddToCart={(prod, shade) => handleAddToCart(prod, shade, 1)}
            />

            <CustomerReviews />

            <InstagramGrid />
          </>
        )}

        {activePage === 'shop' && (
          <ShopPage
            products={PRODUCTS}
            initialCategory={shopCategory}
            onSelectProduct={setSelectedProduct}
            onAddToCart={(prod, shade) => handleAddToCart(prod, shade, 1)}
            onToggleWishlist={handleToggleWishlist}
            wishlistIds={wishlist}
          />
        )}

        {activePage === 'bestsellers' && (
          <ShopPage
            products={PRODUCTS.filter((p) => p.isBestSeller)}
            initialCategory="All"
            onSelectProduct={setSelectedProduct}
            onAddToCart={(prod, shade) => handleAddToCart(prod, shade, 1)}
            onToggleWishlist={handleToggleWishlist}
            wishlistIds={wishlist}
          />
        )}

        {activePage === 'newarrivals' && (
          <ShopPage
            products={PRODUCTS.filter((p) => p.isNewArrival || p.badge === 'New')}
            initialCategory="All"
            onSelectProduct={setSelectedProduct}
            onAddToCart={(prod, shade) => handleAddToCart(prod, shade, 1)}
            onToggleWishlist={handleToggleWishlist}
            wishlistIds={wishlist}
          />
        )}

        {activePage === 'about' && (
          <AboutPage
            onNavigate={(page) => {
              setActivePage(page);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        )}

        {activePage === 'checkout' && (
          <CheckoutPage
            cartItems={cart}
            onBackToShopping={() => setActivePage('shop')}
            onOrderPlaced={handleOrderPlaced}
          />
        )}
      </main>

      {/* Universal Footer */}
      <Footer
        onNavigate={setActivePage}
        onSelectCategory={handleCategorySelect}
      />

      {/* Product Detail Modal */}
      <ProductDetailModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onAddToCart={(prod, shade, qty) => handleAddToCart(prod, shade, qty)}
        onBuyNow={handleBuyNow}
        isWishlisted={selectedProduct ? wishlist.includes(selectedProduct.id) : false}
        onToggleWishlist={handleToggleWishlist}
      />

      {/* Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveFromCart}
        onCheckout={() => {
          setIsCartOpen(false);
          setActivePage('checkout');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onContinueShopping={() => {
          setIsCartOpen(false);
          setActivePage('shop');
        }}
      />

      {/* Search Modal */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        products={PRODUCTS}
        onSelectProduct={(prod) => setSelectedProduct(prod)}
      />

      {/* Order Confirmation Celebratory Modal */}
      <OrderConfirmationModal
        order={lastOrder}
        onClose={() => setLastOrder(null)}
      />

      {/* Toast Notifications */}
      <Toast
        toasts={toasts}
        onDismiss={handleDismissToast}
        onOpenCart={() => setIsCartOpen(true)}
      />
    </div>
  );
}
export default App;
