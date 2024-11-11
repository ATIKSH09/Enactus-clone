import React from 'react';
import Realnavbar from '../Realnavbar';
import img1 from '../eventimages/DaanUtsav/BC9A0516-3235-424A-8275-B53750CCA969.JPG';
import img2 from '../eventimages/DaanUtsav/440B87A1-B56A-4A78-9C8F-7A3F3EB60A20.JPG';
import img3 from '../eventimages/DaanUtsav/5C4AAA66-BF6D-4EFD-9CEB-9998E8E064D8.JPG';
import img4 from '../eventimages/DaanUtsav/66A4BA8D-4007-44C3-BF12-354637D0C290.JPG';
import img5 from '../eventimages/DaanUtsav/9263E80A-AC40-43AA-8CE9-C4D98BE7C2C1.JPG';
import img6 from '../eventimages/DaanUtsav/Copy of IMG_20240113_111325.JPEG';
import img7 from '../eventimages/DaanUtsav/D70C9188-FD8E-482D-998B-DFB332533B55.JPG';
import img8 from '../eventimages/DaanUtsav/BBC34748-2D9B-4590-B183-C8993C6D879F.JPG';
import './DaanUtsav.css';

const DaanUtsav = () => {
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
            <h1 id="Headings">Daan Utsav</h1>
            <h3 id="Subheading">National Level Donation Drive</h3>
          </header>

          {/* Content */}
          <section id="content">
            <div className="message">
              Sorry, your browser does not support CSS Grid. 😅
            </div>
            <section className="section">
              <div className="flex-container2" style={{ display: 'flex', flexWrap: 'wrap', gap: '23px' }}>
                <div className="flex-item2" style={{ flex: '0 0 36%', height: 'auto', aspectRatio: '0.75' }} id="image1">
                  <img src={img1} alt="Daan Utsav Image 1" />
                </div>
                <div className="mini-container" style={{ flex: '0 0 62%', aspectRatio: '1.333333', boxSizing: 'border-box', display: 'grid', gridTemplateColumns: '50% 50%', gap: '10px' }}>
                  <div className="flex-item2" style={{ width: '100%', maxHeight: '100%', gap: '10px', aspectRatio: '1.333334', objectFit: 'cover', boxSizing: 'border-box' }} id="image2DU">
                    <img src={img2} alt="Daan Utsav Image 2" />
                  </div>
                  <div className="flex-item2" style={{ width: '100%', maxHeight: '100%', gap: '10px', aspectRatio: '1.333334', objectFit: 'cover', boxSizing: 'border-box' }} id="image3DU">
                    <img src={img3} alt="Daan Utsav Image 3" />
                  </div>
                  <div className="flex-item2" style={{ width: '100%', maxHeight: '100%', gap: '10px', aspectRatio: '1.333334', objectFit: 'cover', boxSizing: 'border-box' }} id="image4DU">
                    <img src={img4} alt="Daan Utsav Image 4" />
                  </div>
                  <div className="flex-item2" style={{ width: '100%', maxHeight: '100%', gap: '10px', aspectRatio: '1.333334', objectFit: 'cover', boxSizing: 'border-box' }} id="image5DU">
                    <img src={img5} alt="Daan Utsav Image 5" />
                  </div>
                </div>
                <div className="flex-item2" style={{ flex: '0 0 72.3%', aspectRatio: '1.652831919' }} id="image8">
                  <img src={img8} alt="Daan Utsav Image 8" />
                </div>
                <div className="mini-container-two" style={{ display: 'grid', gridTemplateRows: '1fr 1fr', flex: '0 0 26%', gap: '20px' }}>
                  <div className="flex-item2" id="image6" style={{ aspectRatio: '1.33333', width: '95%', maxHeight: '100%', objectFit: 'cover', boxSizing: 'border-box' }}>
                    <img src={img6} alt="Daan Utsav Image 6" />
                  </div>
                  <div className="flex-item2" id="image7" style={{ aspectRatio: '1.33333', width: '95%', maxHeight: '100%', objectFit: 'cover', boxSizing: 'border-box' }}>
                    <img src={img7} alt="Daan Utsav Image 7" />
                  </div>
                </div>
              </div>
              <br /><br />
              <h3 id="Headings-2">DAAN UTSAV - Oct 2023</h3><br />
              <p id="Text">
                Daan Utsav is a national level donation drive that happens every year in multiple colleges.
                Enactus, in collaboration with Bhumi NGO, with the support of UNICEF and Yuwaah, took part in this donation drive, which had more than 20,000 volunteers this year. We collected multiple items including clothes, stationery, and dry food. These would be distributed to the poor and needy ones around Hyderabad.
              </p><br />
            </section>

            <h2 id="Headings-2" style={{ textAlign: 'center' }}>DAAN UTSAV IMPACT CREATED</h2>
            <ol>
              <li style={{ '--accent-color': '#ebc334' }}>
                <div className="descr"><h5>Over</h5></div>
                <div className="icon"><h1>21.3K</h1></div>
                <div className="descr"><h5>Volunteers</h5></div>
              </li>
              <li style={{ '--accent-color': '#ebc334' }}>
                <div className="descr"><h5>Volunteers from</h5></div>
                <div className="icon"><h1>62</h1></div>
                <div className="descr"><h5>Colleges</h5></div>
              </li>
              <li style={{ '--accent-color': '#ebc334' }}>
                <div className="descr"><h5>Volunteers from</h5></div>
                <div className="icon"><h1>5</h1></div>
                <div className="descr"><h5>Schools</h5></div>
              </li>
              <li style={{ '--accent-color': '#ebc334' }}>
                <div className="descr"><h5>Over</h5></div>
                <div className="icon"><h1>15K</h1></div>
                <div className="descr"><h5>Volunteer hours</h5></div>
              </li>
            </ol>
          </section>
        </div>
      </div>
    </div>
    </div>
    </div>
  );
};

export default DaanUtsav;
