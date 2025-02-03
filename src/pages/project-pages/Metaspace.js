import React from "react";

// Videon importti
import metaspaceVideo from "../../assets/videos/metaspace/video1.mp4"; // Varmista, että video on oikeassa kansiossa

function Metaspace() {
  return (
    <div className="fullscreen-project">
      <div className="project-background">
        <video 
          src={metaspaceVideo} 
          alt="Virtual gallery space"
          className="background-video"
          autoPlay
          loop
          muted
          style={{
            display: 'block',
            margin: 'auto',
            maxWidth: '100%',
            maxHeight: '100%',
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)'
          }}
        />
      </div>

      <div className="project-info">
        <h1>Metaspace</h1>
        <p className="project-details">Virtual Galleries for Artists and Collectors</p>
      </div>
    </div>
  );
}

export default Metaspace; 