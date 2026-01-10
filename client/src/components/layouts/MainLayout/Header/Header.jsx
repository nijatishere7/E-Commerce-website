// Icons
import { FaShippingFast } from "react-icons/fa";
import { PiCurrencyCircleDollar } from "react-icons/pi";
import { SlGraduation } from "react-icons/sl";

export const Header = () => {
  return (
    <div className="flex items-center text-white text-[13px] font-semibold">
      <div className="flex justify-center items-center py-3 px-2.5 w-full bg-[#4260e4]">
        <p className="flex items-center gap-4">
          <FaShippingFast className="size-6" />
          Free Shipping on Orders Over $99
        </p>
      </div>
      <div className="max-md:hidden flex justify-center items-center py-3 px-2.5 w-full bg-[#284cea]">
        <p className="flex items-center gap-4">
          <PiCurrencyCircleDollar className="size-6" />
          Up to 40% OFF on Selected Items
        </p>
      </div>
      <div className="max-lg:hidden flex justify-center items-center py-3 px-2.5 w-full bg-[#4260e4]">
        <p className="flex items-center gap-4">
          <SlGraduation className="size-6" />
          15% OFF Student Discount
        </p>
      </div>
    </div>
  );
};
