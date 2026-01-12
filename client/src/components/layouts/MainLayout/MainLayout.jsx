// React Router
import { Outlet } from "react-router";

// Components
import { Header } from "./Header/Header";
import { Navbar } from "./Header/Navbar";
import { Footer } from "./Footer/Footer";

export const MainLayout = () => {
  return (
    <div className="p-7.5 max-2xl:p-0 bg-[#f4f4f4] min-h-screen">
      <Header />
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};
