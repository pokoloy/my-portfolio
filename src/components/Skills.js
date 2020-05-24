import React from 'react';

function Skills() {
  return (
    <div>
      <div className="skills-section">
        <h2 className="skill-title">SKILLS</h2>
        <div className="skills">
            <div className="progress">
                <div className="progress-title">HTML</div>
                {/* <div className="value">90%</div> */}
                <div className="progressBar">
                    <div className="animatedBar html"></div>
                </div>
            </div>
            <div className="progress">
                <div className="progress-title">CSS</div>
                {/* <div className="value">90%</div> */}
                <div className="progressBar">
                    <div className="animatedBar css"></div>
                </div>
            </div>
            <div className="progress">
                <div className="progress-title">JavaScript</div>
                {/* <div className="value">90%</div> */}
                <div className="progressBar">
                    <div className="animatedBar js"></div>
                </div>
            </div>
            <div className="progress">
                <div className="progress-title">ReactJS</div>
                {/* <div className="value">90%</div> */}
                <div className="progressBar">
                    <div className="animatedBar react"></div>
                </div>
            </div>
            <div className="progress">
                <div className="progress-title">jQuery</div>
                {/* <div className="value">90%</div> */}
                <div className="progressBar">
                    <div className="animatedBar jquery"></div>
                </div>
            </div>
            <div className="progress">
                <div className="progress-title">SASS</div>
                {/* <div className="value">90%</div> */}
                <div className="progressBar">
                    <div className="animatedBar sass"></div>
                </div>
            </div>
            <div className="progress">
                <div className="progress-title">Bootstrap</div>
                {/* <div className="value">90%</div> */}
                <div className="progressBar">
                    <div className="animatedBar boot"></div>
                </div>
            </div>
            <div className="progress">
                <div className="progress-title">Photoshop</div>
                {/* <div className="value">90%</div> */}
                <div className="progressBar">
                    <div className="animatedBar ps"></div>
                </div>
            </div>
            <div className="progress">
                <div className="progress-title">Git</div>
                {/* <div className="value">90%</div> */}
                <div className="progressBar">
                    <div className="animatedBar git"></div>
                </div>
            </div>
            <div className="progress">
                <div className="progress-title">C++</div>
                {/* <div className="value">90%</div> */}
                <div className="progressBar">
                    <div className="animatedBar cplus"></div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Skills;
