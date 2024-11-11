import React from "react";
import img1 from "../eventimages/impactus/Image1.jpg";
import img2 from "../eventimages/impactus/Image2.jpg";
import img3 from "../eventimages/impactus/Image3.jpg";
import img4 from "../eventimages/impactus/Image4.jpg";
import img5 from "../eventimages/impactus/Image6.jpg";
import img6 from "../eventimages/impactus/Image5.jpg";
import './Impactus.css';  
import Realnavbar from "../Realnavbar";

const Impactus = () => {
  return (
    <div className="bg-black">
      <Realnavbar bg="#272833" />
      <div className="bg-[#272833] py-28 flex flex-col gap-16">
        <div id="main" className="wrapper style1 text-white" style={{ backgroundColor: "#272833" }}>
          <div id="large-header" className="large-header">
            <div id="stars"></div>
            <div id="stars2"></div>
            <div id="stars3"></div>

            <div className="container">
              <header className="major">
                <h1 id="Headings">Impactus</h1>
                <h3 id="Subheading">National Level Case Study Competition</h3>
              </header>

              {/* Content */}
              <section id="content">
                <div className="message">Sorry, your browser does not support CSS Grid. 😅</div>

                <section className="section">
                  <div className="flex-container1">
                    <div className="flex-item1" id="impimage1">
                      <img src={img1} alt="description1" />
                    </div>
                    <div className="flex-item1" id="impimage2">
                      <img src={img2} alt="description2" />
                    </div>
                    <div className="flex-item1" id="impimage3">
                      <img src={img3} alt="description3" />
                    </div>
                    <div className="flex-item1" id="impimage4">
                      <img src={img4} alt="description4" />
                    </div>
                    <div className="flex-item1" id="impimage5">
                      <img src={img5} alt="description5" />
                    </div>
                    <div className="flex-item1" id="impimage6">
                      <img src={img6} alt="description6" />
                    </div>
                  </div>
                  <br /><br />

                  <h3 id="Headings-2">
                    Impactus: National Level Case Study Competition on Sustainable Solutions to the Environment
                  </h3>
                  <br />

                  <p id="Text">
                    IMPACTUS is a sustainable case study competition organised by Enactus BITS Hyderabad, where innovation
                    converges with social impact. It serves as a platform for creative minds to present their distinctive ideas aimed
                    at generating significant social change. Participants devise intelligent solutions that integrate sustainable
                    strategies, along with their analytical and consulting skills. This competition fosters the emergence of novel
                    social entrepreneurship concepts.
                  </p>

                  <p id="Text">
                    The inaugural event was held in 2024 in collaboration with Dharaksha Ecosolutions (CEO Arpit Dhupar), drawing
                    over 1100 registrants and 650 teams. The competition featured two rounds: a preliminary round and a final
                    presentation. The distinguished panel of judges included Prof. Rishi Kumar (Head of the Department of Economics
                    and Finance at BITS Pilani-Hyderabad Campus, with expertise in Development Economics & Public Policy) and Prof.
                    Swati Alok (Faculty-in-charge of Enactus BITS Hyderabad, with expertise in Management & Entrepreneurship).
                  </p>
                </section>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Impactus;
