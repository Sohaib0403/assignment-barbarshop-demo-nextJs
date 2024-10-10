import React from "react";

function ContactForm() {
  return (
    <div className="h-full w-full text-white bg-black bg-opacity-75 flex flex-col justify-center items-center gap-5">
      <h1 className="text-[15px] text-orange-400 md:text-[40px] font-bold ">MAKE AN APPOINTMENT</h1>
      <p className="text-[25px] w-[90%] text-center">Barber Is A Prson Whose Occupation Mainly To Cut Dress Groom</p>

      <div className=" h-[300px] w-full flex flex-col justify-evenly ">
        <div className=" w-full flex justify-evenly ">
          <input
            type="text"
            placeholder="Name"
            className="border border-white rounded bg-transparent p-3 text-lg w-[200px] md:w-[250px] h-[40px] "
          />

          <input
            type="text"
            placeholder="Email"
            className="border border-white rounded bg-transparent p-3 text-lg w-[200px] md:w-[250px] h-[40px] "
          />
        </div>
        <div className=" w-full flex justify-evenly ">
        <input
            type="text"
            placeholder="Phone"
            className="border border-white rounded bg-transparent p-3 text-lg w-[200px] md:w-[250px] h-[40px] "
          />

          <input
            type="text"
            placeholder="Time"
            className="border border-white rounded bg-transparent p-3 text-lg w-[200px] md:w-[250px] h-[40px] "
          />
        </div>
        <div className=" w-full flex justify-evenly ">
        <select 
         className="border border-white rounded bg-transparent  w-[200px] md:w-[250px] h-[40px] "
      >
        <option value="" disabled selected>
          Select an option
        </option>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
        <option value="option4">Option 4</option>
      </select>

      <select 
        className="border border-white rounded bg-transparent  w-[200px] md:w-[250px] h-[40px] "
      >
        <option value="" disabled selected>
          Select an option
        </option>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
        <option value="option4">Option 4</option>
      </select>


        </div>
      </div>

      <button className="shadow-lg w-[80%] md:w-[365px] h-[80px] md:h-[68px] text-[15px] md:text-[25px] rounded bg-[#D9A536] hover:border-2 hover:border-orange-300 hover:text-orange-300 hover:bg-transparent">
        MAKE AN APPOINTMENT
      </button>
    </div>
  );
}

export default ContactForm;
