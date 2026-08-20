import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, PackageCheck, Truck, MapPin, Printer, ArrowRight, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';
import { Order } from '../types';

interface OrderConfirmationModalProps {
  order: Order | null;
  onClose: () => void;
}

export const OrderConfirmationModal: React.FC<OrderConfirmationModalProps> = ({
  order,
  onClose
}) => {
  useEffect(() => {
    if (order) {
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#71585b', '#f8d7da', '#debfc2', '#e8e1e0']
        });
      } catch (err) {
        // Safe fallback
      }
    }
  }, [order]);

  if (!order) return null;

  const handlePrint = () => {
    window.print();
  };

  const getPaymentLabel = (method: string) => {
    switch (method) {
      case 'cod':
        return 'Cash on Delivery (COD)';
      case 'esewa':
        return 'eSewa Mobile Wallet';
      case 'khalti':
        return 'Khalti Digital Wallet';
      case 'card':
        return 'Credit / Debit Card';
      default:
        return method;
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-y-auto bg-[#1e1b1b]/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          className="bg-[#ffffff] w-full max-w-2xl rounded-3xl shadow-2xl border border-[#e8e1e0] overflow-hidden flex flex-col max-h-[92vh]"
        >
          {/* Header Banner */}
          <div className="bg-[#71585b] text-[#ffffff] p-8 text-center relative overflow-hidden">
            <div className="w-16 h-16 rounded-full bg-[#ffffff]/10 border border-[#ffffff]/20 flex items-center justify-center mx-auto mb-3 text-[#f8d7da]">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <span className="text-[11px] font-bold tracking-[0.25em] text-[#f8d7da] uppercase block mb-1">
              Order Confirmed
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-normal">
              Thank You, {order.customer.fullName}!
            </h2>
            <p className="text-xs text-[#d2c3c4] mt-2 font-normal">
              Your Himalayan beauty package is now being prepared in Kathmandu.
            </p>
          </div>

          {/* Body Content */}
          <div className="p-6 sm:p-8 overflow-y-auto flex-1 space-y-6 text-sm text-[#1e1b1b]">
            {/* Order meta bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 bg-[#f9f2f1] rounded-2xl border border-[#e8e1e0] text-xs">
              <div>
                <span className="text-[#817475] block">Order Number</span>
                <strong className="font-serif text-[#71585b] text-sm">{order.orderId}</strong>
              </div>
              <div>
                <span className="text-[#817475] block">Order Date</span>
                <strong className="text-[#1e1b1b]">{order.createdAt}</strong>
              </div>
              <div>
                <span className="text-[#817475] block">Est. Delivery</span>
                <strong className="text-emerald-800">{order.estimatedDelivery}</strong>
              </div>
              <div>
                <span className="text-[#817475] block">Total Amount</span>
                <strong className="text-[#71585b] text-sm">Rs. {order.total.toLocaleString()}</strong>
              </div>
            </div>

            {/* Delivery & Payment Info Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
              <div className="space-y-2">
                <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#71585b]">
                  <MapPin className="w-4 h-4" />
                  <span>Delivery Address</span>
                </div>
                <p className="text-xs text-[#4f4445] leading-relaxed">
                  <strong>{order.customer.fullName}</strong> <br />
                  {order.customer.street}, Ward {order.customer.ward} <br />
                  {order.customer.municipality}, {order.customer.district} <br />
                  {order.customer.province}, Nepal <br />
                  <span className="text-[#817475]">Phone: +977 {order.customer.phone}</span>
                </p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#71585b]">
                  <Truck className="w-4 h-4" />
                  <span>Payment & Dispatch</span>
                </div>
                <p className="text-xs text-[#4f4445] leading-relaxed">
                  <strong>Method:</strong> {getPaymentLabel(order.paymentMethod)} <br />
                  <strong>Status:</strong> Order Placed (Processing) <br />
                  <strong>Courier:</strong> Savyata Express Logistics Nepal <br />
                  {order.customer.notes && (
                    <span className="italic text-[#817475] block mt-1">
                      Note: "{order.customer.notes}"
                    </span>
                  )}
                </p>
              </div>
            </div>

            {/* Purchased Items List */}
            <div className="pt-4 border-t border-[#e8e1e0]">
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#1e1b1b] mb-3">
                Items in this Order ({order.items.length})
              </h3>

              <div className="space-y-3 divide-y divide-[#f3ecec]">
                {order.items.map((item) => (
                  <div key={`${item.product.id}-${item.selectedShade.id}`} className="pt-3 flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-lg bg-[#f9f2f1] border border-[#e8e1e0] p-1 flex-shrink-0 flex items-center justify-center">
                        <img
                          src={item.product.images[0]}
                          alt={item.product.name}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-[#1e1b1b] font-serif">
                          {item.product.name}
                        </h4>
                        <div className="flex items-center gap-1 text-[11px] text-[#4f4445] mt-0.5">
                          <span
                            className="w-2 h-2 rounded-full"
                            style={{ backgroundColor: item.selectedShade.hex }}
                          />
                          <span>{item.selectedShade.name}</span>
                          <span>• Qty: {item.quantity}</span>
                        </div>
                      </div>
                    </div>

                    <span className="text-xs font-bold text-[#1e1b1b]">
                      Rs. {(item.product.price * item.quantity).toLocaleString()}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Total breakdown */}
            <div className="p-4 bg-[#fff8f7] rounded-2xl border border-[#e8e1e0] space-y-2 text-xs">
              <div className="flex justify-between text-[#4f4445]">
                <span>Subtotal</span>
                <span>Rs. {order.subtotal.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-[#4f4445]">
                <span>Shipping in Nepal</span>
                <span>
                  {order.shippingFee === 0 ? 'FREE' : `Rs. ${order.shippingFee.toLocaleString()}`}
                </span>
              </div>
              <div className="flex justify-between font-bold text-sm text-[#1e1b1b] pt-2 border-t border-[#e8e1e0]">
                <span>Total</span>
                <span className="text-[#71585b]">Rs. {order.total.toLocaleString()}</span>
              </div>
            </div>
          </div>

          {/* Action Buttons Footer */}
          <div className="p-6 bg-[#fff8f7] border-t border-[#e8e1e0] flex flex-col sm:flex-row items-center justify-between gap-3">
            <button
              onClick={handlePrint}
              className="px-4 py-3 bg-[#ffffff] hover:bg-[#f3ecec] border border-[#e8e1e0] rounded-xl text-xs font-semibold uppercase tracking-wider text-[#1e1b1b] flex items-center gap-2 transition-colors w-full sm:w-auto justify-center"
            >
              <Printer className="w-4 h-4 text-[#71585b]" />
              <span>Print Receipt</span>
            </button>

            <button
              onClick={onClose}
              className="btn-primary-dark w-full sm:w-auto rounded-none text-xs flex items-center justify-center gap-2"
            >
              <span>CONTINUE EXPLORING SAVYATA</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
