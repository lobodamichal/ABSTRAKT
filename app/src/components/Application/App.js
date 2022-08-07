import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "./components/pages/about.page";
import Cart from "./components/pages/cart.page";
import Collections from "./components/pages/collections.page";
import Home from "./components/pages/home.page";
import Product from "./components/pages/product.page";
import Products from "./components/pages/products.page";

function App() {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/product" element={<Product />} />
      <Route path="/collections" element={<Collections />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}

export default App;
