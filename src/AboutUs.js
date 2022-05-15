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
        <p>Some text about who we are and what we do.</p>
        <p>Resize the brower windoe to see that this page is responsice by the way.</p>
      </div>
      <h2 className="heading"> Our Company</h2>
      <div className="company-section">
        <p className="center"> HEBNDFKBGASKBGKSRJGB</p>

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
              <h2>First Last Name</h2>
              <p className="title"> Coder </p>
              <p> Some text that describes background info, or what you do</p>
            </div>
          </div>
        </div>

        <div className="column">
          <div className="card">
            <img src={pic2} alt="boy2" className="images"/>
            <div className="container">
              <h2>First Last Name</h2>
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