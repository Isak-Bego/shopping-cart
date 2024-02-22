import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import SiteEssentials from "./SiteEssentials";
import HomePage from "./components/HomePage";
import MenClothing from "./components/MenClothing";
import WomenClothing from "./components/WomenClothing";
import ShoppingCart from "./components/ShoppingCart";
import SucessfulPurchase from "./components/SuccessfulPurchase"

const Router: React.FC = () => {
    const router = createBrowserRouter([
        {
          path: "/",
          element: <SiteEssentials />,
          children: [
            {index: true, element: <HomePage/>},
            {path: "men", element: <MenClothing/>},
            {path: "women", element: <WomenClothing/>},
            {path: "shopping-cart", element: <ShoppingCart />},
            {path: "successful-purchase", element: <SucessfulPurchase />}
          ]
        },
      ]);

    return (
        <RouterProvider router={router} />
    );
}

export default Router;