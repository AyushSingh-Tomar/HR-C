import React from "react";
import address from "../assets/address.png";
import email from "../assets/mail.png";
import phone2 from "../assets/phone2.png";

const ContactInfo = () => {
  return (
    <div className="w-full bg-white ">
      <div
        className="flex w-full items-center justify-center space-x-6 p-4"
        style={{ fontFamily: "Poppins, sans-serif" }}
      >
        {/* Phone Section */}
        <div className="flex items-center space-x-2">
          <img src={phone2} alt="Phone" className="w-[2vw] h-[2vw]" />
          <span className="font-medium">+91 9856324575</span>
        </div>

        {/* Vertical Divider */}
        <div className="h-8 w-1 bg-pink-500"></div>

        {/* Email Section */}
        <div className="flex items-center space-x-2">
          <img src={email} alt="Email" className="w-[2vw] h-[2vw]" />
          <span className="font-medium">info@hrcompany.com</span>
        </div>

        {/* Vertical Divider */}
        <div className="h-8 w-1 bg-pink-500"></div>

        {/* Address Section */}
        <div className="flex items-center space-x-2">
          <img src={address} alt="Location" className="w-[2vw] h-[2vw]" />
          <span className="font-medium">
            Abu Dhabi House 19 Washington Square N, New York, NY 10011, USA
          </span>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;

