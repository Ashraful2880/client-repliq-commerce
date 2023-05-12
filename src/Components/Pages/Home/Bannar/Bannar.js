import React from "react";
import SwiperCore, { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Link } from "react-router-dom";
import { Pagination } from "swiper";
SwiperCore.use([Autoplay, Pagination]);

const Bannar = () => {
  return (
    <div className="lg:h-[90vh] md:h-[75vh] h-[65vh] overflow-hidden">
      <Swiper
        cssMode={true}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        modules={[Autoplay, Pagination]}
        pagination={true}
        className="mySwiper"
      >
        {/* Slider-01 */}

        <SwiperSlide className="slider-bg">
          <div className="slider-bg"></div>
          <div className="absolute lg:left-[300px] md:left-[180px] left-[50px] lg:top-[90px] md:top-[100px] top-[50px] text-left font-[cursive]">
            <div className="lg:text-6xl md:text-5xl text-4xl font-bold text-[#0b1144]">
              <h3 className="text-5xl">Womens</h3>
              <h1 className="my-3 text-[#2563eb]">All Latest Quality</h1>
              <h3 className="text-5xl">Sunglases</h3>
            </div>
            <p className="text-[22px] text-gray-500 mt-8">
              We support you to business health smoothly and reduce
              <br /> your stress with good Health Product
            </p>
            <Link to="/shopCategory/All">
              <button className="button-style relative overflow-hidden text-[17px] font-semibold mt-6 px-8 py-2.5 bg-[#2563eb] hover:bg-transparent text-white hover:text-[#2563eb] border border-[#2563eb] rounded-md duration-300 z-0">
                Shop Now
              </button>
            </Link>
          </div>
        </SwiperSlide>

        {/* Slider-02 */}

        <SwiperSlide className="slider-bg2">
          <div className="slider-bg2"></div>
          <div className="absolute lg:left-[300px] md:left-[180px] left-[50px] lg:top-[90px] md:top-[100px] top-[50px] text-left font-[cursive]">
            <div className="lg:text-6xl md:text-5xl text-4xl font-bold text-[#0b1144]">
              <h3 className="text-5xl">Stylish</h3>
              <h1 className="my-3 text-[#2563eb]">Dress Item For</h1>
              <h3 className="text-5xl"> Womens</h3>
            </div>
            <p className="text-[22px] text-gray-500 mt-8">
              We support you to business health smoothly and reduce
              <br /> your stress with good Health Product
            </p>
            <Link to="/shopCategory/All">
              <button className="button-style relative overflow-hidden text-[17px] font-semibold mt-6 px-8 py-2.5 bg-[#2563eb] hover:bg-transparent text-white hover:text-[#2563eb] border border-[#2563eb] rounded-md duration-300 z-0">
                Shop Now
              </button>
            </Link>
          </div>
        </SwiperSlide>

        {/* Slider-03 */}

        <SwiperSlide className="slider-bg3">
          <div className="slider-bg3"></div>
          <div className="absolute lg:left-[300px] md:left-[180px] left-[50px] lg:top-[90px] md:top-[100px] top-[50px] text-left font-[cursive]">
            <div className="lg:text-6xl md:text-5xl text-4xl font-bold text-[#0b1144]">
              <h3 className="text-5xl">9% Discount</h3>
              <h1 className="my-3 text-[#2563eb]">For All Women</h1>
              <h3 className="text-5xl">Products</h3>
            </div>
            <p className="text-[22px] text-gray-500 mt-8">
              We support you to business health smoothly and reduce
              <br /> your stress with good Health Product
            </p>
            <Link to="/shopCategory/All">
              <button className="button-style relative overflow-hidden text-[17px] font-semibold mt-6 px-8 py-2.5 bg-[#2563eb] hover:bg-transparent text-white hover:text-[#2563eb] border border-[#2563eb] rounded-md duration-300 z-0">
                Shop Now
              </button>
            </Link>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Bannar;
