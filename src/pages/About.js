import React from "react";
import profileImage from '../assets/images/profile.jpg';

function About() {
  return (
    <div className="about-container">
      <div className="about-content">
        <div className="about-image-container">
          <img 
            src={profileImage} 
            alt="Profile" 
            className="about-image"
          />
          <p className="image-caption"></p>
        </div>
        <div className="about-text">
          <p>
            Hi, I'm <strong>Alvar Mahlberg</strong>.
          </p>

          <p>
            I lead ambitious projects and teams at the intersection of art, culture, and technology.
          </p>

          <p>
          I'm passionate about building new things— from software projects to art exhibitions. I'm currently working for the Finnish National Gallery. 
          </p>


          <p>
            I grew up in Helsinki and studied Information Systems Science at the University of Jyväskylä. 
          </p>

          <p>
            You can reach me at Linkedin or email. 
          </p>
          
          <div className="social-links">
            <p>
            
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
  