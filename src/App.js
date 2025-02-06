import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import About from "./pages/About";
import RemixArchive from "./pages/project-pages/RemixArchive";
import AlustaSpace from "./pages/project-pages/AlustaSpace";
import Combine24 from "./pages/project-pages/Combine24";
import AlustaArt from "./pages/project-pages/AlustaArt";
import Metaspace from "./pages/project-pages/Metaspace";
import JyuBlockchain from "./pages/project-pages/JyuBlockchain";
import { useState, useEffect } from "react";

function AppContent() {
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      
      // Lisätään minimaalinen kynnysarvo scrollin tunnistamiseen
      const isScrolledDown = prevScrollPos < currentScrollPos;
      const isScrolledUp = prevScrollPos > currentScrollPos;
      const isAtTop = currentScrollPos < 10;  // Näytä aina kun ollaan lähellä yläreunaa
      
      setVisible(isAtTop || isScrolledUp);
      setPrevScrollPos(currentScrollPos);
    };

    // Throttlataan scroll-tapahtumaa suorituskyvyn parantamiseksi
    let timeoutId;
    const throttledScroll = () => {
      if (timeoutId) return;
      
      timeoutId = setTimeout(() => {
        handleScroll();
        timeoutId = null;
      }, 100);
    };

    window.addEventListener('scroll', throttledScroll);
    return () => {
      window.removeEventListener('scroll', throttledScroll);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [prevScrollPos]);

  return (
    <>
      <div className="container">
        <nav className={`menu ${visible ? '' : 'menu-hidden'}`}>
          <div className="menu-links">
            <Link to="/projects">HOME</Link>
            <Link to="/projects">PROJECTS</Link>
            <Link to="/about">ABOUT</Link>
          </div>
        </nav>

        <div className="main-content">
          <Routes>
            <Route path="/" element={<Projects />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects/remix-archive" element={<RemixArchive />} />
            <Route path="/projects/alusta-space" element={<AlustaSpace />} />
            <Route path="/projects/combine24" element={<Combine24 />} />
            <Route path="/projects/alusta-platform" element={<AlustaArt />} />
            <Route path="/projects/metaspace" element={<Metaspace />} />
            <Route path="/projects/jyu-blockchain-research-group" element={<JyuBlockchain />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default function App() {
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      
      // Lisätään minimaalinen kynnysarvo scrollin tunnistamiseen
      const isScrolledDown = prevScrollPos < currentScrollPos;
      const isScrolledUp = prevScrollPos > currentScrollPos;
      const isAtTop = currentScrollPos < 10;  // Näytä aina kun ollaan lähellä yläreunaa
      
      setVisible(isAtTop || isScrolledUp);
      setPrevScrollPos(currentScrollPos);
    };

    // Throttlataan scroll-tapahtumaa suorituskyvyn parantamiseksi
    let timeoutId;
    const throttledScroll = () => {
      if (timeoutId) return;
      
      timeoutId = setTimeout(() => {
        handleScroll();
        timeoutId = null;
      }, 100);
    };

    window.addEventListener('scroll', throttledScroll);
    return () => {
      window.removeEventListener('scroll', throttledScroll);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [prevScrollPos]);

  return (
    <Router>
      <div className="app">
        <nav className={`menu ${visible ? '' : 'menu-hidden'}`}>
          <div className="menu-links">
            <Link to="/projects">HOME</Link>
            <Link to="/projects">PROJECTS</Link>
            <Link to="/about">ABOUT</Link>
          </div>
        </nav>
        <AppContent />
      </div>
    </Router>
  );
}
