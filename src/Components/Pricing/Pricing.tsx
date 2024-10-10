import React from "react";
import PriceTag from "./PriceTag";

function Pricing() {
  return (
    <div className="w-full h-[600px] md:h-[980px] bg-[#FDF8E9] flex flex-col justify-center items-center ">
      <div className="flex justify-center items-center flex-col mt-10 gap-3">
        <h1 className="w-full text-[24px] md:text-[60px] font-bold text-gray-700 text-center">
        Barbershop Pricing Plan
        </h1>
        <img
          src="/images/logo3.png"
          alt="Logo"
          className="w-[100px] h-[15px] md:w-[300px] md:h-[30px]"
        />
      </div>

      <div className="w-full flex items-center justify-evenly">
        {/* First Column: Always visible */}
        <div className="flex flex-col gap-5">
          <PriceTag
            serviceName="Hair Cut"
            description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint."
            space="..................."
            price="$10"
          />
          <PriceTag
            serviceName="Hair Styling"
            description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint."
            price="$25"
            space="............."
          />
          <PriceTag
            serviceName="Hair Trimming"
            description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint."
            price="$30"
            space="........."
          />
          <PriceTag
            serviceName="Kids Hair Cut"
            description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint."
            price="$15"
            space=".........."
          />
        </div>

        {/* Second Column: Hidden on phone screens, visible on larger screens */}
        <div className="hidden md:flex flex-col gap-5">
          <PriceTag
            serviceName="Shaving"
            description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint."
            price="$40"
            space="..................."
          />
          <PriceTag
            serviceName="Beard Trimming"
            description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint."
            price="$25"
            space="..."
          />
          <PriceTag
            serviceName="Face Cleaning"
            description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint."
            price="$60"
            space="........."
          />
          <PriceTag
            serviceName="Mustache Trim"
            description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint."
            price="$10"
            space="........."
          />
        </div>
      </div>

      <button className="h-10 w-40 rounded hover:border-2 hover:border-[#D9A536] hover:bg-transparent hover:text-[#D9A536] bg-[#D9A536] mt-5">
        VIEW MORE
      </button>
    </div>
  );
}

export default Pricing;
