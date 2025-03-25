import { useState } from "react";
import { Menu, X } from "lucide-react"; 
import logo from "../assets/logo.png"; 

export default function Navbar({ scrollToSection, homeRef, aboutRef, contactRef,serviceRef,solutionRef}) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="bg-white flex justify-between items-center p-4 md:p-0">
      {/* Logo */}
      <img src={logo} className="h-[6vw] min-h-[50px] z-91" alt="Logo" />

      {/* Desktop Navigation */}
      <nav className="hidden md:flex ">
        <ul className="flex gap-8 text-lg text-gray-600">
         <li onClick={() => {scrollToSection(homeRef); }}
         className="hover:text-gray-900 font-bold cursor-pointer">Home</li>
          <li onClick={() => scrollToSection(aboutRef)}
          className="hover:text-gray-900 cursor-pointer">About</li>
          <li onClick={() => scrollToSection(serviceRef)}
          className="hover:text-gray-900 cursor-pointer">Services</li>
          <li onClick={() => scrollToSection(solutionRef)}
          className="hover:text-gray-900 cursor-pointer">Solutions</li>
          {/* <li onClick={() => scrollToSection(blogsRef)} */}
          {/* // className="hover:text-gray-900 cursor-pointer">Blogs</li> */}
          <li onClick={() => scrollToSection(contactRef)}
          className="hover:text-gray-900 cursor-pointer mr-8">Contact Us</li>
        </ul>
      </nav>

      {/* Mobile Menu Button */}
      <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Navigation */}
      {isOpen && (
        <nav className="absolute top-15 z-90 left-0 w-full bg-white shadow-md p-4  md:hidden">
          <ul className="flex flex-col items-center gap-4 text-lg text-gray-600">
          <li onClick={() => {scrollToSection(homeRef);setIsOpen(false)}}
         className="hover:text-gray-900 cursor-pointer">Home</li>
        <li onClick={() => {scrollToSection(aboutRef);setIsOpen(false)}}
          className="hover:text-gray-900 cursor-pointer">About</li>
          <li onClick={() => {scrollToSection(serviceRef);setIsOpen(false)}}
          className="hover:text-gray-900 cursor-pointer">Services</li>
          <li onClick={() => {scrollToSection(solutionRef);setIsOpen(false)}}
          className="hover:text-gray-900 cursor-pointer">Solutions</li>
          {/* <li onClick={() => scrollToSection(blogsRef)}
          className="hover:text-gray-900 cursor-pointer">Blogs</li> */}
          <li onClick={() => {scrollToSection(contactRef);setIsOpen(false)}}
          className="hover:text-gray-900 cursor-pointer ">Contact Us</li>
          </ul>
        </nav>
      )}
    </header>
  );
}
