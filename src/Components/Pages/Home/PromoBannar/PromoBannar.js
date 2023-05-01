import React from "react";
import promoBannar from "../../../../Assets/Images/Others/hot-deal.png";
import care1 from "../../../../Assets/Images/Others/care-1.png";
import care2 from "../../../../Assets/Images/Others/care-2.png";
import care3 from "../../../../Assets/Images/Others/care-3.png";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";

const PromoBannar = () => {
  return (
    <div className="pb-12 lg:px-0 px-4 relative">
      <div>
        <Link to="/shopCategory/mask">
          <img
            src={promoBannar}
            alt="Promo_Bannar_image"
            className="w-full pb-12"
          />
        </Link>
        <div className="absolute right-40 top-52 uppercase lg:block hidden text-left">
          <h3 className="text-3xl text-[#2563eb] font-bold">
            Sales Offer & Discount Only
          </h3>
          <h1 className="text-6xl upparcase font-bold mt-3 mb-4">
           For Summer Sales
          </h1>
          <p className="text-lg text-gray-600 font-semibold">
            New Product Purchase up to 50% Off All Now Fast
          </p>
          <p className="text-lg text-gray-600 font-semibold">Shopping</p>
          <button className="button-style relative overflow-hidden upparcase bg-[#2563eb] text-white hover:text-[#2563eb] hover:bg-white border border-[#2563eb] px-4 py-1.5 font-semibold rounded-md mt-5 duration-300 z-0">
            Shop Now
          </button>
        </div>
      </div>
      <div className="container mx-auto">
        <div className="lg:flex block justify-between gap-x-6 items-center">
          <Link to="/shopCategory/gloves" className="block w-full">
            <div className="lg:py-6 md:py-5 py-3 lg:px-6 md:px-5 px-1 flex justify-between items-center border rounded-md hover:shadow-md duration-300 w-full lg:my-0 my-2">
              <img src={care1} alt="Care_Image" />
              <div className="text-left pl-3">
                <h4 className="text-xl font-bold mb-2">Covid Essentials</h4>
                <p className="my-1 hover:text-[#2563eb] duration-300 cursor-pointer">
                  Covid Essentials
                </p>
                <p className="my-1 hover:text-[#2563eb] duration-300 cursor-pointer">
                  Disinfectants
                </p>
                <p className="my-1 hover:text-[#2563eb] duration-300 cursor-pointer">
                  Home Hygiene Essentials
                </p>
                <p className="my-1 hover:text-[#2563eb] duration-300 cursor-pointer">
                  Masks
                </p>
                <button className="text-md font-semibold text-[#2563eb] hover:underline duration-300 flex items-center gap-x-2 mt-5">
                  Biew all Covid Essentials
                  <BsArrowRight />
                </button>
              </div>
            </div>
          </Link>

          <Link to="/shopCategory/medicalItems" className="block w-full">
            <div className="lg:py-6 md:py-5 py-3 lg:px-6 md:px-5 px-1 flex justify-between items-center border rounded-md hover:shadow-md duration-300 w-full lg:my-0 my-2">
              <img src={care2} alt="Care_Image" />
              <div className="text-left pl-3">
                <h4 className="text-xl font-bold mb-2">Covid Essentials</h4>
                <p className="my-1 hover:text-[#2563eb] duration-300 cursor-pointer">
                  Covid Essentials
                </p>
                <p className="my-1 hover:text-[#2563eb] duration-300 cursor-pointer">
                  Disinfectants
                </p>
                <p className="my-1 hover:text-[#2563eb] duration-300 cursor-pointer">
                  Home Hygiene Essentials
                </p>
                <p className="my-1 hover:text-[#2563eb] duration-300 cursor-pointer">
                  Masks
                </p>
                <button className="text-md font-semibold text-[#2563eb] hover:underline duration-300 flex items-center gap-x-2 mt-5">
                  Biew all Covid Essentials
                  <BsArrowRight />
                </button>
              </div>
            </div>
          </Link>

          <Link to="/shopCategory/medicine" className="block w-full">
            <div className="lg:py-6 md:py-5 py-3 lg:px-6 md:px-5 px-1 flex justify-between items-center border rounded-md hover:shadow-md duration-300 w-full lg:my-0 my-2">
              <img src={care3} alt="Care_Image" />
              <div className="text-left pl-3">
                <h4 className="text-xl font-bold mb-2">Covid Essentials</h4>
                <p className="my-1 hover:text-[#2563eb] duration-300 cursor-pointer">
                  Covid Essentials
                </p>
                <p className="my-1 hover:text-[#2563eb] duration-300 cursor-pointer">
                  Disinfectants
                </p>
                <p className="my-1 hover:text-[#2563eb] duration-300 cursor-pointer">
                  Home Hygiene Essentials
                </p>
                <p className="my-1 hover:text-[#2563eb] duration-300 cursor-pointer">
                  Masks
                </p>
                <button className="text-md font-semibold text-[#2563eb] hover:underline duration-300 flex items-center gap-x-2 mt-5">
                  Biew all Covid Essentials
                  <BsArrowRight />
                </button>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PromoBannar;
