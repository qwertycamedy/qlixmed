import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "@pages/home/HomePage";
import ProductPage from "@pages/product/ProductPage";

const App = () => {

  useEffect(() => {
      window.scrollTo(0, 0);
  }, []);

  return (
    <div className="site-container">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/s/:userSlug/:serviceSlug" element={<ProductPage />} />
      </Routes>
    </div>
  );
};

export default App;
