import React from "react";
import Impcard from "../Impcard";
import Logos from "../Home/Logos";

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
            img="https://enactusbitshyd.in/eventimages/projectimages/Medha.png"
            title=""
            desc="A platform for collaborating NGOs with corporates and enthusiasts"
            backtitle="Project Medha"
          />

          <Impcard
            img="https://enactusbitshyd.in/eventimages/projectimages/Oorja.png"
            title=""
            desc="Producing energy from organic waste"
            backtitle="Project Oorja"
          />

          <Impcard
            img="https://enactusbitshyd.in/eventimages/projectimages/Tejas.png"
            title=""
            desc="A sustainable initiative to tackle the dual problem of environment pollution and agricultural waste management"
            backtitle="Project Tejas"
          />

          <Impcard
            img="https://enactusbitshyd.in/eventimages/projectimages/Vikalp.png"
            title=""
            desc="Opportunity for All"
            backtitle="Project Vikalp"
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
