import React, { useState } from "react";

// Kuvien importit
import desktopImage1 from "../../assets/images/remix/desktop1.jpg";
import desktopImage2 from "../../assets/images/remix/desktop2.jpg";
import desktopImage3 from "../../assets/images/remix/desktop3.jpg";
import mobileImage1 from "../../assets/images/remix/mobile1.jpg";
import mobileImage2 from "../../assets/images/remix/mobile2.jpg";
import mobileImage3 from "../../assets/images/remix/mobile3.jpg";
import mobileImage4 from "../../assets/images/remix/mobile4.jpg";
import mobileImage5 from "../../assets/images/remix/mobile5.jpg";

function RemixArchive() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const isMobile = window.innerWidth <= 768;
  const images = isMobile 
    ? [
        { src: mobileImage1, alt: "Mobile view 1" },
        { src: mobileImage2, alt: "Mobile view 2" },
        { src: mobileImage3, alt: "Mobile view 3" },
        { src: mobileImage4, alt: "Mobile view 4" },
        { src: mobileImage5, alt: "Mobile view 5" }
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

  // Swipe handling
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextSlide();
    }
    if (isRightSwipe) {
      prevSlide();
    }

    setTouchStart(null);
    setTouchEnd(null);
  };

  return (
    <div 
      className="fullscreen-project"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
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
        <h1>Remix the Archive</h1>
        <p className="project-details">Generative Art Exhibition in Helsinki</p>
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

export default RemixArchive; 