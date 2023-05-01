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
                  <h4 className="font-bold text-lg text-[#2563eb] uppercase">
                    Repliq Commerce
                  </h4>
                </div>
              </Link>
            </div>
            {/* Right Action Button */}
            <div className="flex items-center gap-x-6">
              <div className="lg:flex hidden items-center gap-x-6">
                <div className="border-r-2 px-3 py-2 cursor-pointer hover:text-white duration-300 header-button relative rounded-none hover:rounded-full overflow-hidden group">
                  <div className="flex items-center gap-x-2">
                    <FaPhoneAlt className="text-lg text-[#2563eb] group-hover:text-white" />
                    <p className="font-semibold"> (00) 000 123 456789</p>
                  </div>
                </div>
                <div className="border-r-2 px-3 py-2 cursor-pointer hover:text-white duration-300 header-button relative rounded-none hover:rounded-full overflow-hidden group">
                  <div className="flex items-center gap-x-2">
                    <FaEnvelope className="text-lg text-[#2563eb] group-hover:text-white" />
                    <p className="font-semibold"> mail@repliqCommerce.com</p>
                  </div>
                </div>
                <div className="px-3 py-2 cursor-pointer hover:text-white duration-300 header-button relative rounded-full overflow-hidden group">
                  <div className="flex items-center gap-x-2">
                    <FaLocationArrow className="text-lg text-[#2563eb] group-hover:text-white" />
                    <p className="font-semibold"> Store Location</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-x-1">
              {loggedInUser === null && (
                <div className="flex items-center gap-x-1">
                  <Link
                    to="/login"
                    className="font-semibold text-black hover:text-[#2563eb] duration-300"
                  >
                    SIGNIN
                  </Link>
                  <span> / </span>
                  <Link
                    to="/signup"
                    className="font-semibold text-black hover:text-[#2563eb] duration-300"
                  >
                    SIGN UP
                  </Link>
                </div>
              )}
              {loggedInUser && (
                <>
                  <Link
                    to="/dashboard"
                    className="button-style relative overflow-hidden font-bold text-white hover:text-[#0b1144] bg-[#0b1144] hover:bg-white px-2 py-1 border border-[#0b1144] rounded-md duration-300 mx-3 z-0"
                  >
                    DASHBOARD
                  </Link>
                  <button
                    onClick={handleLogOut}
                    className="button-style relative overflow-hidden font-bold text-white hover:text-[#2563eb] bg-[#2563eb] px-2 py-1 border border-[#2563eb] rounded-md duration-300 flex gap-x-1 items-center z-0"
                  >
                    <MdLogout className="text-lg" />
                    <span>Log Out</span>
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MiddleHeader;
