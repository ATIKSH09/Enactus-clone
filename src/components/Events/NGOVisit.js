import React from "react";
import Realnavbar from '../Realnavbar';
import img1 from "../eventimages/NGOVisitImages/image1.JPG";
import img2 from "../eventimages/NGOVisitImages/image2.JPG";
import img3 from "../eventimages/NGOVisitImages/image3.JPG";
import img4 from "../eventimages/NGOVisitImages/image4.JPG";
import img5 from "../eventimages/NGOVisitImages/image5.JPG";
import './NGOVisit.css';

const NGOVisit = () => {
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
            <h1 id="Headings">Sri Vidya NGO Visit</h1>
          </header>

          {/* Content */}
          <section id="content">
            <div className="message">Sorry, your browser does not support CSS Grid. 😅</div>

            <section className="section">
              <div className="flex-containerNV">
                <div className="flex-itemNV" id="image1NV">
                  <img src={img1} alt="description1" />
                </div>
                <div className="flex-itemNV" id="image2NV">
                  <img src={img2} alt="description2" />
                </div>
                <div className="flex-itemNV" id="image3NV">
                  <img src={img3} alt="description3" />
                </div>
                <div className="flex-itemNV" id="image4NV">
                  <img src={img4} alt="description4" />
                </div>
                <div className="flex-itemNV" id="image5NV">
                  <img src={img5} alt="description5" />
                </div>
              </div>
              <br />
              <br />
              <br />

              <div className="container-2NV">
                <div className="flex-itemNV" id="img1NV">
                  <img src={img2} alt="description1" />
                </div>
                <div className="flex-itemNV" id="img2NV">
                  <img src={img1} alt="description2" />
                </div>
                <div className="flex-itemNV" id="img3NV">
                  <img src={img3} alt="description3" />
                </div>
                <div className="flex-itemNV" id="img4NV">
                  <img src={img4} alt="description4" />
                </div>
                <div className="flex-itemNV" id="img5NV">
                  <img src={img5} alt="description5" />
                </div>
              </div>
              <br />
              <br />

              <h4 id="Headings-2">
                Last year we were very fortunate to have visited the Sri Vidhya Foundation's Sri
                Vidhya Centre for Special Children in Hyderabad and gain insight on the daily
                challenges faced by the caregivers. The amount of dedication and service they put
                towards the children is unmatched.
              </h4>
              <br />

              <p id="Text">
                In 1999, Mrs. Shanti and a group of like-minded individuals embarked on this journey
                by establishing a small NGO. Sri Vidhya Center for Special Children in Hyderabad is a
                special school for children and adults with Autism, Down Syndrome, Cerebral Palsy, and
                other intellectual and developmental disabilities. Over the course of 25 years, their
                efforts have led to remarkable growth, and their unwavering commitment has remained
                steadfast.
              </p>
              <br />
            </section>
          </section>
        </div>
      </div>
    </div>
    </div>
    </div>

  );
};

export default NGOVisit;
