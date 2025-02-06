import React from "react";
import profileImage from '../assets/images/profile.jpg';
import mobileImage from '../assets/images/mobile-profile.jpg';  // Lisää tämä kuva

function About() {
  const isMobile = window.innerWidth <= 768;

  return (
    <div className="about-container">
      <div className="about-content">
        <div className="about-image-container">
          <img 
            src={isMobile ? mobileImage : profileImage} 
            alt="Portrait" 
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