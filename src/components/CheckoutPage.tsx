import React, { useState } from 'react';
import { ArrowLeft, ShieldCheck, Truck, CreditCard, Wallet, Banknote, Sparkles, CheckCircle2, Lock } from 'lucide-react';
import { CartItem, CheckoutFormData, PaymentMethod, Order } from '../types';
import { FREE_DELIVERY_THRESHOLD, STANDARD_DELIVERY_FEE } from '../data/products';

interface CheckoutPageProps {
  cartItems: CartItem[];
  onBackToShopping: () => void;
  onOrderPlaced: (order: Order) => void;
}

const NEPAL_PROVINCES = [
  'Bagmati Province',
  'Gandaki Province',
  'Koshi Province',
  'Lumbini Province',
  'Madhesh Province',
  'Karnali Province',
  'Sudurpashchim Province'
];

export const CheckoutPage: React.FC<CheckoutPageProps> = ({
  cartItems,
  onBackToShopping,
  onOrderPlaced
}) => {
  const [formData, setFormData] = useState<CheckoutFormData>({
    fullName: 'Shreya Shrestha',
    email: 'shreya.shrestha@example.com',
    phone: '9801234567',
    province: 'Bagmati Province',
    district: 'Kathmandu',
    municipality: 'Kathmandu Metropolitan',
    ward: '3',
    street: 'Lazimpat, Near Hotel Ambassador',
    paymentMethod: 'cod',
    notes: 'Please call before delivery'
  });

  const [promoCode, setPromoCode] = useState('');
  const [discountPercent, setDiscountPercent] = useState(0);
  const [promoError, setPromoError] = useState('');
  const [promoSuccess, setPromoSuccess] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  const discountAmount = Math.round((subtotal * discountPercent) / 100);
  const discountedSubtotal = subtotal - discountAmount;
  const isFreeDelivery = discountedSubtotal >= FREE_DELIVERY_THRESHOLD;
  const deliveryFee = cartItems.length === 0 ? 0 : isFreeDelivery ? 0 : STANDARD_DELIVERY_FEE;
  const total = discountedSubtotal + deliveryFee;

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    setPromoError('');
    setPromoSuccess('');

    if (promoCode.trim().toUpperCase() === 'SAVYATA10') {
      setDiscountPercent(10);
      setPromoSuccess('Promo SAVYATA10 applied! 10% discount applied to your order.');
    } else if (promoCode.trim().toUpperCase() === 'HIMALAYA') {
      setDiscountPercent(15);
      setPromoSuccess('Special VIP code HIMALAYA applied! 15% discount.');
    } else {
      setPromoError('Invalid coupon code. Try SAVYATA10 for 10% off.');
    }
  };

  const handleSubmitOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (cartItems.length === 0) return;

    setIsSubmitting(true);

    setTimeout(() => {
      const orderId = `SC-${Math.floor(100000 + Math.random() * 900000)}`;
      const now = new Date();
      const deliveryDate = new Date();
      deliveryDate.setDate(now.getDate() + (formData.district.toLowerCase().includes('kathmandu') ? 2 : 4));

      const newOrder: Order = {
        orderId,
        createdAt: now.toLocaleDateString('en-US', {
          month: 'short',
          day: 'numeric',
          year: 'numeric'
        }),
        items: [...cartItems],
        subtotal: discountedSubtotal,
        shippingFee: deliveryFee,
        total,
        customer: { ...formData },
        paymentMethod: formData.paymentMethod,
        status: 'Confirmed',
        estimatedDelivery: deliveryDate.toLocaleDateString('en-US', {
          weekday: 'short',
          month: 'short',
          day: 'numeric'
        })
      };

      setIsSubmitting(false);
      onOrderPlaced(newOrder);
    }, 900);
  };

  if (cartItems.length === 0) {
    return (
      <div className="py-20 max-w-lg mx-auto text-center px-4">
        <h2 className="font-serif text-2xl text-[#1e1b1b] mb-4">Your bag is empty</h2>
        <p className="text-sm text-[#817475] mb-6">
          Add some Himalayan beauty essentials to proceed with checkout.
        </p>
        <button
          onClick={onBackToShopping}
          className="btn-primary-dark rounded-none"
        >
          GO TO SHOP
        </button>
      </div>
    );
  }

  return (
    <div className="py-10 bg-[#fff8f7] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Link */}
        <button
          onClick={onBackToShopping}
          className="inline-flex items-center gap-2 text-xs font-semibold text-[#71585b] hover:text-[#1e1b1b] uppercase tracking-wider mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Return to Shopping</span>
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Form Column */}
          <div className="lg:col-span-7 space-y-8">
            <div className="bg-[#ffffff] rounded-3xl p-6 sm:p-8 border border-[#e8e1e0] shadow-sm">
              <div className="flex items-center justify-between pb-6 border-b border-[#e8e1e0] mb-6">
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-[#71585b] block mb-1">
                    Step 1 of 2
                  </span>
                  <h2 className="font-serif text-2xl text-[#1e1b1b]">
                    Delivery Details in Nepal
                  </h2>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full font-medium">
                  <Lock className="w-3.5 h-3.5" />
                  <span>Secure 256-bit SSL</span>
                </div>
              </div>

              <form id="checkout-form" onSubmit={handleSubmitOrder} className="space-y-6">
                {/* Contact Details */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider text-[#1e1b1b] block mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="e.g. Shreya Shrestha"
                      className="w-full px-4 py-2.5 bg-[#f9f2f1] border border-[#e8e1e0] rounded-xl text-sm focus:outline-none focus:border-[#71585b]"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider text-[#1e1b1b] block mb-1.5">
                      Phone Number (Nepal) *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="98XXXXXXXX"
                      className="w-full px-4 py-2.5 bg-[#f9f2f1] border border-[#e8e1e0] rounded-xl text-sm focus:outline-none focus:border-[#71585b]"
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-[#1e1b1b] block mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@example.com"
                      className="w-full px-4 py-2.5 bg-[#f9f2f1] border border-[#e8e1e0] rounded-xl text-sm focus:outline-none focus:border-[#71585b]"
                    />
                  </div>
                </div>

                {/* Address Details in Nepal */}
                <div className="pt-4 border-t border-[#f3ecec] space-y-4">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-[#71585b]">
                    Shipping Destination
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-bold uppercase tracking-wider text-[#1e1b1b] block mb-1.5">
                        Province *
                      </label>
                      <select
                        value={formData.province}
                        onChange={(e) => setFormData({ ...formData, province: e.target.value })}
                        aria-label="Select Province"
                        className="w-full px-4 py-2.5 bg-[#f9f2f1] border border-[#e8e1e0] rounded-xl text-sm focus:outline-none focus:border-[#71585b]"
                      >
                        {NEPAL_PROVINCES.map((prov) => (
                          <option key={prov} value={prov}>
                            {prov}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="text-xs font-bold uppercase tracking-wider text-[#1e1b1b] block mb-1.5">
                        District / City *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.district}
                        onChange={(e) => setFormData({ ...formData, district: e.target.value })}
                        placeholder="e.g. Kathmandu, Pokhara, Lalitpur"
                        className="w-full px-4 py-2.5 bg-[#f9f2f1] border border-[#e8e1e0] rounded-xl text-sm focus:outline-none focus:border-[#71585b]"
                      >
                      </input>
                    </div>

                    <div>
                      <label className="text-xs font-bold uppercase tracking-wider text-[#1e1b1b] block mb-1.5">
                        Municipality / Metropolitan *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.municipality}
                        onChange={(e) => setFormData({ ...formData, municipality: e.target.value })}
                        placeholder="e.g. Kathmandu Metropolitan"
                        className="w-full px-4 py-2.5 bg-[#f9f2f1] border border-[#e8e1e0] rounded-xl text-sm focus:outline-none focus:border-[#71585b]"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-bold uppercase tracking-wider text-[#1e1b1b] block mb-1.5">
                        Ward Number
                      </label>
                      <input
                        type="text"
                        value={formData.ward}
                        onChange={(e) => setFormData({ ...formData, ward: e.target.value })}
                        placeholder="e.g. 3"
                        className="w-full px-4 py-2.5 bg-[#f9f2f1] border border-[#e8e1e0] rounded-xl text-sm focus:outline-none focus:border-[#71585b]"
                      />
                    </div>

                    <div className="sm:col-span-2">
                      <label className="text-xs font-bold uppercase tracking-wider text-[#1e1b1b] block mb-1.5">
                        Street Address & Landmark *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.street}
                        onChange={(e) => setFormData({ ...formData, street: e.target.value })}
                        placeholder="e.g. Lazimpat, Opp. Ambassador Hotel"
                        className="w-full px-4 py-2.5 bg-[#f9f2f1] border border-[#e8e1e0] rounded-xl text-sm focus:outline-none focus:border-[#71585b]"
                      />
                    </div>

                    <div className="sm:col-span-2">
                      <label className="text-xs font-bold uppercase tracking-wider text-[#1e1b1b] block mb-1.5">
                        Delivery Notes (Optional)
                      </label>
                      <textarea
                        rows={2}
                        value={formData.notes}
                        onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                        placeholder="e.g. Call before arrival or leave with security"
                        className="w-full px-4 py-2.5 bg-[#f9f2f1] border border-[#e8e1e0] rounded-xl text-sm focus:outline-none focus:border-[#71585b]"
                      />
                    </div>
                  </div>
                </div>

                {/* Payment Selection */}
                <div className="pt-6 border-t border-[#f3ecec]">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-[#71585b] mb-4">
                    Payment Method
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {/* Cash on delivery */}
                    <div
                      onClick={() => setFormData({ ...formData, paymentMethod: 'cod' })}
                      className={`p-4 rounded-2xl border cursor-pointer transition-all flex items-start gap-3.5 ${
                        formData.paymentMethod === 'cod'
                          ? 'border-[#71585b] bg-[#f8d7da]/20 ring-1 ring-[#71585b]'
                          : 'border-[#e8e1e0] hover:bg-[#f9f2f1]'
                      }`}
                    >
                      <div className="w-5 h-5 rounded-full border border-[#817475] flex items-center justify-center mt-0.5 flex-shrink-0">
                        {formData.paymentMethod === 'cod' && (
                          <div className="w-3 h-3 rounded-full bg-[#71585b]" />
                        )}
                      </div>
                      <div>
                        <div className="flex items-center gap-1.5">
                          <Banknote className="w-4 h-4 text-[#71585b]" />
                          <span className="text-xs font-bold text-[#1e1b1b]">
                            Cash on Delivery (COD)
                          </span>
                        </div>
                        <p className="text-[11px] text-[#817475] mt-1">
                          Pay cash to the rider upon package arrival
                        </p>
                      </div>
                    </div>

                    {/* eSewa */}
                    <div
                      onClick={() => setFormData({ ...formData, paymentMethod: 'esewa' })}
                      className={`p-4 rounded-2xl border cursor-pointer transition-all flex items-start gap-3.5 ${
                        formData.paymentMethod === 'esewa'
                          ? 'border-[#71585b] bg-[#f8d7da]/20 ring-1 ring-[#71585b]'
                          : 'border-[#e8e1e0] hover:bg-[#f9f2f1]'
                      }`}
                    >
                      <div className="w-5 h-5 rounded-full border border-[#817475] flex items-center justify-center mt-0.5 flex-shrink-0">
                        {formData.paymentMethod === 'esewa' && (
                          <div className="w-3 h-3 rounded-full bg-[#71585b]" />
                        )}
                      </div>
                      <div>
                        <div className="flex items-center gap-1.5">
                          <Wallet className="w-4 h-4 text-emerald-600" />
                          <span className="text-xs font-bold text-[#1e1b1b]">
                            eSewa Mobile Wallet
                          </span>
                        </div>
                        <p className="text-[11px] text-[#817475] mt-1">
                          Instant demo payment via eSewa QR
                        </p>
                      </div>
                    </div>

                    {/* Khalti */}
                    <div
                      onClick={() => setFormData({ ...formData, paymentMethod: 'khalti' })}
                      className={`p-4 rounded-2xl border cursor-pointer transition-all flex items-start gap-3.5 ${
                        formData.paymentMethod === 'khalti'
                          ? 'border-[#71585b] bg-[#f8d7da]/20 ring-1 ring-[#71585b]'
                          : 'border-[#e8e1e0] hover:bg-[#f9f2f1]'
                      }`}
                    >
                      <div className="w-5 h-5 rounded-full border border-[#817475] flex items-center justify-center mt-0.5 flex-shrink-0">
                        {formData.paymentMethod === 'khalti' && (
                          <div className="w-3 h-3 rounded-full bg-[#71585b]" />
                        )}
                      </div>
                      <div>
                        <div className="flex items-center gap-1.5">
                          <Wallet className="w-4 h-4 text-purple-600" />
                          <span className="text-xs font-bold text-[#1e1b1b]">
                            Khalti Digital Wallet
                          </span>
                        </div>
                        <p className="text-[11px] text-[#817475] mt-1">
                          Seamless digital wallet checkout
                        </p>
                      </div>
                    </div>

                    {/* Card */}
                    <div
                      onClick={() => setFormData({ ...formData, paymentMethod: 'card' })}
                      className={`p-4 rounded-2xl border cursor-pointer transition-all flex items-start gap-3.5 ${
                        formData.paymentMethod === 'card'
                          ? 'border-[#71585b] bg-[#f8d7da]/20 ring-1 ring-[#71585b]'
                          : 'border-[#e8e1e0] hover:bg-[#f9f2f1]'
                      }`}
                    >
                      <div className="w-5 h-5 rounded-full border border-[#817475] flex items-center justify-center mt-0.5 flex-shrink-0">
                        {formData.paymentMethod === 'card' && (
                          <div className="w-3 h-3 rounded-full bg-[#71585b]" />
                        )}
                      </div>
                      <div>
                        <div className="flex items-center gap-1.5">
                          <CreditCard className="w-4 h-4 text-[#71585b]" />
                          <span className="text-xs font-bold text-[#1e1b1b]">
                            Visa / Mastercard
                          </span>
                        </div>
                        <p className="text-[11px] text-[#817475] mt-1">
                          Credit / Debit Card payment
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    id="place-order-btn"
                    disabled={isSubmitting}
                    className="btn-primary-dark w-full py-4 rounded-none shadow-xl text-center flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <span className="inline-block animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent" />
                    ) : (
                      <>
                        <ShieldCheck className="w-5 h-5" />
                        <span>PLACE DEMO ORDER — RS. {total.toLocaleString()}</span>
                      </>
                    )}
                  </button>
                  <p className="text-[11px] text-center text-[#817475] mt-2">
                    * This is a fully functional demo order. You will receive an instant confirmation receipt.
                  </p>
                </div>
              </form>
            </div>
          </div>

          {/* Right Summary Column */}
          <div className="lg:col-span-5 space-y-6">
            {/* Order Items Review */}
            <div className="bg-[#ffffff] rounded-3xl p-6 sm:p-8 border border-[#e8e1e0] shadow-sm">
              <h3 className="font-serif text-lg font-bold text-[#1e1b1b] pb-4 border-b border-[#e8e1e0] flex items-center justify-between">
                <span>Order Summary</span>
                <span className="text-xs font-sans text-[#71585b] font-semibold">
                  {cartItems.reduce((acc, i) => acc + i.quantity, 0)} Items
                </span>
              </h3>

              <div className="py-4 space-y-4 max-h-80 overflow-y-auto divide-y divide-[#f3ecec]">
                {cartItems.map((item) => (
                  <div key={`${item.product.id}-${item.selectedShade.id}`} className="pt-3 flex gap-3.5 items-center">
                    <div className="w-14 h-14 rounded-lg bg-[#f9f2f1] border border-[#e8e1e0] p-1 flex-shrink-0 flex items-center justify-center">
                      <img
                        src={item.product.images[0]}
                        alt={item.product.name}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-xs font-bold text-[#1e1b1b] truncate font-serif">
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
                    <div className="text-xs font-bold text-[#1e1b1b]">
                      Rs. {(item.product.price * item.quantity).toLocaleString()}
                    </div>
                  </div>
                ))}
              </div>

              {/* Promo Code Form */}
              <form onSubmit={handleApplyPromo} className="pt-4 border-t border-[#e8e1e0] space-y-2">
                <label className="text-[11px] font-bold uppercase tracking-wider text-[#1e1b1b] block">
                  Promo Code / Voucher
                </label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                    placeholder="Enter SAVYATA10"
                    className="flex-1 px-3.5 py-2 bg-[#f9f2f1] border border-[#e8e1e0] rounded-xl text-xs uppercase tracking-wider font-semibold focus:outline-none focus:border-[#71585b]"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2 bg-[#71585b] text-[#ffffff] rounded-xl text-xs font-semibold uppercase tracking-wider hover:bg-[#584144] transition-colors"
                  >
                    Apply
                  </button>
                </div>

                {promoError && (
                  <p className="text-[11px] text-red-600 font-medium">{promoError}</p>
                )}
                {promoSuccess && (
                  <p className="text-[11px] text-emerald-700 font-medium flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>{promoSuccess}</span>
                  </p>
                )}
              </form>

              {/* Breakdown */}
              <div className="pt-6 border-t border-[#e8e1e0] space-y-3 text-xs">
                <div className="flex justify-between text-[#4f4445]">
                  <span>Subtotal</span>
                  <span className="font-semibold text-[#1e1b1b]">
                    Rs. {subtotal.toLocaleString()}
                  </span>
                </div>

                {discountAmount > 0 && (
                  <div className="flex justify-between text-emerald-700 font-semibold">
                    <span>Discount ({discountPercent}%)</span>
                    <span>- Rs. {discountAmount.toLocaleString()}</span>
                  </div>
                )}

                <div className="flex justify-between text-[#4f4445]">
                  <span className="flex items-center gap-1">
                    <Truck className="w-3.5 h-3.5 text-[#71585b]" />
                    <span>Shipping in Nepal</span>
                  </span>
                  <span className="font-semibold">
                    {deliveryFee === 0 ? (
                      <span className="text-emerald-700 font-bold uppercase">
                        FREE (Over Rs. 2,500)
                      </span>
                    ) : (
                      `Rs. ${deliveryFee.toLocaleString()}`
                    )}
                  </span>
                </div>

                <div className="flex justify-between text-base font-bold text-[#1e1b1b] pt-3 border-t border-[#e8e1e0]">
                  <span>Total (NPR)</span>
                  <span className="text-lg text-[#71585b]">
                    Rs. {total.toLocaleString()}
                  </span>
                </div>
              </div>
            </div>

            {/* Guarantee Box */}
            <div className="bg-[#f9f2f1] rounded-2xl p-4 border border-[#e8e1e0] text-xs text-[#4f4445] space-y-2">
              <div className="flex items-center gap-2 font-bold text-[#1e1b1b]">
                <Sparkles className="w-4 h-4 text-[#71585b]" />
                <span>The Savyata Promise</span>
              </div>
              <p className="leading-relaxed">
                Every formula is batch-tested in Nepal using clean botanical actives. If a shade does not match your undertone, our beauty advisors are here to help.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
