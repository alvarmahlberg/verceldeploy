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

function AppContent() {
  return (
    <>
      <div className="container">
        <nav className="menu">
          <div className="menu-logo">
            <Link to="/" className="menu-link">ALVAR</Link>
          </div>
          <div className="menu-links">
            <Link to="/">HOME</Link>
            <Link to="/projects">PROJECTS</Link>
            <Link to="/about">ABOUT</Link>
          </div>
        </nav>

        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
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
  return (
    <Router>
      <AppContent />
    </Router>
  );
}
