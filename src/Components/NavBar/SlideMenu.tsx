"use client"; 

import React from 'react';
import Link from 'next/link';

interface SlideMenuProps {
  isOpen: boolean; 
  onClose: () => void; 
}

const SlideMenu: React.FC<SlideMenuProps> = ({ isOpen, onClose }) => {
  return (
    <div
      className={`fixed top-0 left-0 h-full bg-white md:hidden  transition-transform duration-300 ease-in-out ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } w-[70%] z-20`}
    >
      <div className="flex justify-between items-center p-4 bg-gray-600 ">
        <img
          src="/images/cross.png"
          alt="Close"
          className="h-8 cursor-pointer"
          onClick={onClose}
        />
        <img src="/images/logoName.png" alt="" className='h-2' />
      </div>
      <nav className="flex flex-col items-start p-4">
        <Link href="/" className="text-black py-2" onClick={onClose}>
          Home
        </Link>
        <Link href="/services" className="text-black py-2" onClick={onClose}>
          Services
        </Link>
        <Link href="/about-us" className="text-black py-2" onClick={onClose}>
          About Us
        </Link>
        <Link href="/barberz-team" className="text-black py-2" onClick={onClose}>
          Team
        </Link>
        <Link href="/booking" className="text-black py-2" onClick={onClose}>
          Booking
        </Link>
        <Link href="/contact" className="text-black py-2" onClick={onClose}>
          Contact Us
        </Link>
      </nav>
    </div>
  );
};

export default SlideMenu;
