import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, ShoppingBag, Heart, AlertCircle, X } from 'lucide-react';

export interface ToastMessage {
  id: string;
  type: 'cart' | 'wishlist' | 'success' | 'info';
  title: string;
  message: string;
  image?: string;
}

interface ToastProps {
  toasts: ToastMessage[];
  onDismiss: (id: string) => void;
  onOpenCart?: () => void;
}

export const Toast: React.FC<ToastProps> = ({ toasts, onDismiss, onOpenCart }) => {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3 max-w-sm w-full pointer-events-none px-4 sm:px-0">
      <AnimatePresence>
        {toasts.map((toast) => (
          <motion.div
            key={toast.id}
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.25 }}
            className="pointer-events-auto bg-[#ffffff] text-[#1e1b1b] rounded-xl p-4 shadow-xl border border-[#e8e1e0] flex items-start gap-3 relative overflow-hidden"
          >
            {toast.image ? (
              <img
                src={toast.image}
                alt={toast.title}
                className="w-12 h-12 object-cover rounded-lg flex-shrink-0 bg-[#f9f2f1]"
              />
            ) : (
              <div className="w-10 h-10 rounded-full bg-[#f8d7da] text-[#755c5f] flex items-center justify-center flex-shrink-0">
                {toast.type === 'cart' && <ShoppingBag className="w-5 h-5" />}
                {toast.type === 'wishlist' && <Heart className="w-5 h-5 fill-current" />}
                {toast.type === 'success' && <CheckCircle2 className="w-5 h-5" />}
                {toast.type === 'info' && <AlertCircle className="w-5 h-5" />}
              </div>
            )}

            <div className="flex-1 min-w-0 pr-4">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-[#71585b]">
                {toast.title}
              </h4>
              <p className="text-sm font-medium text-[#1e1b1b] truncate mt-0.5">
                {toast.message}
              </p>
              {toast.type === 'cart' && onOpenCart && (
                <button
                  onClick={() => {
                    onOpenCart();
                    onDismiss(toast.id);
                  }}
                  className="mt-2 text-xs font-semibold text-[#71585b] underline hover:text-[#281719] transition-colors"
                >
                  View Bag & Checkout →
                </button>
              )}
            </div>

            <button
              onClick={() => onDismiss(toast.id)}
              className="text-[#817475] hover:text-[#1e1b1b] p-1 rounded-full hover:bg-[#f3ecec] transition-colors"
              aria-label="Close notification"
            >
              <X className="w-4 h-4" />
            </button>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};
