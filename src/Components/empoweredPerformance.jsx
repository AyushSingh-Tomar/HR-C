import React from "react";
import CommonHeading from "./CommonHeading";
import image2 from "../assets/image 2.png";

const EmpoweredPerformance = () => {
  return (
    <div className="mt-[2vw] relative">
      <CommonHeading title="Empowered Performance" />

      <div className="flex justify-center mt-8 sm:mt-10 md:mt-12">
        <img
          src={image2}
          alt="Empowered Performance"
          className="w-full max-w-[95%] sm:max-w-[85%] md:max-w-2xl lg:max-w-3xl xl:max-w-4xl 2xl:max-w-5xl shadow-xl rounded-lg relative left-[5vw]"
        />
      </div>
    </div>
  );
};

export default EmpoweredPerformance;