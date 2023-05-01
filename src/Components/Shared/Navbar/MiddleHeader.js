import React, { useState, useEffect } from "react";
import logo from "../../../Assets/Images/logo.png";
import { FaEnvelope, FaLocationArrow, FaPhoneAlt } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { MdLogout } from "react-icons/md";
import { useAlert } from "react-alert";

const MiddleHeader = () => {
  const alert = useAlert();
  const navigate = useNavigate();
  const location = useLocation();
  const pathName = location?.pathname;

  let loggedInUser;
  try {
    loggedInUser = JSON.parse(localStorage.getItem("token")).token;
  } catch (error) {
    loggedInUser = null;
  }

  const handleLogOut = () => {
    localStorage.removeItem("token");
    alert.success("Logout Successful");
    navigate("/home");
  };

  return (
    <>
      {!pathName.includes("/dashboard") && (
        <div className="lg:block hidden container mx-auto my-3 z-50 overflow-hidden">
          <div className="flex justify-between items-center">
            {/* Main Logo */}
            <div>
              <Link to="/">
                <div className="flex items-center gap-x-2">
                  <img src={logo} alt="Main Logo" className="lg:w-12 w-64" />
                  <h4 className="font-bold text-lg text-orange-600 uppercase">
                    Repliq Commerce
                  </h4>
                </div>
              </Link>
            </div>
            {/* Right Action Button */}
            <div className="flex items-center gap-x-6">
              <div className="lg:flex hidden items-center gap-x-6">
                <div className="border-r-2 pr-5 cursor-pointer text-gray-600 hover:text-orange-600 duration-300">
                  <div className="flex items-center gap-x-2">
                    <FaPhoneAlt className="text-lg text-orange-600 animate-bounce" />
                    <p className="font-semibold"> (00) 000 123 456789</p>
                  </div>
                </div>
                <div className="border-r-2 pr-5 cursor-pointer hover:text-orange-600 duration-300">
                  <div className="flex items-center gap-x-2">
                    <FaEnvelope className="text-lg text-orange-600 animate-bounce" />
                    <p className="font-semibold"> mail@repliqCommerce.com</p>
                  </div>
                </div>
                <div className="pr-5 cursor-pointer hover:text-orange-600 duration-300">
                  <div className="flex items-center gap-x-2">
                    <FaLocationArrow className="text-lg text-orange-600 animate-bounce" />
                    <p className="font-semibold"> Store Location</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-x-1">
              {!loggedInUser && (
                <div className="flex items-center gap-x-1">
                  <Link
                    to="/login"
                    className="font-semibold text-black hover:text-orange-600 duration-300"
                  >
                    SIGNIN
                  </Link>
                  <span> / </span>
                  <Link
                    to="/signup"
                    className="font-semibold text-black hover:text-orange-600 duration-300"
                  >
                    SIGN UP
                  </Link>
                </div>
              )}
              <Link
                to="/dashboard"
                className="font-bold text-white hover:text-[#0b1144] bg-[#0b1144] hover:bg-white px-2 py-1 border border-[#0b1144] rounded-md duration-300 mx-3"
              >
                DASHBOARD
              </Link>
              {loggedInUser && (
                <button
                  onClick={handleLogOut}
                  className="font-bold text-white hover:text-orange-600 bg-orange-600 hover:bg-white px-3 py-1 border border-orange-600 rounded-md duration-300 flex gap-x-2 items-center"
                >
                  <span>Log Out</span>
                  <MdLogout className="text-lg animate-pulse" />
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MiddleHeader;
