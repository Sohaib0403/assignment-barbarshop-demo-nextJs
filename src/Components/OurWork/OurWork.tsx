"use client"; // Mark this component as a Client Component

import React, { useEffect, useRef, useState } from 'react';
import ImgCard from './ImgCard';

function OurWork() {
  const images = [
    "/images/work1.png",
    "/images/work2.png",
    "/images/work3.png",
    "/images/work4.png",
    "/images/work5.png",
    "/images/work6.png",
  ];

  const [isInView, setIsInView] = useState(false);
  const h1Ref = useRef<HTMLHeadingElement | null>(null); // Reference for h1

  // Check if the element is in view
  const handleScroll = () => {
    if (h1Ref.current) {
      const rect = h1Ref.current.getBoundingClientRect();
      setIsInView(rect.top >= 0 && rect.bottom <= window.innerHeight);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="h-[1000px] md:h-[900px] w-full flex flex-col items-center justify-center gap-4 md:gap-8 text-black">
      <div className="w-full h-[150px] flex flex-col justify-center items-center">
        <h1 
          ref={h1Ref} 
          className={`w-[90%] text-[24px] md:text-[60px] font-bold text-center ${isInView ? 'bounce' : ''}`} 
        >
          Our Work
        </h1>
        <img
          src="/images/logo3.png"
          alt="Logo"
          className="w-[100px] h-[15px] md:w-[300px] md:h-[30px]"
        />
      </div>

      <div className='flex flex-col gap-10 w-full'>
        <ImgCard images={images.slice(0, 3)} /> {/* First three images */}
        <ImgCard images={images.slice(3)} />    {/* Last three images */}
      </div>
    </div>
  );
}

export default OurWork;
