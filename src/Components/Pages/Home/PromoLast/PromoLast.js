import React from "react";
import { Link } from "react-router-dom";
import promo from "../../../../Assets/Images/Others/dealOfTheDay.jpg";

const PromoLast = () => {
  return (
    <div className="mt-4 mb-2 relative">
      <Link to="/shopCategory/emergencyKits">
        <img src={promo} alt="Last Promo" />
      </Link>
      <div className="absolute right-40 top-52 uppercase lg:block hidden">
        <h3 className="text-3xl text-orange-500 font-bold">
          Style Of The Year
        </h3>
        <h1 className="text-6xl upparcase font-bold mt-3 mb-4">
          Trading Offer Sale
        </h1>
        <p className="text-lg text-gray-600 font-semibold">
          New Product Purchase up to 50% Off All Now Fast
        </p>
        <p className="text-lg text-gray-600 font-semibold">Shopping</p>
        <button className="upparcase bg-orange-600 text-white hover:text-orange-600 hover:bg-white border border-orange-600 px-4 py-1.5 font-semibold rounded-md mt-5 duration-300">
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default PromoLast;
