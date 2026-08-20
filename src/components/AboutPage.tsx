import React from 'react';
import { Sparkles, Leaf, Heart, ShieldCheck, MapPin, Mail, Phone, ArrowRight } from 'lucide-react';
import { ActivePage } from '../types';

interface AboutPageProps {
  onNavigate: (page: ActivePage) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  return (
    <div className="py-12 bg-[#fff8f7] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#f8d7da] text-[#755c5f] text-xs font-semibold tracking-widest uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Our Philosophy</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-[#1e1b1b] font-normal leading-tight">
            BEAUTY ROOTED IN <br />
            <span className="italic font-light text-[#71585b]">HIMALAYAN PURITY.</span>
          </h1>

          <p className="text-base sm:text-lg text-[#4f4445] leading-relaxed">
            Founded with a vision to redefine modern cosmetics for South Asian undertones and global beauty enthusiasts alike, SAVYATA COSMETICS crafts high-performance, clean formulations infused with wild-harvested botanicals from Nepal.
          </p>
        </div>

        {/* Editorial Split Section */}
        <div className="bg-[#ffffff] rounded-3xl overflow-hidden border border-[#e8e1e0] grid grid-cols-1 lg:grid-cols-12 shadow-sm">
          <div className="lg:col-span-6 aspect-[4/3] lg:aspect-auto overflow-hidden bg-[#e8e1e0]">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuACW2dXct7GBKSL1Z8OXQV03N9TpV1yNlM7DyrSfJzf7mgLluYWPNELo5ZO2EpNrKKG_n3M6g0nVi_sOkVa95EbeUGts1-6o5u51TtPOG8CHBSLm0G6w_iDvZtAgwuAL9pk5RqW1TirL4bKrnMui11zUKD6DzzXRuNz8xySk4TZYCOYH6dMv64F6cI6hJ0uZxVxXZmaIEr0TXXd3j2rDmP3BnwxbAwCI91VxC3kVkDmZC-SfoSNdUXx"
              alt="Savyata Cosmetics textures and lipsticks"
              className="w-full h-full object-cover object-center"
            />
          </div>

          <div className="lg:col-span-6 p-8 sm:p-12 lg:p-16 flex flex-col justify-center space-y-6">
            <span className="text-xs uppercase font-bold tracking-[0.2em] text-[#71585b]">
              The Savyata Origin
            </span>
            <h2 className="font-serif text-3xl text-[#1e1b1b]">
              Crafted for Your Everyday Glow
            </h2>
            <p className="text-sm text-[#4f4445] leading-relaxed">
              We believe makeup shouldn’t mask who you are — it should feel like an extension of your natural grace. Every shade in our Velvet Matte, Cloud Blush, and Skin Tint ranges is carefully tested under high-altitude Himalayan sun and urban humidity to ensure featherlight, long-wearing perfection.
            </p>
            <p className="text-sm text-[#4f4445] leading-relaxed">
              From our flagship studio in Kathmandu to doors across Nepal, we pride ourselves on sustainable packaging, ethical sourcing with local women cooperatives, and cruelty-free innovation.
            </p>
            <div className="pt-2">
              <button
                onClick={() => onNavigate('shop')}
                className="btn-primary-dark rounded-none text-xs flex items-center gap-2"
              >
                <span>EXPLORE OUR RANGE</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* 3 Core Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-[#ffffff] rounded-3xl p-8 border border-[#e8e1e0] space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-[#f8d7da] text-[#755c5f] flex items-center justify-center">
              <Leaf className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-xl text-[#1e1b1b]">Clean Botanicals</h3>
            <p className="text-xs text-[#4f4445] leading-relaxed">
              Enriched with Seabuckthorn oil, Rhododendron petals, and Wild Himalayan Rosehip to nourish your skin beneath the color.
            </p>
          </div>

          <div className="bg-[#ffffff] rounded-3xl p-8 border border-[#e8e1e0] space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-[#f8d7da] text-[#755c5f] flex items-center justify-center">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-xl text-[#1e1b1b]">100% Cruelty-Free</h3>
            <p className="text-xs text-[#4f4445] leading-relaxed">
              We never test on animals. All of our formulations are certified vegan, paraben-free, and dermatologically tested for delicate skin.
            </p>
          </div>

          <div className="bg-[#ffffff] rounded-3xl p-8 border border-[#e8e1e0] space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-[#f8d7da] text-[#755c5f] flex items-center justify-center">
              <Heart className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-xl text-[#1e1b1b]">Nepal Heritage</h3>
            <p className="text-xs text-[#4f4445] leading-relaxed">
              Designed with care in Kathmandu. We partner with local courier networks to deliver fresh cosmetics to all 7 provinces of Nepal.
            </p>
          </div>
        </div>

        {/* Studio / Flagship Details */}
        <div className="bg-[#f3ecec] rounded-3xl p-8 sm:p-12 border border-[#e8e1e0] flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#71585b]">
              Visit Our Studio
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl text-[#1e1b1b]">
              Savyata Experience Studio Kathmandu
            </h3>
            <p className="text-xs text-[#4f4445] max-w-lg">
              Book a personalized shade consultation or try our full tester bar at our flagship studio in Kathmandu.
            </p>
            <div className="pt-2 flex flex-wrap gap-4 text-xs text-[#1e1b1b] font-medium">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-[#71585b]" />
                <span>Lazimpat Road, Kathmandu</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Mail className="w-4 h-4 text-[#71585b]" />
                <span>care@savyatacosmetics.com</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Phone className="w-4 h-4 text-[#71585b]" />
                <span>+977 9801234567</span>
              </div>
            </div>
          </div>

          <button
            onClick={() => onNavigate('shop')}
            className="btn-primary-dark rounded-none text-xs whitespace-nowrap shadow-md"
          >
            SHOP COLLECTION ONLINE
          </button>
        </div>
      </div>
    </div>
  );
};
