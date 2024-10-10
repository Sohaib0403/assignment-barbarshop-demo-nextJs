"use client"; 

import React, { useState, useEffect, useRef } from 'react';

function Client() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isInView, setIsInView] = useState(false);
  const h1Ref = useRef<HTMLHeadingElement | null>(null); // Reference for the h1 element

  const handleImageClick = (imageSrc: string) => {
    setSelectedImage(imageSrc);
  };


  // Check if the h1 is in view
  const handleScroll = () => {
    if (h1Ref.current) {
      const rect = h1Ref.current.getBoundingClientRect();
      setIsInView(rect.top >= 0 && rect.bottom <= window.innerHeight);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on component mount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="h-[700px] md:h-[500px] w-full flex flex-col items-center justify-center gap-4 md:gap-8 text-black">
      <div className="w-full h-[150px] flex flex-col justify-center items-center">
        <h1 
          ref={h1Ref} // Attach ref to h1
          className={`w-[90%] text-[24px] md:text-[60px] font-bold text-center ${isInView ? 'bounce' : ''}`}
        >
          Our Clients 
        </h1>
        <img
          src="/images/logo3.png"
          alt="Logo"
          className="w-[100px] h-[15px] md:w-[300px] md:h-[30px]"
        />
      </div>
      <div className="flex flex-wrap w-full justify-evenly gap-4 md:gap-8">
        <img 
          src="/images/client1.png" 
          alt="#" 
          className="cursor-pointer transition-transform duration-300 hover:scale-105 w-[45%] md:w-[20%] max-w-[200px]" 
          onClick={() => handleImageClick('/images/client1.png')} 
        />
        <img 
          src="/images/client2.png" 
          alt="#" 
          className="cursor-pointer transition-transform duration-300 hover:scale-105 w-[45%] md:w-[20%] max-w-[200px]" 
          onClick={() => handleImageClick('/images/client2.png')} 
        />
        <img 
          src="/images/client3.png" 
          alt="#" 
          className="cursor-pointer transition-transform duration-300 hover:scale-105 w-[45%] md:w-[20%] max-w-[200px]" 
          onClick={() => handleImageClick('/images/client3.png')} 
        />
        <img 
          src="/images/client4.png" 
          alt="#" 
          className="cursor-pointer transition-transform duration-300 hover:scale-105 w-[45%] md:w-[20%] max-w-[200px]" 
          onClick={() => handleImageClick('/images/client4.png')} 
        />
      </div>

      {/* Popup for displaying the image */}
      {selectedImage && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="relative">
            <img src={selectedImage} alt="Client" className="max-w-full max-h-[80vh] rounded-lg" />
          
          </div>
        </div>
      )}
    </div>
  );
}

export default Client;
