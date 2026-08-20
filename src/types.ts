export interface Shade {
  id: string;
  name: string;
  hex: string;
  image?: string;
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  date: string;
  verified: boolean;
  comment: string;
}

export interface Product {
  id: string;
  name: string;
  subtitle?: string;
  price: number; // in NPR (Rs.)
  originalPrice?: number;
  rating: number;
  reviewCount: number;
  category: 'Lips' | 'Face' | 'Blush' | 'Highlighter' | 'Eyes' | 'Skincare';
  description: string;
  shortDescription?: string;
  shades: Shade[];
  images: string[];
  features?: string[];
  howToUse?: string;
  ingredients?: string;
  shippingInfo?: string;
  badge?: 'Bestseller' | 'New' | 'Trending' | 'Vegan';
  isBestSeller?: boolean;
  isNewArrival?: boolean;
  skinType?: ('Dry' | 'Oily' | 'Combination' | 'Sensitive' | 'All')[];
  finish?: 'Matte' | 'Dewy' | 'Radiant' | 'Satin' | 'Natural';
}

export interface CartItem {
  product: Product;
  selectedShade: Shade;
  quantity: number;
}

export type PaymentMethod = 'cod' | 'esewa' | 'khalti' | 'card';

export interface CheckoutFormData {
  fullName: string;
  email: string;
  phone: string;
  province: string;
  district: string;
  municipality: string;
  ward: string;
  street: string;
  paymentMethod: PaymentMethod;
  notes?: string;
}

export interface Order {
  orderId: string;
  createdAt: string;
  items: CartItem[];
  subtotal: number;
  shippingFee: number;
  total: number;
  customer: CheckoutFormData;
  paymentMethod: PaymentMethod;
  status: 'Confirmed' | 'Processing' | 'Shipped';
  estimatedDelivery: string;
}

export type ActivePage = 'home' | 'shop' | 'bestsellers' | 'newarrivals' | 'about' | 'checkout';
