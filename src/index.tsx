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
import MainFooter from "./Components/MainFooter/MainFooter";
import { OrderComplete } from "./Pages/OrderComplete/OrderComplete";

import { RedirectToLogin } from "./Redirectors/toLogin";

export default function Layout() {
  const [customerId, setCustomerId] = useState<number | null>(null);
  const [basketId, setBasketId] = useState<number>(0);
  return (
    <BrowserRouter>
      <Header
        customerId={customerId}
        setCustomerId={setCustomerId}
        setBasketId={setBasketId}
      />
      <Routes>
        <Route path="/:filter?" element={<App basketId={basketId} />} />
        <Route path="/AR" element={<AugmentedReality />} />
        {customerId === null ? (
          <Route path="/basket" element={<RedirectToLogin />} />
        ) : (
          <Route path="/basket" element={<Basket basketId={basketId} />} />
        )}
        <Route
          path="/login"
          element={
            <Login
              customerId={customerId}
              setCustomerId={setCustomerId}
              setBasketId={setBasketId}
            />
          }
        />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/order/:basketId/complete" element={<OrderComplete />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/product/:id" element={<ProductCard />} />
      </Routes>
      <MainFooter />
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(<Layout />);
