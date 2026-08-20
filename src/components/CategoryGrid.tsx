import React from 'react';
import { CATEGORIES } from '../data/products';
import { ActivePage } from '../types';

interface CategoryGridProps {
  onSelectCategory: (category: string) => void;
  onNavigate: (page: ActivePage) => void;
}

export const CategoryGrid: React.FC<CategoryGridProps> = ({ onSelectCategory, onNavigate }) => {
  const handleCategoryClick = (categoryId: string) => {
    onSelectCategory(categoryId);
    onNavigate('shop');
  };

  return (
    <section className="py-12 bg-[#fff8f7] border-y border-[#e8e1e0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto mb-10">
          <h2 className="text-xs uppercase tracking-[0.25em] font-semibold text-[#71585b] mb-2">
            Categories
          </h2>
          <p className="text-2xl sm:text-3xl font-serif text-[#1e1b1b]">
            Explore by Category
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 justify-items-center">
          {CATEGORIES.map((category) => (
            <button
              key={category.id}
              onClick={() => handleCategoryClick(category.id)}
              className="flex flex-col items-center group focus:outline-none w-full max-w-[200px]"
            >
              <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-full overflow-hidden border-2 border-[#f8d7da] p-1 bg-[#ffffff] group-hover:border-[#71585b] transition-all duration-300 shadow-sm group-hover:shadow-md mb-4">
                <div className="w-full h-full rounded-full overflow-hidden bg-[#f3ecec]">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </div>

              <span className="text-xs sm:text-sm font-semibold tracking-[0.18em] uppercase text-[#1e1b1b] group-hover:text-[#71585b] transition-colors">
                {category.shortName}
              </span>
              <span className="text-[11px] text-[#817475] mt-0.5">
                Explore collection →
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};
