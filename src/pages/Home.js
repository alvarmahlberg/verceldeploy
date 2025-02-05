import React from 'react';
import NoiseEffect from '../components/NoiseEffect';

const Home = () => {
  const handleClick = (color) => {
    console.log('Click handled with color:', color);
    if (window.toggleRipple) {
      window.toggleRipple(color);
    } else {
      console.log('toggleRipple not found on window object');
    }
  };

  return (
    <div className="home-container">
      <NoiseEffect />
      <div className="content">
        <h1 className="name">
          <strong><span className="glow-word" onClick={() => handleClick('red')}>ART</span></strong><br />
          <strong><span className="glow-word" onClick={() => handleClick('green')}>CULTURE</span></strong><br />
          <strong><span className="glow-word" onClick={() => handleClick('blue')}>TECHNOLOGY</span></strong>
        </h1>
        
        <div className="intro-text">
          <p>
            
          </p>
        </div>

        <div className="latest-writing">
          <h2>Latest Writing</h2>
          <blockquote>
            "Tähän voit lisätä viimeisimmän kirjoituksesi lainauksen..."
          </blockquote>
          <a href="#" className="read-more">Read more...</a>
        </div>
      </div>
    </div>
  );
};

export default Home;
