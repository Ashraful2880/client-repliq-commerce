import React from "react";
import "./LoadingScreen.css";

const LoadingScreen = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="linespinner w-[10px] h-[40px] bg-orange-500 relative rounded-[8px]"></div>
    </div>
  );
};

export default LoadingScreen;
