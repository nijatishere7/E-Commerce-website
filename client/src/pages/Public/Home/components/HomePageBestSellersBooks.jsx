// React Router Link
import { Link } from "react-router";
import { FaArrowRight } from "react-icons/fa";

export const HomePageBestSellersBooks = () => {
  return (
    <>
      <div className="flex items-center justify-between py-12.5">
        <h1>Best Sellers Books</h1>
        <Link
          className="uppercase inline-block mt-5.5 py-2 px-4 text-blue-500 font-medium text-[12px] relative"
          to="/shop"
        >
          View All Products
          <FaArrowRight className="absolute top-1/2 -translate-y-1/2 right-0" />
        </Link>
      </div>
    </>
  );
};
