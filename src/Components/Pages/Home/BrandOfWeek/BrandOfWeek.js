import React from "react";
import { Link } from "react-router-dom";
import brand from "../../../../Assets/Images/Others/brand-of the-wek.jpg";

const BrandOfWeek = () => {
  return (
    <div className="container mx-auto">
      <div className="overflow-hidden h-full hidden lg:block md:block w-full">
        <Link to="/home">
          <img
            className=" hover:scale-105 duration-1000 mx-auto w-full"
            src={brand}
            alt="Best Selling Banner"
          />
        </Link>
      </div>
    </div>
  );
};

export default BrandOfWeek;
