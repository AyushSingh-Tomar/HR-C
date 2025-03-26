import React from "react"; 

const ContactForm = () => {
  return (
    <div 
      className="w-4.5/5 mx-auto p-8 bg-blue-500 rounded-lg shadow-lg my-12 mt-[5%] ml-[7%] mb-[5%]"
      style={{ backgroundColor: "#3b99c8", fontFamily: "Poppins, sans-serif" }}
    >
      <div className="grid grid-cols-2 gap-6 mb-8">
        <input type="text" placeholder="Name" className="h-16 p-4 rounded w-full bg-white" />
        <input type="text" placeholder="Company" className="h-16 p-4 rounded w-full bg-white" />
        <input type="text" placeholder="Nature of Enquiry" className="h-16 p-4 rounded w-full bg-white" />
        <input type="email" placeholder="Email" className="h-16 p-4 rounded w-full bg-white" />
      </div>
      <textarea
        placeholder="Enter Your Query Here..."
        className="w-full p-4 rounded h-40 mb-6 bg-white"
      ></textarea>
      <button className="w-full bg-blue-700 text-white py-4 rounded" style={{ backgroundColor: "#016698" }}>
        Send Message
      </button>
    </div>
  );
};

export default ContactForm;

