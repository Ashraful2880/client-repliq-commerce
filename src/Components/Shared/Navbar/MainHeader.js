import React from "react";
import { FiHeart, FiShoppingBag } from "react-icons/fi";
import { Link, useLocation } from "react-router-dom";
import MobileNav from "./MobileNav";
import Navbar from "./Navbar";
import { useAPI } from "../../Context/ContextProvider";

const MainHeader = () => {
  const {items,wishListItems}=useAPI();
  const location = useLocation();
  const pathName = location?.pathname;

/*   const totalPrice = items?.reduce(
    (accumulator, currentValue) => accumulator + currentValue?.price,
    0
  ); */

   let TotalCartPrice = items?.reduce(function (accumulator, item) {
    return accumulator + item.price;
  }, 0);

  const shippingCost = parseFloat((TotalCartPrice / 100) * 10) || 0;
  const deliveryCostCalculate = parseFloat((TotalCartPrice / 100) * 15) || 0;
  const deliveryCost = deliveryCostCalculate ||0;
  const subTotal = parseFloat(TotalCartPrice + shippingCost + deliveryCost )||0;
  
  return (
    <>
      {!pathName.includes("/dashboard") && (
        <div className="lg:border border-0  my-0 lg:mt-0 lg:shadow-md shadow-none">
          <nav className="bg-white lg:container lg:mx-auto">
            <div className="md:flex md:justify-between md:items-center">
              <div className="w-full">
                <div className="lg:block hidden">
                  <Navbar />
                </div>
                <div className="lg:hidden block">
                  <MobileNav items={items} wishListItems={wishListItems} totalPrice={subTotal | "00"}/>
                </div>
              </div>

              <div className="lg:block md:block hidden">
                <div className="flex items-center gap-x-6">
                  <Link
                    to="/wishlist"
                    className="relative hover:text-[#2563eb] duration-300"
                  >
                    <FiHeart className="text-2xl" />
                    <div className="h-5 w-5 rounded-full bg-[#2563eb] flex flex-col justify-center items-center p-2 text-white font-bold absolute -top-4 left-3">
                      {wishListItems?.length || 0}
                    </div>
                  </Link>
                  <Link
                    to="/cart"
                    className="relative hover:text-[#2563eb] duration-300"
                  >
                    <div className="h-5 w-5 rounded-full bg-[#2563eb] flex flex-col justify-center items-center p-2 text-white font-bold absolute -top-4 left-3">
                      {items?.length || 0}
                    </div>
                    <FiShoppingBag className="text-2xl" />
                  </Link>
                  <Link to="/cart">
                    <p className="font-semibold hover:text-[#2563eb] duration-300 cursor-pointer">
                      ${subTotal | "00"}
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          </nav>
        </div>
      )}
    </>
  );
};

export default MainHeader;
