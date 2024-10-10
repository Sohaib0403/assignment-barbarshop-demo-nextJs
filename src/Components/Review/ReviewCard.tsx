import React from 'react';

// Define the prop types
interface ReviewCardProps {
  imageSrc: string;
  reviewText: string;
  authorName: string;
  authorTitle: string;
  starImageSrc: string;
}

const ReviewCard: React.FC<ReviewCardProps> = ({
  imageSrc,
  reviewText,
  authorName,
  authorTitle,
  starImageSrc,
}) => {
  return (
    <div className='h-[480px] md:h-[320px] lg:w-[600px] sm:w-[400px] w-[300px] bg-[#252424] rounded-xl flex flex-col lg:flex-row shadow-inner shadow-black transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg hover:shadow-black'>
      {/* Image Section */}
      <div className='h-full w-full lg:w-[150px] flex justify-center items-start'>
        <img
          src={imageSrc}
          alt="Customer"
          className='w-[120px] mt-5  rounded-[50%]'
        />
      </div>

      {/* Text Section */}
      <div className='h-full w-full lg:w-[450px] flex flex-col items-start gap-5'>
        {/* Review Text */}
        <div className='h-[180px] w-full lg:w-[400px] text-[16px] lg:text-[20px] flex justify-center items-center mt-6 px-4 lg:px-0'>
          <p>“{reviewText}”</p>
        </div>

        {/* Author Section */}
        <div className='h-full w-full lg:w-[450px] flex flex-col justify-center px-4 lg:px-0'>
          <h1 className='text-[20px] lg:text-[30px] font-bold text-[#D9A536]'>{authorName}</h1>
          <div className='flex justify-between w-full lg:w-[450px]'>
            <div className='flex justify-between w-full lg:w-[400px]'>
              <div className='flex flex-col'>
                <p className='text-sm lg:text-base'>{authorTitle}</p>
                <img src={starImageSrc} alt="stars" className='w-[100px] lg:w-auto' />
              </div>
              <img
                src="/images/coma.png"
                alt="Quote Symbol"
                className='h-[60px] lg:h-[80px] ml-2 lg:ml-10'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReviewCard;
