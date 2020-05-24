import React from 'react';
import Header from './Header';

function Resume() {
  return (
    <div>
      <Header title="RESUME" subtitle="Know more about me..."/>
    
      <div className="resume-section">
        <div className="experience">
          <h2>EXPERIENCE</h2>
          <div className="expe-content">

            <div className="expe-1">
              <div className="expe-details">
                <div className="briefcase">
                  <i className="fas fa-briefcase"></i>
                </div>
                <div className="expe-title">
                  <h3>SOFTWARE DEVELOPER</h3>
                  <p>BLOCKCHAIN TECHNOLOGY PHILS, INC.</p> 
                </div>
              </div>
              <hr/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, aliquam odit reprehenderit voluptatibus quis atque libero possimus molestiae id! Eum?</p> 
            </div>
          

            <div className="expe-2">
              <div className="expe-details">
                <div className="briefcase">
                  <i className="fas fa-briefcase"></i>
                </div>
                <div className="expe-title">
                  <h3>SOFTWARE ENGINEER</h3>
                  <p>KINPO ELECTRONICS (PHILS), INC.</p>
                </div>
              </div>
              <hr/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi minus quasi corporis reiciendis labore reprehenderit, blanditiis quos sed beatae dolor!</p>
            </div>
          </div>
        </div>

        <div className="education">
          <h2>EDUCATION</h2>
          <div className="educ-content">
            <div className="educ-1">
              <div className="educ-details">
                <div className="cap">
                  <i className="fas fa-graduation-cap"></i>
                </div>
                <div className="educ-title">
                  <h3>BS IN COMPUTER ENGINEERING</h3>
                  <p>STI College Santa Rosa</p>
                </div>
              </div>
              <hr/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi minus quasi corporis reiciendis labore reprehenderit, blanditiis quos sed beatae dolor!</p>
            </div>

            <div className="educ-2">
              <div className="educ-details">
                <div className="cap">
                  <i className="fas fa-graduation-cap"></i>
                </div>
                <div className="educ-title">
                  <h3>JAPANESE LANGUAGE (NIHONGO)</h3>
                  <p>CEVAS</p>
                </div>
              </div>
              <hr/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi minus quasi corporis reiciendis labore reprehenderit, blanditiis quos sed beatae dolor!</p>
            </div>
          </div>
        
        </div>

      </div>
    </div>
  )
}

export default Resume;
