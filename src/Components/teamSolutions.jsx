import React from "react";
import CommonHeading from "./CommonHeading";
import image95 from "../assets/image 95.png";
import logo2 from '../assets/logo2.png';

const TeamSolutions = () => {
  return (
    <div className="mt-[2vw] relative  flex-col items-center">
      <CommonHeading title="Team Solutions" />
    <div classname="mt-[5%] ml-[7%]">
      <p className="text-left text-gray-800 max-w-4xl ml-[5vw] mt-4 sm:mt-6 text-lg sm:text-xl lg:text-2xl leading-relaxed">
        Team solutions is a quick, time-bound, and proven approach for team building and decision-making
        with collective learning and execution effectiveness aided by experts and experienced coaches.
        The process benefits individuals, teams, and organizations by building team synergies.
      </p>

      <div className="flex justify-center mt-8 sm:mt-10 md:mt-12">
        <img
          src={image95}
          alt="Team Solutions"
          className="w-full max-w-[90%] sm:max-w-[80%] md:max-w-3xl xl:max-w-5xl shadow-xl rounded-lg relative left-[5vw]"
        />
      </div>

      {/* Ensuring the logo remains part of the content flow */}
      <div className="w-full flex justify-end pr-[1.5vw] mt-4">
        <img src={logo2} className='h-[8vw]' alt="Logo" />
      </div>
    </div></div>
  );
};

export default TeamSolutions;