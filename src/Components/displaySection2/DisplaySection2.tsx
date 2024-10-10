import React from 'react';

function DisplaySection2() {
  return (
    <div
      className="h-[500px] md:h-[900px] w-full flex flex-col items-center justify-center gap-4 md:gap-8"
      style={{
        backgroundImage: 'url("/images/shop4.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className=" h-[700px] w-[90%] md:w-[75%] flex flex-col items-center justify-center gap-4 md:gap-8 text-center p-4 md:p-8">
        <h1 className="font-[roboto] text-[#D9A536] text-[28px] md:text-[40px]">
          Best Barbershop In The City
        </h1>
        <h1 className="font-[Prata] text-[36px] md:text-[90px] w-full md:w-[900px]">
          Making you look good is in our heritage.
        </h1>
        <p className="text-[18px] md:text-[35px]">
          Barber is a person whose occupation is mainly to cut, dress, groom,
          style, and shave men’s and boy’s hair.
        </p>
        <button className="w-[90%] md:w-[535px] h-[50px] md:h-[97px] bg-[#CCA34C] rounded text-[16px] md:text-[30px] shadow-xl hover:border-2 hover:border-orange-300 hover:text-orange-300 hover:bg-transparent">
          MAKE AN APPOINTMENT
        </button>
      </div>
    </div>
  );
}

export default DisplaySection2;
