import React from 'react';
import CommonHeading from './CommonHeading';
import { IoMdSettings } from "react-icons/io";

const cardData = [
  {
    title: 'Empowered Performance',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  },
  {
    title: 'Leadership Coaching & Development',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  },
  {
    title: 'Team Solutions',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  },
  {
    title: 'Advisory & People Processes',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  },
];

const Card = ({ title, description }) => (
  <div className="flex ml-[5vw] mt-[20px]  items-start border-l-6 border-[#969696] pl-4 p-6  bg-white">
    
    <div>
        <div className='relative'>
           <IoMdSettings className='w-[30px] absolute top-[-15px] left-[24px] h-[30px]  text-pink-500'/>
           <IoMdSettings className='w-[30px]  h-[30px]  text-pink-500'/>
       </div>
  
      <h2 className="text-xl  font-bold mb-2">{title}</h2>
      <p className="text-gray-600 mb-4 text-justify">{description}</p>
      <button className="bg-[#006699] text-white px-4 py-2 rounded hover:bg-[#006680] transition">
        Read More
      </button>
    </div>
  </div>
);

const Services = () => {
  return (
  <div className='mt-[2vw] relative'>
     <CommonHeading title="Services Architecture"/>
    <div className="container mx-auto px-4 py-8">
        
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {cardData.map((item, index) => (
          <Card key={index} title={item.title} description={item.description} />
        ))}
      </div>
    </div>
    </div>
  );
};

export default Services;