import React from "react";

function ProjectImage({ src, alt }) {
  // Placeholder-kuva, jos varsinaista kuvaa ei ole
  const placeholderSrc = `https://via.placeholder.com/800x500/1a1a1a/666666?text=${alt.replace(/ /g, '+')}`;

  return (
    <div className="project-image-container">
      <img 
        src={src || placeholderSrc} 
        alt={alt} 
        className="project-image"
        onError={(e) => {
          e.target.src = placeholderSrc; // Jos kuvan lataus epäonnistuu, näytetään placeholder
        }}
      />
    </div>
  );
}

export default ProjectImage; 