import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import ProjectPage from './pages/ProjectPage';
import SingleProjectPage from './pages/SingleProjectPage';
import './styles/styles.css';

const App = () => {
    return (
        <Router>
            <Navigation />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/projects" element={<ProjectPage />} />
                <Route path="/projects/:id" element={<SingleProjectPage />} />
            </Routes>
        </Router>
    );
};

export default App; 