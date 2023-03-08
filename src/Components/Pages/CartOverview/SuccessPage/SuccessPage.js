import React from "react";
import { FaCheck } from "react-icons/fa";
import { Link } from "react-router-dom";

const SuccessPage = () => {
  return (
    <div className="min-h-screen container mx-auto">
      <div className="flex flex-col justify-center items-center lg:pt-20 pt-8">
        <div className="h-14 w-14 bg-orange-500 text-white border border-orange-600 rounded-full flex justify-center items-center text-3xl">
          <FaCheck />
        </div>
        <h4 className="text-3xl font-semibold text-center mt-4">
          Order Successfull
        </h4>
      </div>
      <Link to="/">
        <button className="text-orange-600 hover:text-white bg-white hover:bg-orange-500 font-bold mt-6 px-4 py-2 border border-orange-600 rounded-md duration-300">
          Back To Home
        </button>
      </Link>
    </div>
  );
};

export default SuccessPage;
