// import React from "react";
// import CommonHeading from "./CommonHeading";
// import image3 from "../assets/image 3.png";

// const AboutUs = () => {
//   return (
//     <div className="mt-[2vw] relative ">
//       <CommonHeading title="About Us" />
//       <div className="relative mt-4 pt-6 flex flex-col md:flex-row items-start">
//         <div className="relative w-full md:w-1/3 flex justify-center md:justify-start">
//           <img
//             src={image3}
//             alt="Profile"
//             className="w-32 h-32 sm:w-40 sm:h-40 rounded-full shadow-md border-4 border-white mt-4 md:mt-0 md:absolute md:left-[50px]"
//           />
//         </div>
//         <div className="w-full md:w-2/3 text-gray-700 text-left md:ml-12 mt-4 md:mt-0">
//           <p className="text-sm sm:text-base">
//             Udal is a Graduate in Management from BHU - Varanasi and Post Graduate in Management
//             and Organization Behavior from XLRI - Jamshedpur. He is also an alumnus of Ashridge University (UK),
//             IMD (Lausanne), Center for Creative Leadership (North Carolina), Indian Business School - Hyderabad,
//             and Stanford Business School (California), through his academic and learning exposures. He also
//             qualified a one-year Business Leaders Program for Strategy with Leadership at Indian Institute of Management,
//             Kolkata (India) and has taught at IIM, Mumbai & Morocco as a visiting faculty.
//           </p>
//         </div>
//       </div>
//       <div className="text-gray-700 text-left mt-6 text-sm sm:text-base ml-8">
//         <p>
//           He has worked for over 35 years at leadership positions within Chemicals & Fertilizers, FMCG and
//           Pharmaceutical industries, namely, Hindustan Unilever and Colgate Palmolive etc., well-known and recognized
//           for Management and Human Capital Practices. His corporate leadership has extended to Strategy, People Processes in M&A,
//           Change, Leadership Development, Supply Chain, industrial relations, and Communications across 50+ geographic
//           global locations.
//         </p>
//         <br />
//         <p>
//           He has been actively associated with Employer Organizations, Management Institutes, Universities,
//           and Professional bodies. He is a management educator at premier Management & Engineering Institutions in India.
//           He has addressed a Management Dinner on Leadership at Conference Board, USA, which was much appreciated.
//         </p>
//         <br />
//         <p>
//           He currently pursues his consulting and advisory practice in Human Resources and General Management with
//           “The HR Company” as Founder & CEO, since 2007, with its offices at NCR and Mumbai. He is an experienced
//           selection jury, mentoring, and leadership coach besides being a certified trainer and assessor.
//         </p>
//       </div>
//     </div>
//   );
// };

// export default AboutUs;
import React from "react";
import CommonHeading from "./CommonHeading";
import image3 from "../assets/image 3.png";

const AboutUs = () => {
  return (
    <div className="mt-[2vw] relative px-6 sm:px-12">
      <CommonHeading title="About Us" />
      <div className="relative mt-4 pt-6 flex flex-col md:flex-row items-start">
        <div className="relative w-full md:w-1/3 flex justify-center md:justify-start">
          <img
            src={image3}
            alt="Profile"
            className="w-32 h-32 sm:w-40 sm:h-40 rounded-full shadow-md border-4 border-white mt-4 md:mt-0 md:absolute md:left-[50px]"
          />
        </div>
        <div className="w-full md:w-2/3 text-gray-700 text-left md:ml-12 mt-4 md:mt-0">
          <p className="text-sm sm:text-base leading-relaxed">
            Udal is a Graduate in Management from BHU - Varanasi and Post Graduate in Management
            and Organization Behavior from XLRI - Jamshedpur. He is also an alumnus of Ashridge University (UK),
            IMD (Lausanne), Center for Creative Leadership (North Carolina), Indian Business School - Hyderabad,
            and Stanford Business School (California), through his academic and learning exposures. He also
            qualified a one-year Business Leaders Program for Strategy with Leadership at Indian Institute of Management,
            Kolkata (India) and has taught at IIM, Mumbai & Morocco as a visiting faculty.
          </p>
        </div>
      </div>
      <div className="text-gray-700 text-left mt-6 text-sm sm:text-base leading-relaxed px-6 sm:px-12">
        <p>
          He has worked for over 35 years at leadership positions within Chemicals & Fertilizers, FMCG and
          Pharmaceutical industries, namely, Hindustan Unilever and Colgate Palmolive etc., well-known and recognized
          for Management and Human Capital Practices. His corporate leadership has extended to Strategy, People Processes in M&A,
          Change, Leadership Development, Supply Chain, industrial relations, and Communications across 50+ geographic
          global locations.
        </p>
        <br />
        <p>
          He has been actively associated with Employer Organizations, Management Institutes, Universities,
          and Professional bodies. He is a management educator at premier Management & Engineering Institutions in India.
          He has addressed a Management Dinner on Leadership at Conference Board, USA, which was much appreciated.
        </p>
        <br />
        <p>
          He currently pursues his consulting and advisory practice in Human Resources and General Management with
          “The HR Company” as Founder & CEO, since 2007, with its offices at NCR and Mumbai. He is an experienced
          selection jury, mentoring, and leadership coach besides being a certified trainer and assessor.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
