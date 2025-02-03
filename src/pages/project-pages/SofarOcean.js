import React, { useState } from "react";

// Kuvien importit
import sofarImage1 from "../../assets/images/sofar/image1.jpg";
import sofarImage2 from "../../assets/images/sofar/image2.jpg";
import sofarImage3 from "../../assets/images/sofar/image3.jpg";
import sofarImage4 from "../../assets/images/sofar/image4.jpg";
import sofarImage5 from "../../assets/images/sofar/image5.jpg";

function SofarOcean() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    {
      src: sofarImage1,
      alt: "Sofar Ocean visualization"
    },
    {
      src: sofarImage2,
      alt: "Ocean data interface"
    },
    {
      src: sofarImage3,
      alt: "Wave analysis"
    },
    {
      src: sofarImage4,
      alt: "Data visualization"
    },
    {
      src: sofarImage5,
      alt: "Ocean monitoring system"
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
        <h1>Alusta Space</h1>
        <p className="project-details">Creative space for exhibitions and events</p>
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

export default SofarOcean; 