import React from "react";

const ContactForm = () => {
  return (
    <div className="w-4/5 mx-auto p-6 bg-blue-500 rounded-lg shadow-lg my-8" style={{ backgroundColor: "#3b99c8" }}>
      <div className="grid grid-cols-2 gap-4 mb-4">
        <input type="text" placeholder="Name" className="p-2 rounded w-full bg-white" />
        <input type="text" placeholder="Company" className="p-2 rounded w-full bg-white" />
        <input type="text" placeholder="Nature of Enquiry" className="p-2 rounded w-full bg-white" />
        <input type="email" placeholder="Email" className="p-2 rounded w-full bg-white" />
      </div>
      <textarea
        placeholder="Enter Your Query Here..."
        className="w-full p-2 rounded h-24 mb-4 bg-white"
      ></textarea>
      <button className="w-full bg-blue-700 text-white py-2 rounded" style={{ backgroundColor: "#016698" }}>
        Send Message
      </button>
    </div>
  );
};

export default ContactForm;