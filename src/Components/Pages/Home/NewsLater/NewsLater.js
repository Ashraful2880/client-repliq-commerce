import React from "react";

const NewsLater = () => {
  return (
    <div>
      <div className="2xl:mx-auto lg:mx-4 md:mx-4 lg:pt-16 md:pt-16 pt-5">
        <div className="w-full relative flex items-center justify-center">
          <img
            src="https://i.ibb.co/4sYZ8gC/img-2.png"
            alt="dining"
            className="w-full h-full absolute z-0 hidden xl:block"
          />
          <img
            src="https://i.ibb.co/bbS3J9C/pexels-max-vakhtbovych-6301182-1.png"
            alt="dining"
            className="w-full h-full absolute z-0 hidden sm:block xl:hidden"
          />
          <img
            src="https://i.ibb.co/JKkzGDs/pexels-max-vakhtbovych-6301182-1.png"
            alt="dining"
            className="w-full h-full absolute z-0 sm:hidden"
          />
          <div className="bg-gray-800 bg-opacity-80 md:my-16 lg:py-16 py-10 w-full md:mx-24 md:px-12 px-4 flex flex-col items-center justify-center relative z-30">
            <h1 className="text-4xl font-semibold leading-9 text-white text-center">
              Don’t Miss Out!
            </h1>
            <p className="text-base leading-normal text-center text-white mt-6">
              Subscribe to your newsletter to stay in the loop. Our newsletter
              is sent once in <br />a week on every friday so subscribe to get
              latest news and updates.
            </p>
            <div className="sm:border border-white flex-col sm:flex-row flex items-center lg:w-5/12 w-full mt-12 space-y-4 sm:space-y-0 rounded-full">
              <input
                className="border border-white sm:border-transparent text-base w-full font-medium leading-none text-white p-4 focus:outline-none bg-transparent placeholder-white"
                placeholder="Email Address"
              />
              <button className="rounded-full focus:outline-none focus:ring-offset-2 focus:ring border-l border-l-transparent hover:border-l-white w-full sm:w-auto bg-[#2563eb] py-4 px-6 hover:bg-opacity-75 text-white hover:bg-transparent duration-300 transition-colors ease-in-out">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsLater;
