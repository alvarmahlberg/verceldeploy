import React, { useState } from "react";

// Kuvien importit
import desktopImage1 from "../../assets/images/alusta/image1.jpg";
import desktopImage2 from "../../assets/images/alusta/image2.jpg";
import desktopImage3 from "../../assets/images/alusta/image3.jpg";
import mobileImage1 from "../../assets/images/alusta/mobile1.jpg";
import mobileImage2 from "../../assets/images/alusta/mobile2.jpg";
import mobileImage3 from "../../assets/images/alusta/mobile3.jpg";

function AlustaSpace() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const isMobile = window.innerWidth <= 768;
  const images = isMobile 
    ? [
        { src: mobileImage1, alt: "Mobile view 1" },
        { src: mobileImage2, alt: "Mobile view 2" },
        { src: mobileImage3, alt: "Mobile view 3" }
      ]
    : [
        { src: desktopImage1, alt: "Desktop view 1" },
        { src: desktopImage2, alt: "Desktop view 2" },
        { src: desktopImage3, alt: "Desktop view 3" }
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