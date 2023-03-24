import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { App } from "./Pages/App/App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AugmentedReality } from "./AR/AugmentedReality";
import { Basket } from "./Pages/Basket/Basket";
import { Login } from "./Pages/Login/Login";
import { SignUp } from "./Pages/Login/SignUp";
import ProductCard from "./Components/ProductCard/ProductCard";
import { Header } from "./Components/Header/Header";
import { useGetBasketItems } from "./Functions/useGetBasketItems";
import { item } from "./Components/Item/Item";
import { OrderComplete } from "./Pages/OrderComplete/OrderComplete";

import { RedirectToLogin } from "./Redirectors/toLogin";

export default function Layout() {
  const [customerId, setCustomerId] = useState<number | null>(null);
  return (
    <BrowserRouter>
      <Header customerId={customerId} setCustomerId={setCustomerId} />
      <Routes>
        <Route path="/:filter?" element={<App />} />
        <Route path="/AR" element={<AugmentedReality />} />
        {customerId === null ? (
          <Route path="/basket" element={<RedirectToLogin />} />
        ) : (
          <Route path="/basket" element={<Basket />} />
        )}
        <Route
          path="/login"
          element={<Login setCustomerId={setCustomerId} />}
        />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/order/:basketId/complete" element={<OrderComplete />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/product/:id" element={<ProductCard />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(<Layout />);
