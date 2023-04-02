import React, { useEffect } from "react";
import { useProductsStore } from "./utils/stateManagement/dataManagement";
import { shallow } from "zustand/shallow";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/home";
import Electronics from "./pages/electronics";
import Beauty from "./pages/beauty";
import Fashion from "./pages/fashion";
import Product from "./pages/product";
import Contact from "./pages/contact";
import ContactSuccess from "./pages/contactSuccess";
import NotFound from "./pages/notFound";
import SearchResults from "./pages/searchResults";
import Cart from "./pages/cart";
import Checkout from "./pages/checkout";
import CheckoutSuccess from "./pages/checkoutSuccess";
import Feedback from "./components/Feedback";
import Loader from "./components/Loader";

function App() {
  const { availableProducts, fetchProducts, isLoading, error } =
    useProductsStore(
      (state) => ({
        availableProducts: state.availableProducts,
        fetchProducts: state.fetchProducts,
        isLoading: state.isLoading,
        error: state.error,
      }),
      shallow
    );

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  if (isLoading || !availableProducts) {
    return <Loader />;
  }

  if (error) {
    return <Feedback title={"An error occurred"} message={error} />;
  }

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/cart" element={<Cart />} />
        <Route index element={<Home products={availableProducts} />} />
        <Route
          path="/electronics"
          element={<Electronics products={availableProducts} />}
        />
        <Route
          path="/beauty"
          element={<Beauty products={availableProducts} />}
        />
        <Route
          path="/fashion"
          element={<Fashion products={availableProducts} />}
        />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/contactSuccess" element={<ContactSuccess />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/searchResults/:q" element={<SearchResults />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/checkoutSuccess" element={<CheckoutSuccess />} />
      </Route>
    </Routes>
  );
}

export default App;
