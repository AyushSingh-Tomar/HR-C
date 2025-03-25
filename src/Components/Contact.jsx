import React from 'react';
import phone from '../assets/phone.png'
import linkedin from "../assets/linkedin.png"
const Contact = () => {
  return (
    <div className='bg-linear-to-r ml-[5vw] mt-[2vw] flex justify-center items-center h-[10vw] from-[#3A99C9] to-[#0073AE]'>
      <div className='flex justify-between w-[90%] m-auto text-white items-center'>

        {/* Left Section */}
        <div>
          <h3 className='text-[2vw]'>www.thehrcompany.co.in</h3>
          <h3 className='text-[2vw]'>Gurgaon & Mumbai</h3>
        </div>

        {/* Right Section */}
        <div>
          <p className='text-[1.5vw] flex items-center'>
            <img src={phone} alt="Phone" className="w-[2vw] h-[2vw] mr-2" />
            +91-9930951967 / +91-2225797562
          </p>
          <p className='text-[1.5vw] flex items-center'>
            <img src={phone} alt="Phone" className="w-[2vw] h-[2vw] mr-2" />
            +91-9930951967 / +91-2225797562
          </p>
          <p className='text-[1.5vw] flex items-center'>
            <img src={linkedin} alt="LinkedIn" className="w-[2vw] h-[2vw] mr-2" />
            https://www.linkedin.com/the-hr-company/
          </p>
        </div>

      </div>
    </div>
  );
};

export default Contact;
