import "./sass/main.scss";
import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import About from "./components/pages/AboutPage";
import Cart from "./components/pages/CartPage";
import Collections from "./components/pages/CollectionsPage";
import Home from "./components/pages/HomePage";
import Product from "./components/pages/ProductPage";
import Products from "./components/pages/AllProductsPage";
import NavigationBar from "./components/elements/NavigationBar";
import useProducts from "./hooks/use-products";
import Error from "./components/ui/Error";
import Spinner from "./components/ui/Spinner";
import Modal from "./components/containers/Modal";

function App() {
  const { fetchProducts } = useProducts();

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      <NavigationBar />
      <Modal />
      <Error />
      <Spinner />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/all-products" element={<Products />} />
        <Route
          path="/product/:id"
          element={
            <Suspense>
              <Product />
            </Suspense>
          }
        />
        <Route path="/collections" element={<Collections />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
