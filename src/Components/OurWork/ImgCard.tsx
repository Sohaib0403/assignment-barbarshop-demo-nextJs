"use client"; // Mark this component as a Client Component

import React, { useState } from 'react';

interface ImgCardProps {
  images: string[]; 
}

function ImgCard({ images }: ImgCardProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null); 

  const handleImageClick = (imageSrc: string) => {
    setSelectedImage(imageSrc);
  };

  return (
    <div className='w-full flex justify-evenly relative flex-wrap'> {/* Added flex-wrap for responsiveness */}
      {images.map((src, index) => (
        <img 
          key={index} 
          src={src} 
          alt={`Work ${index + 1}`} 
          className={`h-[200px] w-[200px] md:h-[300px] md:w-[300px] rounded transition-all duration-300 cursor-pointer 
                      ${hoveredIndex === index ? 'z-10 scale-150' : ''} 
                      hover:border-4 hover:border-orange-500`} 
          onMouseEnter={() => setHoveredIndex(index)} 
          onMouseLeave={() => setHoveredIndex(null)} 
          onClick={() => handleImageClick(src)}
        />
      ))}

      {/* Popup for displaying the image */}
      {selectedImage && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="relative">
            <img 
              src={selectedImage} 
              alt="Selected Work" 
              className="max-w-full max-h-[80vh] transition-all duration-300 transform scale-150" 
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default ImgCard;
