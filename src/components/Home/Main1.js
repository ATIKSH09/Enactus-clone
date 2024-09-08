import React from "react";

function Main1() {
  return (
    <div id="main1" className=" relative h-[100vh] ">
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        className="flex justify-between lg:justify-center lg:items-center lg:gap-y-8 px-[10vw] xl:px-[2vh] items-center absolute bottom-0 w-full border-t-[6px] border-[#FFC223] bg-[#272833] lg:h-[56%] h-[45%] sm:h-[70%] bg-opacity-95 lg:bg-opacity-100 lg:flex-col"
      >
        <div className="flex enactus lg:justify-center lg:items-center flex-col gap-y- font-bold">
          <h1 className="text-[50px] sm:text-[40px] ">What is</h1>
          <h1 className="sm:text-[40px] text-[#F7F709] text-[50px]">
            ENACTUS?
          </h1>
        </div>

        <div className="flex text-xl lg:justify-center lg:items-center lg:flex-col lg:gap-y-8 gap-x-8 font-semiboldbold">
          <p className="w-96 lg:w-[80%]">
            A community of student, academic and business leaders committed to
            using the power of entrepreneurial action to transform lives and
            shape a better, more sustainable world.
          </p>

          <p className="w-96 lg:w-[80%]">
            The world needs more impact-focused, highly-skilled,
            globally-informed leaders to solve our most pressing problems.
            Enactus prepares the next generation of leaders we need now.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Main1;
