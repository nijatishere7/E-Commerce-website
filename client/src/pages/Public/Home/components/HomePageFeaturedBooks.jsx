// Components
import { ProductCard } from "@/components/shared/ProductCard";

// Provider
import { ProductsContext } from "@/providers/ProductsProvider";

// Hooks
import { useContext } from "react";

// Icons
import { FaArrowRight } from "react-icons/fa";

// React Router Link
import { Link } from "react-router";

export const HomePageFeaturedBooks = () => {
  const { data } = useContext(ProductsContext);
  return (
    <>
      <div className="py-12.5 bg-white">
        <div className="2xl:max-w-350 xl:max-w-7xl lg:max-w-260 max-xl:px-3 mx-auto">
          <div className="flex items-center justify-center gap-5 mb-10 max-lg:flex-col">
            <div className="bg-[url(/public\Images\banner-2.jpg)] bg-no-repeat bg-[#333439] w-130 max-lg:w-full">
              <div className="pt-11 pb-7.5 flex justify-end">
                <div className="pr-3">
                  <h1 className="uppercase mb-2 text-[19px] text-white font-semibold">
                    Award Winners
                  </h1>
                  <p className="text-[14px] mb-4 leading-6 text-[#ffffff80]">
                    12 Books
                  </p>
                  <Link
                    to="/shop"
                    className="uppercase flex items-center justify-center gap-2 text-[12px] 
                    font-semibold bg-[#3256f4] hover:bg-[#5976f6] transition-all duration-300 text-white px-3 py-2"
                  >
                    View Collections <FaArrowRight />
                  </Link>
                </div>
              </div>
            </div>
            <div className="bg-[url(/public\Images\banner-3.jpg)] bg-no-repeat bg-[#333439] w-130 max-lg:w-full">
              <div className="pt-11 pb-7.5 flex justify-end">
                <div className="pr-3">
                  <h1 className="uppercase mb-2 text-[19px] text-white font-semibold">
                    Deal In Books
                  </h1>
                  <p className="text-[14px] mb-4 leading-6 text-[#ffffff80]">
                    21 Books
                  </p>
                  <Link
                    to="/shop"
                    className="uppercase flex items-center justify-center gap-2 text-[12px] 
                    font-semibold bg-[#fe1656] hover:bg-[#fe3f73] transition-all duration-300 text-white px-3 py-2"
                  >
                    View Collections <FaArrowRight />
                  </Link>
                </div>
              </div>
            </div>
            <div className="bg-[url(/public\Images\banner-4.jpg)] bg-no-repeat bg-[#333439] w-130 max-lg:w-full">
              <div className="pt-11 pb-7.5 flex justify-end">
                <div className="pr-3">
                  <h1 className="uppercase mb-2 text-[19px] text-white font-semibold">
                    Most Gifted
                  </h1>
                  <p className="text-[14px] mb-4 leading-6 text-[#ffffff80]">
                    38 Books
                  </p>
                  <Link
                    to="/shop"
                    className="uppercase flex items-center justify-center gap-2 text-[12px] 
                    font-semibold bg-[#047490] hover:bg-[#0594b8] transition-all duration-300 text-white px-3 py-2"
                  >
                    View Collections <FaArrowRight />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h1 className="font-medium border-b border-[#e7e7e7] pb-2.5 mb-5">
              Featured Books
            </h1>
            <div className="grid grid-cols-6 gap-5 max-xl:grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-2">
              {data.slice(0, 6).map((item) => (
                <ProductCard
                  key={item.id}
                  rating={item.rating}
                  etiquette={item.etiquette}
                  title={item.title}
                  image={item.image}
                  price={item.price}
                  discountedPrice={item.discountedPrice}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[url(/public\Images\banner-5.png)] bg-[#3256f4] bg-right py-15 bg-no-repeat bg-size-[41%_auto]">
        <div className="2xl:max-w-350 xl:max-w-7xl lg:max-w-260 max-xl:px-3 mx-auto">
          <div className="flex items-center max-lg:flex-col max-lg:items-start">
            <div className="px-2.5 text-white">
              <p className="text-[18px] italic uppercase text-[#ffffff99]">
                Available Once a year
              </p>
              <h1 className="text-[29px] font-semibold">
                Get 30% off on orders <span className="max-sm:block">over</span>{" "}
                <span className="max-xl:block max-lg:inline max-md:block">
                  $299
                </span>
              </h1>
              <p className="text-[12px] font-medium text-right max-md:text-left max-md:py-2">
                * Selected Books
              </p>
            </div>
            <Link
              to="/shop"
              className="uppercase flex items-center justify-center gap-2 text-[16px] ml-30 max-2xl:ml-15 max-xl:ml-0
              font-medium bg-[#383f48] text-white hover:bg-[#4a535f] transition-all duration-300
              px-8 py-3 max-sm:text-[12px] max-sm:px-6 max-sm:py-2"
            >
              Explore books <FaArrowRight />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
