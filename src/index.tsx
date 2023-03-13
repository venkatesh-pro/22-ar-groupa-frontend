import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./Pages/App/App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AugmentedReality } from "./AR/AugmentedReality";
import { Basket } from "./Pages/Basket/Basket";
import ProductCard from "./Components/ProductCard/ProductCard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/AR",
    element: <AugmentedReality />,
  },
  {
    path: "/basket",
    element: <Basket />,
  },
  {
    path: "/product/:id",
    element: <ProductCard />,
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
