import React, { useState } from 'react';
import { Heart, Instagram } from 'lucide-react';
import { INSTAGRAM_POSTS } from '../data/products';

export const InstagramGrid: React.FC = () => {
  const [likedPosts, setLikedPosts] = useState<{ [id: string]: boolean }>({});

  const toggleLike = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setLikedPosts((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section className="py-16 bg-[#fff8f7] border-t border-[#e8e1e0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.25em] font-semibold text-[#71585b] mb-2">
            <Instagram className="w-3.5 h-3.5" />
            <span>Community</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif text-[#1e1b1b]">
            FOLLOW THE SAVYATA GLOW
          </h2>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-semibold tracking-widest text-[#71585b] hover:text-[#1e1b1b] inline-block mt-2 uppercase transition-colors"
          >
            @savyatacosmetics
          </a>
        </div>

        {/* 4-Column Image Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {INSTAGRAM_POSTS.map((post) => {
            const isLiked = likedPosts[post.id];

            return (
              <div
                key={post.id}
                className="group relative aspect-square rounded-2xl overflow-hidden bg-[#e8e1e0] cursor-pointer shadow-sm"
              >
                <img
                  src={post.image}
                  alt={post.alt}
                  className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700"
                />

                {/* Dark Vignette Overlay on Hover */}
                <div className="absolute inset-0 bg-[#1e1b1b]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4 text-center">
                  <button
                    onClick={(e) => toggleLike(post.id, e)}
                    className="p-3 rounded-full bg-[#ffffff]/20 backdrop-blur-md text-[#ffffff] hover:scale-110 transition-transform mb-2"
                    aria-label="Like post"
                  >
                    <Heart
                      className={`w-6 h-6 ${
                        isLiked ? 'fill-[#f8d7da] text-[#f8d7da]' : 'text-[#ffffff]'
                      }`}
                    />
                  </button>
                  <span className="text-[11px] text-[#ffffff] font-medium tracking-wider uppercase">
                    @savyatacosmetics
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
