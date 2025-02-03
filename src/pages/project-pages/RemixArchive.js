import React, { useState } from "react";

// Kuvien importit
import remixImage1 from "../../assets/images/remix/image1.jpg";
import remixImage2 from "../../assets/images/remix/image2.jpg";
import remixImage3 from "../../assets/images/remix/image3.jpg";
import remixImage4 from "../../assets/images/remix/image4.jpg";
import remixImage5 from "../../assets/images/remix/image5.jpg";

function RemixArchive() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const images = [
    {
      src: remixImage1,
      alt: "Remix the Archive visualization"
    },
    {
      src: remixImage2,
      alt: "Archive interface design"
    },
    {
      src: remixImage3,
      alt: "Interactive archive experience"
    },
    {
      src: remixImage4,
      alt: "Exhibition space design"
    },
    {
      src: remixImage5,
      alt: "Digital art transformation"
    },
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
      {/* Taustakuva */}
      <div className="project-background">
        <img 
          src={images[currentIndex].src} 
          alt={images[currentIndex].alt}
          className="background-image"
        />
      </div>

      {/* Navigaationuolet */}
      <button className="nav-arrow prev" onClick={prevSlide}>←</button>
      <button className="nav-arrow next" onClick={nextSlide}>→</button>

      {/* Projektin tiedot */}
      <div className="project-info">
        <h1>Remix the Archive</h1>
        <p className="project-details">Generative Art Exhibition in Helsinki</p>
      </div>

      {/* Kuvaindikaattorit */}
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