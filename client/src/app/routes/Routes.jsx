import { createBrowserRouter, Navigate } from "react-router-dom";
import Authentication from "../../views/authentication/Authentication.view";
import CheckOut from "../../views/checkOut/CheckOut.view";
import Brands from "../../views/brands/Brands.view";
import App from "../layout/App";
import Brand from "../../views/brand/Brand.view";
import Payment from "../../views/payment/Payment.view";
import { stripePromise } from "../../utils/stripe/stripe.utils";
import { Elements } from "@stripe/react-stripe-js";
import NotFoundPage from "../../views/notFoundPage/NotFoundPage.view";

export const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      { path: "brands", element: <Brands /> },
      { path: "brands/:brand", element: <Brand /> },
      { path: "auth", element: <Authentication /> },
      { path: "checkout", element: <CheckOut /> },
      {
        path: "checkout/payment",
        element: (
          <Elements stripe={stripePromise}>
            <Payment />
          </Elements>
        ),
      },
      { path: "not-found", element: <NotFoundPage /> },
      { path: "*", element: <Navigate replace to="/not-found" /> },
    ],
  },
];

export const router = createBrowserRouter(routes);