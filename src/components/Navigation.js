import React from 'react';

function Navigation() {
  return (
    <div>
      <nav className="nav-section">
        {/* <div className="nav-logo"> */}
            <p className="my-logo">anne.</p>
            <i className="fas fa-bars toggle"></i>
        {/* </div> */}
        {/* <div className="nav-list"> */}
        <div>
          <ul className="nav-bars" >
              <li><a href="#home" className="active">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#resume">Resume</a></li>
              <li><a href="#portfolio">Portfolio</a></li>
              <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        {/* </div> */}
        <div className="clearfix"></div>
      </nav>
    </div>
  )
}

export default Navigation;
