"use client"; // Mark as a Client Component

import React, { useEffect, useRef, useState } from "react";
import ContactForm from "./ContactForm";
import Experience from "./Experience";


function Contact() {
  const [isImageInView, setIsImageInView] = useState(false);
  const [isHeadingInView, setIsHeadingInView] = useState(false);

  const imgRef = useRef<HTMLImageElement | null>(null);
  const headingRef = useRef<HTMLHeadingElement | null>(null);

  // Check if the elements are in view
  const handleScroll = () => {
    if (imgRef.current) {
      const rect = imgRef.current.getBoundingClientRect();
      setIsImageInView(rect.top >= 0 && rect.bottom <= window.innerHeight);
    }

    if (headingRef.current) {
      const rect = headingRef.current.getBoundingClientRect();
      setIsHeadingInView(rect.top >= 0 && rect.bottom <= window.innerHeight);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="w-full md:h-[900px] bg-[#FDF8E9]">
      <div
        className="h-[700px] w-full flex items-center"
        style={{
          backgroundImage: 'url("/images/shop2.png")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="h-full w-[60%] md:flex justify-center items-center flex-col gap-3 hidden">
          <div className="w-[750px] h-[400px] gap-4 flex flex-col">
            <img
              ref={imgRef} // Attach ref to image
              src="/images/Contact.png"
              alt="Introducing"
              className={`w-[150px] md:w-[220px] ${isImageInView ? "bounce" : ""}`} // Apply bounce effect conditionally
            />
            <h1
              ref={headingRef} // Attach ref to heading
              className={`w-[90%] text-[24px] md:text-[60px] font-bold ${isHeadingInView ? "bounce" : ""}`} // Apply bounce effect conditionally
            >
              Get In Touch
            </h1>
            <img
              src="/images/logo3.png"
              alt="Logo"
              className="w-[100px] h-[15px] md:w-[300px] md:h-[30px]"
            />
            <p className="text-[22px] ">
              Suspendisse pretium felis dolor, sed placerat diam blandit vitae.
              Sed eu nisl massa. Phasellus vehicula tristique orci ut ultrices.
              Duis eu libero augue. In vulputate sodales tempus. Phasellus dolor
              orci, consectetur in tincidunt eget, consectetur non orci.
            </p>
          </div>
        </div>

        <div className="h-full md:w-[40%] w-full flex justify-center items-start flex-col gap-3">
          <ContactForm />
        </div>
      </div>

      <div className="w-full justify-evenly items-center md:flex hidden">
        <Experience count="2000+" label="HAPPY CLIENT" />
        <img src="/images/1.png" alt="" className="h-[100px]" />
        <Experience count="500" label="HAIR CUTS" />
        <img src="/images/1.png" alt="" />
        <Experience count="150" label="STYLERS" />
        <img src="/images/1.png" alt="" />
        <Experience count="35" label="BRANCHES" />
      </div>
    </div>
  );
}

export default Contact;
