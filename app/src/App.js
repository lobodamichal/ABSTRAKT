import React from "react";
import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import About from "./components/pages/AboutPage";
import Cart from "./components/pages/CartPage";
import Collections from "./components/pages/CollectionsPage";
import Home from "./components/pages/HomePage";
import Product from "./components/pages/ProductPage";
import Products from "./components/pages/AllProductsPage";
import NavigationBar from "./components/elements/NavigationBar";
import useFetchProducts from "./hooks/use-fetch-products";
import Error from "./components/ui/Error";
import Spinner from "./components/ui/Spinner";
import AuthContainer from "./components/containers/AuthContainer";

function App() {
  const fetchProducts = useFetchProducts();

  useEffect(() => {
    fetchProducts()
  }, []);

  return (
    <>
      <NavigationBar />
      <AuthContainer />
      <Error />
      <Spinner />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/all-products" element={<Products />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/collections" element={<Collections />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
