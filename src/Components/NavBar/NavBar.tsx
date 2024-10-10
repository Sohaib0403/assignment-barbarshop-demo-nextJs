"use client";

import Link from "next/link";
import React, { useState } from "react";
import SlideMenu from "./SlideMenu"; 

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="text-black h-[140px] w-full  bg-black bg-opacity-70 fixed top-0 lg:h-[160px] md:h-[120px] sm:h-[80px] z-10">
      {/* Top Section: Contact Info and Social Media */}
      <div className="text-white h-[40px] w-full flex flex-row justify-between">
        <div className="hidden md:flex h-[40px] w-[20%] ml-5 flex-row items-center">
          <div className="h-[40px] w-[140px] opacity-100 flex flex-row items-center">
            <img src="/images/call.png" alt="Call" className="h-6 w-6" />
            <p className="ml-2 text-[12px]">+123456789</p>
          </div>
          <div className="h-[40px] w-[140] opacity-100 flex items-center">
            <img src="/images/mail.png" alt="Mail" className="h-6 w-6" />
            <p className="ml-2 text-[12px]">barberz123@info.com</p>
          </div>
        </div>

        <div className="hidden md:flex h-[40px] w-[20%] ml-5 flex-row items-center justify-evenly">
          <img src="/images/facebook.png" alt="Facebook" className="h-6 w-6" />
          <img src="/images/twitter.png" alt="Twitter" className="h-6 w-6" />
          <img src="/images/google.png" alt="Google" className="h-6 w-6" />
          <img src="/images/youtube.png" alt="YouTube" className="h-6 w-6" />
        </div>
      </div>

      {/* Main Navigation */}
      <div className="w-full h-[90px] flex flex-row justify-center items-center   ">
        <nav className="hidden md:flex flex-row justify-around p-4 text-[20px] h-[60px] items-center w-[80%] text-white hover:text-black ">
          <Link href="/" >Home</Link>
          <Link href="/services" >Services</Link>
          <Link href="/about-us" >About Us</Link>
          <Link href="/barberz-team" className=" h-[40px] w-[180px] flex items-center">
            <img src="/images/logoName.png" alt="Logo Name" />
          </Link>
          <Link href="/team" >Team</Link>
          <Link href="/booking" >Booking</Link>
          <Link href="/contact" >Contact Us</Link>
        </nav>

        <div className="h-full w-full absolute top-0 left-1/2 transform -translate-x-1/2  items-center justify-center hidden md:flex">
          <img src="/images/logo.png" alt="Logo" />
        </div>

        
      </div>

      {/* Centered Logo for Mobile */}
      <div className="h-full w-full absolute top-0 left-1/2 transform -translate-x-1/2 md:hidden flex items-center justify-center">
        <img src="/images/logoName.png" alt="Logo" />
        <img src="/images/menu.png" alt="Menu" className="h-8 opacity-100 absolute left-10  " onClick={toggleMenu}/>
        
        
      </div>

      {/* Slide Menu */}
      <SlideMenu isOpen={isMenuOpen} onClose={toggleMenu} />
    </div>
  );
}

export default NavBar;
