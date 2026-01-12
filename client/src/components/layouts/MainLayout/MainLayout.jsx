// React Router
import { Outlet } from "react-router";

// Components
import { Header } from "./Header/Header";
import { Navbar } from "./Header/Navbar";
import { Footer } from "./Footer/Footer";

export const MainLayout = () => {
  return (
    <div className="max-2xl:p-0 bg-[#f4f4f4] min-h-screen">
      <div className="p-7.5 pb-0 max-2xl:p-0">
        <Header />
      </div>
      <Navbar />
      <div className="p-7.5 pt-0 max-2xl:p-0">
        <Outlet />
        <Footer />
      </div>
    </div>
  );
};
