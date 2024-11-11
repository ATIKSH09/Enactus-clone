import React, { useEffect, useState, useRef } from "react";
import linkedin from "../../assets/imgs/linkedin.png";
import instagram from "../../assets/imgs/instagram.png";
import github from "../../assets/imgs/github.png";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Logos from "../Home/Logos";
import AkshathImg from "../eventimages/TeamImages/IMG-20240714-WA0021.jpg";
import AdamyaImg from "../eventimages/TeamImages/IMG-20240714-WA0023.jpg";
import NakulImg from "../eventimages/TeamImages/IMG-20240714-WA0022.jpg";
import AvaneeshImg from "../eventimages/TeamImages/IMG-20240714-WA0025.jpg";
import HarshImg from "../eventimages/TeamImages/IMG-20240714-WA0024.jpg";

function Main() {
  const [currentGroup, setCurrentGroup] = useState(0);
  const teamMembers = [
    {
      name: "Akshat Agarwal",
      position: "President",
      imageUrl: AkshathImg,
      linkedin: "https://www.linkedin.com/in/atiksh-gupta-5a95a623b/",
      instagram: "https://www.instagram.com/i.atiksh/",
      github: "https://github.com/ATIKSH09",
    },
    {
      name: "Adamya Tripathi",
      position: "Vice President",
      imageUrl: AdamyaImg,
      linkedin: "https://www.linkedin.com/in/atiksh-gupta-5a95a623b/",
      instagram: "https://www.instagram.com/i.atiksh/",
      github: "https://github.com/ATIKSH09",
    },
    {
      name: "Silla Nakul",
      position: "Secretary",
      imageUrl: NakulImg,
      linkedin: "https://www.linkedin.com/in/atiksh-gupta-5a95a623b/",
      instagram: "https://www.instagram.com/i.atiksh/",
      github: "https://github.com/ATIKSH09",
    },
    {
      name: "Avaneesh Pothuri",
      position: "Technical Head",
      imageUrl: AvaneeshImg,
      linkedin: "https://www.linkedin.com/in/atiksh-gupta-5a95a623b/",
      instagram: "https://www.instagram.com/i.atiksh/",
      github: "https://github.com/ATIKSH09",
    },
    {
      name: "Harsh Srivastava",
      position: "Outreach",
      imageUrl: HarshImg,  // Update with Harsh's actual image URL
      linkedin: "https://www.linkedin.com/in/harsh-srivastava/",
      instagram: "https://www.instagram.com/harsh_srivastava/",
      github: "https://github.com/harsh-srivastava",
    }

  ];
  const itemsPerGroup = 4;
  const totalGroups = Math.ceil(teamMembers.length / itemsPerGroup);

  const groups = [
    teamMembers.slice(0, 4), // First group: items 1-4
    teamMembers.slice(1, 5)     // Second group: items from the 5th onwards
  ];

  const handleNext = () => {
    if (currentGroup < totalGroups - 1) {
      setCurrentGroup(currentGroup + 1);
    }
  };

  const handlePrevious = () => {
    if (currentGroup > 0) {
      setCurrentGroup(currentGroup - 1);
    }
  };

  return (
    <div className="bg-[#272833] pb-4">
      <div className="flex gap-16 pb-12 flex-col justify-center items-center bg-[#272833]">
        <div id="teams" className="text-[40px] border-[#FFC223] border-b-4 px-20 py-6">
          Our Team
        </div>
        <div className="relative w-full flex justify-center items-center">
          <button onClick={handlePrevious} className="absolute left-0">
            <FaArrowLeft className="text-[#FFC223] text-3xl" />
          </button>

          <div id="execute" className="flex justify-center lg:gap-12 items-center w-full flex-col gap-4">
            <h1 className="text-3xl">Executive Body</h1>
            <div className="flex sm:flex-col sm:gap-12 lg:flex-wrap lg:gap-8 justify-center items-center w-full gap-4">
              {groups[currentGroup].map((member, index) => (
                <div
                  key={index}
                  className="w-80 logodiv relative rounded-t-3xl duration-700 bg-black hover:text-black hover:bg-[#FFC223] overflow-hidden rounded-b-[6rem]"
                  onMouseEnter={(e) => {
                    e.currentTarget.querySelectorAll(".logoimg").forEach((img) => {
                      img.style.display = "block";
                    });
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.querySelectorAll(".logoimg").forEach((img) => {
                      img.style.display = "none";
                    });
                  }}
                >
                  <img src={member.imageUrl} alt={member.name} className="rounded-t-3xl" />
                  <div className="flex flex-col py-4 justify-center items-center w-full gap-2">
                    <h1 className="text-xl font-semibold ">{member.name}</h1>
                    <h1 className="text-base text-[#FFC223]">{member.position}</h1>
                  </div>
                  <div className="flex justify-center gap-4 absolute bottom-[20%] w-full">
                    <a target="_blank" href={member.linkedin}>
                      <img
                        className="w-12 hidden duration-700 logoimg bg-black p-3 rounded-xl"
                        src={linkedin}
                        alt="LinkedIn"
                      />
                    </a>
                    <a target="_blank" href={member.instagram}>
                      <img
                        className="w-12 hidden duration-700 logoimg bg-black p-3 rounded-xl"
                        src={instagram}
                        alt="Instagram"
                      />
                    </a>
                    <a target="_blank" href={member.github}>
                      <img
                        className="w-12 hidden duration-700 logoimg bg-black p-3 rounded-xl"
                        src={github}
                        alt="GitHub"
                      />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button onClick={handleNext} className="absolute right-4 z-10">
            <FaArrowRight className="text-[#FFC223] text-3xl" />
          </button>
        </div>

        {/* Previous Members Section */}
        <div id="previous" className="flex justify-center items-center w-full lg:gap-12 flex-col gap-4">
          <h1 className="text-3xl">Previous Members</h1>
          <div className="flex sm:flex-col sm:gap-12 lg:flex-wrap lg:gap-8 justify-center items-center w-full gap-4">
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

