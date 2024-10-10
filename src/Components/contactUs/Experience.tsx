import React from 'react';

// Define the props interface
interface ExperienceProps {
  count: string;  // Change the type according to your requirements (string, number, etc.)
  label: string;
 
}

function Experience({ count, label }: ExperienceProps) {
  return (
    <div className='text-black h-auto w-[200px] gap-5 flex items-center justify-center p-5'>
      <div>
        <h1 className='text-[60px] font-bold'>{count}</h1>
        <p className='text-[22px]'>{label}</p>
      </div>
      
    </div>
  );
}

export default Experience;
