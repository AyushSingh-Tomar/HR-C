import React from "react";
import CommonHeading from "./CommonHeading";
import xlriLogo from "../assets/image 4.png";
import conferenceBoardLogo from "../assets/image 5.png";
import iitRoorkeeLogo from "../assets/image 6.png";
import mdiLogo from "../assets/image 7.png";
import imdLogo from "../assets/image 8.png";
import isbLogo from "../assets/image 9.png";
import stanfordLogo from "../assets/image 10.png";
import ashridgeLogo from "../assets/image 11.png";
import iimCalcuttaLogo from "../assets/image 12.png";
import otherLogo from "../assets/image 13.png";

const logos = [
{ src: ashridgeLogo, alt: "Ashridge" },
{ src: mdiLogo, alt: "MDI Gurgaon" },
  { src: xlriLogo, alt: "XLRI Jamshedpur" },
  { src: conferenceBoardLogo, alt: "The Conference Board" },
  { src: iimCalcuttaLogo, alt: "IIM Calcutta" },
  { src: isbLogo, alt: "ISB" },
  { src: imdLogo, alt: "IMD" },

  { src: otherLogo, alt: "Other Institute" },

  { src: stanfordLogo, alt: "Stanford" },
  { src: iitRoorkeeLogo, alt: "IIT Roorkee" },
 
 
 
 
 
];
const LogoGrid = () => {
  return (
   <div className='mt-[2vw] relative '>
    <CommonHeading title="Our Academic and Professional learning Exposures" />
    <div className="container mx-auto py-10 mt-[5%] ml-[7%]">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 items-center justify-center">
        {logos.map((logo, index) => (
          <div key={index} className="flex justify-center">
            <img src={logo.src} alt={logo.alt} className="h-24 object-contain" />
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default LogoGrid;
