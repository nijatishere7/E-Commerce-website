// React Router Link
import { Link } from "react-router";

// Icons
import { FaArrowRight } from "react-icons/fa";

// Components
import { Breadcrumb } from "@/components/shared/Breadcrumb";

export const ShopPageHero = () => {
  return (
    <>
      <div className="2xl:max-w-350 xl:max-w-7xl lg:max-w-260 max-xl:px-3 mx-auto">
        <div className="flex items-center flex-nowrap mx-2.5 max-md:flex-col max-md:items-start">
          <div className="py-5 px-2.5 w-full leading-[1.2]">
            <p className="text-[#22252999] font-extralight text-[18px] uppercase max-md:text-[14px]">
              Book Club
            </p>
            <h1 className="text-[32px] mb-2 text-[#222529] font-bold max-md:text-[25px]">
              Summer Reading
            </h1>
            <p className="text-[24px] text-[#777] max-md:text-[19px]">
              The best books for your beach bag
            </p>
          </div>
          <div className="bg-[url(/Images/shop-banner.png)] py-30 bg-center bg-no-repeat w-full max-xl:bg-cover"></div>
          <div className="py-5 px-2.5 pl-12 max-md:pl-0">
            <Link
              to="/shop"
              className="uppercase flex items-center justify-center w-55 gap-2 text-[16px] 
                  font-medium bg-[#383f48] text-white hover:bg-[#4a535f] transition-all duration-300
                  px-8 py-3 max-sm:text-[12px] max-sm:px-2 max-sm:py-2 max-md:px-3 max-md:py-2 max-md:w-45 max-sm:w-35"
            >
              Explore books <FaArrowRight />
            </Link>
          </div>
        </div>
      </div>
      <Breadcrumb page="Shop" />
    </>
  );
};
