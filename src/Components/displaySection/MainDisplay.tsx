"use client"; 

import React, { useEffect, useRef, useState } from 'react';




function MainDisplay() {
  const [isInView, setIsInView] = useState(false); 
  const pRef = useRef<HTMLParagraphElement | null>(null); 

  
  const handleScroll = () => {
    if (pRef.current) {
      const rect = pRef.current.getBoundingClientRect();
      setIsInView(rect.top >= 0 && rect.bottom <= window.innerHeight);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div 
      className="h-[650px] md:h-[800px] w-full flex flex-col items-center justify-center gap-4 md:gap-8"  
      style={{ 
        backgroundImage: 'url("/images/mainDis.png")', 
        backgroundSize: 'cover', 
        backgroundPosition: 'center' 
      }}
    >
      <h2 className={`text-[40px] md:text-[80px] font-bold mb-4 md:mb-10 text-center ${isInView ? 'bounce' : ''}`}>
        Our Hairstyle Enhances Your Smile!!
      </h2>
      <p 
        ref={pRef} 
        className={`text-[20px] md:text-[40px] w-[90%] md:w-[70%] text-center ${isInView ? 'bounce' : ''}`}
      >
        Our barbershop is the territory created purely for males who appreciate premium quality, time, and a flawless look.
      </p>
      <button className='w-[80%] md:w-[535px] h-[60px] md:h-[97px] bg-[#CCA34C] rounded text-[20px] md:text-[30px] shadow-xl hover:border-2 hover:border-orange-300 hover:text-orange-300 hover:bg-transparent'>
        MAKE AN APPOINTMENT
      </button>
    </div>
  );
}

export default MainDisplay;
