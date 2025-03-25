// import React from 'react'
// import Hero from '../Components/Hero'
// import Contact from '../Components/Contact'
// import Strength from '../Components/Strength'
// import SectionsLine from '../Components/SectionsLine'
// import Services from '../Components/Services'
// import LogoGrid from '../Components/LogoGrid'
// import EmpoweredPerformance from '../Components/empoweredPerformance'
// import TeamSolutions from '../Components/teamSolutions'
// import AboutUs from '../Components/AboutUsSection'
// import KeyDifferentiators from '../Components/KeyDifferetiators'
// import LeaderShipCoachingAndDevelopment from '../Components/LeaderShipCoachingAndDevelopment'
// import IndustriesWeServed from '../Components/Industries-We-Served'
// import ContactUs from '../Components/Contact-Us'
// import HowWePlay from '../Components/HowWePlay'

// //homeRef, aboutRef, contactRef,whyusRef,solutionRef,blogsRef
// const Home = ({ homeRef, aboutRef, contactRef, serviceRef, solutionRef, }) => {

//   return (
//     <div>
//       <section ref={homeRef}>
//         <Hero />
//         <Contact />
//       </section>

//       {/* <section ref={homeRef}> */}
//         <SectionsLine />
//         <Strength />
//       {/* </section> */}

//       {/* <section ref={homeRef}> */}
//         <SectionsLine />
//         <HowWePlay />
//       {/* </section> */}

//       {/* <section ref={homeRef}> */}
//         <SectionsLine />
//         <KeyDifferentiators />
//       {/* </section> */}

//       {/* <section ref={homeRef}> */}
//         <SectionsLine />
//         <IndustriesWeServed />
//       {/* </section> */}

//       <section ref={serviceRef}>
//         <SectionsLine />
//         <Services />
//       </section>

//       {/* <section ref={homeRef}> */}
//         <SectionsLine />
//         <EmpoweredPerformance />
//       {/* </section> */}

//       <section ref={solutionRef}>
//         <SectionsLine />
//         <TeamSolutions />
//       </section>

//       {/* <section ref={homeRef}> */}
//         <SectionsLine />
//         <LeaderShipCoachingAndDevelopment />
//       {/* </section> */}

//       {/* <section ref={homeRef}> */}
//         <SectionsLine />
//         <LogoGrid />
//       {/* </section> */}

//       <section ref={aboutRef}>
//         <SectionsLine />
//         <AboutUs />
//       </section>

//       <section ref={contactRef}>
//         <SectionsLine />
//         <ContactUs />
//       </section>


//     </div>
//   )
// }

// export default Home
import React from "react";
import Hero from "../Components/Hero";
import Contact from "../Components/Contact";
import Strength from "../Components/Strength";
import SectionsLine from "../Components/SectionsLine";
import Services from "../Components/Services";
import LogoGrid from "../Components/LogoGrid";
import EmpoweredPerformance from "../Components/empoweredPerformance";
import TeamSolutions from "../Components/teamSolutions";
import AboutUs from "../Components/AboutUsSection";
import KeyDifferentiators from "../Components/KeyDifferetiators";
import LeaderShipCoachingAndDevelopment from "../Components/LeaderShipCoachingAndDevelopment";
import IndustriesWeServed from "../Components/Industries-We-Served";
import ContactUs from "../Components/Contact-Us";
import HowWePlay from "../Components/HowWePlay";

import leftRibbon from "../assets/left-ribbin.png"; 

const Home = ({ homeRef, aboutRef, contactRef, serviceRef, solutionRef }) => {
  return (
    <div>
      {[
        { ref: homeRef, component: <><Hero /><Contact /></> },
        { component: <><SectionsLine /><Strength /></> },
        { component: <><SectionsLine /><HowWePlay /></> },
        { component: <><SectionsLine /><KeyDifferentiators /></> },
        { ref: serviceRef, component: <><SectionsLine /><Services /></> },
        { component: <><SectionsLine /><EmpoweredPerformance /></> },
        { component: <><SectionsLine /><LeaderShipCoachingAndDevelopment /></> },
        { ref: solutionRef, component: <><SectionsLine /><TeamSolutions /></> },
        { component: <><SectionsLine /><IndustriesWeServed /></> },
        { component: <><SectionsLine /><LogoGrid /></> },
        { ref: aboutRef, component: <><SectionsLine /><AboutUs /></> },
        { ref: contactRef, component: <><SectionsLine /><ContactUs /></> },
      ].map(({ ref, component }, index) => (
        <section key={index} ref={ref} className="flex items-stretch">
          {/* Left Image Column */}
          <div className="w-[8vw] flex-shrink-0">
            <img src={leftRibbon} className="h-full w-full object-cover" alt="Left Ribbon" />
          </div>

          {/* Right Content Column */}
          <div className="w-[92%]">
            {component}
          </div>
        </section>
      ))}
    </div>
  );
};

export default Home;
