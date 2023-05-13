import React, { useState, useEffect, useRef } from "react";
import care1 from "../../../../Assets/Images/Others/care-1.png";
import care2 from "../../../../Assets/Images/Others/care-2.png";
import care3 from "../../../../Assets/Images/Others/care-3.png";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";

const PromoBannar = () => {
  const [timerDays, setTimerDays] = useState("0000");
  const [timerHours, setTimerHours] = useState("00");
  const [timerMinutes, setTimerMinutes] = useState("00");
  const [timerSeconds, setTimerSeconds] = useState("00");
  const interval = useRef();

  const startTimer = () => {
    const countDownDate = new Date("December 31, 2024").getTime();
    interval.current = setInterval(() => {
      const now = new Date().getTime();
      const distance = countDownDate - now;
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        clearInterval(interval.current);
      } else {
        setTimerDays(days.toString().padStart(2, "0"));
        setTimerHours(hours.toString().padStart(2, "0"));
        setTimerMinutes(minutes.toString().padStart(2, "0"));
        setTimerSeconds(seconds.toString().padStart(2, "0"));
      }
    }, 1000);
  };

  useEffect(() => {
    startTimer();
    return () => {
      clearInterval(interval.current);
    };
  }, []);

  return (
    <div>
      <div className="pb-12 lg:px-0 px-4 relative promo-background lg:min-h-[70vh] md:min-h-[70vh]">
        <div className="lg:absolute w-full lg:top-[50%] md:top-[50%] lg:-translate-y-[50%] md:-translate-y-[50%]">
          <div className="w-full flex justify-between items-center lg:gap-x-4 md:gap-x-4 container mx-auto">
            <div></div>
            <div className="uppercase block text-left lg:w-1/2 md:w-1/2 w-full">
              <h3 className="lg:text-3xl md:text-3xl text-xl text-[#2563eb] font-bold font-[cursive] lg:pt-0 md:pt-0 pt-6">
                Sales Offer & Discount Only
              </h3>
              <h1 className="lg:text-6xl md:text-5xl text-4xl upparcase font-bold mt-3 mb-4">
                For Summer Sales
              </h1>
              <p className="lg:text-lg md:text-lg text-sm text-gray-600 font-semibold">
                New Product Purchase up to 50% Off All Now Fast
              </p>
              <p className="text-lg text-gray-600 font-semibold">Shopping</p>

              <div className="my-5 lg:w-1/2 md:w-1/2 w-full">
                <div className="flex gap-x-2 items-center">
                  <div className="w-full px-5 py-3 border rounded-md text-center shadow-md border-b-[6px] border-b-[#2563eb]">
                    <p className="text-4xl font-bold text-orange-600">
                      {timerDays}
                    </p>
                    <p className="mt-1 font-semibold">Days</p>
                  </div>
                  <div className="w-full px-5 py-3 border rounded-md text-center shadow-md border-b-[6px] border-b-[#2563eb]">
                    <p className="text-4xl font-bold text-orange-600">
                      {timerHours}
                    </p>
                    <p className="mt-1 font-semibold">Hrs</p>
                  </div>
                  <div className="w-full px-5 py-3 border rounded-md text-center shadow-md border-b-[6px] border-b-[#2563eb]">
                    <p className="text-4xl font-bold text-orange-600">
                      {timerMinutes}
                    </p>
                    <p className="mt-1 font-semibold">Mins</p>
                  </div>
                  <div className="w-full px-5 py-3 border rounded-md text-center shadow-md border-b-[6px] border-b-[#2563eb]">
                    <p className="text-4xl font-bold text-orange-600">
                      {timerSeconds}
                    </p>
                    <p className="mt-1 font-semibold">Secs</p>
                  </div>
                </div>
              </div>
              <a
                href="/shopCategory/All"
                className="button-style relative overflow-hidden upparcase bg-[#2563eb] text-white hover:text-[#2563eb] hover:bg-white border border-[#2563eb] px-4 lg:py-1.5 md:py-1.5 py-2 font-semibold rounded-md lg:mt-5 md:mt-5 mt-2 duration-300 z-0 inline-block"
              >
                Shop Now
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto mt-5 lg:px-0 md:px-0 px-2">
        <div className="lg:flex block justify-between gap-x-6 items-center">
          <Link to="/shopCategory/gloves" className="block w-full">
            <div className="lg:py-6 md:py-5 py-3 lg:px-6 md:px-5 px-1 flex justify-between items-center border rounded-md hover:shadow-md duration-300 w-full lg:my-0 my-2">
              <img src={care1} alt="Care_Image" />
              <div className="text-left pl-3">
                <h4 className="text-xl font-bold mb-2">Women Styles</h4>
                <p className="my-1 hover:text-[#2563eb] duration-300 cursor-pointer">
                  Trending Fashion
                </p>
                <p className="my-1 hover:text-[#2563eb] duration-300 cursor-pointer">
                  Disinfectants
                </p>
                <p className="my-1 hover:text-[#2563eb] duration-300 cursor-pointer">
                  Home Style Dress Pack
                </p>
                <p className="my-1 hover:text-[#2563eb] duration-300 cursor-pointer">
                  Long Dress
                </p>
                <button className="text-md font-semibold text-[#2563eb] hover:underline duration-300 flex items-center gap-x-2 mt-5">
                  View all Fshions
                  <BsArrowRight />
                </button>
              </div>
            </div>
          </Link>

          <Link to="/shopCategory/medicalItems" className="block w-full">
            <div className="lg:py-6 md:py-5 py-3 lg:px-6 md:px-5 px-1 flex justify-between items-center border rounded-md hover:shadow-md duration-300 w-full lg:my-0 my-2">
              <img src={care2} alt="Care_Image" />
              <div className="text-left pl-3">
                <h4 className="text-xl font-bold mb-2">Mens Fashions</h4>
                <p className="my-1 hover:text-[#2563eb] duration-300 cursor-pointer">
                  Mens Trending Style
                </p>
                <p className="my-1 hover:text-[#2563eb] duration-300 cursor-pointer">
                  Disinfectants
                </p>
                <p className="my-1 hover:text-[#2563eb] duration-300 cursor-pointer">
                  Mens Home dress Up
                </p>
                <p className="my-1 hover:text-[#2563eb] duration-300 cursor-pointer">
                  Essential Items
                </p>
                <button className="text-md font-semibold text-[#2563eb] hover:underline duration-300 flex items-center gap-x-2 mt-5">
                  View All Fashions
                  <BsArrowRight />
                </button>
              </div>
            </div>
          </Link>

          <Link to="/shopCategory/medicine" className="block w-full">
            <div className="lg:py-6 md:py-5 py-3 lg:px-6 md:px-5 px-1 flex justify-between items-center border rounded-md hover:shadow-md duration-300 w-full lg:my-0 my-2">
              <img src={care3} alt="Care_Image" />
              <div className="text-left pl-3">
                <h4 className="text-xl font-bold mb-2">Kids Fashions</h4>
                <p className="my-1 hover:text-[#2563eb] duration-300 cursor-pointer">
                  Kids Style Items
                </p>
                <p className="my-1 hover:text-[#2563eb] duration-300 cursor-pointer">
                  Disinfectants
                </p>
                <p className="my-1 hover:text-[#2563eb] duration-300 cursor-pointer">
                  Kids Trending Items
                </p>
                <p className="my-1 hover:text-[#2563eb] duration-300 cursor-pointer">
                  Masks
                </p>
                <button className="text-md font-semibold text-[#2563eb] hover:underline duration-300 flex items-center gap-x-2 mt-5">
                  View Kids Items
                  <BsArrowRight />
                </button>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PromoBannar;
