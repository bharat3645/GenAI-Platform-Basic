import React from 'react';
import { Search, Filter, Sparkles } from 'lucide-react';

interface SearchFiltersProps {
  searchTerm: string;
  onSearchChange: (term: string) => void;
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  selectedPricing: string;
  onPricingChange: (pricing: string) => void;
  categories: string[];
  pricingOptions: string[];
}

export const SearchFilters: React.FC<SearchFiltersProps> = ({
  searchTerm,
  onSearchChange,
  selectedCategory,
  onCategoryChange,
  selectedPricing,
  onPricingChange,
  categories,
  pricingOptions
}) => {
  const formatLabel = (value: string) => {
    return value.split(' ').map(word => 
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 mb-8">
      <div className="flex items-center space-x-3 mb-6">
        <div className="p-2 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg">
          <Sparkles className="w-5 h-5 text-white" />
        </div>
        <h2 className="text-xl font-bold text-gray-900">Discover AI Services</h2>
        <span className="text-sm text-gray-500">Find the perfect AI solution for your project</span>
      </div>
      
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="flex-1">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search services, capabilities, or technologies..."
              value={searchTerm}
              onChange={(e) => onSearchChange(e.target.value)}
              className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-200 text-gray-900 placeholder-gray-500"
            />
          </div>
        </div>
        
        <div className="flex gap-4">
          <div className="flex items-center space-x-3">
            <Filter className="w-5 h-5 text-gray-400" />
            <select
              value={selectedCategory}
              onChange={(e) => onCategoryChange(e.target.value)}
              className="px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 bg-white text-gray-900 font-medium min-w-48"
            >
              {categories.map(category => (
                <option key={category} value={category}>
                  {category === 'all' ? 'All Categories' : formatLabel(category)}
                </option>
              ))}
            </select>
          </div>
          
          <select
            value={selectedPricing}
            onChange={(e) => onPricingChange(e.target.value)}
            className="px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 bg-white text-gray-900 font-medium min-w-40"
          >
            {pricingOptions.map(pricing => (
              <option key={pricing} value={pricing}>
                {pricing === 'all' ? 'All Pricing' : formatLabel(pricing)}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};