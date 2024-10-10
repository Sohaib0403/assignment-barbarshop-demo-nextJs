import React from 'react';

interface PriceTagProps {
  serviceName: string;
  description: string;
  price: string;
  space :string;
}

const PriceTag: React.FC<PriceTagProps> = ({ serviceName, description, price, space }) => {
  return (
    <div className='text-black w-[90%] md:w-[500px] flex flex-col'>
      {/* Service Name and Price */}
      <div className='flex w-auto gap-2 md:gap-5 items-center'>
        <p className='text-[24px] md:text-[40px] font-bold'>{serviceName}</p>
        <p className='hidden md:block text-[40px] font-bold text-[#D9A536]'>{space}</p>
        <p className='text-[24px] md:text-[40px] font-bold text-[#D9A536]'>{price}</p>
      </div>

      {/* Description */}
      <div>
        <p className='text-[14px] md:text-[20px]'>{description}</p>
      </div>
    </div>
  );
};

export default PriceTag;
