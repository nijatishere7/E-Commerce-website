// Components
import {
  HomePageHero,
  HomePageBestSellersBooks,
  HomePageFeaturedBooks,
  HomePageRecentBooks,
} from "./components";

import { Header } from "@/components/layouts/MainLayout/Header/Header";
import { Navbar } from "@/components/layouts/MainLayout/Header/Navbar";
import { FooterTop } from "@/components/layouts/MainLayout/Footer/FooterTop";
import { Footer } from "@/components/layouts/MainLayout/Footer/Footer";

export const HomePage = () => {
  return (
    <div className="p-7.5 max-2xl:p-0 bg-[#f4f4f4] min-h-screen">
      <Header />
      <Navbar />
      <HomePageHero />
      <HomePageBestSellersBooks />
      <HomePageFeaturedBooks />
      <HomePageRecentBooks />
      <FooterTop />
      <Footer />
    </div>
  );
};
