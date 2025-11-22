import { useState } from "react";
import { useGetCartDataQuery } from "../../../entities/cart/api/cartApi";
import type { CardData, CheckoutFormData, OrderRequest } from "../model/types";
import { useCreateOrderMutation } from "../api/cheakoutApi";

export default function Checkout() {
    const [formData, setFormData] = useState<CheckoutFormData>({
        email: "",
        firstName: "",
        lastName: "",
        company: "",
        city: "",
        country: "",
        region: "",
        address: "",
        phone: "",
    });

    const [cardData, setCardData] = useState<CardData>({
        cardNumber: "",
        expiry: "",
        cvv: "",
    });

    const { data: getCartData } = useGetCartDataQuery();
    const [createOrder, { isLoading }] = useCreateOrderMutation();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleCardChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setCardData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Проверка на заполнение всех обязательных полей
        const requiredFields = [
            "email",
            "firstName",
            "lastName",
            "city",
            "country",
            "region",
            "address",
        ];

        for (const field of requiredFields) {
            if (!formData[field as keyof CheckoutFormData]) {
                alert("Пожалуйста, заполните все поля формы доставки.");
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
                country: formData.country,
                region: formData.region,
                city: formData.city,
                address: formData.address,
                company: formData.company,
            },
            items:
                getCartData?.items?.map((item) => ({
                    productId: item.id.toString(),
                    quantity: item.quantity,
                    price: item.price,
                })) || [],
            payment: {
                method: "card",
                cardNumber: cardData.cardNumber,
                expiry: cardData.expiry,
                cvv: cardData.cvv,
            },
        };

        createOrder(order)
            .unwrap()
            .then((response) => {
                alert("Оплата прошла успешно!");
                console.log(response);
            })
            .catch((err) => {
                console.error("Ошибка при оплате:", err);
                alert("Произошла ошибка при оплате");
            });
    };

    return (
        <div className=" bg-gray-100 p-10">
            <div className=" mx-auto bg-white shadow-lg rounded-2xl grid grid-cols-1 md:grid-cols-2">

                <div className="p-8 border-r">
                    <h2 className="text-2xl font-semibold mb-6">Адрес доставки</h2>
                    <form className="space-y-4">
                        <div className="flex justify-center-safe gap-5">
                            <input
                                type="text"
                                name="firstName"
                                placeholder="First name"
                                value={formData.firstName}
                                onChange={handleChange}
                                className="w-full border p-3 rounded-lg"
                                required
                            />
                            <input
                                type="text"
                                name="lastName"
                                placeholder="Last name"
                                value={formData.lastName}
                                onChange={handleChange}
                                className="w-full border p-3 rounded-lg"
                                required
                            />
                        </div>

                        <input
                            type="text"
                            name="company"
                            placeholder="Company (optional)"
                            value={formData.company}
                            onChange={handleChange}
                            className="w-full border p-3 rounded-lg"
                        />
                        <input
                            type="text"
                            name="city"
                            placeholder="City"
                            value={formData.city}
                            onChange={handleChange}
                            className="w-full border p-3 rounded-lg"
                            required
                        />
                        <input
                            type="text"
                            name="country"
                            placeholder="Country"
                            value={formData.country}
                            onChange={handleChange}
                            className="w-full border p-3 rounded-lg"
                            required
                        />
                        <input
                            type="text"
                            name="region"
                            placeholder="Region / State"
                            value={formData.region}
                            onChange={handleChange}
                            className="w-full border p-3 rounded-lg"
                            required
                        />
                        <input
                            type="text"
                            name="address"
                            placeholder="Address"
                            value={formData.address}
                            onChange={handleChange}
                            className="w-full border p-3 rounded-lg"
                            required
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full border p-3 rounded-lg"
                            required
                        />
                    </form>
                </div>


                <div className="p-8">
                    <h2 className="text-2xl font-semibold mb-6">Оплата</h2>


                    <div className="mb-6">
                        <p className="text-lg">Итого:</p>
                        <p className="text-3xl font-bold">{getCartData?.totalPrice}$</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <input
                            type="text"
                            name="cardNumber"
                            placeholder="Номер карты"
                            value={cardData.cardNumber}
                            onChange={handleCardChange}
                            className="w-full border p-3 rounded-lg"
                            required
                        />
                        <div className="flex space-x-4">
                            <input
                                type="text"
                                name="expiry"
                                placeholder="MM/YY"
                                value={cardData.expiry}
                                onChange={handleCardChange}
                                className="w-1/2 border p-3 rounded-lg"
                                required
                            />
                            <input
                                type="text"
                                name="cvv"
                                placeholder="CVV"
                                value={cardData.cvv}
                                onChange={handleCardChange}
                                className="w-1/2 border p-3 rounded-lg"
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            disabled={isLoading}
                            className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition"
                        >
                            {isLoading ? "Обработка..." : "Оплатить"}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
