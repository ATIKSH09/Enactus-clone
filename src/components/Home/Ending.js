import React from "react";
import Logos from "./Logos";

function Ending() {
  return (
    <div data-aos="fade-up" className="mt-6">
      <div
        id="1st"
        data-aos="fade-left"
        className="bg-[#272833] flex flex-col justify-center items-center sm:gap-8  py-10 gap-y-4"
      >
        <h1 className="text-[#F7F709] text-[32px] font-semibold">
          Follow Us on Instagram
        </h1>
        <div className="flex sm:flex-col sm:gap-8 gap-4">
          <img
            className="w-56 h-56 object-cover rounded-lg"
            src="https://enactusbitshyd.in/images/instagram.jpg
"
            alt=""
          />
          <img
            className="w-56 h-56 object-cover rounded-lg"
            src="https://enactusbitshyd.in/images/instagram2.gif
"
            alt=""
          />
        </div>
      </div>

      {/* <div
        id="2nd"
        data-aos="fade-right"
        className="bg-[#272833] mt-[1px] py-32 gap-8 flex flex-col justify-center items-center"
      >
        <div className="flex gap-8">
          <img className="w-8" src={linkedin} alt="" />
          <img className="w-8" src={instagram} alt="" />
          <img className="w-8" src={github} alt="" />
        </div>

        <div className="w-[90%] flex justify-center items-center">
          <h1 className="text-3xl flex justify-center items-center ">
            © 2024-2025 Enactus at BITS Pilani, Hyderabad Campus
          </h1>
        </div>
      </div> 
      <div className="bg-[#272833] flex justify-center items-center mt-[0.5px]">Created By Atiksh Gupta</div> */}
      <Logos />
    </div>
  );
}

export default Ending;
