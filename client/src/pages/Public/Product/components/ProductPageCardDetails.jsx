// Provider
import { ProductsContext } from "@/providers/ProductsProvider";

// Hooks
import { useContext } from "react";

// Icons
import {
  FaAngleRight,
  FaAngleLeft,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaGooglePlusG,
  FaEnvelope,
  FaRegHeart,
} from "react-icons/fa";
import { PiBag } from "react-icons/pi";

// Components
import { RatingStars } from "@/components/shared/RatingStars";
import { Price } from "@/components/shared/Price";

// React Router Link
import { Link } from "react-router";

export const ProductPageCardDetails = () => {
  const { data } = useContext(ProductsContext);
  return (
    <>
      <div className="px-2.5 pt-9 pb-10 mb-4">
        <div className="flex flex-nowrap relative">
          <div className="mb-8 px-2.5">
            <img
              className="h-176 w-117.5 relative"
              src={data[1].image}
              alt={data[1].title}
            />
            <span className="absolute bg-[#2ba968] text-center py-1.25 px-2.5 left-6 top-3 z-2 font-semibold text-[10px] text-white rounded-xl">
              {data[1].etiquette}
            </span>
            <img
              className="mt-2 w-30 h-30 object-cover border-2 border-[#21293c]"
              src={data[1].image}
              alt={data[1].title}
            />
          </div>
          <div className="px-2.5 mb-1.5">
            <div className="flex items-center justify-between">
              <h1 className="mb-2.5 text-[#222529] font-bold text-[30px]">
                {data[1].title}
              </h1>
              <div className="flex items-center gap-1">
                <span className="flex items-center justify-center w-7 h-7 rounded-[14px] border-2 border-[#e7e7e7] leading-6">
                  <FaAngleLeft />
                </span>
                <span className="flex items-center justify-center w-7 h-7 rounded-[14px] border-2 border-[#e7e7e7] leading-6">
                  <FaAngleRight />
                </span>
              </div>
            </div>
            <div className="mb-5.5 flex items-center gap-2">
              <RatingStars
                rating={data[1].rating.rate}
                value={data[1].rating}
              />
              <p className="text-[13px] text-[#999]">
                ({data[1].reviews.count} Reviews)
              </p>
            </div>
            <div className="w-10 border border-[#e7e7e7] mb-3 text-left"></div>
            <div className="mb-6 text-[#222529] text-[24px]">
              <Price
                price={data[1].price}
                discountedPrice={data[1].discountedPrice}
              />
            </div>
            <p className="mb-5 w-155 text-[#777] leading-[1.6]">
              {data[1].description}
            </p>
            <div className="mb-4 uppercase text-[12px]">
              <p className="mb-3 text-[#777]">
                Availability:{" "}
                <span className="font-bold text-[#222529]">
                  {data[1].stock} in stock
                </span>
              </p>
              <p className="mb-3 text-[#777]">
                SKU:{" "}
                <span className="font-bold text-[#222529]">{data[1].sku}</span>
              </p>
            </div>
            <div className="py-4 border-y border-[#e7e7e7] flex items-center gap-2">
              <div className="flex">
                <span className="w-7.5 border border-[#e7e7e7] flex items-center justify-center">
                  -
                </span>
                <span className="w-12 py-2.5 px-0.5 text-[#222529] text-center border border-[#e7e7e7] font-bold">
                  1
                </span>
                <span className="w-7.5 border border-[#e7e7e7] flex items-center justify-center">
                  +
                </span>
              </div>
              <Link
                to="#"
                className="bg-[#222529] text-white uppercase py-3 px-6.5 font-bold leading-6 text-[14px]"
              >
                <PiBag className="inline-block mr-2" size={21} />
                Add to Cart
              </Link>
            </div>
            <div className="mb-5 flex items-center flex-nowrap mt-5">
              <p
                className="m-0.5 rounded-[50%] w-8 h-8 text-[#222529] flex items-center border-2 border-[#e7e7e7]
                justify-center transition-all duration-300 leading-7 hover:opacity-85 hover:bg-[#3b5a9a] hover:text-white"
              >
                <FaFacebookF />
              </p>
              <p
                className="m-0.5 rounded-[50%] w-8 h-8 text-[#222529] flex items-center border-2 border-[#e7e7e7]
                justify-center transition-all duration-300 leading-7 hover:opacity-85 hover:bg-[#1aa9e1] hover:text-white"
              >
                <FaTwitter />
              </p>
              <p
                className="m-0.5 rounded-[50%] w-8 h-8 text-[#222529] flex items-center border-2 border-[#e7e7e7]
                justify-center transition-all duration-300 leading-7 hover:opacity-85 hover:bg-[#0073b2] hover:text-white"
              >
                <FaLinkedinIn />
              </p>
              <p
                className="m-0.5 rounded-[50%] w-8 h-8 text-[#222529] flex items-center border-2 border-[#e7e7e7]
                justify-center transition-all duration-300 leading-7 hover:opacity-85 hover:bg-[#0073b2] hover:text-white"
              >
                <FaGooglePlusG />
              </p>
              <p
                className="m-0.5 rounded-[50%] w-8 h-8 text-[#222529] flex items-center border-2 border-[#e7e7e7]
                justify-center transition-all duration-300 leading-7 hover:opacity-85 hover:bg-[#0073b2] hover:text-white"
              >
                <FaEnvelope />
              </p>
              <FaRegHeart
                className="ml-4 text-[#222529] hover:text-red-500 cursor-pointer"
                size={20}
              />
              <p className="ml-1 uppercase text-[#222529] font-bold text-[12px]">
                Add to Wishlist
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
