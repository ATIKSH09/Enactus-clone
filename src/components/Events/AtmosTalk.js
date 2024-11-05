import React from "react";
import "./AtmosTalk.css";
import Realnavbar from "../Realnavbar";
import img1 from "../eventimages/Atmostalkimages/DSC_0014.JPG";
import img2 from "../eventimages/Atmostalkimages/DSC_0035.JPG";
import img3 from "../eventimages/Atmostalkimages/DSC_0005.JPG";
import img4 from "../eventimages/Atmostalkimages/06FC8145-C711-4627-BCF6-71E202FFA467.JPG"
import img5 from "../eventimages/Atmostalkimages/D8259100-A440-4AD8-AB97-CE8DC1FFFB66.JPG"
import img6 from "../eventimages/Atmostalkimages/DSC_0009.JPG";

function AtmosTalk() {
  return (
    <div className="bg-black">
    <Realnavbar bg="#272833" />
    <div className="bg-[#272833] py-28 flex flex-col gap-16">
    <div id="main" className="wrapper style1 text-white" style={{ backgroundColor: '#272833' }}>
      <div id="large-header" className="large-header">
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
    <div className="container">
            <header className="major">
              <h1 id="Headings">Talk by Akshaya Patra</h1>
              <h3 id="Subheading">ATMOS 2023</h3>
            </header>
            <section id="content">
              <div className="message">
                Sorry, your browser does not support CSS Grid. 😅
              </div>
              <section className="section">
                <div className="flex-containerAT">
                  <div className="flex-itemAT" id="image1AT">
                    <img src={img1} alt="description1" />
                  </div>
                  <div className="flex-itemAT" id="image2AT">
                    <img src = {img2} alt="description2" />
                  </div>
                  <div className="flex-itemAT" id="image3AT">
                    <img src={img3} alt="description3" />
                  </div>
                  <div className="flex-itemAT" id="image4AT">
                    <img src={img4} alt="description4" />
                  </div>
                  <div className="flex-itemAT" id="image5AT">
                    <img src={img5} alt="description5" />
                  </div>
                  <div className="flex-itemAT" id="image6AT">
                    <img src={img6} alt="description6" />
                  </div>
                </div>
                <br /><br />
                <h3 id="Headings-2">Talk on Technology, Passion, and Compassion by Akshaya Patra</h3>
                <br />
                <h4 style={{ color: 'white' }}>
                  Speaker: Sri Satya Gaur Chandra Dasa, Regional President of Akshaya Patra
                </h4>
                <br /><br />
                <h4 style={{ color: 'white' }}>
                  Akshaya Patra embodies the fusion of technology and compassion, utilizing mechanical marvels and IT solutions to provide food and education to underprivileged children.
                </h4>
                <br />
                <p id="Text">
                  His Grace Satya Gaura Chandra Dasa, a true exemplar of academic brilliance and selfless service. But what sets him apart is his dedication to humanity inspired by the Bhagvad Gita. For over 25 years, Satya Gaura Chandra Dasa has been a relentless force for good. As a trustee and a regional president of the Akshaya Patra Foundation, he ensures that 2 million children receive nourishing meals daily. But his impact extends further; he leads charitable foundations providing free meals to hospitals, transformative education, and hope to underprivileged children.
                </p>
                <p id="Text">
                  It was an enlightening evening with this visionary leader, a symbol of excellence and a beacon of service.
                </p>
              </section>
            </section>
          </div>
          </div>
        </div>
        </div>
        </div>
  );
}

export default AtmosTalk;

