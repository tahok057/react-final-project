import React from 'react'
import kamel from'../assets/images/kamel.jpg';
const About = () => {
    return (
      <div className="about-container">
        <div className="about">
          <img src={kamel} />
          <h2>About Me</h2>
          <p>
            I'am kamel taha a 21 year old software engineering student in my second year I study in ariel university <br />
            I chose this subject to make it easier for students to search for uni's  
          </p>
        </div>
      </div>
    );
}

export default About;