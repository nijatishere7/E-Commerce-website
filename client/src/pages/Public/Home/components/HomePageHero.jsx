// Provider
import { ProductsContext } from "@/providers/ProductsProvider";

// Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Swiper styles
import "swiper/css";

// React Router Link
import { Link } from "react-router";

// Hooks
import { useContext } from "react";

// Icons
import { FaArrowRight } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";

export const HomePageHero = () => {
  const { data } = useContext(ProductsContext);

  const Rating = ({ value }) => {
    return (
      <div className="flex gap-1">
        {[...Array(5)].map((_, index) =>
          index < value ? (
            <FaStar key={index} className="text-[#777] size-3" />
          ) : (
            <FaRegStar key={index} className="text-[#777] size-3" />
          )
        )}
      </div>
    );
  };

  const Price = ({ price, discountedPrice }) => {
    const hasDiscount = discountedPrice && discountedPrice < price;

    return (
      <div>
        {hasDiscount ? (
          <>
            <div className="flex items-center gap-2">
              <span className="text-gray-400 line-through font-medium pt-1 text-[14px]">
                ${price}.0
              </span>

              <span className="text-[18px] font-medium text-[#222529]">
                ${discountedPrice}.0
              </span>
            </div>
          </>
        ) : (
          <span className="text-[18px] font-medium text-[#222529]">
            ${price}.0
          </span>
        )}
      </div>
    );
  };

  return (
    <>
      <div className="select-none w-full py-5 ">
        <Swiper
          className="bg-white w-full"
          loop
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {data.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="flex items-center justify-center relative">
                <img
                  className="relative z-1 w-full"
                  src={item.background}
                  alt={item.title}
                />

                <div className="absolute top-[12%] z-2 w-full text-center">
                  <h1 className="text-[22px] font-bold text-white">
                    {item.category}
                  </h1>

                  <p className="text-white opacity-70 text-[14px] leading-5 font-medium">
                    {item.stock} PRODUCTS
                  </p>

                  <Link
                    className="uppercase inline-block max-[1200px]:mt-2 mt-5.5 py-2 px-4 text-white font-medium text-[12px] relative"
                    to="/shop"
                  >
                    View All Products
                    <FaArrowRight className="absolute top-1/2 -translate-y-1/2 right-0" />
                  </Link>
                </div>
              </div>

              <div className="-mt-[36%] relative z-2 mb-5 mx-auto max-w-[43%] pb-8">
                <img src={item.image} alt={item.title} />

                <div className="text-center flex flex-col items-center justify-center px-2">
                  <p className="text-[15px] mt-4 mb-1 text-[#222529] font-normal">
                    {item.title}
                  </p>
                  <div className="mb-2">
                    <Rating value={item.rating} />
                  </div>
                  <Price
                    price={item.price}
                    discountedPrice={item.discountedPrice}
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};
