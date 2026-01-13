// Icons
import { FaRegEnvelope } from "react-icons/fa";

export const HomePageFooterTop = () => {
  return (
    <>
      <div className="py-12.5 bg-white">
        <div className="2xl:max-w-350 xl:max-w-7xl lg:max-w-260 max-xl:px-3 mx-auto">
          <p className="flex items-center justify-center mb-2">
            <FaRegEnvelope size={30} />
          </p>
          <h1 className="text-[#222529] text-[24px] font-semibold text-center">
            Subscribe to Our Newsletter
          </h1>
          <p className="text-center mb-6 text-[14px] text-[#777] leading-6">
            Get all the latest information on Events, Sales and Offers.
          </p>
          <div className="flex max-w-140 mx-auto">
            <input
              type="text"
              required
              placeholder="Enter Your E-mail Address..."
              className="italic py-2 pl-6 pr-3 bg-[#f4f4f4] text-[#8d8d8d]
              rounded-l-3xl flex-1 text-[12px] outline-none"
            />
            <button
              type="submit"
              className="uppercase bg-[#333] pr-7.5 pl-6.25 font-bold text-white 
              rounded-r-3xl h-12 text-[12px] cursor-pointer"
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
