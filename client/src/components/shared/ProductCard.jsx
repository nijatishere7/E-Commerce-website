// Components
import { RatingStars } from "./RatingStars";
import { Price } from "./Price";

// Icons
import { FaRegHeart } from "react-icons/fa";

// React Router Link
import { Link } from "react-router";

export const ProductCard = ({
  title,
  etiquettes,
  image,
  rating,
  price,
  discountedPrice,
}) => {
  return (
    <>
      <div className="pt-4 px-4 pb-1.25 bg-white border border-[#e7e7e7] shadow-sm relative">
        <Link to="/products">
          <img className="relative cursor-pointer" src={image} alt={title} />
        </Link>
        <span className="absolute bg-[#2ba968] text-center py-1.25 px-2.5 left-6 top-6 z-2 font-semibold text-[10px] text-white rounded-xl">
          {etiquettes}
        </span>
        <p className="uppercase flex justify-between pt-5 items-center text-[10px] text-[#777]">
          Category <FaRegHeart size={15} />
        </p>
        <p className="pt-1 pb-1">{title}</p>
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
