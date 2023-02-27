import { createBrowserRouter, Navigate } from "react-router-dom";
import AuthenticationPage from "../../components/authentication/AuthenticationPage.component";
import BrandsPage from "../../components/brands/BrandsPage.component";
import App from "../layout/App";
import BrandPage from "../../components/brand/BrandPage.component";
import PaymentPage from "../../components/payment/PaymentPage.component";
import NotFoundPage from "../../components/notFound/NotFoundPage.component";
import CheckOutPage from "../../components/checkOut/CheckOutPage.component";
import RequireAuth from "./RequireAuth";
import AdminAuthenticationPage from "../../components/admin/authentication/AdminAuthentication.component";
import AdminOverview from "../../components/admin/dashboard/overview/AdminOverview.component";
import AdminOrders from "../../components/admin/dashboard/orders/AdminOrders.components";
import AdminProducts from "../../components/admin/dashboard/products/AdminProducts.component";
import AdminAddProduct from "../../components/admin/dashboard/products/addProduct/AdminAddProduct.component";
import AdminEditProduct from "../../components/admin/dashboard/products/editProduct/AdminEditProduct.component";
import AdminCustomers from "../../components/admin/dashboard/customers/AdminCustomers.component";
import AdminAddCustomer from "../../components/admin/dashboard/customers/addCustomer/AdminAddCustomer.component";
import AdminEditCustomer from "../../components/admin/dashboard/customers/editCustomer/AdminEditCustomer.component";
import ProductDetailsPage from "../../components/productDetails/ProductDetailsPage.component";
import ProductSearchPage from "../../components/productSearch/ProductSearchPage.component";

export const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/admin",
        element: <RequireAuth />,
        children: [
          {
            path: "/admin/dashboard/overview",
            element: <AdminOverview />,
          },
          {
            path: "/admin/dashboard/orders",
            element: <AdminOrders />,
          },
          {
            path: "/admin/dashboard/customers",
            element: <AdminCustomers />,
          },
          {
            path: "/admin/dashboard/customer/add",
            element: <AdminAddCustomer />,
          },
          {
            path: "/admin/dashboard/customer/edit/:customerId",
            element: <AdminEditCustomer />,
          },
          {
            path: "/admin/dashboard/products",
            element: <AdminProducts />,
          },
          {
            path: "/admin/dashboard/products/add",
            element: <AdminAddProduct />,
          },
          {
            path: "/admin/dashboard/product/edit/:productId",
            element: <AdminEditProduct />,
          },
        ],
      },
      { path: "brands", element: <BrandsPage /> },
      { path: "brands/:vendor", element: <BrandPage /> },
      { path: "auth", element: <AuthenticationPage /> },
      { path: "product/:productName", element: <ProductDetailsPage /> },
      { path: "search", element: <ProductSearchPage /> },
      {
        path: "/admin/sign-in",
        element: <AdminAuthenticationPage />,
      },
      { path: "checkout", element: <CheckOutPage /> },
      {
        path: "checkout/payment",
        element: <PaymentPage />,
      },
      { path: "not-found", element: <NotFoundPage /> },
      { path: "*", element: <Navigate replace to="/not-found" /> },
    ],
  },
];

export const router = createBrowserRouter(routes);