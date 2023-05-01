import React from "react";
import { Link } from "react-router-dom";

const Application = () => {
  return (
    <div className="container mx-auto ">
      <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1">
        <div className="py-12 bg-style">
          <img
            src="https://i.ibb.co/HPq0V4Z/App-Tracker-Image.png"
            alt="app Tracker Phone Logo"
          />
        </div>
        <div className="lg:text-left sm:text-center lg:pt-14 sm:pt-0 px-1">
          <h1 className="lg:text-4xl text-xl font-bold py-5">
            Get More With
            <span className="text-[#2563eb]"> Our Application</span>
          </h1>
          <p className="mb-12 lg:w-3/4 sm:w-full lg:text-base text-sm">
            Nunc pellentesque orci sed tempor pharetra. Morbi molestie purus in
            interdum facilisis. Mauris commodo mi a egestas sollicitudin. Mauris
            pharetra placerat sem vel fringilla.
          </p>
          <div className="flex items-center my-5 group pl-5">
            <h5 className="bg-[#2563eb] hover:bg-white group-hover:text-[#2563eb] border border-[#2563eb] text-white px-3 py-2 rounded-full font-bold group-hover:bg-white duration-300">
              01
            </h5>
            <h4 className="font-bold text-xl ml-5 cursor-pointer group-hover:text-[#2563eb] duration-300">
              Order From Any Location
            </h4>
          </div>
          <div className="flex items-center mb-5 group pl-5">
            <h5 className="bg-[#2563eb] hover:bg-white group-hover:text-[#2563eb] border border-[#2563eb] text-white px-3 py-2 rounded-full font-bold group-hover:bg-white duration-300">
              02
            </h5>
            <h4 className="font-bold text-xl ml-5 cursor-pointer group-hover:text-[#2563eb] duration-300">
              Get Important Notices
            </h4>
          </div>
          <div className="flex items-center mb-5 group pl-5">
            <h5 className="bg-[#2563eb] group-hover:bg-white group-hover:text-[#2563eb] border border-[#2563eb] text-white px-3 py-2 rounded-full font-bold duration-300">
              03
            </h5>
            <h4 className="font-bold text-xl ml-5 cursor-pointer group-hover:text-[#2563eb] duration-300">
              Follow Delivery Status
            </h4>
          </div>
          <div className="flex mt-12 mb-6">
            <Link to="/home" className="mx-3">
              <img
                className=" border-4 border-transparent rounded-xl hover:border-[#2563eb] duration-300"
                src="https://i.ibb.co/FndBwq2/app-1.png"
                alt="Apple Icon"
              />
            </Link>
            <Link to="/home" className="mx-2">
              <img
                className=" border-4 border-transparent rounded-xl hover:border-[#2563eb] duration-300"
                src="https://i.ibb.co/w0r5Gyp/app-2.png"
                alt="google play"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Application;