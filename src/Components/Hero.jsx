import React from 'react'
import blueWheel  from '../assets/blue.png'
import magentaWheel  from '../assets/magenta.png'
import logo2 from '../assets/logo2.png'
const Hero = () => {
  return (

   <div className='bg-linear-to-r  ml-[5vw]  relative  h-[40vw] from-[#3A99C9]  to-[#0073AE]'>

      <h2 className='text-white md:p-4 w-[80%] m-auto  text-[2vw] font-bold text-center'>Contributing to performance, talent & leadership excellence across industries since 2007</h2>
        <div>
          <img src={magentaWheel} className='absolute h-[17vw] top-[50%] z-50 left-[50%] translate-[-50%]'  alt="" />
           <h5 className='absolute top-[50%] text-[1.8vw] font-[500] text-white w-[10vw] text-center  left-[50%] translate-[-50%]'>The HR <br /> Company</h5>
       </div>

       <div>
          <img src={blueWheel} className='absolute animate-[spin_5s_linear_infinite] h-[17vw] top-[33%] left-[33.5%] translate-[-50%]'  alt="" />
           <h5 className='absolute top-[32%] left-[33.5%] translate-[-50%] text-[1.5vw] font-[500] text-white w-[11vw] text-center'> Leadership Coaching & Development</h5>
       </div>


       <div>
          <img src={blueWheel} className='absolute  animate-[spin_5s_linear_infinite] h-[17vw] top-[34%] right-[11%] translate-[-50%]'  alt="" />
           <h5 className='absolute top-[34%] right-[19%] translate-[-50%] text-[1.5vw] font-[500] text-white w-[11vw] text-center'> Empowered performance</h5>
       </div>

      
       <div>
            <img src={blueWheel} className='absolute animate-[spin_5s_linear_infinite] h-[14vw] bottom-[-15.9%] left-[40.5%] translate-[-50%]'  alt="" />
           <h5 className='absolute bottom-[5%] left-[40.5%] translate-[-50%] text-[1.3vw] font-[500] text-white w-[8vw] text-center'>Advisory & People Processes</h5>

       </div>
         

       <div>
          <img src={blueWheel} className='absolute animate-[spin_5s_linear_infinite] h-[14vw] bottom-[-13%] right-[19%] translate-[-50%]'  alt="" />
           <h5 className='absolute bottom-[12%] right-[26.5%]  translate-[-50%] text-[1.5vw] font-[500] text-white w-[8vw] text-center'> Team Solutions</h5>
       </div>
         

         <img src={logo2} className='absolute bottom-[1.5vw] h-[8vw] right-[1.5vw]' alt="" />
   </div>
  
  )
}

export default Hero
