// Components
import { RatingStars } from "./RatingStars";
import { Price } from "./Price";

// Icons
import { FaRegHeart } from "react-icons/fa";

// React Router Link
import { Link } from "react-router";
import { PiBag } from "react-icons/pi";

export const ProductCard = ({
  title,
  etiquette,
  image,
  rating,
  price,
  discountedPrice,
}) => {
  return (
    <>
      <div className="group pt-4 px-4 pb-1.25 bg-white border border-[#e7e7e7] shadow-sm relative">
        <Link to="/products">
          <img
            className="relative cursor-pointer w-full"
            src={image}
            alt={title}
          />
        </Link>
        <span className="absolute bg-[#2ba968] text-center py-1.25 px-2.5 left-6 top-6 z-2 font-semibold text-[10px] text-white rounded-xl">
          {etiquette}
        </span>
        {/* <span
          className="uppercase absolute bg-[#3256f4] text-center px-13.5 py-3.75 transition-all duration-500
          group-hover:opacity-100 opacity-0 text-[13px] top-60 text-white"
        >
          Quick View
        </span> */}
        <span
          className="flex items-center justify-center w-9 h-9 rounded-[50%] bg-[#ddd] border transition-all duration-300 right-7
          opacity-0 border-[#ddd] hover:bg-[#3256f4] hover:text-white hover:border-[#3256f4] absolute top-7 group-hover:opacity-100"
        >
          <PiBag size={20} />
        </span>
        <p className="uppercase flex justify-between pt-5 items-center text-[10px] text-[#777]">
          Category <FaRegHeart size={15} />
        </p>
        <p className="pt-1 pb-1 whitespace-nowrap text-ellipsis overflow-hidden">
          {title}
        </p>
        <p className="pb-1">
          <RatingStars value={rating} />
        </p>
        <p className="pb-2">
          <Price price={price} discountedPrice={discountedPrice} />
        </p>
      </div>
    </>
  );
};
