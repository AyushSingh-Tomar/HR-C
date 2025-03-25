import React,{useRef} from 'react'
import Home from './Pages/Home'
// import leftRibbin from './assets/left-ribbin.png';
import Navbar from './Components/Navbar';
const App = () => {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);
  const serviceRef= useRef(null);
  const solutionRef = useRef(null);


  // Function to scroll to the selected section
  const scrollToSection = (sectionRef) => {
    sectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  return (
      <div>
           <Navbar scrollToSection={scrollToSection}
                   homeRef={homeRef} 
                   aboutRef={aboutRef} 
                   contactRef={contactRef} 
                   serviceRef={serviceRef} 
                   solutionRef={solutionRef} 
                  //  blogsRef={blogsRef} 
                   />
            <div className='flex'>
              {/* left ribbin 
                <div className='w-[8vw] '>
                  <img src={leftRibbin} style={{height:"5%"}} alt="Left Ribbon" />
                  
                </div> */}


              {/* right content  */}
              <div className='w-[90%]'>
                <Home
                homeRef={homeRef} 
                aboutRef={aboutRef} 
                contactRef={contactRef} 
                serviceRef={serviceRef} 
                solutionRef={solutionRef} 
                // blogsRef={blogsRef}
                />
              </div>
          
      
            </div>

    </div>  
  )
}

export default App

