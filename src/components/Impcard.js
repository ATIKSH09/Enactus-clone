import React from "react";

function Impcard({title, img, desc, backtitle}) {
  return (
    <div className="w-96 thecard  h-60  border-1 border-white overflow-hidden relative rounded-2xl cursor-pointer">
      <div className="realcard absolute top-0 left-0">
        <div className="front">
          <img
            src={img}
            alt=""
            className=""
          />
          <div>
            <h1 className="text-4xl absolute top-[5%] transform translate-x-[-50%] w-[14rem] left-[50%] ">
              
              {title}
            </h1>
          </div>
        </div>

        <div className="back flex bg-[#353736] gap-6 absolute top-0 left-0   flex-col h-full w-full px-8 pt-4 items-center">
          <h1 className="text-4xl  top-[5%] w-full  text-center   ">
            {backtitle}
          </h1>

          <p className="text-[#999] text-lg text-center">
            {desc}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Impcard;
