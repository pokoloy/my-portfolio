import React from 'react';
import Header from './Header';

function Portfolio() {
  return (
    <div>
        <Header title="PORTFOLIO" subtitle="Check out my works, projects and hobbies"/>
      <div className="portfolio-section" id="portfolio">
        <div className="portfolio-menu">
            <ul>
                <li><a href="#" data-filter=".all" className="active">All</a></li>
                <li><a href="#" data-filter=".projects">Projects</a></li>
                <li><a href="#" data-filter=".photography">Photography</a></li>
                <li><a href="#" data-filter=".travel">Travel</a></li>
            </ul>
        </div>

            <div className="portfolio-content">
                <div className="gutter-sizer"></div>
                <div className="card projects all">
                    <div className="imgBox">
                        <img src="../images/white-rose.jpg" alt="jkfdhjkfhsdjk"/>
                    </div>
                    <div className="description">
                        <h3>TITLE HERE</h3>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus possimus, voluptatem deleniti aspernatur architecto dicta.</p>
                    </div>
                </div>

                <div className="card photography all">
                    <div className="imgBox">
                        <img src="../images/flower-1.jpg" alt="jkfdhjkfhsdjk"/>
                    </div>
                    <div className="description">
                        <h3>TITLE HERE</h3>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus possimus, voluptatem deleniti aspernatur architecto dicta.</p>
                    </div>
                </div>

                <div className="card projects all">
                    <div className="imgBox">
                        <img src="../images/flower-2.jpg" alt="jkfdhjkfhsdjk"/>
                    </div>
                    <div className="description">
                        <h3>TITLE HERE</h3>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus possimus, voluptatem deleniti aspernatur architecto dicta.</p>
                    </div>
                </div>

                <div className="card travel all">
                    <div className="imgBox">
                        <img src="../images/flower-3.jpg" alt="jkfdhjkfhsdjk"/>
                    </div>
                    <div className="description">
                        <h3>TITLE HERE</h3>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus possimus, voluptatem deleniti aspernatur architecto dicta.</p>
                    </div>
                </div>

                <div className="card photography all">
                    <div className="imgBox">
                        <img src="../images/flower-4.jpg" alt="jkfdhjkfhsdjk"/>
                    </div>
                    <div className="description">
                        <h3>TITLE HERE</h3>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus possimus, voluptatem deleniti aspernatur architecto dicta.</p>
                    </div>
                </div>

                <div className="card projects all">
                    <div className="imgBox">
                        <img src="../images/flower-5.jpg" alt="jkfdhjkfhsdjk"/>
                    </div>
                    <div className="description">
                        <h3>TITLE HERE</h3>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus possimus, voluptatem deleniti aspernatur architecto dicta.</p>
                    </div>
                </div>

                <div className="card travel all">
                    <div className="imgBox">
                        <img src="../images/flower-6.jpg" alt="jkfdhjkfhsdjk"/>
                    </div>
                    <div className="description">
                        <h3>TITLE HERE</h3>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus possimus, voluptatem deleniti aspernatur architecto dicta.</p>
                    </div>
                </div>

                <div className="card photography all">
                    <div className="imgBox">
                        <img src="../images/flower-7.jpg" alt="jkfdhjkfhsdjk"/>
                    </div>
                    <div className="description">
                        <h3>TITLE HERE</h3>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus possimus, voluptatem deleniti aspernatur architecto dicta.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Portfolio;
