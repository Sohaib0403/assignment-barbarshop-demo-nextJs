import React from "react";
import ReviewCard from "./ReviewCard";

function Review() {
  return (
    <div
      className="h-[850px] md:h-[800px] w-full flex flex-col items-center justify-center gap-4 md:gap-8"
      style={{
        backgroundImage: 'url("/images/shop3.png")',
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className=" w-full h-[250px] flex flex-col justify-center items-center">
        <img
          src="/images/Specialists.png"
          alt="Introducing"
          className="w-[150px] md:w-[220px]" // Adjusted for responsiveness
        />
        <h1 className="w-[90%] text-[24px] md:text-[60px] font-bold  text-center">
          Our Team
        </h1>
        <img
          src="/images/logo3.png"
          alt="Logo"
          className="w-[100px] h-[15px] md:w-[300px] md:h-[30px]"
        />
      </div>

      <div className="h-[400px] w-full flex justify-evenly items-center">
        {/* First ReviewCard - Always visible */}
        <ReviewCard
          imageSrc="/images/customer1.png"
          reviewText="“Just came back to home and should say that it is definitely a great experience. I would recommend it for everyone who needs a bike for a short term or want to t...”"
          authorName="Robert Fox"
          authorTitle="Writer"
          starImageSrc="/images/stars1.png"
        />

        {/* Second ReviewCard - Hidden on small screens */}
        <div className="hidden md:block"> {/* Hidden on screens smaller than md */}
          <ReviewCard
            imageSrc="/images/costumer2.png"
            reviewText="Just came back to home and should say that it is definitely a great experience. I would recommend it for everyone who needs a bike for a short term or want to t..."
            authorName="Marvin McKinney"
            authorTitle="Businessman"
            starImageSrc="/images/stars2.png"
          />
        </div>
      </div>
    </div>
  );
}

export default Review;
