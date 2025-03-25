import React from 'react';
import CommonHeading from './CommonHeading';
import logo2 from '../assets/logo2.png';
import star from '../assets/start.png';
const Strength = () => {
  return (
    <div className='mt-[2vw] relative'>
      <CommonHeading title="Our Strength" />
      <div className='flex ml-[5vw] gap-5 mt-[20px] md:mt-[3vw] md:gap-10 min-w-[300px] flex-wrap'>
        {/* Strength Box 1 */}
        <div className='bg-[rgb(58,153,201)] text-justify w-[280px] md:w-[500px] p-[30px] flex items-start'>
          <img src={star} alt="Star" className='w-[20px] h-[20px] mr-2 mt-1' />
          <p className='text-white'>Shaping and building Talent, performance, teams and leader</p>
        </div>

        {/* Strength Box 2 */}
        <div className='bg-[#3A99C9] w-[280px] text-justify md:w-[500px] p-[30px] flex items-start'>
          <img src={star} alt="Star" className='w-[20px] h-[20px] mr-2 mt-1' />
          <p className='text-white'>Delivering excellence through people advisory and processes appropriately customised</p>
        </div>

        {/* Strength Box 3 */}
        <div className='bg-[#3A99C9] w-[280px] text-justify md:w-[500px] p-[30px] flex items-start'>
          <img src={star} alt="Star" className='w-[20px] h-[20px] mr-2 mt-1' />
          <p className='text-white'>Harnessing potential, building the leadership pipeline and coaching leaders for success</p>
        </div>
      </div>
      <img src={logo2} className='absolute bottom-[1.5vw] h-[8vw] right-[1.5vw]' alt="Logo" />
    </div>
  );
};

export default Strength;

