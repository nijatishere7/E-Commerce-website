// Icons
import { FaSearch, FaBars, FaRegHeart } from "react-icons/fa";
import { FaUserLarge } from "react-icons/fa6";
import { PiBag } from "react-icons/pi";
import { IoIosArrowDown } from "react-icons/io";

// Link
import { Link } from "react-router";

// Hooks
import { useEffect, useState } from "react";

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 left-0 z-11 transition-all duration-500 ${
        scrolled ? "p-0" : "px-7.5 max-2xl:p-0"
      }`}
    >
      <div
        className={`flex items-center max-xl:py-1 px-5 bg-white ${
          scrolled ? "w-full bg-white shadow-md" : "py-3"
        }`}
      >
        <div className="flex items-center">
          <span className="lg:hidden pb-2 pr-3">
            <FaBars className="size-6" />
          </span>
          <img
            className={`${scrolled ? "w-20 h-8 mr-6" : "w-28 h-11 mr-7.5"}`}
            src="/Images/logo.png"
          ></img>
          <Link
            className="px-4 py-7.5 text-[13px] max-xl:px-2 max-lg:hidden text-[#222529] 
            font-semibold hover:text-[#fe1656] transition-all duration-300"
            to="/"
          >
            HOME
          </Link>
          <Link
            className="py-7.5 px-4 text-[13px] max-xl:px-2 max-lg:hidden text-[#222529] font-semibold flex gap-0.5
             items-center hover:text-[#fe1656] transition-all duration-300"
            to="/shop"
          >
            SHOP
            <IoIosArrowDown />
          </Link>
          <Link
            className="py-7.5 px-4 text-[13px] max-xl:px-2 max-lg:hidden text-[#222529] 
            font-semibold flex gap-0.5 items-center hover:text-[#fe1656] transition-all duration-300"
            to="/products"
          >
            PRODUCTS
            <IoIosArrowDown />
          </Link>
          <Link
            className="py-7.5 px-4 text-[13px] max-xl:px-2 max-lg:hidden text-[#222529] 
            font-semibold flex gap-0.5 items-center hover:text-[#fe1656] transition-all duration-300"
            to="/"
          >
            PAGES
            <IoIosArrowDown />
          </Link>
          <Link
            className="py-7.5 px-4 text-[13px] max-xl:hidden text-[#222529] 
            font-semibold hover:text-[#fe1656] transition-all duration-300"
            to="/"
          >
            FEATURES
          </Link>
          <Link
            className="py-7.5 px-4 text-[13px] max-xl:hidden text-[#222529] 
            font-semibold hover:text-[#fe1656] transition-all duration-300"
            to="/"
          >
            BLOG
          </Link>
          <span className="max-lg:hidden h-5 border border-[#0000000f] mx-3.25"></span>
          <Link
            className="py-7.5 max-[1460px]:hidden px-4 text-[13px] text-[#222529] 
            font-semibold hover:text-[#fe1656] transition-all duration-300"
            to="/about"
          >
            ABOUT
          </Link>
          <Link
            className="py-7.5 max-[1460px]:hidden px-4 text-[13px] text-[#222529] 
            font-semibold hover:text-[#fe1656] transition-all duration-300"
            to="/contact"
          >
            CONTACT
          </Link>
          <span className="h-5 border max-[1460px]:hidden border-[#0000000f] mx-3.25"></span>
        </div>
        <div className="flex items-center max-lg:justify-end flex-1">
          <div className="flex items-center justify-between h-12 border border-white rounded-[50px] bg-[#f4f4f4] px-6 flex-1 max-lg:hidden">
            <input
              className="outline-none placeholder:text-[#8d8d8d] placeholder:text-[13px] italic"
              type="text"
              placeholder="I'm searching for..."
            />
            <FaSearch />
          </div>
          <span className="max-lg:hidden h-5 border border-[#0000000f] mx-4"></span>
          <span className="lg:hidden max-sm:hidden">
            <FaSearch className="size-7" />
          </span>
          <span className="rounded-[50%] border w-13 flex items-center ml-4 mr-3.5 justify-center h-13 border-solid border-[#e7e7e7]">
            <FaUserLarge className="size-5.5 max-lg:my-5" />
          </span>
          <div className="flex flex-col mr-4 max-2xl:hidden">
            <span className="text-[12px] text-[#222529]">Hello!</span>
            <span className="text-[13px] text-[#222529] font-bold">
              My Account
            </span>
          </div>
          <span>
            <FaRegHeart className="size-7 mr-4.5 max-lg:my-5" />
          </span>
          <span>
            <PiBag className="size-9 max-lg:my-5" />
          </span>
        </div>
      </div>
    </nav>
  );
};
