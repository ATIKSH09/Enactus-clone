import React from "react";
import "./VikalpProject.css";
import Realnavbar from "../Realnavbar";


function Vikalp() {
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
          <h1 id="Headings">Project Medha</h1>
          <h3 id="Subheading">Collaborating with NGOs</h3>
        </header>

        <section id="content">
          <div className="message">
            Sorry, your browser does not support CSS Grid. 😅
          </div>
          <section className="section">
            <div style={{ maxWidth: 'fit-content', marginLeft: 'auto', marginRight: 'auto', display: 'grid' }}>
              <iframe
                src="https://drive.google.com/file/d/1wkrDJa6uvstVsyjxp38-KWD_G-xbWB8E/preview"
                id="video"
                allow="autoplay"
                title="Project Medha Video"
              />
            </div>
          </section>
        </section>

      </div>
    </div>
        </div>
        </div>
        </div>
  );
}

export default Vikalp;