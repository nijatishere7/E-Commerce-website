// React Router
import { Route, Routes } from "react-router";

// Pages
import {
  HomePage,
  ShopPage,
  ProductPage,
  AboutPage,
  ContactPage,
} from "@/pages/Public";

export const PublicRouter = () => {
  return (
    <Routes>
      <Route index path="/" element={<HomePage />} />
      <Route path="/shop" element={<ShopPage />} />
      <Route path="/products" element={<ProductPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/contact" element={<ContactPage />} />
    </Routes>
  );
};

