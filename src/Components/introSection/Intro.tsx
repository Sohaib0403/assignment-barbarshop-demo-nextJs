"use client"; 

import React, { useEffect, useRef, useState } from 'react';


function Intro() {
  const [isInView, setIsInView] = useState(false); 
  const imgRef = useRef<HTMLImageElement | null>(null);
  const h1Ref = useRef<HTMLHeadingElement | null>(null); 


  const handleScroll = () => {
    if (imgRef.current && h1Ref.current) {
      const imgRect = imgRef.current.getBoundingClientRect();
      const h1Rect = h1Ref.current.getBoundingClientRect();
      const isImageInView = imgRect.top >= 0 && imgRect.bottom <= window.innerHeight;
      const isH1InView = h1Rect.top >= 0 && h1Rect.bottom <= window.innerHeight;

      
      setIsInView(isImageInView || isH1InView);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className='w-full h-[500px] md:h-[800px] flex flex-col md:flex-row mt-20'>
      {/* Left Section */}
      <div className='w-full md:w-[60%] h-[400px] md:h-[800px] flex flex-col justify-center items-center gap-4 md:gap-8'>
        <img 
          src="/images/Introducing.png" 
          alt="Introducing" 
          className={`w-[280px] md:w-auto ${isInView ? 'bounce' : ''}`} // Add bounce class
          ref={imgRef} 
        />
        <h1 
          ref={h1Ref}
          className={`w-[90%] text-[30px] md:text-[60px] font-bold text-gray-700 text-center ${isInView ? 'bounce' : ''}`} // Add bounce class
        >
          BARBERZ..The Barbershop Since 1990
        </h1>
        <img src="/images/logo2.png" alt="Logo" className="w-[50px] md:w-[100px] md:h-[100px] h-[50px]" />
        <p className='text-black text-center text-[16px] md:text-[20px] w-[90%]'>
          Barber is a person whose occupation is mainly to cut, dress, groom, style, and shave men's and boys' hair.
          A barber's place of work is known as a "barbershop" or a "barber's". Barbershops are also places of social
          interaction and public discourse. In some instances, barbershops are also public forums.
        </p>
        <button className='shadow-lg w-[80%] md:w-[365px] h-[80px] md:h-[78px] text-[15px] md:text-[30px] rounded bg-[#D9A536] hover:border-2 hover:border-orange-300 hover:text-orange-300 hover:bg-transparent'>
          MORE ABOUT US
        </button>
      </div>

      {/* Right Section - Hidden on phone screens */}
      <div className='hidden md:flex w-full md:w-[40%] h-[400px] md:h-[800px] justify-center items-center'>
        <img src="/images/demo.png" alt="image" className='h-[300px] md:h-[600px]' />
      </div>
    </div>
  );
}

export default Intro;
