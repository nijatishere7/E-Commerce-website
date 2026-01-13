// Icons
import { BsGrid3X3GapFill } from "react-icons/bs";
import { MdViewList } from "react-icons/md";

// Provider
import { ProductsContext } from "@/providers/ProductsProvider";

// Components
import { ProductCard } from "@/components/shared/ProductCard";

// Hooks
import { useContext } from "react";

export const ShopPageProducts = () => {
  const { data } = useContext(ProductsContext);
  return (
    <>
      <div className="pt-9 px-2.5 pb-10">
        <div className="flex items-center flex-nowrap justify-between mb-2.5 leading-normal">
          <div className="flex items-center">
            <div className="mr-4 mb-2.5 flex items-center">
              <p className="mt-px mr-3 text-[#777] text-[13px]">Sort By:</p>
              <select
                name="orderby"
                className="h-8.5 max-w-40 pt-px text-[13px] pl-2 pr-6 text-[#777] border border-[#dfdfdf] outline-none"
              >
                <option selected="selected">Default sorting</option>
                <option>Sort by popularity</option>
                <option>Sort by average rating</option>
                <option>Sort by newness</option>
                <option>Sort by price: low to high</option>
                <option>Sort by price: high to low</option>
              </select>
            </div>
          </div>
          <div className="flex items-center">
            <div className="mr-2.5 mb-2.5 flex items-center">
              <p className="mt-px mr-3 text-[#777] text-[13px]">Show:</p>
              <select
                name="count"
                className="h-8.5 max-w-40 pt-px text-[13px] pl-2 pr-6 text-[#777] border border-[#dfdfdf] outline-none"
              >
                <option>12</option>
                <option>24</option>
                <option>36</option>
              </select>
            </div>
            <div className="mb-2.5 flex items-center">
              <p className="text-[#3256f4] mr-1 w-5 leading-8 text-center cursor-pointer">
                <BsGrid3X3GapFill size={16} />
              </p>
              <p className="text-black mr-1 w-5 leading-8 text-center cursor-pointer hover:text-[#3256f4] transition-all duration-300">
                <MdViewList size={24} />
              </p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-5 max-lg:grid-cols-3 max-sm:grid-cols-2">
          {data.slice(0, 8).map((item) => (
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
    </>
  );
};
