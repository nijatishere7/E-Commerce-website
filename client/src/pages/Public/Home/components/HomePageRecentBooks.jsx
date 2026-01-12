// Components
import { ProductCard } from "@/components/shared/ProductCard";

// Provider
import { ProductsContext } from "@/providers/ProductsProvider";

// Hooks
import { useContext } from "react";

export const HomePageRecentBooks = () => {
  const { data } = useContext(ProductsContext);

  return (
    <>
      <div className="py-12.5">
        <div className="2xl:max-w-350 xl:max-w-7xl lg:max-w-260 max-xl:px-3 mx-auto">
          <div>
            <h1 className="font-medium border-b border-[#e7e7e7] pb-2.5 mb-5">
              Featured Books
            </h1>
            <div className="grid grid-cols-6 gap-5 mb-5 max-xl:grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-2">
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
    </>
  );
};
