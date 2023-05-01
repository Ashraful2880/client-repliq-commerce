import axios from "axios";
import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import LoadingScreen from "../../../Shared/LoadingScreen/LoadingScreen";
import shape from "../../../../Assets/Images/Others/circlebaner.png";
import dot from "../../../../Assets/Images/Others/dot.png";
import rightshape from "../../../../Assets/Images/Others/right-shape.png";

const ShopByCategory = () => {
  const { category } = useParams();
  const [productCategory, setProductCategory] = React.useState();
  const [search, setSearch] = React.useState(category);

  // Get product Category From DB

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_PATH}/productsCategory`)
      .then((resp) => {
        setProductCategory(resp.data);
      });
  }, [search]);

  return (
    <div className="relative">
      <img
        src={shape}
        alt="Shape"
        className="absolute -top-32 left-0 trans-animation"
      />
      <img
        src={dot}
        alt="Shape"
        className="absolute top-0 left-20 trans-animation"
      />
      <img
        src={rightshape}
        alt="Shape"
        className="absolute -top-10 right-0 trans-animation"
      />
      <div className="container mx-auto mb-10">
        {/* Heading Title */}
        <div className="text-left border-b-2 border-b-[#2563eb] pb-3 mb-5">
          <h1 className="text-4xl font-bold">
            Shop By
            <span className="text-[#2563eb] "> Category</span>
          </h1>
          <p className="text-md text-gray-600">
            All Products Category on there
          </p>
        </div>

        {/* Product Category */}

        {productCategory?.length > 0 ? (
          <button className="w-full grid lg:grid-cols-9 md:grid-cols-5 grid-cols-3 gap-x-5 place-content-center place-items-center lg:px-0 px-5">
            {productCategory?.map((singleProduct) => (
              <button
                onClick={() => setSearch(singleProduct?._id)}
                key={singleProduct?._id}
              >
                <Link
                  to={`/shopCategory/${singleProduct?.link}`}
                  className="overflow-hidden"
                >
                  <div className="border h-36 w-36 rounded-md hover:scale-110 duration-300">
                    <img src={singleProduct?.product} alt="Product" />
                  </div>
                  <h1 className="mt-2 mb-6 text-lg font-semibold">
                    {singleProduct?.title}
                  </h1>
                </Link>
              </button>
            ))}
          </button>
        ) : (
          <LoadingScreen />
        )}
      </div>
    </div>
  );
};

export default ShopByCategory;
