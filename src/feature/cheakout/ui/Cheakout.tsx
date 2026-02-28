import { useState } from "react";
import { useGetCartDataQuery } from "../../../entities/cart/api/cartApi";
import type { CardData, CheckoutFormData, OrderRequest } from "../model/types";
import { useCreateOrderMutation } from "../api/cheakoutApi";

export default function Checkout() {
  const [formData, setFormData] = useState<CheckoutFormData>({
    firstName: "",
    lastName: "",
    company: "",
    address: "",
    city: "",
    region: "",
    zipCode: "",
    phone: "",
    email: "",
  });

  const [cardData, setCardData] = useState<CardData>({
    cardNumber: "",
    expiry: "",
    cvv: "",
  });

  const { data: getCartData } = useGetCartDataQuery();
  const [createOrder, { isLoading }] = useCreateOrderMutation();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCardChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCardData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const requiredFields: (keyof CheckoutFormData)[] = [
      "firstName",
      "lastName",
      "address",
      "city",
      "region",
      "zipCode",
      "phone",
      "email",
    ];

    for (const field of requiredFields) {
      if (!formData[field]) {
        alert("Пожалуйста, заполните все обязательные поля.");
        return;
      }
    }

    if (!cardData.cardNumber || !cardData.expiry || !cardData.cvv) {
      alert("Пожалуйста, заполните данные карты.");
      return;
    }

    if (!getCartData?.items?.length) {
      alert("Корзина пуста, добавьте товары перед оплатой.");
      return;
    }

    const order: OrderRequest = {
      customer: {
        email: formData.email,
        firstName: formData.firstName,
        lastName: formData.lastName,
      },
      shippingAddress: {
        region: formData.region,
        city: formData.city,
        address: formData.address,
        postalCode: formData.zipCode,
        company: formData.company,
      },
      items: getCartData.items.map((product) => ({
        productId: product.id.toString(),
        quantity: product.quantity,
        price: product.price,
      })),
      payment: {
        method: "card",
        cardNumber: cardData.cardNumber,
        expiry: cardData.expiry,
        cvv: cardData.cvv,
      },
    };

    createOrder(order)
      .unwrap()
      .then(() => alert("Оплата прошла успешно!"))
      .catch(() => alert("Произошла ошибка при оплате"));
  };

  return (
    <div className="bg-gray-100 p-10">
      <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2 bg-white p-8 rounded-2xl shadow">
          <h2 className="text-xl font-semibold mb-6">Billing details</h2>

          <form className="space-y-5" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="text-sm font-medium">First name *</label>
                <input
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full mt-1 border p-3 rounded-lg"
                />
              </div>

              <div>
                <label className="text-sm font-medium">Last name *</label>
                <input
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full mt-1 border p-3 rounded-lg"
                />
              </div>
            </div>

            <div>
              <label className="text-sm font-medium">Company name (optional)</label>
              <input
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="w-full mt-1 border p-3 rounded-lg"
              />
            </div>

            <div>
              <label className="text-sm font-medium">Country / Region *</label>
              <select
                name="country"
                value={"United States"}
                onChange={handleChange}
                className="w-full mt-1 border p-3 rounded-lg"
              >
                <option>United States (US)</option>
              </select>
            </div>

            <div>
              <label className="text-sm font-medium">Street address *</label>
              <input
                name="address"
                placeholder="House number and street name"
                value={formData.address}
                onChange={handleChange}
                className="w-full mt-1 border p-3 rounded-lg"
              />
              <input
                placeholder="Apartment, suite, unit, etc. (optional)"
                className="w-full mt-3 border p-3 rounded-lg"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="text-sm font-medium">Town / City *</label>
                <input
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  className="w-full mt-1 border p-3 rounded-lg"
                />
              </div>
              <div>
                <label className="text-sm font-medium">State *</label>
                <select
                  name="region"
                  value={formData.region}
                  onChange={handleChange}
                  className="w-full mt-1 border p-3 rounded-lg"
                >
                  <option>California</option>
                </select>
              </div>
            </div>

            <div>
              <label className="text-sm font-medium">ZIP Code *</label>
              <input
                name="zipCode"
                value={formData.zipCode}
                onChange={handleChange}
                className="w-full mt-1 border p-3 rounded-lg"
              />
            </div>

            <div>
              <label className="text-sm font-medium">Phone *</label>
              <input
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full mt-1 border p-3 rounded-lg"
              />
            </div>

            <div>
              <label className="text-sm font-medium">Email address *</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full mt-1 border p-3 rounded-lg"
              />
            </div>

            <div className="space-y-3 pt-3">
              <label className="flex items-center gap-3 text-sm">
                <input type="checkbox" />
                <span>Create an account?</span>
              </label>

              <label className="flex items-center gap-3 text-sm font-medium">
                <input type="checkbox" />
                <span>Ship to a different address?</span>
              </label>
            </div>

            <div>
              <label className="text-sm font-medium">Order notes (optional)</label>
              <textarea
                rows={4}
                placeholder="Notes about your order, e.g. special notes for delivery."
                className="w-full mt-1 border p-3 rounded-lg"
              />
            </div>
          </form>
        </div>

        {/* Order Summary */}
        <div className="bg-white p-8 rounded-2xl shadow">
          <h2 className="text-xl font-semibold mb-6">Your order</h2>

          <div className="text-sm space-y-3">
            {/* Products */}
            <div className="flex justify-between font-medium border-b pb-2 mb-3">
              <span>Product</span>
              <span>Subtotal</span>
            </div>

            {getCartData?.items?.map((product) => (
              <div
                key={product.id}
                className="flex justify-between py-2 border-b last:border-b-0"
              >
                <span>
                  {product.title} <strong>× {product.quantity}</strong>
                </span>
                <span>${(product.price * product.quantity).toFixed(2)}</span>
              </div>
            ))}

            <div className="flex justify-between py-3 border-t mt-3">
              <span>Subtotal</span>
              <span>${getCartData?.totalPrice.toFixed(2)}</span>
            </div>

            <div className="py-3 border-t space-y-2">
              <div className="flex justify-between">
                <span>Shipping:</span>
                <span className="text-sm">Flat rate: $15.00</span>
              </div>

              <label className="flex items-center gap-2 text-sm">
                <input type="radio" name="shipping" defaultChecked />
                <span>Flat rate: $15.00</span>
              </label>

              <label className="flex items-center gap-2 text-sm">
                <input type="radio" name="shipping" />
                <span>Local pickup</span>
              </label>
            </div>

            <div className="flex justify-between py-4 border-t font-semibold text-lg">
              <span>Total</span>
              <span>${getCartData?.totalPrice.toFixed(2)}</span>
            </div>
          </div>

          {/* Payment Options */}
          <div className="mt-6 space-y-4 text-sm">
            <label className="flex items-start gap-3">
              <input type="radio" name="payment" defaultChecked />
              <div>
                <p className="font-medium">Direct Bank Transfer</p>
                <p className="text-gray-500 mt-1">
                  Make your payment directly into our bank account. Please use
                  your Order ID as the payment reference. Your order will not be
                  shipped until the funds have cleared in our account.
                </p>
              </div>
            </label>

            <label className="flex items-center gap-3">
              <input type="radio" name="payment" />
              <span>Check Payments</span>
            </label>

            <label className="flex items-center gap-3">
              <input type="radio" name="payment" />
              <span>Cash on Delivery</span>
            </label>
          </div>

          <p className="text-xs text-gray-500 mt-6 leading-relaxed">
            Your personal data will be used to process your order, support your
            experience throughout this website, and for other purposes described
            in our{" "}
            <a href="#" className="underline">
              privacy policy
            </a>
            .
          </p>

          <label className="flex items-center gap-2 text-sm mt-4">
            <input type="checkbox" required />
            <span>
              I have read and agree to the website{" "}
              <a href="#" className="underline">
                terms and conditions
              </a>{" "}
              *
            </span>
          </label>

          <button
            type="submit"
            onClick={handleSubmit}
            className="w-full mt-6 bg-purple-700 text-white py-3 rounded-lg font-semibold hover:bg-purple-800 transition"
          >
            Place order
          </button>
        </div>
      </div>
    </div>
  );
}