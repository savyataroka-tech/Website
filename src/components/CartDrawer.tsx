import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Trash2, ShoppingBag, ArrowRight, Truck, Sparkles, ShieldCheck } from 'lucide-react';
import { CartItem } from '../types';
import { FREE_DELIVERY_THRESHOLD, STANDARD_DELIVERY_FEE } from '../data/products';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (productId: string, shadeId: string, delta: number) => void;
  onRemoveItem: (productId: string, shadeId: string) => void;
  onCheckout: () => void;
  onContinueShopping: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onCheckout,
  onContinueShopping
}) => {
  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  const isFreeDelivery = subtotal >= FREE_DELIVERY_THRESHOLD;
  const amountNeededForFreeDelivery = Math.max(0, FREE_DELIVERY_THRESHOLD - subtotal);
  const deliveryFee = cartItems.length === 0 ? 0 : isFreeDelivery ? 0 : STANDARD_DELIVERY_FEE;
  const total = subtotal + deliveryFee;
  const progressPercent = Math.min(100, (subtotal / FREE_DELIVERY_THRESHOLD) * 100);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-[#1e1b1b]/60 backdrop-blur-xs transition-opacity"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <motion.div
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          className="w-screen max-w-md bg-[#ffffff] shadow-2xl flex flex-col justify-between"
        >
          {/* Drawer Header */}
          <div className="p-6 border-b border-[#e8e1e0] flex items-center justify-between bg-[#fff8f7]">
            <div className="flex items-center gap-2.5">
              <ShoppingBag className="w-5 h-5 text-[#71585b]" />
              <h2 className="font-serif text-lg font-bold text-[#1e1b1b] tracking-wider uppercase">
                Your Shopping Bag
              </h2>
              <span className="text-xs px-2 py-0.5 rounded-full bg-[#f8d7da] text-[#755c5f] font-semibold">
                {cartItems.reduce((sum, item) => sum + item.quantity, 0)}
              </span>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-full text-[#817475] hover:text-[#1e1b1b] hover:bg-[#f3ecec] transition-colors"
              aria-label="Close cart"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Free Shipping Progress Indicator */}
          <div className="bg-[#f9f2f1] px-6 py-3.5 border-b border-[#e8e1e0]">
            <div className="flex items-center justify-between text-xs mb-1.5">
              <span className="font-semibold text-[#1e1b1b] flex items-center gap-1.5">
                <Truck className="w-4 h-4 text-[#71585b]" />
                {isFreeDelivery ? (
                  <span className="text-[#71585b] font-bold">Free Nepal Delivery Unlocked! 🎉</span>
                ) : (
                  <span>
                    Add <strong className="text-[#71585b]">Rs. {amountNeededForFreeDelivery.toLocaleString()}</strong> more for FREE delivery
                  </span>
                )}
              </span>
              <span className="text-[11px] font-bold text-[#71585b]">
                {Math.round(progressPercent)}%
              </span>
            </div>
            <div className="w-full bg-[#e8e1e0] h-1.5 rounded-full overflow-hidden">
              <div
                className="bg-[#71585b] h-full transition-all duration-500 rounded-full"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto p-6 divide-y divide-[#f3ecec]">
            {cartItems.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div className="w-16 h-16 rounded-full bg-[#f8d7da] text-[#755c5f] flex items-center justify-center mb-4">
                  <ShoppingBag className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-xl text-[#1e1b1b] mb-2">Your Bag is Empty</h3>
                <p className="text-xs text-[#817475] max-w-xs mb-6">
                  Discover our bestselling Himalayan lipsticks, cloud blush, and radiant skin tints.
                </p>
                <button
                  onClick={() => {
                    onClose();
                    onContinueShopping();
                  }}
                  className="btn-primary-dark rounded-none text-xs"
                >
                  EXPLORE BEST SELLERS
                </button>
              </div>
            ) : (
              cartItems.map((item) => (
                <div
                  key={`${item.product.id}-${item.selectedShade.id}`}
                  className="py-4 flex gap-4 items-center"
                >
                  {/* Item Image */}
                  <div className="w-20 h-20 rounded-xl overflow-hidden bg-[#f9f2f1] border border-[#e8e1e0] flex-shrink-0 p-2">
                    <img
                      src={item.product.images[0]}
                      alt={item.product.name}
                      className="w-full h-full object-contain object-center"
                    />
                  </div>

                  {/* Item Details */}
                  <div className="flex-1 min-w-0">
                    <h4 className="text-xs font-bold text-[#1e1b1b] truncate font-serif">
                      {item.product.name}
                    </h4>

                    {/* Shade Indicator */}
                    <div className="flex items-center gap-1.5 mt-1 text-[11px] text-[#4f4445]">
                      <span
                        className="w-2.5 h-2.5 rounded-full border border-black/20"
                        style={{ backgroundColor: item.selectedShade.hex }}
                      />
                      <span>{item.selectedShade.name}</span>
                    </div>

                    <div className="text-xs font-bold text-[#71585b] mt-1">
                      Rs. {item.product.price.toLocaleString()}
                    </div>

                    {/* Quantity Stepper */}
                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center border border-[#d2c3c4] rounded-md">
                        <button
                          onClick={() =>
                            onUpdateQuantity(item.product.id, item.selectedShade.id, -1)
                          }
                          className="px-2 py-0.5 text-xs text-[#1e1b1b] hover:bg-[#f3ecec] transition-colors"
                          aria-label="Decrease quantity"
                        >
                          -
                        </button>
                        <span className="px-2.5 py-0.5 text-xs font-bold text-[#1e1b1b]">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            onUpdateQuantity(item.product.id, item.selectedShade.id, 1)
                          }
                          className="px-2 py-0.5 text-xs text-[#1e1b1b] hover:bg-[#f3ecec] transition-colors"
                          aria-label="Increase quantity"
                        >
                          +
                        </button>
                      </div>

                      <button
                        onClick={() =>
                          onRemoveItem(item.product.id, item.selectedShade.id)
                        }
                        className="text-[#817475] hover:text-red-600 transition-colors p-1"
                        aria-label="Remove item"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer Summary & Checkout Button */}
          {cartItems.length > 0 && (
            <div className="p-6 bg-[#fff8f7] border-t border-[#e8e1e0] space-y-4">
              <div className="space-y-2 text-xs">
                <div className="flex justify-between text-[#4f4445]">
                  <span>Subtotal</span>
                  <span className="font-semibold text-[#1e1b1b]">
                    Rs. {subtotal.toLocaleString()}
                  </span>
                </div>
                <div className="flex justify-between text-[#4f4445]">
                  <span>Delivery across Nepal</span>
                  <span className="font-semibold">
                    {deliveryFee === 0 ? (
                      <span className="text-emerald-700 font-bold uppercase">FREE</span>
                    ) : (
                      `Rs. ${deliveryFee.toLocaleString()}`
                    )}
                  </span>
                </div>
                <div className="flex justify-between text-sm font-bold text-[#1e1b1b] pt-2 border-t border-[#e8e1e0]">
                  <span>Total</span>
                  <span className="text-base text-[#71585b]">
                    Rs. {total.toLocaleString()}
                  </span>
                </div>
              </div>

              <button
                onClick={() => {
                  onClose();
                  onCheckout();
                }}
                id="cart-proceed-checkout-btn"
                className="btn-primary-dark w-full py-3.5 rounded-none shadow-lg text-center"
              >
                <span>PROCEED TO CHECKOUT</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="flex items-center justify-center gap-2 text-[11px] text-[#817475]">
                <ShieldCheck className="w-3.5 h-3.5 text-[#71585b]" />
                <span>Cash on Delivery & Instant Nepal Pay Available</span>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};
