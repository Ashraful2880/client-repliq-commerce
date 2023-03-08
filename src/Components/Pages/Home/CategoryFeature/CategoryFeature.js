import React from "react";
import { Link } from "react-router-dom";
import feature01 from "../../../../Assets/Images/CategoryFeature/Category-feature-1.png";
import feature02 from "../../../../Assets/Images/CategoryFeature/category-feature-2.png";
import feature03 from "../../../../Assets/Images/CategoryFeature/category-feature-3.png";

const CategoryFeature = () => {
  return (
    <div className="container mx-auto lg:flex block justify-center gap-x-6 items-center lg:px-0 px-4">
      <div className="overflow-hidden rounded-md lg:my-0 my-2">
        <Link to="/shopCategory/mask">
          <img
            src={feature01}
            alt="Feature_Image"
            className="rounded-md hover:scale-105 duration-300"
          />
        </Link>
      </div>
      <div className="overflow-hidden rounded-md lg:my-0 my-2">
        <Link to="/shopCategory/mask">
          <img
            src={feature03}
            alt="Feature_Image"
            className="rounded-md hover:scale-105 duration-300"
          />
        </Link>
      </div>
      <div className="overflow-hidden rounded-md lg:my-0 my-2">
        <Link to="/shopCategory/sanitizer">
          <img
            src={feature02}
            alt="Feature_Image"
            className="rounded-md hover:scale-105 duration-300"
          />
        </Link>
      </div>
    </div>
  );
};

export default CategoryFeature;
