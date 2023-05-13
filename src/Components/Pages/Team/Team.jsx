import React, { useEffect, useState } from "react";
import SwiperCore, { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import LoadingScreen from "../../Shared/LoadingScreen/LoadingScreen";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import axios from "axios";
SwiperCore.use([Autoplay, Pagination]);

const Team = () => {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_PATH}/teams`).then((resp) => {
      setTeams(resp?.data);
    });
  }, []);

  return (
    <>
      {teams?.length > 0 ? (
        <div className="lg:mb-14 mb-1">
          <h5 className="text-orange-500 text-2xl font-bold uppercase">
            Our Members
          </h5>
          <h2 className="text-3xl uppercase font-bold mb-10">
            Meet Our <span className="text-[#2563eb]">Teams</span>{" "}
          </h2>
          <div className="container mx-auto">
            <div className="w-full overflow-hidden lg:px-5 md:px-5 px-2">
              <Swiper
                loop={true}
                autoplay={{ delay: 3000 }}
                slidesPerView={3}
                spaceBetween={30}
                breakpoints={{
                  300: {
                    slidesPerView: 1,
                  },
                  550: {
                    slidesPerView: 2,
                  },
                  900: {
                    slidesPerView: 4,
                  },
                  1020: {
                    slidesPerView: 4,
                  },
                }}
                className="mySwiper"
              >
                {teams?.map((team, key) => (
                  <SwiperSlide key={key}>
                    <div className="border rounded-lg mx-auto bg-white pb-1 team-container">
                      <div className="overflow-hidden">
                        <img
                          className="rounded-t-lg"
                          src={team?.image}
                          alt="TeamImage"
                        />
                      </div>
                      <div className="px-4 text-left overlay-details">
                        <div className="lg:flex block justify-between items-center pt-1">
                          <div>
                            <h4 className="text-lg font-bold text-orange-600">
                              {team?.name}
                            </h4>
                            <h5 className="text-sm font-bold text-gray-300">
                              {team?.designation}
                            </h5>
                          </div>
                          <div className="flex">
                            <a href="https://ashrafulislambd.com">
                              <FaFacebook className="mx-1 text-gray-200 text-xl hover:text-orange-500  duration-300" />
                            </a>
                            <a href="https://ashrafulislambd.com">
                              <FaTwitter className="mx-1 text-gray-200 text-xl hover:text-orange-500  duration-300" />
                            </a>
                            <a href="https://ashrafulislambd.com">
                              <FaInstagram className="mx-1 text-gray-200 text-xl hover:text-orange-500 duration-300" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      ) : (
        <LoadingScreen />
      )}
    </>
  );
};

export default Team;
