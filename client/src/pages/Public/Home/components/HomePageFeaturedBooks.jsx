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
        <div className="2xl:max-w-350 xl:max-w-7xl lg:max-w-260 max-xl:px-3  mx-auto">
          <div className="flex items-center justify-center gap-5 mb-10">
            <div className="bg-[url(/public\Images\banner-2.jpg)] bg-[#333439] w-130">
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
            <div className="bg-[url(/public\Images\banner-3.jpg)] bg-[#333439] w-130">
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
            <div className="bg-[url(/public\Images\banner-4.jpg)] bg-[#333439] w-130">
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
            <div className="grid grid-cols-6 gap-5">
              {data.slice(0, 6).map((item) => (
                <ProductCard
                  key={item.id}
                  rating={item.rating}
                  etiquettes={item.etiquettes}
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
    </>
  );
};
