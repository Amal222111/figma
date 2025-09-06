import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"; // notice /react here

interface Product {
    id: number;
    title: string;
    price: number;
    image: string;
}

export const api = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({ baseUrl: 'https://fakestoreapi.com' }),
    endpoints: (builder) => ({
        getProducts: builder.query<Product[], void>({
            query: () => '/products', 
        }),
    }),
});

export const { useGetProductsQuery } = api;
