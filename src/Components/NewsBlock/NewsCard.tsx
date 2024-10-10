import React from 'react';

// Define the props interface
interface NewsCardProps {
  imageSrc: string;
  title: string;
  subtitle: string;
  description: string;
}

// Define the NewsCard component with props typed
const NewsCard: React.FC<NewsCardProps> = ({ imageSrc, title, subtitle, description }) => {
  return (
    <div className='h-[500px] w-[388px] transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg mx-auto rounded-lg'>
      <img src={imageSrc} alt="News" className="h-[250px] w-full object-cover rounded-lg" />

      <div className='h-[250px] flex flex-col justify-evenly p-4'>
        <div className='w-full h-[130px] border-l-4 border-orange-300 flex flex-col justify-center'>
          <h1 className='text-[20px] text-gray-600 font-bold'>{subtitle}</h1>
          <h1 className='text-[30px] font-bold'>{title}</h1>
        </div>

        <p className='text-sm md:text-base'>{description}</p>
      </div>
    </div>
  );
}

export default NewsCard;
