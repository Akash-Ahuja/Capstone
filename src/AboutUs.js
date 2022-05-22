import React from 'react';
import './aboutUs.css';
import pic from "./pictures/boy.png";
import pic1 from "./pictures/girl.png"
import pic2 from "./pictures/boy2.png"

function AboutUs() {
  return (
  <div>
      <div className="about-section">
        <h1>About Us</h1>
        <p>Get to know our company...</p>
        <p>... and get to know our team.</p>
      </div>
      <h2 className="heading"> Our Company</h2>
      <div className="company-section">
        <p className="center"> Outreach3D will be a feedback-based web application developed using certain <br/>
         web technologies which will allow users to comment and make suggestions for changes in a building or <br/>
         public space. The goal of this project will be to allow users to interactively change the 3D rendered environment <br/> 
         of a public space by combining the use of several technologies including Three.js (a js library) for 3D rendering.</p>

      </div>
      <h2 className="heading"> Our Team </h2>
      <div className="row">
        <div className="column">
          <div className="card">
            <img src={pic1} alt="girl" className="images"/>
            <div className="container">
              <h2>Jennifer Caceres</h2>
              <p className="title"> Coder </p>
              <p> Some text that describes background info, or what you do</p>
            </div>
          </div>
        </div>

        <div className="column">
          <div className="card">
            <img src={pic} alt="boy" className="images"/>
            <div className="container">
              <h2>Akash Ahuja</h2>
              <p className="title"> Coder </p>
              <p> Some text that describes background info, or what you do</p>
            </div>
          </div>
        </div>

        <div className="column">
          <div className="card">
            <img src={pic2} alt="boy2" className="images"/>
            <div className="container">
              <h2>Siddharth Rane</h2>
              <p className="title"> Coder </p>
              <p> Some text that describes background info, or what you do</p>
            </div>
          </div>
        </div>
      </div>

  </div>
  
  );
  
}

export default AboutUs;