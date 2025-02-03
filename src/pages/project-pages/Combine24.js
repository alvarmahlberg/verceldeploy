import React from "react";

// Kuvien importit
import combine1 from "../../assets/images/combine/image1.jpg";

function Combine24() {
  return (
    <div className="fullscreen-project">
      <div className="project-background">
        <img 
          src={combine1}
          alt="Combine24 visualization"
          className="background-image"
        />
      </div>

      <div className="project-info">
        <h1>Combine24</h1>
        <p className="project-details">A new museum-led digital art competition</p>
      </div>
    </div>
  );
}

export default Combine24; 