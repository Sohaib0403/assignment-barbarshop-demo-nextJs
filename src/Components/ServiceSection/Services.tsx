import React from "react";
import ServiceCard from "./ServiceCard";

function Services() {
  return (
    <div className="w-full bg-[#FDF8E9] flex justify-center items-center ">
      <div className="h-auto w-full md:h-[998px] md:w-[90%] gap-10 p-6">
        {/* Title Section */}
        <div className="flex justify-center items-center flex-col gap-3">
          <img
            src="/images/Services.png"
            alt="Introducing"
            className="w-[150px] md:w-[220px]" // Adjusted for responsiveness
          />
          <h1 className="w-[90%] text-[24px] md:text-[60px] font-bold text-gray-700 text-center">
            Our Services
          </h1>
          <img
            src="/images/logo3.png"
            alt="Logo"
            className="w-[100px] h-[15px] md:w-[300px] md:h-[30px]"
          />
        </div>

        {/* Service Cards Section */}
        <div className="mt-40 flex flex-wrap items-center justify-center gap-6">
          <ServiceCard
            title="Hair Cut"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus feugiat in ante metus dictum at. Dolor sit amet consectetur adipiscing. Et malesuada fames ac turpis egestas. Neque viverra justo nec ultrices dui sapien."
            imageUrl="/images/1.png"
            linkUrl="/services/haircut"
          />
          <ServiceCard
            title="Shaving"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus feugiat in ante metus dictum at. Dolor sit amet consectetur adipiscing. Et malesuada fames ac turpis egestas. Neque viverra justo nec ultrices dui sapien."
            imageUrl="/images/brush.png"
            linkUrl="/services/shaving"
          />
          <ServiceCard
            title="Hair Color"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus feugiat in ante metus dictum at. Dolor sit amet consectetur adipiscing. Et malesuada fames ac turpis egestas. Neque viverra justo nec ultrices dui sapien."
            imageUrl="/images/razor.png"
            linkUrl="/services/haircolor"
          />
          <ServiceCard
            title="Beard Trim"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus feugiat in ante metus dictum at. Dolor sit amet consectetur adipiscing. Et malesuada fames ac turpis egestas. Neque viverra justo nec ultrices dui sapien."
            imageUrl="/images/trimmer.png"
            linkUrl="/services/beardtrim"
          />
        </div>
      </div>
    </div>
  );
}

export default Services;
