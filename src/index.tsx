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

export default function Layout() {
  const [customerId, setCustomerId] = useState<number | null>(null);
  return (
    <BrowserRouter>
      <Header customerId={customerId} setCustomerId={setCustomerId} />
      <Routes>
        <Route path="/:filter?" element={<App />} />
        <Route path="/AR" element={<AugmentedReality />} />
        <Route path="/basket" element={<Basket />} />
        <Route
          path="/login"
          element={<Login setCustomerId={setCustomerId} />}
        />
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
