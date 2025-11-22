import { lazy } from "react";
import type { RouteObject } from "react-router";
import MainLayout from "../layouts/MainLayout";

import { ProtectedRoute } from "./ProtectedRoute";
import ProductPage from "../../pages/ProductPage/ui/productPage";
import CartPage from "../../pages/CartPage/ui/cartPage";
import Registration from "../../pages/RegistrationPage/ui/Registration";
import CheckoutPage from "../../pages/CheakoutPage/ui/Cheakout";
import Login from "../../pages/LoginPage/ui/Login";
import ProfilePage from "../../pages/ProfilePage/ui/ProfilePage";
// import { AuthLayout } from "../layouts/AuthLayout";
// import { ProtectedRoute } from "@/app/router/ProtectedRoute";
// import MainLayout from "../layouts/MainLayout";
const HomePage = lazy(() => import("../../pages/HomePage/ui/Home"));
const AboutPage = lazy(() => import("../../pages/AboutPage/ui/About"));
const ShopPage = lazy(() => import("../../pages/ShopPage/ui/shop"));



export const routes: RouteObject[] = [
  {
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: (
          <ProtectedRoute>
            <HomePage />
          </ProtectedRoute>
        ),
      },
      {
        path: "/about",
        element: (
          <ProtectedRoute>
            <AboutPage />
          </ProtectedRoute>

        ),
      },
      {
        path: "/shop",
        element: (
          <ProtectedRoute>
            <ShopPage />
          </ProtectedRoute>

        ),
      },
      {
        path: "/products/:id",
        element: (
          <ProtectedRoute>
            <ProductPage/>
          </ProtectedRoute>

        ),
      },
      {
        path: "/cart",
        element: (
          <ProtectedRoute>
            <CartPage />
          </ProtectedRoute>

        ),
      },
      {
        path: "/registration",
        element: (
          <ProtectedRoute>
            <Registration />
          </ProtectedRoute>

        ),
      },
      {
        path: "/cheakout",
        element: (
          <ProtectedRoute>
            <CheckoutPage />
          </ProtectedRoute>

        ),
      },
      {
        path: "/login",
        element: (
          <Login />
        ),
      },
            {
        path: "/profile",
        element: (
          <ProfilePage />
        ),
      },
    ],
  }
];
