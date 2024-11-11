import React from "react";
import Impcard from "../Impcard";
import Logos from "../Home/Logos";
import img1 from "../eventimages/IconImages/Medha.png";
import img2 from "../eventimages/IconImages/Oorja.png";
import img3 from "../eventimages/IconImages/Tejas.png";
import img4 from "../eventimages/IconImages/Vikalp.png";

function Main() {
  return (
    <>
      <div className="bg-[#272833] py-28 flex flex-col gap-16">
        <div className="flex justify-center  items-center">
          <h1 className="text-5xl border-[#FFC223] pb-6 px-10 border-b-4 ">
            Our Projects
          </h1>
        </div>
        <div className="flex gap-4 flex-wrap justify-center items-center">
          <Impcard
            img={img1}
            desc="A platform for collaborating NGOs with corporates and enthusiasts"
            backtitle="Project Medha"
            route = "/Medha"
          />

          <Impcard
            img={img2}
            desc="Producing energy from organic waste"
            backtitle="Project Oorja"
            route = "/Oorja"
          />

          <Impcard
            img={img3}
            desc="A sustainable initiative to tackle the dual problem of environment pollution and agricultural waste management"
            backtitle="Project Tejas"
            route = "/Tejas"
          />

          <Impcard
            img={img4}
            desc="Opportunity for All"
            backtitle="Project Vikalp"
            route = "/Vikalp"
          />
        </div>
      </div>
      <div>
        <Logos />
      </div>
    </>
  );
}

export default Main;
