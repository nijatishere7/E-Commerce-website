// React Router Link
import { Link } from "react-router";

// Icons
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

export const Footer = () => {
  return (
    <>
      <footer className="bg-white leading-6">
        <div className="2xl:max-w-350 xl:max-w-7xl lg:max-w-260 max-xl:px-3 mx-auto">
          <div className="border-t border-[#e1e1e1] pb-4 pt-12">
            <div className="grid grid-cols-[2fr_1fr_1fr_1fr] gap-3 max-sm:flex-col max-lg:flex max-lg:flex-wrap">
              <div className="flex flex-col px-2.5">
                <img
                  src="/Images/logo.png"
                  alt="logo"
                  className="w-28 h-11 mb-6"
                />
                <p className="mb-3 text-[13px] text-[#777]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Praesent pulvinar feugiat quam, vitae aliquam urna egestas
                  nec. Phasellus sit amet consequat tortor.
                </p>
                <div className="flex gap-15">
                  <div className="flex flex-col">
                    <h1 className="uppercase text-[13px] text-[#222529] font-semibold">
                      Questions?
                    </h1>
                    <p className="text-[#3256f4] text-[22px] mb-6 font-bold">
                      (123) 456-7890
                    </p>
                  </div>
                  <div className="flex flex-col">
                    <h1 className="uppercase text-[13px] text-[#222529] font-semibold">
                      Payment Methods
                    </h1>
                    <img
                      src="/Images/payment.jpg"
                      alt="payment"
                      className="mb-6 mt-px"
                    />
                  </div>
                </div>
              </div>
              <div className="px-2.5 pl-10 max-md:pl-5 max-sm:pl-2">
                <div className="mb-7.5">
                  <h1 className="text-[#313131] font-semibold text-[16px] mb-4">
                    Account
                  </h1>
                  <div className="leading-6 mb-5.5 flex flex-col">
                    <Link
                      to="/"
                      className="hover:text-[#3256f4] transition-all duration-300 text-[13px] text-[#777]"
                    >
                      My Account
                    </Link>
                    <Link
                      to="/"
                      className="hover:text-[#3256f4] transition-all duration-300 text-[13px] text-[#777]"
                    >
                      Track Your Order
                    </Link>
                    <Link
                      to="/"
                      className="hover:text-[#3256f4] transition-all duration-300 text-[13px] text-[#777]"
                    >
                      Payment Methods
                    </Link>
                    <Link
                      to="/"
                      className="hover:text-[#3256f4] transition-all duration-300 text-[13px] text-[#777]"
                    >
                      Shipping Guide
                    </Link>
                    <Link
                      to="/"
                      className="hover:text-[#3256f4] transition-all duration-300 text-[13px] text-[#777]"
                    >
                      FAQs
                    </Link>
                    <Link
                      to="/"
                      className="hover:text-[#3256f4] transition-all duration-300 text-[13px] text-[#777]"
                    >
                      Product Support
                    </Link>
                    <Link
                      to="/"
                      className="hover:text-[#3256f4] transition-all duration-300 text-[13px] text-[#777]"
                    >
                      Privacy
                    </Link>
                  </div>
                </div>
              </div>
              <div className="px-2.5 pl-10 max-lg:pl-20 max-md:pl-10 max-sm:pl-2">
                <div className="mb-7.5">
                  <h1 className="text-[#313131] font-semibold text-[16px] mb-4">
                    About
                  </h1>
                  <div className="leading-6 mb-5.5 flex flex-col">
                    <Link
                      to="/"
                      className="hover:text-[#3256f4] transition-all duration-300 text-[13px] text-[#777]"
                    >
                      About Porto
                    </Link>
                    <Link
                      to="/"
                      className="hover:text-[#3256f4] transition-all duration-300 text-[13px] text-[#777]"
                    >
                      Our Guarantees
                    </Link>
                    <Link
                      to="/"
                      className="hover:text-[#3256f4] transition-all duration-300 text-[13px] text-[#777]"
                    >
                      Terms And Conditions
                    </Link>
                    <Link
                      to="/"
                      className="hover:text-[#3256f4] transition-all duration-300 text-[13px] text-[#777]"
                    >
                      Privacy policy
                    </Link>
                    <Link
                      to="/"
                      className="hover:text-[#3256f4] transition-all duration-300 text-[13px] text-[#777]"
                    >
                      Return Policy
                    </Link>
                    <Link
                      to="/"
                      className="hover:text-[#3256f4] transition-all duration-300 text-[13px] text-[#777]"
                    >
                      Intellectual Property Claims
                    </Link>
                    <Link
                      to="/"
                      className="hover:text-[#3256f4] transition-all duration-300 text-[13px] text-[#777]"
                    >
                      Site Map
                    </Link>
                  </div>
                </div>
              </div>
              <div className="px-2.5 pl-10 max-lg:pl-15 max-md:pl-5 max-sm:pl-2">
                <div className="mb-7.5">
                  <h1 className="text-[#313131] font-semibold text-[16px] mb-4">
                    Features
                  </h1>
                  <div className="leading-6 mb-5.5 flex flex-col">
                    <Link
                      to="/"
                      className="hover:text-[#3256f4] transition-all duration-300 text-[13px] text-[#777]"
                    >
                      Powerful Admin Panel
                    </Link>
                    <Link
                      to="/"
                      className="hover:text-[#3256f4] transition-all duration-300 text-[13px] text-[#777]"
                    >
                      Mobile & Retina Optimized
                    </Link>
                    <Link
                      to="/"
                      className="hover:text-[#3256f4] transition-all duration-300 text-[13px] text-[#777]"
                    >
                      Super Fast HTML Template
                    </Link>
                    <Link
                      to="/"
                      className="hover:text-[#3256f4] transition-all duration-300 text-[13px] text-[#777]"
                    >
                      1st Fully Working Ajax Theme
                    </Link>
                    <Link
                      to="/"
                      className="hover:text-[#3256f4] transition-all duration-300 text-[13px] text-[#777]"
                    >
                      33 Unique Shop Demos
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="py-4 border-t border-[#e1e1e1] flex items-center justify-between">
            <p className="p-2.5 text-[13px] text-[#777]">
              © Porto eCommerce. 2021. All Rights Reserved
            </p>
            <div className="py-2.5 flex gap-2 items-center">
              <p
                className="m-0.5 rounded-[50%] w-7.5 h-7.5 text-[#222529] flex items-center
                justify-center transition-all duration-300 leading-7 hover:opacity-85 hover:bg-[#3b5a9a] hover:text-white"
              >
                <FaFacebookF />
              </p>
              <p
                className="m-0.5 rounded-[50%] w-7.5 h-7.5 text-[#222529] flex items-center
                justify-center transition-all duration-300 leading-7 hover:opacity-85 hover:bg-[#1aa9e1] hover:text-white"
              >
                <FaTwitter />
              </p>
              <p
                className="m-0.5 rounded-[50%] w-7.5 h-7.5 text-[#222529] flex items-center
                justify-center transition-all duration-300 leading-7 hover:opacity-85 hover:bg-[#0073b2] hover:text-white"
              >
                <FaLinkedinIn />
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
