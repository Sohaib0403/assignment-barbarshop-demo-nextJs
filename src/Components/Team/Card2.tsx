import React from 'react';

interface Card2Props {
  imageSrc: string;
  altText: string;
  heading: string;
  paragraph: string;
}

function Card2({ imageSrc, altText, heading, paragraph }: Card2Props) {
  return (
    <div className='w-[350px] h-auto transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg hover:shadow-black overflow-hidden'>
      <img src={imageSrc} alt={altText} className="w-full h-auto object-cover" />
      <div className='h-[100px] bg-[#B78E36] text-white flex flex-col justify-center items-center'>
        <h1 className='text-[40px] font-bold'>{heading}</h1>
        <p className='text-[20px] font-bold'>{paragraph}</p>
      </div>
    </div>
  );
}

export default Card2;
