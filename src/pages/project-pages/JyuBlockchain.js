import React, { useState } from "react";

// Kuvien importit
import jyu1 from "../../assets/images/jyu/image1.jpg";
import jyu2 from "../../assets/images/jyu/image2.jpg";
import jyu3 from "../../assets/images/jyu/image3.jpg";
import jyu4 from "../../assets/images/jyu/image4.jpg";
import jyu5 from "../../assets/images/jyu/image5.jpg";

function JyuBlockchain() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    {
      src: jyu1,
      alt: "Blockchain research"
    },
    {
      src: jyu2,
      alt: "Research group"
    },
    {
      src: jyu3,
      alt: "University project"
    },
    {
      src: jyu4,
      alt: "Blockchain course"
    },
    {
      src: jyu5,
      alt: "Research presentation"
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
        <h1>JYU Blockchain Research Group</h1>
        <p className="project-details">Research and Developmen</p>
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

export default JyuBlockchain;