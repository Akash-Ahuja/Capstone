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
import down from './pictures/down.png';

import './publicforum.css';



function PublicForum() {
  const [counter1, setCounter1] = useState(0);
  const [dislike1, setdislike1] = useState(0);

  const [counter2, setCounter2] = useState(0);
  const [dislike2, setdislike2] = useState(0);

  const [counter3, setCounter3] = useState(0);
  const [dislike3, setdislike3] = useState(0);

  const [counter4, setCounter4] = useState(0);
  const [dislike4, setdislike4] = useState(0);

  const [counter5, setCounter5] = useState(0);
  const [dislike5, setdislike5] = useState(0);

  const [counter6, setCounter6] = useState(0);
  const [dislike6, setdislike6] = useState(0);

  const [counter7, setCounter7] = useState(0);
  const [dislike7, setdislike7] = useState(0);

  const [counter8, setCounter8] = useState(0);
  const [dislike8, setdislike8] = useState(0);

  return (
    <div>
      <h2>Welcome to the <br/> Public Forum</h2>
      <div className="row">
        {/* first picture */}
        <div class="card">
          <img src={img1} alt="image1"/> 
          <div class="container">
            <button className="btn1" onClick={() => setCounter1(counter1 + 1)}> <img src={up} alt="up" className='images'/> <p> <strong> {counter1} </strong> </p> </button>
            <button className="btn2" onClick={() => setdislike1(dislike1 + 1)}> <img src={down} alt="down" className='images'/> <p><strong>{dislike1}</strong> </p> </button>
          </div>
        </div>

        {/* second picture */}
        <div class="card">
          <img src={img2} alt="image1"/> 
          <div class="container">
            <button className="btn1" onClick={() => setCounter2(counter2 + 1)}> <img src={up} alt="up" className='images'/> <p> <strong> {counter2} </strong> </p> </button>
            <button className="btn2" onClick={() => setdislike2(dislike2 + 1)}> <img src={down} alt="down" className='images'/> <p><strong>{dislike2}</strong> </p> </button>
          </div> 
        </div>

        {/* third picture */}
        <div class="card">
          <img src={img3} alt="image1"/> 
          <div class="container">
            <button className="btn1" onClick={() => setCounter3(counter3 + 1)}> <img src={up} alt="up" className='images'/> <p> <strong> {counter3} </strong> </p> </button>
            <button className="btn2" onClick={() => setdislike3(dislike3 + 1)}> <img src={down} alt="down" className='images'/> <p><strong>{dislike3}</strong> </p> </button>
          </div> 
        </div>
        
        {/* fourth picture */}
        <div class="card">
          <img src={img4} alt="image1"/> 
          <div class="container">
            <button className="btn1" onClick={() => setCounter4(counter4 + 1)}> <img src={up} alt="up" className='images'/> <p> <strong> {counter4} </strong> </p> </button>
            <button className="btn2" onClick={() => setdislike4(dislike4 + 1)}> <img src={down} alt="down" className='images'/> <p><strong>{dislike4}</strong> </p> </button>

          </div> 
        </div>

        {/* fifth picture */}
        <div class="card">
          <img src={img5} alt="image1"/> 
          <div class="container">
            <button className="btn1" onClick={() => setCounter5(counter5 + 1)}> <img src={up} alt="up" className='images'/> <p> <strong> {counter5} </strong> </p> </button>
            <button className="btn2" onClick={() => setdislike5(dislike5 + 1)}> <img src={down} alt="down" className='images'/> <p><strong>{dislike5}</strong> </p> </button>
          </div> 
        </div>

        {/* sixth picture */}
        <div class="card">
          <img src={img6} alt="image1"/> 
          <div class="container">
            <button className="btn1" onClick={() => setCounter6(counter6 + 1)}> <img src={up} alt="up" className='images'/> <p> <strong> {counter6} </strong> </p> </button>
            <button className="btn2" onClick={() => setdislike6(dislike6 + 1)}> <img src={down} alt="down" className='images'/> <p><strong>{dislike6}</strong> </p> </button>
          </div> 
        </div>

        {/* seventh picture */}
        <div class="card">
          <img src={img7} alt="image1"/> 
          <div class="container">
            <button className="btn1" onClick={() => setCounter7(counter7 + 1)}> <img src={up} alt="up" className='images'/> <p> <strong> {counter7} </strong> </p> </button>
            <button className="btn2" onClick={() => setdislike7(dislike7 + 1)}> <img src={down} alt="down" className='images'/> <p><strong>{dislike7}</strong> </p> </button>
          </div> 
        </div>

        {/* eigth picture */}
        <div class="card">
          <img src={img9} alt="image1"/> 
          <div class="container">
            <button className="btn1" onClick={() => setCounter8(counter8 + 1)}> <img src={up} alt="up" className='images'/> <p> <strong> {counter8} </strong> </p> </button>
            <button className="btn2" onClick={() => setdislike8(dislike8 + 1)}> <img src={down} alt="down" className='images'/> <p><strong>{dislike8}</strong> </p> </button>
 
          </div> 
        </div>
      </div>
    </div>

  );
}
export default PublicForum;