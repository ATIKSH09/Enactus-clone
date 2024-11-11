import React from "react";
import Impcard from "../Impcard";
import Logos from "../Home/Logos";
import img1 from "../eventimages/IconImages/DSC_0009.JPG";
import img2 from "../eventimages/IconImages/BBC34748-2D9B-4590-B183-C8993C6D879F.JPG";
import img3 from "../eventimages/IconImages/Image2.jpg";
import img4 from "../eventimages/IconImages/image2ng.JPG";

function Main() {
  return (
    <>
      <div className="bg-[#272833] py-28 flex flex-col gap-16">
        <div className="flex justify-center  items-center">
          <h1 className="text-5xl border-[#FFC223] pb-6 px-10 border-b-4 ">
            Past Events
          </h1>
        </div>
        <div className="flex gap-4 flex-wrap justify-center items-center">
          <Impcard
            img={img1}
            title="ATMOS TALK"
            desc="Enlightening talk on Technology, Passion, and Compassion by Akshaya
          Patra Regional President Sri Satya Gaur Chandra Dasa"
            backtitle="Akshaya Patra Talk during ATMOS"
            route = "/AtmosTalk"
          />

          <Impcard
            img={img2}
            title="DAAN UTSAV"
            desc="Annual National Level Donation Drive having more than 20000 volunteers."
            backtitle="Daan Utsav"
            route = "/DaanUtsav"
          />

          <Impcard
            img={img3}
            title="IMPACTUS"
            desc="National Level Case Study Competition with more than 1500 participants"
            backtitle="Impactus"
            route = "/Impactus"
          />

          <Impcard
            img={img4}
            title="NGO VISIT"
            desc="Visit to Sri Vidhya Foundation Centre for Underprivileged children to gain insight on the daily challenges faced by caregivers."
            backtitle="NGO Visit"
            route = "/NGOVisit"
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
