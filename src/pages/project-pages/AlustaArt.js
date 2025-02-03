import React from "react";

// Kuvien importit
import alustaArt1 from "../../assets/images/alusta-art/image1.jpg";

function AlustaArt() {
  return (
    <div className="fullscreen-project">
      <div className="project-background">
        <img 
          src={alustaArt1}
          alt="Alusta.art platform"
          className="background-image"
        />
      </div>

      <div className="project-info">
        <h1>Alusta.art</h1>
        <p className="project-details">A platform for releasing and collecting digital art</p>
      </div>
    </div>
  );
}

export default AlustaArt; 