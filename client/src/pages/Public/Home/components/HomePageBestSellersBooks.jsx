// React Router Link
import { Link } from "react-router";

// Provider
import { ProductsContext } from "@/providers/ProductsProvider";

// Hooks
import { useContext } from "react";

// Icons
import { FaArrowRight } from "react-icons/fa";

// Components
import { Price } from "@/components/shared/Price";

export const HomePageBestSellersBooks = () => {
  const { data } = useContext(ProductsContext);

  return (
    <>
      <div className="py-12.5 2xl:max-w-350 xl:max-w-7xl lg:max-w-260 max-xl:px-3  mx-auto">
        <div className="flex items-center justify-between border-b border-[#e7e7e7] mb-5 pb-2.5">
          <h1 className="font-medium">Best Sellers Books</h1>
          <Link
            className="uppercase inline-block py-2 px-4 text-[#3256f4] font-semibold text-[12px] relative"
            to="/shop"
          >
            View All Products
            <FaArrowRight className="absolute top-1/2 -translate-y-1/2 right-0" />
          </Link>
        </div>

        <div className="flex items-stretch max-md:flex-col justify-center h-full">
          <div className="py-12.5 bg-white relative border-b-3 border-[#f4f4f4] max-md:w-full">
            <div className="flex flex-col items-center bg-white justify-center static h-full">
              <p className="uppercase italic text-center text-[18px] text-[#777]">
                Book Club
              </p>
              <h1 className="text-[28px] max-xl:text-[20px] mb-8 px-6 font-semibold leading-8 text-center">
                A selection with only the best books{" "}
              </h1>
              <img
                className="mb-11 px-12"
                src="\public\Images\banner-1.png"
                alt="books"
              />
              <div className="flex items-center justify-center">
                <Link
                  to="/shop"
                  className="uppercase flex items-center justify-center gap-2 text-[16px] 
            font-medium bg-[#3256f4] text-white hover:bg-[#5976f6] transition-all duration-300 px-8 py-3 max-sm:text-[12px] max-sm:px-6 max-sm:py-2"
                >
                  Explore books <FaArrowRight />
                </Link>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-4 max-xl:grid-cols-3 max-md:grid-cols-2 max-md:w-full">
            {data.slice(1, 9).map((item) => (
              <div className="mb-0.75 px-0.5">
                <div
                  key={item.id}
                  className="pt-5 px-10 max-xl:px-5 pb-4 bg-white"
                >
                  <Link to="/products">
                    <img
                      className="w-full hover:shadow-2xl transition-all duration-300"
                      src={item.image}
                      alt={item.title}
                    />
                  </Link>
                  <div className="flex flex-col items-center whitespace-nowrap overflow-hidden text-ellipsis">
                    <p className="pt-3 max-lg:text-[14px] max-md:text-[12px] font-normal text-[#222529]">
                      {item.title}
                    </p>
                    <Price
                      price={item.price}
                      discountedPrice={item.discountedPrice}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
