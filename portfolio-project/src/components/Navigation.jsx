import React from 'react';
import './styles.css';

const Navigation = () => {
    return (
        <nav className="navbar">
            <h1>Projektit</h1>
            <ul>
                <li><a href="/">Etusivu</a></li>
                <li><a href="/projects">Projektit</a></li>
            </ul>
        </nav>
    );
};

export default Navigation; 