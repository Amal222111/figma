export interface Product {
  id: number;
  title: string;
  brand: string;
  category: string;
  price: number;
  rating: number;
  inStock: boolean;
  onSale: boolean;
}

export interface FilterParams {
  category?: string;
  brand?: string;
  minRating?: number;
  maxRating?: number;
}

export interface RatingRange {
  min: number;
  max: number;
}

export interface FilterState {
  selectedCategory?: string;
  selectedBrand?: string;
  ratingRange?: RatingRange;
}