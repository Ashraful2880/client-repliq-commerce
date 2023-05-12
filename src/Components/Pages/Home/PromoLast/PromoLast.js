import React from "react";
import { Link } from "react-router-dom";
import promo from "../../../../Assets/Images/Others/dealOfTheDay.jpg";

const PromoLast = () => {
  return (
    <div className="mt-4 mb-2 relative">
      <Link to="/shopCategory/emergencyKits">
        <img src={promo} alt="Last Promo" />
      </Link>
      <div className="absolute lg:right-28 md:right-28 right-12 lg:top-52 md:top-52 top-3 uppercase lg:block lg:text-left md:text-left text-center">
        <h3 className="text-3xl text-[#2563eb] font-bold">Style Of The Year</h3>
        <h1 className="lg:text-6xl md:text-5xl text-3xl upparcase font-bold lg:mt-3 md:mt-3 mb-4">
          Trading Offer Sale
        </h1>
        <p className="text-lg text-gray-600 font-semibold lg:block md:block hidden">
          New Product Purchase up to 50% Off All Now Fast
        </p>
        <p className="text-lg text-gray-600 font-semibold lg:block md:block hidden">Shopping</p>
        <button className="button-style relative overflow-hidden upparcase bg-[#2563eb] text-white hover:text-[#2563eb] hover:bg-white border border-[#2563eb] px-4 py-1.5 font-semibold rounded-md lg:mt-5 md:mt-5 duration-300 z-0">
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default PromoLast;
