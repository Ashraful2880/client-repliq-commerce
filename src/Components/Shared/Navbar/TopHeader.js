import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { CgTwitter } from "react-icons/cg";
import { GrInstagram } from "react-icons/gr";
import { ImGooglePlus } from "react-icons/im";
import { useLocation } from "react-router-dom";

const TopHeader = () => {
  const location = useLocation();
  const pathName = location?.pathname;

  return (
    <>
      {!pathName.includes("/dashboard") && (
        <div className="bg-[#0b1144] py-2 lg:block hidden">
          <div className="container mx-auto flex justify-between items-center">
            <p className="text-white">Free Shipping For All Order Of $99</p>
            <div className="flex items-center gap-x-4">
              <a
                href="https://www.facebook.com/ashraful2880"
                target="blank"
                className="text-[#2563eb] text-lg hover:text-white duration-300 transition-colors ease-in-out bg-white hover:bg-transparent p-1 rounded-full border border-white"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://www.facebook.com/ashraful2880"
                target="blank"
                className="text-[#2563eb] text-lg hover:text-white duration-300 transition-colors ease-in-out bg-white hover:bg-transparent p-1 rounded-full border border-white"
              >
                <CgTwitter />
              </a>
              <a
                href="https://www.facebook.com/ashraful2880"
                target="blank"
                className="text-[#2563eb] text-lg hover:text-white duration-300 transition-colors ease-in-out bg-white hover:bg-transparent p-1 rounded-full border border-white"
              >
                <GrInstagram />
              </a>
              <a
                href="https://www.facebook.com/ashraful2880"
                target="blank"
                className="text-[#2563eb] text-lg hover:text-white duration-300 transition-colors ease-in-out bg-white hover:bg-transparent p-1 rounded-full border border-white"
              >
                <ImGooglePlus />
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default TopHeader;
