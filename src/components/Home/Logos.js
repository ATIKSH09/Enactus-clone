import React from "react";
import linkedin from "../../assets/imgs/linkedin.png";
import instagram from "../../assets/imgs/instagram.png";
import github from "../../assets/imgs/github.png";
function Logos() {
  return (
    <div>
      <div
        id="2nd"
        data-aos="fade-right"
        className="bg-[#272833] mt-[1px] py-32 gap-8 flex flex-col justify-center items-center"
      >
        <div className="flex gap-8">
          <a
            target="_blank"
            href="https://www.linkedin.com/in/atiksh-gupta-5a95a623b/"
          >
            <img className="w-8" src={linkedin} alt="" />
          </a>
          <a target="_blank" href="https://www.instagram.com/i.atiksh/">
            <img className="w-8" src={instagram} alt="" />
          </a>
          <a target="_blank" href="https://github.com/ATIKSH09">
            <img className="w-8" src={github} alt="" />
          </a>
        </div>

        <div className="w-[90%] flex justify-center items-center">
          <h1 className="text-3xl flex justify-center items-center ">
            © 2024-2025 Enactus at BITS Pilani, Hyderabad Campus
          </h1>
        </div>
      </div>
      <div className="bg-[#272833] flex justify-center items-center mt-[0.5px]">
        Created By Atiksh Gupta
      </div>
    </div>
  );
}

export default Logos;
