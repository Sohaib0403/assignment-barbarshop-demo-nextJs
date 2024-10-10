"use client";

import React, { useEffect, useRef, useState } from 'react';
import NewsCard from './NewsCard';


function NewsBlock() {
  const [isInView, setIsInView] = useState(false); 
  const h1Ref = useRef<HTMLHeadingElement | null>(null); 

  
  const handleScroll = () => {
    if (h1Ref.current) {
      const rect = h1Ref.current.getBoundingClientRect();
      setIsInView(rect.top >= 0 && rect.bottom <= window.innerHeight);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="h-[1400px] md:h-[900px] w-full flex flex-col items-center justify-center gap-4 md:gap-8 text-black">
      <div className="w-full h-[250px] flex flex-col justify-center items-center">
        <h1 
          ref={h1Ref} 
          className={`font-[roboto] text-[#D9A536] text-[28px] md:text-[40px] ${isInView ? 'bounce' : ''}`}
        >
          NEWS FROM BLOG
        </h1>
        <h1 className="w-[90%] text-[24px] md:text-[60px] font-bold text-center">
          What’s on our mind
        </h1>
        <img
          src="/images/logo3.png"
          alt="Logo"
          className="w-[100px] h-[15px] md:w-[300px] md:h-[30px]"
        />
      </div>

      <div className="flex flex-wrap w-full justify-evenly">
        <NewsCard
          imageSrc="/images/news1.png"
          title="The best barbershop in the town"
          subtitle="Beard Styles / BY ADMIN"
          description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit."
        />
        
        {/* Hide the second card on phone screens */}
        <div className="hidden md:block">
          <NewsCard
            imageSrc="/images/news2.png"
            title="The best barbershop in the town"
            subtitle="Beard Styles / BY ADMIN"
            description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit."
          />
        </div>

        <NewsCard
          imageSrc="/images/news3.png"
          title="The best barbershop in the town"
          subtitle="Beard Styles / BY ADMIN"
          description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit."
        />
      </div>
    </div>
  );
}

export default NewsBlock;
