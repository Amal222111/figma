import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "../../../shared/api/baseQuery";
import type { CartData } from "../model/types";
import type { Product } from "../../product/api/model/types";

export const cartApi = createApi({
  reducerPath: "cartApi",
  baseQuery: baseQuery,
  tagTypes: ["Cart"],
  endpoints: (builder) => ({
    // 🔹 Получение корзины
    getCartData: builder.query<CartData, void>({
      query: () => "/cart",
      providesTags: ["Cart"],
    }),

    // 🔹 Добавление товара в корзину
    addProductToCart: builder.mutation<Product, Product>({
      query: (product) => ({
        url: "/cart",
        method: "POST",
        body: product,
      }),
      invalidatesTags: ["Cart"], // обновляет корзину после добавления
    }),
  }),
});

export const {
  useGetCartDataQuery,
  useAddProductToCartMutation,
} = cartApi;