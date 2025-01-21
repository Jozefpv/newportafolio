import React from 'react';
import Pic from './pic.png';
import './Me.css';
import Reveal from '../reveal/Reveal';
import myResumePdf from './../../assets/docs/JozefCV.pdf'

function Me() {
  return (
    <div id="meSection" className='meGlobalContainer'>
      <div className="meContainer">
        <div className="informationContainer">
          <div className="text-wrapper">
            <Reveal width="100%">
              <p style={{ fontSize: "20px" }}>
                Hey There,
                </p>
            </Reveal>
            <Reveal width="100%">
              <h1 style={{ fontSize: "40px" }}>
                I'M <span style={{ color: '#A6A001' }}>JOZEF</span>
              </h1>
              <h1 style={{ fontSize: "40px" }}>
                A FULLSTACK DEVELOPER</h1>
            </Reveal>
            <Reveal width="100%">
              <p style={{ fontSize: "20px" }}>
                I'm passionate about development and always eager to learn
                something new. I love diving into new technologies, tackling
                challenges, and finding ways to grow both personally and
                professionally.
              </p>
              <a href={myResumePdf} target="_blank" rel="noopener noreferrer">
                <button className="myResumeButton">My resume</button>
            </a>
             
            </Reveal>

          </div>
        </div>


        <div className="imageContainer">
          <div className="image-wrapper">
            <div className="blur-background"></div>
            <img
              src={Pic}
              alt="Imagen con fondo difuminado"
              className="main-image"
            />
          </div>
        </div>
      </div>
    </div>

  );
}

export default Me;
