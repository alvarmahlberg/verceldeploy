import React, { useState } from "react";
import ProjectImage from "../../components/ProjectImage";

// Kuvien importit
import experimentImage1 from "../../assets/images/experiment/image1.jpg";
import experimentImage2 from "../../assets/images/experiment/image2.jpg";
import experimentImage3 from "../../assets/images/experiment/image3.jpg";
import experimentImage4 from "../../assets/images/experiment/image4.jpg";
import experimentImage5 from "../../assets/images/experiment/image5.jpg";

function ExperimentFoundation() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    {
      src: experimentImage1,
      alt: "Experiment Foundation visualization"
    },
    {
      src: experimentImage2,
      alt: "Interactive installation"
    },
    {
      src: experimentImage3,
      alt: "Digital experiments"
    },
    {
      src: experimentImage4,
      alt: "Foundation space"
    },
    {
      src: experimentImage5,
      alt: "Art technology"
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <div className="fullscreen-project">
      <div className="project-background">
        <img 
          src={images[currentIndex].src} 
          alt={images[currentIndex].alt}
          className="background-image"
        />
      </div>

      <button className="nav-arrow prev" onClick={prevSlide}>←</button>
      <button className="nav-arrow next" onClick={nextSlide}>→</button>

      <div className="project-info">
        <h1>Experiment Foundation</h1>
        <p className="project-details">Digital art research laboratory</p>
      </div>

      <div className="image-indicators">
        {images.map((_, index) => (
          <button
            key={index}
            className={`indicator ${index === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default ExperimentFoundation; 