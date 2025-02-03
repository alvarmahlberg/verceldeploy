import React, { useState } from "react";

// Kuvien importit
import alusta1 from "../../assets/images/alusta/image1.jpg";
import alusta2 from "../../assets/images/alusta/image2.jpg";
import alusta3 from "../../assets/images/alusta/image3.jpg";

function AlustaSpace() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    {
      src: alusta1,
      alt: "Alusta Space interior"
    },
    {
      src: alusta2,
      alt: "Exhibition space"
    },
    {
      src: alusta3,
      alt: "Event setup"
    }
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

export default AlustaSpace; 