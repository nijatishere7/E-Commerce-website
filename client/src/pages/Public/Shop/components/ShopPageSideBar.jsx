// Icons
import { FaMinus } from "react-icons/fa6";

// React Router Link
import { Link } from "react-router";

// Provider
import { ProductsContext } from "@/providers/ProductsProvider";

// Hooks
import { useContext } from "react";

// Components
import { RatingStars } from "@/components/shared/RatingStars";
import { Price } from "@/components/shared/Price";

export const ShopPageSideBar = () => {
  const { data } = useContext(ProductsContext);
  return (
    <>
      <div className="pt-8.75 pb-10 px-2.5 max-lg:hidden">
        <div className="h-263">
          <div className="w-65">
            <div className="mb-5">
              <h1 className="uppercase py-1.5 flex justify-between text-[12px] font-semibold border-b border-[#0000001a] leading-[1.4]">
                Categories <FaMinus />
              </h1>

              <div className="pt-4 pb-2 pl-4 flex flex-col">
                <Link
                  to="#"
                  className="text-[12px] text-[#777] hover:text-[#3256f4] transition-all duration-300 pb-4"
                >
                  Arts & Photography <span className="ml-1">(2)</span>
                </Link>
                <Link
                  to="#"
                  className="text-[12px] text-[#777] hover:text-[#3256f4] transition-all duration-300 pb-4"
                >
                  Business & Investing <span className="ml-1">(3)</span>
                </Link>
                <Link
                  to="#"
                  className="text-[12px] text-[#777] hover:text-[#3256f4] transition-all duration-300 pb-4"
                >
                  Literature & Fiction <span className="ml-1">(4)</span>
                </Link>
                <Link
                  to="#"
                  className="text-[12px] text-[#777] hover:text-[#3256f4] transition-all duration-300 pb-4"
                >
                  Mystery Suspense <span className="ml-1">(4)</span>
                </Link>
                <Link
                  to="#"
                  className="text-[12px] text-[#777] hover:text-[#3256f4] transition-all duration-300"
                >
                  Scifi Fantasy <span className="ml-1">(3)</span>
                </Link>
              </div>
            </div>
            <div className="mb-5">
              <h1 className="uppercase py-1.5 flex justify-between text-[12px] font-semibold border-b border-[#0000001a] leading-[1.4]">
                Price <FaMinus />
              </h1>

              <div className="pt-4 pb-2 pl-4">
                <div className="pt-4 px-1 pb-1">
                  <div className="bg-[#eee] h-0.75 relative"> </div>
                </div>
                <div className="mt-6 pb-1 flex items-center justify-between flex-nowrap">
                  <p className="text-[12px] leading-loose text-[#777]">
                    Price: $0 - $1000
                  </p>
                  <button
                    type="submit"
                    className="cursor-pointer text-white uppercase py-1 px-4 font-semibold
                        text-[12px] bg-[#3256f4] hover:bg-[#0069d9]"
                  >
                    Filter
                  </button>
                </div>
              </div>
            </div>
            <div className="mb-5">
              <h1 className="uppercase py-1.5 flex justify-between text-[12px] font-semibold border-b border-[#0000001a] leading-[1.4]">
                Color <FaMinus />
              </h1>

              <div className="pt-1.5 pl-4">
                <div className="mt-1">
                  <Link className="flex items-center gap-4 mb-3" to="#">
                    <p className="w-4.5 h-4.5 bg-black"></p>
                    <p className="text-[13px] text-[#777]">Black</p>
                  </Link>
                  <Link className="flex items-center gap-4 mb-3" to="#">
                    <p className="w-4.5 h-4.5 bg-blue-600"></p>
                    <p className="text-[13px] text-[#777]">Blue</p>
                  </Link>
                  <Link className="flex items-center gap-4 mb-3" to="#">
                    <p className="w-4.5 h-4.5 bg-green-600"></p>
                    <p className="text-[13px] text-[#777]">Green</p>
                  </Link>
                  <Link className="flex items-center gap-4 mb-3" to="#">
                    <p className="w-4.5 h-4.5 bg-yellow-300"></p>
                    <p className="text-[13px] text-[#777]">Yellow</p>
                  </Link>
                  <Link className="flex items-center gap-4 mb-3" to="#">
                    <p className="w-4.5 h-4.5 bg-indigo-500"></p>
                    <p className="text-[13px] text-[#777]">Indigo</p>
                  </Link>
                  <Link className="flex items-center gap-4 mb-3" to="#">
                    <p className="w-4.5 h-4.5 bg-red-600"></p>
                    <p className="text-[13px] text-[#777]">Red</p>
                  </Link>
                </div>
              </div>
            </div>
            <div className="mb-5">
              <h1 className="uppercase py-1.5 flex justify-between text-[12px] font-semibold border-b border-[#0000001a] leading-[1.4]">
                Sizes <FaMinus />
              </h1>

              <div className="pt-4 pb-2 pl-4 flex flex-col">
                <Link
                  to="#"
                  className="text-[12px] text-[#777] hover:text-[#3256f4] transition-all duration-300 pb-4"
                >
                  Extra Large
                </Link>
                <Link
                  to="#"
                  className="text-[12px] text-[#777] hover:text-[#3256f4] transition-all duration-300 pb-4"
                >
                  Large
                </Link>
                <Link
                  to="#"
                  className="text-[12px] text-[#777] hover:text-[#3256f4] transition-all duration-300 pb-4"
                >
                  Medium
                </Link>
                <Link
                  to="#"
                  className="text-[12px] text-[#777] hover:text-[#3256f4] transition-all duration-300 pb-4"
                >
                  Small
                </Link>
              </div>
            </div>
            <div>
              <h1 className="uppercase py-1.5 text-[12px] font-semibold border-b border-[#0000001a] leading-[1.4]">
                Featured Products
              </h1>
              <div className="pt-4 pb-2 pl-4">
                <div className="mb-4 flex items-center gap-5">
                  <div>
                    <Link to="/products">
                      <img
                        className="w-21 h-21 object-cover"
                        src={data[1].image}
                        alt={data[1].title}
                      />
                    </Link>
                  </div>
                  <div>
                    <h1 className="mb-1 text-[#474747] text-[13px]">
                      {data[1].title}
                    </h1>
                    <p className="mb-2.5 h-2.5">
                      <RatingStars value={data[1].rating} />
                    </p>
                    <p className="text-[14px] text-[#444]">
                      <Price
                        price={data[1].price}
                        discountedPrice={data[1].discountedPrice}
                      />
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-5">
                  <div>
                    <Link to="/products">
                      <img
                        className="w-21 h-21 object-cover"
                        src={data[2].image}
                        alt={data[2].title}
                      />
                    </Link>
                  </div>
                  <div>
                    <h1 className="mb-1 text-[#474747] text-[13px]">
                      {data[2].title}
                    </h1>
                    <p className="mb-2.5 h-2.5">
                      <RatingStars value={data[2].rating} />
                    </p>
                    <p className="text-[14px] text-[#444]">
                      <Price
                        price={data[2].price}
                        discountedPrice={data[2].discountedPrice}
                      />
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
