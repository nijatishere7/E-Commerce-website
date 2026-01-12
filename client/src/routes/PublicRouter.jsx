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

// Layouts
import { MainLayout } from "@/components/layouts/MainLayout/MainLayout";

export const PublicRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/products" element={<ProductPage />} />
      </Route>
    </Routes>
  );
};
