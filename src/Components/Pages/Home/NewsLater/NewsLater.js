import React from "react";
import newslater from "../../../../Assets/Images/Others/newslater.jpg";

const NewsLater = () => {
  return (
    <div className="relative overflow-hidden">
      <img src={newslater} alt="Newslater" className="w-full" />
      <div className="flex flex-col w-full items-start absolute left-32 top-40">
        <h2 className="text-4xl font-bold mb-8">
          Subscribe Our <span className="text-orange-600">Newslater</span>
        </h2>
        <div className="flex">
          <input
            type="text"
            placeholder="Enter Email"
            className="py-2 px-4 rounded-md w-96 border border-orange-600"
          />
          <input
            type="submit"
            value="Subscribe"
            className="py-2 px-4 bg-orange-500 hover:bg-white text-white hover:text-orange-600 border border-orange-600 ml-4 rounded-md"
          />
        </div>
      </div>
    </div>
  );
};

export default NewsLater;
