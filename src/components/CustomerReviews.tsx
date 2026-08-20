import React from 'react';
import { Star, Quote, CheckCircle2 } from 'lucide-react';
import { REVIEWS } from '../data/products';

export const CustomerReviews: React.FC = () => {
  return (
    <section className="py-16 lg:py-24 bg-[#fff8f7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto mb-14">
          <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#71585b] block mb-2">
            Real Experiences
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif text-[#1e1b1b]">
            LOVED BY YOU
          </h2>
          <p className="text-sm text-[#4f4445] mt-2">
            Stories from radiant people embracing beauty on their own terms.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {REVIEWS.map((review) => (
            <div
              key={review.id}
              className="bg-[#ffffff] rounded-2xl p-8 border border-[#e8e1e0] shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between relative"
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 text-[#f8d7da] -z-0 opacity-60" />

              <div>
                {/* 5 Stars */}
                <div className="flex text-amber-500 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-500 text-amber-500" />
                  ))}
                </div>

                <p className="text-sm sm:text-base text-[#1e1b1b] italic font-serif leading-relaxed mb-6">
                  {review.text}
                </p>
              </div>

              <div className="flex items-center gap-3.5 pt-4 border-t border-[#f3ecec]">
                {/* Initial Avatar */}
                <div className="w-10 h-10 rounded-full bg-[#f8d7da] text-[#755c5f] flex items-center justify-center font-bold text-sm">
                  {review.initial}
                </div>

                <div>
                  <h4 className="text-sm font-bold text-[#1e1b1b]">
                    {review.author}
                  </h4>
                  <div className="flex items-center gap-1 text-[11px] text-[#71585b] font-medium">
                    <CheckCircle2 className="w-3 h-3 text-[#71585b]" />
                    <span>{review.role}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
