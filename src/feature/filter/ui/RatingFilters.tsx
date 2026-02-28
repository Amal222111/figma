import React from 'react';
import type { RatingRange } from '../model/types';

interface RatingFilterProps {
  ratingRange?: RatingRange;
  onRatingChange: (range: RatingRange | undefined) => void;
}

export default function RatingFilter({ ratingRange, onRatingChange }: RatingFilterProps) {
  return (
    <div className="mb-4">
      <div className="flex items-center justify-between mb-2">
        <label className="block text-sm font-medium text-gray-700">Rating:</label>
        {(ratingRange?.min || ratingRange?.max) && (
          <button onClick={() => onRatingChange(undefined)} className="text-xs text-blue-600 hover:text-blue-800">Clear</button>
        )}
      </div>

      <div className="flex items-center space-x-2">
        <input
          type="number" min={0} max={5} step={0.1} placeholder="Min"
          value={ratingRange?.min ?? ''}
          onChange={(e) => onRatingChange({ min: parseFloat(e.target.value) || 0, max: ratingRange?.max ?? 5 })}
          className="block w-full px-2 py-1 border border-gray-300 rounded text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
        />
        <span className="text-gray-500 text-sm">to</span>
        <input
          type="number" min={0} max={5} step={0.1} placeholder="Max"
          value={ratingRange?.max ?? ''}
          onChange={(e) => onRatingChange({ min: ratingRange?.min ?? 0, max: parseFloat(e.target.value) || 5 })}
          className="block w-full px-2 py-1 border border-gray-300 rounded text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
    </div>
  );
}