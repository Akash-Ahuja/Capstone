import React,  { useEffect, useState } from 'react';
import teamsJson from "./lib/teams.json";
import img1 from "./publicpics/img1.jpg";
import img2 from './publicpics/img2.webp';
import img3 from './publicpics/img3.jpg';
import img4 from './publicpics/img4.jpg';
import img5 from './publicpics/img5.jpg';
import img6 from './publicpics/img6.jpg';
import img7 from './publicpics/img7.jpg';
import img9 from './publicpics/img9.jpg';
import up from './pictures/up.png';

import './publicforum.css';



function PublicForum() {

  return (
    <div>
      <h2>Welcome to the <br/> Public Forum</h2>
      <div className="row">
        {/* first picture */}
        <div class="card">
          <img src={img1} alt="image1"/> 
          <div class="container">
            <button> <img src={up} alt="up" className='images'/>Vote</button> 
          </div>
        </div>

        {/* second picture */}
        <div class="card">
          <img src={img2} alt="image1"/> 
          <div class="container">
            <h4><b>Jane Doe</b></h4> 
            <p>Interior Designer</p> 
          </div> 
        </div>

        {/* third picture */}
        <div class="card">
          <img src={img3} alt="image1"/> 
          <div class="container">
            <h4><b>Jane Doe</b></h4> 
            <p>Interior Designer</p> 
          </div> 
        </div>
        
        {/* fourth picture */}
        <div class="card">
          <img src={img4} alt="image1"/> 
          <div class="container">
            <h4><b>Jane Doe</b></h4> 
            <p>Interior Designer</p> 
          </div> 
        </div>

        {/* fifth picture */}
        <div class="card">
          <img src={img5} alt="image1"/> 
          <div class="container">
            <h4><b>Jane Doe</b></h4> 
            <p>Interior Designer</p> 
          </div> 
        </div>

        {/* sixth picture */}
        <div class="card">
          <img src={img6} alt="image1"/> 
          <div class="container">
            <h4><b>Jane Doe</b></h4> 
            <p>Interior Designer</p> 
          </div> 
        </div>

        {/* seventh picture */}
        <div class="card">
          <img src={img7} alt="image1"/> 
          <div class="container">
            <h4><b>Jane Doe</b></h4> 
            <p>Interior Designer</p> 
          </div> 
        </div>

        {/* eigth picture */}
        <div class="card">
          <img src={img9} alt="image1"/> 
          <div class="container">
            <h4><b>Jane Doe</b></h4> 
            <p>Interior Designer</p> 
          </div> 
        </div>
      </div>
    </div>

  );
}
export default PublicForum;