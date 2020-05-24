import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';

function About() {
  return (
    <div>
      <Header title="ABOUT" subtitle="Know more about me..."/>
    
    <div className="about-section" id="about">
      <div className="my-photo">
        <img src="../images/flower-8.jpg" alt="me na me"/>
      </div>
      <div className="my-details">
        <h2 className="my-name">i am <span>ROSE ANN</span></h2>
        <h3 className="my-title"><span>UI</span> and <span>Front-end</span> Developer from Philippines</h3>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi, quos tempore! Eveniet ducimus inventore illo quo soluta sequi ullam ut molestiae, quis veritatis aspernatur eum, incidunt provident natus corrupti! Soluta mollitia cupiditate amet officia inventore nulla, harum architecto ad distinctio ullam? Repudiandae quo, ex quae animi quis ipsa unde id.</p>
        <br/>
        <p>Know more about me...</p>
        <div className="my-social">
          <a href="#"><i className="fab fa-facebook-f"></i></a>
          <a href="#"><i className="fab fa-instagram"></i></a>
          <a href="#"><i className="fab fa-linkedin-in"></i></a>
          <a href="#"><i className="fab fa-pinterest-p"></i></a>
        </div>
      </div>
      
    </div>
    </div>
  )
}

export default About;
