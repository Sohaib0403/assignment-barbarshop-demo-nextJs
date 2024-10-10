"use client"
import React from 'react'
import Carousel from './Carousel'





function Team() {

  

  return (

    <div className='h-[900px] w-full  text-black'>
        <div className=' w-full h-[250px] flex flex-col justify-center items-center'>
        <img
            src="/images/Specialists.png"
            alt="Introducing"
            className="w-[150px] md:w-[220px]" // Adjusted for responsiveness
          />
          <h1 className="w-[90%] text-[24px] md:text-[60px] font-bold text-gray-700 text-center">
            Our Team
          </h1>
          <img
            src="/images/logo3.png"
            alt="Logo"
            className="w-[100px] h-[15px] md:w-[300px] md:h-[30px]"
          />
        </div>

        <div>
            
       

        </div>
        
        <Carousel/>
    </div>
  )
}

export default Team