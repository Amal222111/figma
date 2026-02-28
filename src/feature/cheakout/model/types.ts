// Данные формы
export interface CheckoutFormData {
  firstName: string;
  lastName: string;
  company?: string;
  address: string;
  city: string;
  region: string;
  zipCode: string;
  phone: string;
  email: string;
}

// Данные карты
export interface CardData {
  cardNumber: string;
  expiry: string;
  cvv: string;
}

// Запрос на создание заказа
export interface OrderRequest {
  customer: {
    email: string;
    firstName: string;
    lastName: string;
  };
  shippingAddress: {
    region: string;
    city: string;
    address: string;
    postalCode?: string;
    company?: string;
  };
  items: {
    productId: string;
    name: string;
    quantity: number;
    price: number;
  }[];
  payment: {
    method: "card" | "paypal" | "cod";
    cardNumber?: string;
    expiry?: string;
    cvv?: string;
  };
  notes?: string;
}

// Ответ от API
export interface OrderResponse {
  id: string;
  status: string;
  total: number;
}
