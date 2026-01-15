import {
  ProductPageCardDetails,
  ProductPageRelatedProducts,
  ProductPageSideBar,
} from "./components";

import { Breadcrumb } from "@/components/shared/Breadcrumb";

export const ProductPage = () => {
  return (
    <>
      <Breadcrumb page="Product" />
      <div className="bg-white">
        <div className="py-12.5 2xl:max-w-350 xl:max-w-7xl lg:max-w-260 max-xl:px-3 mx-auto flex flex-nowrap">
          <ProductPageCardDetails />
          <ProductPageSideBar />
        </div>
      </div>
      <ProductPageRelatedProducts />
    </>
  );
};
