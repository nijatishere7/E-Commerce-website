// Icons
import { FaAngleRight } from "react-icons/fa";

// React Router Link
import { Link } from "react-router";

export const Breadcrumb = ({page}) => {
  return (
    <div className="bg-[#f8f8f8] border-y border-[#e7e7e7]">
      <div className="2xl:max-w-350 xl:max-w-7xl lg:max-w-260 max-xl:px-3 mx-auto">
        <div className="py-4 flex flex-nowrap">
          <Link
            to="/"
            className="uppercase font-bold text-[10px] leading-6 flex items-center
              gap-2 hover:text-[#3256f4] transition-all duration-300"
          >
            Home <FaAngleRight />
          </Link>
          <p className="uppercase font-bold text-[10px] leading-6 pl-2">{page}</p>
        </div>
      </div>
    </div>
  );
};
