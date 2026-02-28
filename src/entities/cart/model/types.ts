
export interface CartItem {
  id: number;
  title: string;
  image: string;
  price: number;
  oldPrice?: number;
  quantity: number;
  discount?: number; 
  totalPrice: number;
  stock: number;
  variant: string;
}

export interface CartData {
  items: CartItem[];
  subtotal: number;
  discountTotal: number;
  totalPrice: number;
  currency: string;
  deliveryPrice: number;
  couponCode?: string; 
}
