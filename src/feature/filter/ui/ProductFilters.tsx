import React from 'react';
import CategoryFilter from './CategoryFilter';
import BrandFilter from './BrandFilter';
import RatingFilter from './RatingFilters';
import type { FilterState } from '../model/types';

interface ProductFiltersProps {
  filterState: FilterState;
  onFilterChange: (newState: FilterState) => void;
}

export default function ProductFilters({ filterState, onFilterChange }: ProductFiltersProps) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm border">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-medium text-gray-900">Filters</h3>
        {(filterState.selectedCategory || filterState.selectedBrand || filterState.ratingRange) && (
          <button onClick={() => onFilterChange({})} className="text-sm text-blue-600 hover:text-blue-800 font-medium">Clear All</button>
        )}
      </div>

      <div className="space-y-4">
        <CategoryFilter selectedCategory={filterState.selectedCategory} onCategoryChange={(cat) => onFilterChange({ ...filterState, selectedCategory: cat })} />
        <BrandFilter selectedBrand={filterState.selectedBrand} onBrandChange={(brand) => onFilterChange({ ...filterState, selectedBrand: brand })} />
        <RatingFilter ratingRange={filterState.ratingRange} onRatingChange={(range) => onFilterChange({ ...filterState, ratingRange: range })} />
      </div>
    </div>
  );
}