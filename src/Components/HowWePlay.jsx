
import React from 'react';
import BlueArrow from './arrow';
import CommonHeading from './CommonHeading';
import logo2 from '../assets/logo2.png';

const HowWePlay = () => {
  return (
    <div className="mt-[2vw] relative px-4 sm:px-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
      <CommonHeading title="How we play" />

      {/* Arrow Formation */}
      <div className="flex flex-wrap justify-center gap-0 p-2 mt-5 relative" style={{ fontFamily: 'Poppins, sans-serif' }}>
        {[
          { text: "Assess", color: "#0066cc", boxPoints: ["Situation Analysis", "Define Arena of engagement", "First level problem definition"] },
          { text: "Design", color: "#fbfda1", boxPoints: ["Agree on process intervention", "Define resource", "Agree project objectives"] },
          { text: "Align and Commit", color: "#ccffcc", boxPoints: ["Engagement & Alignment of key stakeholders", "Prioritize Interventions", "Resource allocation & time lines"] },
          { text: "Deploy", color: "#99cc00", boxPoints: ["Roll out", "Executional steps", "Speedy execution", "Ensuring that the quality is not compromised"] },
          { text: "Evaluate", color: "#ff5252", boxPoints: ["Review outcome against agreed objectives", "Seek feedback"] },
        ].map((step, index) => (
          <div 
            key={index} 
            className={`min-h-[250px] flex flex-col justify-between w-full sm:w-auto ${index !== 0 ? '-ml-[30px]' : ''}`} 
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            <BlueArrow text={step.text} color={step.color} boxPoints={step.boxPoints} width={240} />
          </div>
        ))}
      </div>

      {/* Logo Positioned Absolutely at Bottom Right */}
        <br />
        <br />
        <br />
      <div className="absolute bottom-[-5vw] right-[1.5vw]">
        <img src={logo2} className="h-[8vw]" alt="Company Logo" />
      </div>
    </div>
  );
};

export default HowWePlay;

