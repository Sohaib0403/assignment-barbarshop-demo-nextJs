import Link from 'next/link';
import React from 'react';

interface ServiceCardProps {
  title: string;
  description: string;
  imageUrl: string;
  linkUrl: string;
}

function ServiceCard({ title, description, imageUrl, linkUrl }: ServiceCardProps) {
  return (
    <div className='text-black h-[495px] w-[300px] flex flex-col items-center justify-center text-center bg-white rounded gap-5 transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg hover:shadow-black'>
      <img src={imageUrl} alt={title} />
      <h2 className='text-[40px] font-bold'>{title}</h2>
      <p className='text-[12px] w-[250px]'>{description}</p>
      <Link href={linkUrl} className='border-2 border-orange-400 w-[150px] rounded h-[40px] text-orange-400 items-center flex justify-center hover:bg-orange-400 hover:text-white'>
        READ MORE
      </Link>
    </div>
  );
}

export default ServiceCard;
