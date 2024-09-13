import React from "react";
import { useEffect } from "react";
import linkedin from "../../assets/imgs/linkedin.png";
import instagram from "../../assets/imgs/instagram.png";
import github from "../../assets/imgs/github.png";
import Logos from "../Home/Logos";

function Main() {
  useEffect(() => {
    var logodiv1 = document.querySelector("#logodiv1");
    var logodiv2 = document.querySelector("#logodiv2");
    var logodiv3 = document.querySelector("#logodiv3");
    var logodiv4 = document.querySelector("#logodiv4");
    var logodiv5 = document.querySelector("#logodiv5");
    var logodiv6 = document.querySelector("#logodiv6");
    var logodiv7 = document.querySelector("#logodiv7");
    var logodiv8 = document.querySelector("#logodiv8");
    var logoimg1 = document.querySelectorAll(".logoimg1");
    var logoimg2 = document.querySelectorAll(".logoimg2");
    var logoimg3 = document.querySelectorAll(".logoimg3");
    var logoimg4 = document.querySelectorAll(".logoimg4");
    var logoimg5 = document.querySelectorAll(".logoimg5");
    var logoimg6 = document.querySelectorAll(".logoimg6");
    var logoimg7 = document.querySelectorAll(".logoimg7");
    var logoimg8 = document.querySelectorAll(".logoimg8");

    logodiv1.addEventListener("mouseover", () => {
      for (let i = 0; i < logoimg1.length; i++) {
        logoimg1[i].style.display = "block";
      }
    });
    logodiv1.addEventListener("mouseout", () => {
      for (let i = 0; i < logoimg1.length; i++) {
        logoimg1[i].style.display = "none";
      }
    });

    logodiv2.addEventListener("mouseover", () => {
      for (let i = 0; i < logoimg1.length; i++) {
        logoimg2[i].style.display = "block";
      }
    });
    logodiv2.addEventListener("mouseout", () => {
      for (let i = 0; i < logoimg1.length; i++) {
        logoimg2[i].style.display = "none";
      }
    });

    logodiv3.addEventListener("mouseover", () => {
      for (let i = 0; i < logoimg1.length; i++) {
        logoimg3[i].style.display = "block";
      }
    });
    logodiv3.addEventListener("mouseout", () => {
      for (let i = 0; i < logoimg1.length; i++) {
        logoimg3[i].style.display = "none";
      }
    });

    logodiv4.addEventListener("mouseover", () => {
      for (let i = 0; i < logoimg1.length; i++) {
        logoimg4[i].style.display = "block";
      }
    });
    logodiv4.addEventListener("mouseout", () => {
      for (let i = 0; i < logoimg1.length; i++) {
        logoimg4[i].style.display = "none";
      }
    });

    logodiv5.addEventListener("mouseover", () => {
      for (let i = 0; i < logoimg1.length; i++) {
        logoimg5[i].style.display = "block";
      }
    });
    logodiv5.addEventListener("mouseout", () => {
      for (let i = 0; i < logoimg1.length; i++) {
        logoimg5[i].style.display = "none";
      }
    });

    logodiv6.addEventListener("mouseover", () => {
      for (let i = 0; i < logoimg1.length; i++) {
        logoimg6[i].style.display = "block";
      }
    });
    logodiv6.addEventListener("mouseout", () => {
      for (let i = 0; i < logoimg1.length; i++) {
        logoimg6[i].style.display = "none";
      }
    });

    logodiv7.addEventListener("mouseover", () => {
      for (let i = 0; i < logoimg1.length; i++) {
        logoimg7[i].style.display = "block";
      }
    });
    logodiv7.addEventListener("mouseout", () => {
      for (let i = 0; i < logoimg1.length; i++) {
        logoimg7[i].style.display = "none";
      }
    });

    logodiv8.addEventListener("mouseover", () => {
      for (let i = 0; i < logoimg1.length; i++) {
        logoimg8[i].style.display = "block";
      }
    });
    logodiv8.addEventListener("mouseout", () => {
      for (let i = 0; i < logoimg1.length; i++) {
        logoimg8[i].style.display = "none";
      }
    });
  }, []);

  return (
    <div className="bg-[#272833] pb-4">
      <div className="flex gap-16 pb-12 flex-col justify-center items-center bg-[#272833]">
        <div
          id="teams"
          className="text-[40px] border-[#FFC223] border-b-4 px-20 py-6"
        >
          Our Team
        </div>

        <div
          id="execute"
          className=" flex  justify-center lg:gap-12 items-center w-full flex-col gap-4"
        >
          <h1 className="text-3xl">Executive Body</h1>
          <div className="flex sm:flex-col sm:gap-12 lg:flex-wrap lg:gap-8 justify-center items-center w-full  gap-4">
            {/* 1 starts */}
            <div
              id="logodiv1"
              className="w-80 logodiv relative rounded-t-3xl duration-700 bg-black hover:text-black hover:bg-[#FFC223] overflow-hidden  rounded-b-[6rem]"
            >
              <img
                src="https://enactusbitshyd.in/images/IMG-20240714-WA0021.jpg"
                alt=""
                className="rounded-t-3xl"
              />
              <div className="flex flex-col py-4 justify-center items-center w-full  gap-2 ">
                <h1 className="text-xl font-semibold ">Akshat Agarwal</h1>
                <h1 className="text-base text-[#FFC223]">President</h1>
              </div>

              <a
                target="_blank"
                href="https://www.linkedin.com/in/atiksh-gupta-5a95a623b/"
              >
                <img
                  className="w-12 hidden duration-700 logoimg1 bg-black p-3 rounded-xl right-[15%] bottom-[20%] absolute "
                  src={linkedin}
                  alt=""
                />
              </a>
              <a
                className=""z
                target="_blank"
                href="https://www.instagram.com/i.atiksh/"
              >
                <img
                  className="w-12 duration-700 hidden logoimg1 bg-black p-3 rounded-xl  right-1/2 translate-x-[50%]
                %] absolute bottom-[12%]  "
                  src={instagram}
                  alt=""
                />
              </a>
              <a target="_blank" href="https://github.com/ATIKSH09">
                <img
                  className="w-12 duration-700 logoimg1 hidden bg-black p-3 rounded-xl absolute left-[15%] bottom-[20%] "
                  src={github}
                  alt=""
                />
              </a>
            </div>

            {/* 2 starts */}
            <div
              id="logodiv2"
              className="w-80 logodiv relative rounded-t-3xl duration-700 bg-black hover:text-black hover:bg-[#FFC223] overflow-hidden  rounded-b-[6rem]"
            >
              <img
                src="https://enactusbitshyd.in/images/IMG-20240714-WA0023.jpg"
                alt=""
                className="rounded-t-3xl"
              />
              <div className="flex flex-col py-4 justify-center items-center w-full  gap-2 ">
                <h1 className="text-xl font-semibold ">Adamya Tripathi</h1>
                <h1 className="text-base text-[#FFC223]">Vice President</h1>
              </div>

              <a
                target="_blank"
                href="https://www.linkedin.com/in/atiksh-gupta-5a95a623b/"
              >
                <img
                  className="w-12 hidden duration-700 logoimg2 bg-black p-3 rounded-xl right-[15%] bottom-[20%] absolute "
                  src={linkedin}
                  alt=""
                />
              </a>
              <a
                className=""
                target="_blank"
                href="https://www.instagram.com/i.atiksh/"
              >
                <img
                  className="w-12 duration-700 hidden logoimg2 bg-black p-3 rounded-xl  right-1/2 translate-x-[50%]
                %] absolute bottom-[12%]  "
                  src={instagram}
                  alt=""
                />
              </a>
              <a target="_blank" href="https://github.com/ATIKSH09">
                <img
                  className="w-12 duration-700 logoimg2 hidden bg-black p-3 rounded-xl absolute left-[15%] bottom-[20%] "
                  src={github}
                  alt=""
                />
              </a>
            </div>

            {/* 3 starts */}
            <div
              id="logodiv3"
              className="w-80 logodiv relative rounded-t-3xl duration-700 bg-black hover:text-black hover:bg-[#FFC223] overflow-hidden  rounded-b-[6rem]"
            >
              <img
                src="https://enactusbitshyd.in/images/IMG-20240714-WA0022.jpg"
                alt=""
                className="rounded-t-3xl"
              />
              <div className="flex flex-col py-4 justify-center items-center w-full  gap-2 ">
                <h1 className="text-xl font-semibold ">Silla Nakul</h1>
                <h1 className="text-base text-[#FFC223]">Secretary</h1>
              </div>

              <a
                target="_blank"
                href="https://www.linkedin.com/in/atiksh-gupta-5a95a623b/"
              >
                <img
                  className="w-12 hidden duration-700 logoimg3 bg-black p-3 rounded-xl right-[15%] bottom-[20%] absolute "
                  src={linkedin}
                  alt=""
                />
              </a>
              <a
                className=""
                target="_blank"
                href="https://www.instagram.com/i.atiksh/"
              >
                <img
                  className="w-12 duration-700 hidden logoimg3 bg-black p-3 rounded-xl  right-1/2 translate-x-[50%]
                %] absolute bottom-[12%]  "
                  src={instagram}
                  alt=""
                />
              </a>
              <a target="_blank" href="https://github.com/ATIKSH09">
                <img
                  className="w-12 duration-700 logoimg3 hidden bg-black p-3 rounded-xl absolute left-[15%] bottom-[20%] "
                  src={github}
                  alt=""
                />
              </a>
            </div>

            {/* 4 starts */}
            <div
              id="logodiv4"
              className="w-80 logodiv relative rounded-t-3xl duration-700 bg-black hover:text-black hover:bg-[#FFC223] overflow-hidden  rounded-b-[6rem]"
            >
              <img
                src="https://enactusbitshyd.in/images/IMG-20240714-WA0025.jpg"
                alt=""
                className="rounded-t-3xl"
              />
              <div className="flex flex-col py-4 justify-center items-center w-full  gap-2 ">
                <h1 className="text-xl font-semibold ">Avaneesh Pothuri</h1>
                <h1 className="text-base text-[#FFC223]">Technical Head</h1>
              </div>

              <a
                target="_blank"
                href="https://www.linkedin.com/in/atiksh-gupta-5a95a623b/"
              >
                <img
                  className="w-12 hidden duration-700 logoimg4 bg-black p-3 rounded-xl right-[15%] bottom-[20%] absolute "
                  src={linkedin}
                  alt=""
                />
              </a>
              <a
                className=""
                target="_blank"
                href="https://www.instagram.com/i.atiksh/"
              >
                <img
                  className="w-12 duration-700 hidden logoimg4 bg-black p-3 rounded-xl  right-1/2 translate-x-[50%]
                %] absolute bottom-[12%]  "
                  src={instagram}
                  alt=""
                />
              </a>
              <a target="_blank" href="https://github.com/ATIKSH09">
                <img
                  className="w-12 duration-700 logoimg4 hidden bg-black p-3 rounded-xl absolute left-[15%] bottom-[20%] "
                  src={github}
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>

        {/* previous starts */}

        <div
          id="previous"
          className=" flex  justify-center items-center w-full lg:gap-12 flex-col gap-4"
        >
          <h1 className="text-3xl">Previous Members</h1>
          <div className="flex sm:flex-col sm:gap-12 lg:flex-wrap lg:gap-8 justify-center items-center w-full  gap-4">
            {/* 1 starts */}
            <div
              id="logodiv5"
              className="w-80 logodiv relative rounded-t-3xl duration-700 bg-black hover:text-black hover:bg-[#FFC223] overflow-hidden  rounded-b-[6rem]"
            >
              <img
                src="https://enactusbitshyd.in/images/megnathSolo.JPG"
                alt=""
                className="rounded-t-3xl"
              />
              <div className="flex flex-col py-4 justify-center items-center w-full  gap-2 ">
                <h1 className="text-xl font-semibold ">Megnath</h1>
                <h1 className="text-base text-[#FFC223]">Former President</h1>
              </div>

              <a
                target="_blank"
                href="https://www.linkedin.com/in/atiksh-gupta-5a95a623b/"
              >
                <img
                  className="w-12 hidden duration-700 logoimg5 bg-black p-3 rounded-xl right-[15%] bottom-[20%] absolute "
                  src={linkedin}
                  alt=""
                />
              </a>
              <a
                className=""
                target="_blank"
                href="https://www.instagram.com/i.atiksh/"
              >
                <img
                  className="w-12 duration-700 hidden logoimg5 bg-black p-3 rounded-xl  right-1/2 translate-x-[50%]
                %] absolute bottom-[12%]  "
                  src={instagram}
                  alt=""
                />
              </a>
              <a target="_blank" href="https://github.com/ATIKSH09">
                <img
                  className="w-12 duration-700 logoimg5 hidden bg-black p-3 rounded-xl absolute left-[15%] bottom-[20%] "
                  src={github}
                  alt=""
                />
              </a>
            </div>

            {/* 2 starts */}
            <div
              id="logodiv6"
              className="w-80 logodiv relative rounded-t-3xl duration-700 bg-black hover:text-black hover:bg-[#FFC223] overflow-hidden  rounded-b-[6rem]"
            >
              <img
                src="https://enactusbitshyd.in/images/Ankitphoto.jpg"
                alt=""
                className="rounded-t-3xl"
              />
              <div className="flex flex-col py-4 justify-center items-center w-full  gap-2 ">
                <h1 className="text-xl font-semibold ">Ankit</h1>
                <h1 className="text-base text-[#FFC223]">
                  Former Vice President
                </h1>
              </div>

              <a
                target="_blank"
                href="https://www.linkedin.com/in/atiksh-gupta-5a95a623b/"
              >
                <img
                  className="w-12 hidden duration-700 logoimg6 bg-black p-3 rounded-xl right-[15%] bottom-[20%] absolute "
                  src={linkedin}
                  alt=""
                />
              </a>
              <a
                className=""
                target="_blank"
                href="https://www.instagram.com/i.atiksh/"
              >
                <img
                  className="w-12 duration-700 hidden logoimg6 bg-black p-3 rounded-xl  right-1/2 translate-x-[50%]
                %] absolute bottom-[12%]  "
                  src={instagram}
                  alt=""
                />
              </a>
              <a target="_blank" href="https://github.com/ATIKSH09">
                <img
                  className="w-12 duration-700 logoimg6 hidden bg-black p-3 rounded-xl absolute left-[15%] bottom-[20%] "
                  src={github}
                  alt=""
                />
              </a>
            </div>

            {/* 3 starts */}
            <div
              id="logodiv7"
              className="w-80 logodiv relative rounded-t-3xl duration-700 bg-black hover:text-black hover:bg-[#FFC223] overflow-hidden  rounded-b-[6rem]"
            >
              <img
                src="https://enactusbitshyd.in/images/AnanyaSolo.JPG"
                alt=""
                className="rounded-t-3xl"
              />
              <div className="flex flex-col py-4 justify-center items-center w-full  gap-2 ">
                <h1 className="text-xl font-semibold ">Anaya</h1>
                <h1 className="text-base text-[#FFC223]">Former Secretary</h1>
              </div>

              <a
                target="_blank"
                href="https://www.linkedin.com/in/atiksh-gupta-5a95a623b/"
              >
                <img
                  className="w-12 hidden duration-700 logoimg7 bg-black p-3 rounded-xl right-[15%] bottom-[20%] absolute "
                  src={linkedin}
                  alt=""
                />
              </a>
              <a
                className=""
                target="_blank"
                href="https://www.instagram.com/i.atiksh/"
              >
                <img
                  className="w-12 duration-700 hidden logoimg7 bg-black p-3 rounded-xl  right-1/2 translate-x-[50%]
                %] absolute bottom-[12%]  "
                  src={instagram}
                  alt=""
                />
              </a>
              <a target="_blank" href="https://github.com/ATIKSH09">
                <img
                  className="w-12 duration-700 logoimg7 hidden bg-black p-3 rounded-xl absolute left-[15%] bottom-[20%] "
                  src={github}
                  alt=""
                />
              </a>
            </div>

            {/* 4 starts */}
            <div
              id="logodiv8"
              className="w-80 logodiv relative rounded-t-3xl duration-700 bg-black hover:text-black hover:bg-[#FFC223] overflow-hidden  rounded-b-[6rem]"
            >
              <img
                src="https://enactusbitshyd.in/images/SakshamSolo.JPG"
                alt=""
                className="rounded-t-3xl"
              />
              <div className="flex flex-col py-4 justify-center items-center w-full  gap-2 ">
                <h1 className="text-xl font-semibold ">Saksham</h1>
                <h1 className="text-base text-[#FFC223]">
                  Former Technical Head
                </h1>
              </div>

              <a
                target="_blank"
                href="https://www.linkedin.com/in/atiksh-gupta-5a95a623b/"
              >
                <img
                  className="w-12 hidden duration-700 logoimg8 bg-black p-3 rounded-xl right-[15%] bottom-[20%] absolute "
                  src={linkedin}
                  alt=""
                />
              </a>
              <a
                className=""
                target="_blank"
                href="https://www.instagram.com/i.atiksh/"
              >
                <img
                  className="w-12 duration-700 hidden logoimg8 bg-black p-3 rounded-xl  right-1/2 translate-x-[50%]
                %] absolute bottom-[12%]  "
                  src={instagram}
                  alt=""
                />
              </a>
              <a target="_blank" href="https://github.com/ATIKSH09">
                <img
                  className="w-12 duration-700 logoimg8 hidden bg-black p-3 rounded-xl absolute left-[15%] bottom-[20%] "
                  src={github}
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>
      </div>

        <Logos />
      
    </div>
  );
}

export default Main;
