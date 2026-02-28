import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "../../../shared/api/baseQuery";
import type { FilterParams, Product } from "../model/types";

export const filterApi = createApi({
  reducerPath: "filterApi",
  baseQuery: baseQuery,
  tagTypes: ['Filter'],
  endpoints: (builder) => ({
    getFilteredProducts: builder.query<Product[], FilterParams>({
      query: (filterParams) => ({
        url: "/products",
        params: {
          ...filterParams,
          limit: 100,
          skip: 0,
        },
      }),
      providesTags: ['Filter'],
    }),
    getCategories: builder.query<string[], void>({
      query: () => "/products/categories",
      providesTags: ['Filter'],
    }),
    getBrands: builder.query<string[], void>({
      query: () => ({
        url: "/products",
        params: { limit: 100, skip: 0 },
      }),
      transformResponse: (response: Product[]) =>
        [...new Set(response.map(p => p.brand))],
      providesTags: ['Filter'],
    }),
  }),
});

export const { useGetFilteredProductsQuery, useGetCategoriesQuery, useGetBrandsQuery } = filterApi;