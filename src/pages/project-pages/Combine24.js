import React from "react";

// Kuvien importit
import combine1 from "../../assets/images/combine/image1.jpg";
import combine1Mobile from "../../assets/images/combine/image1-mobile.jpg"; // Mobiiliversio

function Combine24() {
  return (
    <div className="fullscreen-project">
      <div className="project-background">
        <img 
          src={combine1} 
          srcSet={`${combine1Mobile} 600w, ${combine1} 1200w`} // Mobiiliversio alle 600px
          alt="Combine24 visualization"
          className="background-image"
        />
      </div>

      <div className="project-info">
        <h1>Combine24</h1>
        <p className="project-details">A global digital art competition in 2024</p>
      </div>
    </div>
  );
}

export default Combine24; 