// Components
import { ShopPageHero, ShopPageSideBar, ShopPageProducts } from "./components";

export const ShopPage = () => {
  return (
    <>
      <ShopPageHero />
      <div className="bg-white">
        <div className="py-12.5 2xl:max-w-350 xl:max-w-7xl lg:max-w-260 max-xl:px-3 mx-auto flex flex-nowrap">
          <ShopPageSideBar />
          <ShopPageProducts />
        </div>
      </div>
    </>
  );
};
