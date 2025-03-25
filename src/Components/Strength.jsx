import React from 'react'
import CommonHeading from './CommonHeading'

const Strength = () => {
  return (
   <div className='mt-[2vw] relative'>
    <CommonHeading title="Our Strength" />
   <div className='flex ml-[5vw] gap-5 mt-[20px] md:mt-[3vw]  md:gap-10 min-w-[300px] flex-wrap '>
            <div className='bg-[rgb(58,153,201)] text-justify w-[280px] md:w-[500px] p-[30px]'>
               <p>Shaping and building Talent, performance, teams and leader</p>
            </div>
            <div className='bg-[#3A99C9]  w-[280px] text-justify  md:w-[500px] p-[30px]'>
               <p>⁠delivering excellence through people advisory and processes appropriately customised</p>
            </div>
            <div className='bg-[#3A99C9]  w-[280px] text-justify  md:w-[500px] p-[30px]'>
               <p>harnessing potential, building the leadership pipeline and coaching leaders for success</p>
            </div>
         </div>
    </div>
  
  )
}

export default Strength
