// Icons
import { FaStar, FaRegStar } from "react-icons/fa";

export const RatingStars = ({ value }) => {
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
