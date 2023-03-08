import React from "react";
import promoBannar from "../../../../Assets/Images/Others/hot-deal.png";
import care1 from "../../../../Assets/Images/Others/care-1.png";
import care2 from "../../../../Assets/Images/Others/care-2.png";
import care3 from "../../../../Assets/Images/Others/care-3.png";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";

const PromoBannar = () => {
  return (
    <div className="pb-12 lg:px-0 px-4">
      <Link to="/shopCategory/mask">
        <img
          src={promoBannar}
          alt="Promo_Bannar_image"
          className="w-full pb-12"
        />
      </Link>
      <div className="container mx-auto">
        <div className="lg:flex block justify-between gap-x-6 items-center">
          <Link to="/shopCategory/gloves" className="block w-full">
            <div className="lg:py-6 md:py-5 py-3 lg:px-6 md:px-5 px-1 flex justify-between items-center border rounded-md hover:shadow-md duration-300 w-full lg:my-0 my-2">
              <img src={care1} alt="Care_Image" />
              <div className="text-left pl-3">
                <h4 className="text-xl font-bold mb-2">Covid Essentials</h4>
                <p className="my-1 hover:text-orange-600 duration-300 cursor-pointer">
                  Covid Essentials
                </p>
                <p className="my-1 hover:text-orange-600 duration-300 cursor-pointer">
                  Disinfectants
                </p>
                <p className="my-1 hover:text-orange-600 duration-300 cursor-pointer">
                  Home Hygiene Essentials
                </p>
                <p className="my-1 hover:text-orange-600 duration-300 cursor-pointer">
                  Masks
                </p>
                <button className="text-md font-semibold text-orange-600 hover:underline duration-300 flex items-center gap-x-2 mt-5">
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
                <p className="my-1 hover:text-orange-600 duration-300 cursor-pointer">
                  Covid Essentials
                </p>
                <p className="my-1 hover:text-orange-600 duration-300 cursor-pointer">
                  Disinfectants
                </p>
                <p className="my-1 hover:text-orange-600 duration-300 cursor-pointer">
                  Home Hygiene Essentials
                </p>
                <p className="my-1 hover:text-orange-600 duration-300 cursor-pointer">
                  Masks
                </p>
                <button className="text-md font-semibold text-orange-600 hover:underline duration-300 flex items-center gap-x-2 mt-5">
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
                <p className="my-1 hover:text-orange-600 duration-300 cursor-pointer">
                  Covid Essentials
                </p>
                <p className="my-1 hover:text-orange-600 duration-300 cursor-pointer">
                  Disinfectants
                </p>
                <p className="my-1 hover:text-orange-600 duration-300 cursor-pointer">
                  Home Hygiene Essentials
                </p>
                <p className="my-1 hover:text-orange-600 duration-300 cursor-pointer">
                  Masks
                </p>
                <button className="text-md font-semibold text-orange-600 hover:underline duration-300 flex items-center gap-x-2 mt-5">
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
